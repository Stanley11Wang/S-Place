export default class Enemy {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth, this.gameHeight = gameHeight;
        this.width = 160, this.height = 119;
        this.image = document.getElementById('enemy');
        this.frameX = 0, this.frameY = 0;
        this.x = this.gameWidth, this.y = this.gameHeight - this.height;
        this.speed = 8;

        this.maxFrame = 5;
        this.fps = 20;
        this.frameTimer = 0;
        this.frameInterval = 1000 / this.fps;
    }

    update(dt) {
        if (this.frameTimer > this.frameInterval) {
            if (this.frameX >= this.maxFrame) this.frameX = 0;
            else this.frameX++;
            this.frameTimer = 0;
        } else {
            this.frameTimer += dt;
        }
        this.x -= this.speed;
    }

    draw(context) {
        context.strokeStyle = 'white';
        context.strokeRect(this.x, this.y, this.width, this.height);
        context.beginPath();
        context.arc(this.x + this.width/2, this.y + this.height/2, this.width/2, 0, Math.PI * 2);
        context.stroke();
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height,
            this.x, this.y, this.width, this.height);
    }
}