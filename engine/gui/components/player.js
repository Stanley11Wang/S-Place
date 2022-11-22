import Displayable from '../base/displayable.js';
import DeltaTimeRunner from '../utils/deltaTimeRunner.js';
import Movable2D from '../utils/movable2D.js';

export default class Player extends Displayable {
    /** The player character. */

    constructor(gameWidth, gameHeight) {
        super(gameWidth, gameHeight, 'player');
        const [ width, height ] = this.spritesheet.getUnitDimensions();
        this.dtRunner = new DeltaTimeRunner(20, 1000);
        this.movable = new Movable2D(gameWidth, gameHeight, width, height, [0, gameHeight - height], [0, 0], [2, 2], [1, 1]);
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
