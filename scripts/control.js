import { drawGrid, clearGrid } from './gui.js';

class Control {
    constructor(canvas, grid) {
        this.context = canvas.getContext('2d');
        this.grid = grid;
        this.grid.startGrid();
    }

    update() { this.grid.update(); }

    draw() {
        clearGrid(this.context);
        drawGrid(this.context, this.grid);
    }

    gameLoop() {
        this.update();
        this.draw();
    }

    run() { setInterval(this.gameLoop.bind(this), 20); }
}

export { Control };
