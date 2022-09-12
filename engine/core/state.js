export default class State {
    /** A state abstract class. */

    constructor() {
        this.done = false, this.quit = false;
        this.next = null, this.previous = null;
    }

    startup() { throw new Error('Implement!'); }

    cleanup() { throw new Error('Implement!'); }

    handleEvent(event) { throw new Error('Implement!'); }

    update(dt) { throw new Error('Implement!'); }

    draw(context) { throw new Error('Implement!'); }

    to(dest) {
        this.next = dest;
        this.done = true; 
    }

    back() { this.to(this.previous); }

    quit() { this.quit = true; }
}
