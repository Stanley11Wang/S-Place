export default class GameObject {
    /** All game objects can handle inputs, update their own
     *  state, and draw themselves on the screen. */

    constructor(gameWidth, gameHeight, spritesheet, onDelete) {
        this.gameWidth = gameWidth, this.gameHeight = gameHeight;
        this.spritesheet = spritesheet;
        this.onDelete = onDelete, this.deleteFlag = false;
    }

    canDelete() { return this.deleteFlag; }
    setDelete() { this.deleteFlag = true; }
    callOnDelete() { this.onDelete(); }

    handleInputs(inputs) {}

    update(dt) {}

    draw(context) { throw new Error('Implement!'); }
}
