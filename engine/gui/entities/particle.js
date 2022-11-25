import GameObject from '../gameObject.js';
import DeltaTimeRunner from '../utils/deltaTimeRunner.js';
import Movable from '../utils/movable/movable.js';

export default class Particle extends GameObject {
    /** A moving effect which starts at POS and moves in a direction according to velocity. 
     *  Marks itself for deletion when out of bounds. */

    constructor(gameWidth, gameHeight, spritesheet, onDelete, pos, velocity) {
        super(gameWidth, gameHeight, spritesheet, onDelete);
        const [ width, height ] = this.spritesheet.getUnitDimensions();
        this.dtRunner = new DeltaTimeRunner(20, 1000);
        this.movable = new Movable(gameWidth, gameHeight, width, height, pos, velocity, [0, 0], [0, 0]);
    }

    update() {
        this.dtRunner.deltaTimeUpdate(dt, this.spritesheet.nextFrameInRow); 
        if (this.movable.outOfBoundsComplete()) this.setDelete();
    }

    draw(context) { if (!this.deleteFlag) this.spritesheet.draw(context, this.pos); }
}
