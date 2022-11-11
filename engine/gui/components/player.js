import Movable2D from '../utils/movable2D.js';
import DeltaTimeRunner from '../utils/deltaTimeRunner.js'
import Spritesheet from '../utils/spritesheet.js'

export default class Player {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth, this.gameHeight = gameHeight;
        this.dtRunner = new DeltaTimeRunner(20, 1000);
        this.spritesheet = new Spritesheet('player', 200, 200, [9, 7]);
        this.movable = new Movable2D(gameWidth, gameHeight, 200, 200, [0, gameHeight - 200], [0, 0], [2, 2], [1, 1]);
    }

    handleInputs(inputs) {
        if ('ArrowRight' in inputs) this.movable.incrementVelocity('x', 1);
        else if ('ArrowLeft' in inputs) this.movable.incrementVelocity('x', 2);
        if ('ArrowUp' in inputs) this.movable.jump();
    }

    update(dt) {
        this.dtRunner.deltaTimeUpdate(dt, this.spritesheet.nextFrameInRow);
        this.movable.updatePhysics();
    }

    draw(context) {
        const [ x, y ] = this.movable.getPos();  
        this.spritesheet.draw(context, x, y);
    }
}
