function calculateSideLength(ctx, rows, cols) {
    const { width, height } = ctx.canvas.getBoundingClientRect();
    return Math.min(Math.floor(width / cols), Math.floor(height / rows));
}

function drawPixel(ctx, pixel, side_length) {
    const { row, col, color } = pixel;
    ctx.fillStyle = color;
    ctx.fillRect(row * side_length, col * side_length, side_length, side_length);
}

function drawGrid(ctx, grid) {
    const { rows, cols, data } = grid;
    const side_length = calculateSideLength(ctx, rows, cols);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            drawPixel(ctx, data[i][j], side_length);
        }
    }
}

function clearGrid(ctx) {
    const { width, height } = ctx.canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, width, height);
}

export { drawGrid, clearGrid };
