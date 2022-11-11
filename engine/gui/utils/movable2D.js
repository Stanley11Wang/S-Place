export default class Movable2D {
    /** Supporting basic movement. Bounded by maxWidth and maxHeight. */

    constructor(maxWidth, maxHeight, width, height, pos, velocity, acceleration, deceleration) {
        this.maxWidth = maxWidth, this.maxHeight = maxHeight;
        this.width = width, this.height = height;
        this.pos = pos, this.velocity = velocity;
        this.acceleration = acceleration, this.deceleration = deceleration;
    }

    pastLeftWall() { return this.pos[0] < 0; }
    pastLeftWallComplete() { return this.pos[0] < -this.width; }
    pastRightWall() { return this.pos[0] > this.maxWidth - this.width; }
    onGround() { return this.pos[1] >= this.maxHeight - this.height; }
    snapPos() {
        if (this.pastLeftWall()) { this.pos[0] = 0; this.velocity[0] = 0; }
        if (this.pastRightWall()) { this.pos[0] = this.maxWidth - this.width; this.velocity[0] = 0; }
        if (this.onGround()) { this.pos[1] = this.maxHeight - this.height; this.velocity[1] = 0; }
    }
 
    getPos() { return this.pos; }
    setPos(pos) { this.pos = pos; }
    incrementPos() { 
        this.pos[0] += this.velocity[0];
        this.pos[1] += this.velocity[1]; 
    }

    incrementVelocity(axis, dir) {
        const dirX = (dir === 1 || dir === 4 ? 1 : -1) * (axis === 'x' || axis === 'both' ? 1 : 0);
        const dirY = (dir === 3 || dir === 4 ? 1 : -1) * (axis === 'y' || axis === 'both' ? 1 : 0);
        this.velocity[0] += this.acceleration[0] * dirX
        this.velocity[1] += this.acceleration[1] * dirY;
    }
    decrementVelocity(axis) {
        const dirX = (this.velocity[0] < 0 ? 1 : -1) * ((axis === 'x' || axis === 'both') && this.velocity[0] !== 0 ? 1 : 0);
        const dirY = (this.velocity[1] < 0 ? 1 : -1) * ((axis === 'y' || axis === 'both') && this.velocity[1] !== 0 ? 1 : 0);
        this.velocity[0] += this.deceleration[0] * dirX;
        this.velocity[1] += this.deceleration[1] * dirY;
    }

    jump() { if (this.onGround()) this.velocity[1] = -20; }
    fall() { if (!this.onGround()) this.velocity[1] += this.deceleration[1]; }
    updatePhysics() {
        this.incrementPos();
        this.snapPos();
        this.decrementVelocity('x');
        this.fall();
    }
}
