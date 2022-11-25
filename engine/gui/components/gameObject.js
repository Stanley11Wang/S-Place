import { sheets } from './config.js';

export default class GameObject {
    /** A game object. All game objects can handle inputs, update their own
     *  state, and draw themselves on the screen. Augment with components for
     *  more functionality. */

    constructor(gameWidth, gameHeight, spritesheetName) {
        this.gameWidth = gameWidth, this.gameHeight = gameHeight;
        this.spritesheet = sheets[spritesheetName]();
        this.deleteFlag = false;
    }

    canDelete() { return this.deleteFlag; }

    handleInputs(inputs) {}

    update(dt) {}

    draw(context) { throw new Error('Implement!'); }
}
