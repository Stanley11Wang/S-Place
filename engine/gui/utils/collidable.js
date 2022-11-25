export default class Collidable {
    /** Handles collisions in a one-sided manner by using information from linked
     *  movable components. */

    constructor(movable, callables) { 
        this.movable = movable;
        this.callables = callables; 
        this.colliding = false;
    }

    isColliding() { return this.colliding; }
    setColliding(colliding) { this.colliding = colliding; }
    getCallable(mode) { return this.callables[mode]; }

    collides(other) {
        const thisPos = this.movable.getPos(), thisDim = this.movable.getDimensions();
        const otherPos = other.movable.getPos(), otherDim = other.movable.getDimensions();
        return thisPos[0] < otherPos[0] + otherDim[0] && thisPos[0] + thisDim[0] > otherPos[0] &&
               thisPos[1] < otherPos[1] + otherDim[1] && thisPos[1] + thisDim[1] > otherPos[1]
    }
}
