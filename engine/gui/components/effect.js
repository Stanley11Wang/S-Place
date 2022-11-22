import Displayable from '../base/displayable.js';
import DeltaTimeRunner from '../utils/deltaTimeRunner.js';

export default class Effect extends Displayable {
    /** A one-time pop-up which runs when instantiated. */

    constructor(pos, spritesheetName) {
        super(0, 0, spritesheetName);
        this.pos = pos;
        this.dtRunner = new DeltaTimeRunner(20, 1000);
    }

    update() { this.dtRunner.deltaTimeUpdate(dt, this.spritesheet.nextFrameInRow); }

    draw(context) { this.spritesheet.draw(context, this.pos); }
}
