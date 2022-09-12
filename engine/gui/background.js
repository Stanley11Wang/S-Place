export default class Background {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth, this.gameHeight = gameHeight;
        this.image = document.getElementById('background')
        this.x = 0, this.y = 0;
        this.width = 2400, this.height = 720;

        this.speed = 7;
    }

    update() {
        this.x -= this.speed;
        if (this.x < 0 - this.width) this.x = 0;
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x + this.width - this.speed, this.y, this.width, this.height);
    }
}