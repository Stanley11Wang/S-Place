export default class Particle {
    constructor(x, y, size, color) {
        this.x = x, this.y = y; this.size = size;
        this.radius = Math.random() * this.size * 0.1; 
        this.maxRadius = Math.random() * 20 + 35

        this.markedForDeletion = false;
        this.vx = Math.random() + 0.5;
        this.color = color;
    }

    update() {
        this.x += this.vx;
        this.radius += 0.2;
        if (this.radius > this.maxRadius) this.markedForDeletion = true;
    }

    draw(context) {
        context.save();
        context.globalAlpha = 1 - this.radius / this.maxRadius;
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
        context.restore();
    }

}