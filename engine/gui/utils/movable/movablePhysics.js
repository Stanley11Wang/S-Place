import Movable from './movable.js';

export default class MovablePhysics extends Movable {
    /** Meant for characters that move and obey gravity. Has its own
     *  update function to handle velocity/acceleration over time. */

    constructor(maxWidth, maxHeight, width, height, pos, velocity, acceleration, deceleration, jumpPower) {
        super(maxWidth, maxHeight, width, height, pos, velocity, acceleration, deceleration);
        this.jumpPower = jumpPower;
    }

    jump() { if (this.pastFloor()) this.velocity[1] = this.jumpPower; }
    fall() { if (!this.pastFloor()) this.velocity[1] += this.deceleration[1]; }
    updatePhysics() {
        this.incrementPos();
        this.snapPos();
        this.decrementVelocity('x');
        this.fall();
    }
}
