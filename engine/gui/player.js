import DeltaTimeRunner from './utils/deltaTimeRunner.js'
import Spritesheet from './utils/spritesheet.js'

export default class Player {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth, this.gameHeight = gameHeight;

        this.width = 200, this.height = 200;
        this.x = 0, this.vx = 0, this.maxSpeed = 5;
        this.y = this.gameHeight - this.height, this.vy = 0, this.weight = 0;
        this.accel = 1

        this.dtRunner = new DeltaTimeRunner(20, 1000);
        this.spritesheet = new Spritesheet('player', 200, 200, [9, 7]);

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
        this.dtRunner.deltaTimeUpdate(dt, this.spritesheet.nextFrameInRow);

        this.x += this.vx;
        if (this.x < 0) this.x = 0;
        if (this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width;

        this.y += this.vy;
        if (!this.onGround()) {
            this.vy += this.weight;
            this.spritesheet.setFrameY(1);
        } else {
            this.vy = 0;
            this.spritesheet.setFrameY(0);
        }
        if (this.y > this.gameHeight - this.height) this.y = this.gameHeight - this.height;
    }

    draw (context) {
        this.spritesheet.draw(context, this.x, this.y);
    }
}