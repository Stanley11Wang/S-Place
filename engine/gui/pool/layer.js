export default class Layer {
    /** Handles a list of game objects. To be used with Pool. */

    constructor(gameObjects) { this.gameObjects = gameObjects; }

    add(gameObject) { this.gameObjects.push(gameObject); }
    clean() { this.gameObjects = this.gameObjects.filter(i => !i.canDelete()); }

    handleInputs(inputs) { this.gameObjects.forEach(i => i.handleInputs(inputs)); }

    update(dt) { this.clean(); this.gameObjects.forEach(i => i.update(dt)); }

    draw(context) { this.gameObjects.forEach(i => i.draw(context)); }
}
