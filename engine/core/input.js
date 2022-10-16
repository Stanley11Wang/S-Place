export default class Input {
    /** Stores input related information such as mouse positions. */

    constructor(inputName, pos) {
        this.inputName = inputName
        this.pos = pos;
    }

    getName() { return this.inputName; }
    getPos() { return this.pos; }
}
