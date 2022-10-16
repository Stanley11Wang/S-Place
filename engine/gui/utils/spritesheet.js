export default class Spritesheet {
    /** Spritesheet providing methods for displaying the proper frames. It has two 
     *  modes you can use to iterate through frames.
     *  1) ROW MODE: if your animations each take up one row. 
     *  2) GRID MODE: if your animations don't follow the above format.*/

    constructor(image_name, unitWidth, unitHeight, format) {
        this.image = document.getElementById(image_name);
        this.unitWidth = unitWidth, this.unitHeight = unitHeight;
        this.frameX = 0, this.frameY = 0, this.format = format;

        this.nextFrameInRow = this.nextFrameInRow.bind(this);
        this.nextFrame = this.nextFrame.bind(this);
    }

    getUnitDimensions() { return [this.unitWidth, this.unitHeight]; }

    setFrameX(i) { this.frameX = i; }
    setFrameY(i) { this.frameY = i; }
    setFrame(i, j) { this.frameX = i, this.frameY = j; }

    nextFrameInRow() {
        if (this.frameX >= this.format[this.frameY] - 1) this.frameX = 0;
        else this.frameX++;
    }

    nextFrame() {
        if (this.frameX >= this.format[this.frameY]) { 
            this.frameX = 0;
            if (this.frameY >= this.format.length) this.frameY = 0;
            else this.frameY++;
        } else { 
            this.frameX++; 
        }
    }

    draw(context, x, y) {
        context.drawImage(this.image, this.frameX * this.unitWidth, this.frameY * this.unitHeight, 
            this.unitWidth, this.unitHeight, x, y, this.unitWidth, this.unitHeight);
    }
}