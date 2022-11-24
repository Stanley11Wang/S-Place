import GameObject from '../components/gameObject.js';
import MovableBG from '../components/movable/movableBG.js';

export default class Background extends GameObject {
    /** An infinitely scrolling background. */

    constructor(gameWidth, gameHeight, spritesheetName, velocity) {
        super(gameWidth, gameHeight, spritesheetName);
        const [ width, height ] = this.spritesheet.getUnitDimensions();
        this.movable = new MovableBG(gameWidth, gameHeight, width, height, velocity)
        this.movable.resetPos();
    }

    update() {
        this.movable.incrementPos();
        if (this.movable.outOfBoundsComplete()) this.movable.resetPos();
    }

    draw(context) {
        this.spritesheet.draw(context, this.movable.getPos());
        this.spritesheet.draw(context, this.movable.getNextPos())
    }
}
