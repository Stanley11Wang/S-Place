export default class Movable {
    /** A base 2D movement class that supports acceleration-based movement. 
     *  Uses maxWidth and maxHeight for bounds checking and position snapping. */

    constructor(maxWidth, maxHeight, width, height, pos, velocity, acceleration, deceleration) {
        this.maxWidth = maxWidth, this.maxHeight = maxHeight;
        this.width = width, this.height = height;
        this.pos = pos, this.velocity = velocity;
        this.acceleration = acceleration, this.deceleration = deceleration;
    }

    pastLeftWall() { return this.pos[0] <= 0; }
    pastLeftWallComplete() { return this.pos[0] <= -this.width; }
    pastRightWall() { return this.pos[0] >= this.maxWidth - this.width; }
    pastRightWallComplete() { return this.pos[0] >= this.maxWidth; }
    pastCeiling() { return this.pos[1] <= 0; }
    pastCeilingComplete() { return this.pos[1] <= -this.height; }
    pastFloor() { return this.pos[1] >= this.maxHeight - this.height; }
    pastFloorComplete() { return this.pos[1] >= this.maxHeight; }
    outOfBounds() { return this.pastLeftWall() || this.pastRightWall() || this.pastCeiling() || this.pastFloor(); }
    outOfBoundsComplete() { return this.pastLeftWallComplete() || this.pastRightWallComplete() || this.pastCeilingComplete() || this.pastFloorComplete(); }

    getPos() { return this.pos; }
    setPos(pos) { this.pos = pos; }
    setPosAxis(axis, i) { this.pos[(axis === 'x' ? 0 : 1)] = i; }
    incrementPos() { this.pos = [this.pos[0] + this.velocity[0], this.pos[1] + this.velocity[1]]; }
    snapPos() {
        if (this.pastLeftWall()) { this.pos[0] = 0; this.velocity[0] = 0; }
        if (this.pastRightWall()) { this.pos[0] = this.maxWidth - this.width; this.velocity[0] = 0; }
        if (this.pastFloor()) { this.pos[1] = this.maxHeight - this.height; this.velocity[1] = 0; }
    }

    getVelocity() { return this.velocity; }
    setVelocity(velocity) { this.velocity = velocity; }
    incrementVelocity(axis, dir) {
        const dirX = (dir === 1 || dir === 4 ? 1 : -1) * (axis === 'x' || axis === 'both' ? 1 : 0);
        const dirY = (dir === 3 || dir === 4 ? 1 : -1) * (axis === 'y' || axis === 'both' ? 1 : 0);
        this.velocity[0] += this.acceleration[0] * dirX
        this.velocity[1] += this.acceleration[1] * dirY;
    }
    decrementVelocity(axis) {
        const dirX = (this.velocity[0] < 0 ? 1 : -1) * ((axis === 'x' || axis === 'both') && this.velocity[0] !== 0 ? 1 : 0);
        const snapX = this.velocity[0] < 0 ? Math.min : Math.max;
        const dirY = (this.velocity[1] < 0 ? 1 : -1) * ((axis === 'y' || axis === 'both') && this.velocity[1] !== 0 ? 1 : 0);
        const snapY = this.velocity[1] < 0 ? Math.min : Math.max;
        this.velocity[0] = snapX(0, this.velocity[0] + (this.deceleration[0] * dirX));
        this.velocity[1] = snapY(0, this.velocity[1] + (this.deceleration[1] * dirY));
    }
}
