import Displayable from '../base/displayable.js';
import Movable2D from '../utils/movable2D.js';

export default class Background extends Displayable {
    /** An infinitely scrolling background. */

    constructor(gameWidth, gameHeight) {
        super(gameWidth, gameHeight, 'background');
        const [ width, height ] = this.spritesheet.getUnitDimensions();
        this.movable = new Movable2D(gameWidth, gameHeight, width, height, [0, 0], [-7, 0], [0, 0], [0, 0])
    }

    update() {
        this.movable.incrementPos();
        if (this.movable.pastLeftWallComplete()) this.movable.setPosAxis('x', 0);
    }

    draw(context) {
        const [ width, height ] = this.spritesheet.getUnitDimensions();
        const [ vx, vy ] = this.movable.getVelocity();
        const pos = this.movable.getPos();
        this.spritesheet.draw(context, pos);
        this.spritesheet.draw(context, [pos[0] + width + vx, pos[1]])
    }
}
