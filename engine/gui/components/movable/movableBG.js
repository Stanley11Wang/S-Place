import Movable from './movable.js';

export default class MovableBG extends Movable {
    /** Meant for moving backgrounds. Provides methods for determining starting positions
     *  and "next" positions such that backgrounds can be spliced together. */

    constructor(maxWidth, maxHeight, width, height, velocity) {
        super(maxWidth, maxHeight, width, height, [0, 0], velocity, [0, 0], [0, 0]);
    }

    getStartPos() { 
        return [this.velocity[0] <= 0 ? 0 : this.maxWidth - this.width, this.velocity[1] <= 0 ? 0 : this.maxHeight - this.height]; 
    }
    getNextPos() {
        const dirX = (this.velocity[0] >= 0 ? -1 : 1) * (this.velocity[0] === 0 ? 0 : 1);
        const dirY = (this.velocity[1] >= 0 ? -1 : 1) * (this.velocity[1] === 0 ? 0 : 1);
        return [this.pos[0] + (this.width * dirX) + this.velocity[0], this.pos[1] + (this.height * dirY)]; 
    }
    resetPos() { return this.pos = this.getStartPos()}
}
