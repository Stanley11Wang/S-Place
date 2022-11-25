import GameObject from '../gameObject.js';
import DeltaTimeRunner from '../utils/deltaTimeRunner.js';
import MovablePhysics from '../utils/movable/movablePhysics.js';

export default class Player extends GameObject {
    /** The player character. */

    constructor(gameWidth, gameHeight, spritesheet, onDelete) {
        super(gameWidth, gameHeight, spritesheet, onDelete);
        const [ width, height ] = this.spritesheet.getUnitDimensions();
        this.dtRunner = new DeltaTimeRunner(20, 1000);
        this.movable = new MovablePhysics(gameWidth, gameHeight, width, height, [0, gameHeight - height], [0, 0], [2, 2], [1, 1], -20);
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

    draw(context) { this.spritesheet.draw(context, this.movable.getPos()); }
}
