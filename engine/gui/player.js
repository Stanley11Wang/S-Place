export default class Player {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth, this.gameHeight = gameHeight;

        this.width = 200, this.height = 200;
        this.x = 0, this.vx = 0, this.maxSpeed = 5;
        this.y = this.gameHeight - this.height, this.vy = 0, this.weight = 0;
        this.accel = 1

        this.image = document.getElementById('player');
        this.frameX = 0, this.frameY = 0;
        this.maxFrame = 0;

        this.fps = 20;
        this.frameTimer = 0;
        this.frameInterval = 1000 / this.fps;

        this.states = [];
        this.currentState = this.states[0];
    }

    setState(state) {
        this.currentState = this.states[state];
        this.currentState.enter();
    }

    checkCollision() {
        // need entity list here
    }

    onGround() { return this.y >= this.gameHeight - this.height; }

    handle_event(input) {
        if (input.includes('ArrowRight') && this.vx < this.maxSpeed) this.vx += this.accel;
        else if (input.includes('ArrowLeft')  && this.vx > -this.maxSpeed) this.vx -= this.accel;
        else this.vx = 0;

        if (input.includes('ArrowUp') && this.vy > -this.maxSpeed) this.vy -= this.accel;
        else if (input.includes('ArrowDown') && this.vy < this.maxSpeed) this.vy +=this.accel;
        else this.vy = 0;
    }

    update(dt) {
        if (this.frameTimer > this.frameInterval) {
            if (this.frameX >= this.maxFrame) this.frameX = 0;
            else this.frameX++;
            this.frameTimer = 0;
        } else {
            this.frameTimer += dt;
        }
        

        this.x += this.vx;
        if (this.x < 0) this.x = 0;
        if (this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width;

        this.y += this.vy;
        if (!this.onGround()) {
            this.vy += this.weight;
            this.maxFrame = 5;
            this.frameY = 1;
        } else {
            this.vy = 0
            this.maxFrame = 8;
            this.frameY = 0;
        }
        if (this.y > this.gameHeight - this.height) this.y = this.gameHeight - this.height;
    }

    draw (context) {
        context.strokeStyle = 'white';
        context.strokeRect(this.x, this.y, this.width, this.height);
        context.beginPath();
        context.arc(this.x + this.width/2, this.y + this.height/2, this.width/2, 0, Math.PI * 2);
        context.stroke();
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, 
            this.width, this.height, this.x, this.y, this.width, this.height);
    }
}