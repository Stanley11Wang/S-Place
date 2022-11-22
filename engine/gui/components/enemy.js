import Displayable from '../base/displayable.js';
import DeltaTimeRunner from '../utils/deltaTimeRunner.js';
import Movable2D from '../utils/movable2D.js';

export default class Enemy extends Displayable {
    /** The entities wishing upon your downfall. */

    constructor(gameWidth, gameHeight) {
        super(gameWidth, gameHeight, 'enemy');
        const [ width, height ] = this.spritesheet.getUnitDimensions();
        this.dtRunner = new DeltaTimeRunner(20, 1000);
        this.movable = new Movable2D(gameWidth, gameHeight, width, height, [gameWidth, gameHeight - height], [-8, 0], [0, 0], [0, 0]);
    }

    update(dt) {
        this.dtRunner.deltaTimeUpdate(dt, this.spritesheet.nextFrameInRow);
        this.movable.incrementPos();
        if (this.movable.pastLeftWallComplete()) this.movable.setPosAxis('x', this.gameWidth);
    }

    draw(context) { this.spritesheet.draw(context, this.movable.getPos()); }
}
