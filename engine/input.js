export class InputHandler {
    /** Handles all keyboard inputs. */

    constructor() {
        this.acceptedKeys = ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Enter'], this.keys = [];
        window.addEventListener('keydown', e => this.addKey(e.key));
        window.addEventListener('keyup', e => this.removeKey(e.key));
    }

    getKeys() { return this.keys; }
    addKey(key) { if ((this.acceptedKeys.includes(key)) & !this.keys.includes(key)) this.keys.push(key); }
    removeKey(key) { if (this.acceptedKeys.includes(key)) this.keys.splice(this.keys.indexOf(key), 1); }
}
