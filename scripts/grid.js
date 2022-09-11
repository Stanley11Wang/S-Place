import { COLORS, randInt } from './config.js';

class Pixel {
    constructor(row, col, color, spread) {
        this.row = row, this.col = col;
        this.color = color;
        this.spread = spread;
    }

    getColor() { return this.color; }
    setColor(color) { this.color = color; }
    clearColor() { this.color = COLORS.WHITE; }
    getSpread() { return this.spread; }
    setSpread(spread) { this.spread = spread; }

    join(other) { 
        if (other.getSpread() > Math.random()) {
            this.setColor(other.getColor()); 
            this.setSpread(other.getSpread());
        }
    }

    contributeWeighting(r, c) {
        const weighting = {};
        weighting[this.color] = 1;
        return weighting;
    }
}

class Grid {
    constructor(rows, cols) {
        this.rows = rows, this.cols = cols;
        this.cur_row = 0, this.cur_col = 0;
        this.data = [];
        this.setGridDimensions(rows, cols);
    }

    outOfBounds(r, c) {if (r < 0 || r >= this.rows || c < 0 || c >= this.cols) { throw "Out of bounds."; }}
    getPixelColor(r, c) { return this.data[r][c].getColor(); }
    setPixelColor(r, c, color) { this.data[r][c].setColor(color); }
    clearPixel(r, c) { this.data[r][c].clearColor(); }
    setPixelSpread(r, c, spread) { this.data[r][c].setSpread(spread); }

    spreadPixel(r, c) {
        this.outOfBounds(r, c);
        const current = this.data[r][c];
        if (r - 1 >= 0)
            this.data[r - 1][c].join(current);
        if (r + 1 < this.rows)
            this.data[r + 1][c].join(current);
        if (c - 1 >= 0)
            this.data[r][c - 1].join(current);
        if (c + 1 < this.cols)
            this.data[r][c + 1].join(current);
        if (r - 1 >= 0 && c - 1 >= 0)
            this.data[r - 1][c - 1].join(current);
        if (r + 1 < this.rows && c - 1 >= 0)
            this.data[r + 1][c - 1].join(current);
        if (r - 1 >= 0 && c + 1 < this.cols)
            this.data[r - 1][c + 1].join(current);
        if (r + 1 < this.rows && c + 1 < this.cols)
            this.data[r + 1][c + 1].join(current);
    }

    setGridDimensions(rows, cols) {
        this.rows = rows, this.cols = cols;
        this.data = [];
        for (let i = 0; i < rows; i++) {
            this.data.push([]);
            for (let j = 0; j < cols; j++) {
                this.data[i].push(new Pixel(i, j, COLORS.WHITE, 0));
            }
        }
    }

    startGrid() {
        var r = randInt(this.rows), c = randInt(this.cols);
        this.setPixelColor(r, c, COLORS.RED);
        this.setPixelSpread(r, c, 0.75);
        r = randInt(this.rows), c = randInt(this.cols);
        this.setPixelColor(r, c, COLORS.BLUE);
        this.setPixelSpread(r, c, 0.75);
    }

    clearGrid() { this.setGridDimensions(this.rows, this.cols); }

    updateCurrentPos() {
        this.cur_col++;
        if (this.cur_col >= this.cols) {
            this.cur_col = 0;
            this.cur_row++;
        }
        if (this.cur_row >= this.rows) {
            this.cur_col = 0;
            this.cur_row = 0;
        }
    }

    update() { 
        this.spreadPixel(this.cur_row, this.cur_col);
        this.updateCurrentPos();
    }
}

export { Grid };
