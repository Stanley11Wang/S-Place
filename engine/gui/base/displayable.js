import SHEETS from '../utils/config.js'
import DeltaTimeRunner from '../utils/deltaTimeRunner.js';
import Movable2D from '../utils/movable2D.js';

export default class Displayable {
    /* A displayable element supporting sheets, movement, and drawing. */

    constructor(gameWidth, gameHeight, spritesheetName) {
        this.gameWidth = gameWidth, this.gameHeight = gameHeight;
        this.spritesheet = SHEETS[spritesheetName];
        const [ width, height ] = this.spritesheet.getUnitDimensions();

        this.dtRunner = new DeltaTimeRunner(20, 1000);
        this.movable = new Movable2D(gameWidth, gameHeight, width, height);
    }

    handle_event(input) {}

    update(dt) {}

    draw(context) { throw new Error('Implement!'); }
}
