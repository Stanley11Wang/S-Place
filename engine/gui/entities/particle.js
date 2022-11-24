import GameObject from '../components/gameObject.js';
import DeltaTimeRunner from '../components/deltaTimeRunner.js';
import Movable from '../components/movable/movable.js';

export default class Particle extends GameObject {
    /** A moving effect which ends when out of bounds. */

    constructor(gameWidth, gameHeight, pos, velocity, spritesheetName) {
        super(gameWidth, gameHeight, spritesheetName);
        const [ width, height ] = this.spritesheet.getUnitDimensions();
        this.dtRunner = new DeltaTimeRunner(20, 1000);
        this.movable = new Movable(gameWidth, gameHeight, width, height, pos, velocity, [0, 0], [0, 0]);
    }

    update() {
        this.dtRunner.deltaTimeUpdate(dt, this.spritesheet.nextFrameInRow); 
        if (this.movable.outOfBoundsComplete()) this.deleteFlag = true;
    }

    draw(context) { if (!this.deleteFlag) this.spritesheet.draw(context, this.pos); }
}
