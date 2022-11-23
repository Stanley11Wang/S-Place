import { sheets } from '../utils/config.js';

export default class Displayable {
    /** A displayable element. */

    constructor(gameWidth, gameHeight, spritesheetName) {
        this.gameWidth = gameWidth, this.gameHeight = gameHeight;
        this.spritesheet = sheets[spritesheetName]();
        this.deleteFlag = false;
    }

    handleInputs(inputs) {}

    update(dt) {}

    draw(context) { throw new Error('Implement!'); }
}
