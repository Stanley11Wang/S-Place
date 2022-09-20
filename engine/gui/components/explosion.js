export default class Explosion {
    constructor(x, y) {
        this.x = x, this.y = y;
        this.spriteWidth = 200, this.spriteHeight = 179;
        this.width = this.spriteWidth/2, this.height = this.spriteHeight/2;
        this.image = new Image();
        this.image.src = 'boom.png';
        this.frame = 0;
    }

    update() {
        this.frame++;
    }

    draw(context) {
        context.drawImage(this.image, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, 
            this.x, this.y, this.width, this.height);        
    }
}