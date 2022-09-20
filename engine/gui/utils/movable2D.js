export default class Movable2D {
    /** Supporting basic movement. Bounded by maxWidth and maxHeight. */

    constructor(maxWidth, maxHeight, width, height) {
        this.maxWidth = maxWidth, this.maxHeight = maxHeight;
        this.width = width, this.height = height;
        this.x = 0, this.vx = 0, this.accelerationX = 2, this.decelerationX = 1, this.maxSpeedX = 100;
        this.y = this.maxHeight - this.height, this.vy = 0, this.accelerationY = 2, this.decelerationY = 1, this.maxSpeedY = 100;
    }

    getPos() { return [this.x, this.y]; }
    setPos(x, y) { this.x = x, this.y = y; }

    onGround() { return this.y >= this.maxHeight - this.height; }
    pastLeftWall() { return this.x < 0; }
    pastRightWall() { return this.x > this.maxWidth - this.width; }
    pastGround() { return this.y > this.maxHeight - this.height; }

    jump() { if (this.onGround()) this.vy = -20; }
    fall() { if (!this.onGround()) this.vy += this.decelerationY; }

    incrementVelocityX(right) {
        if (right && this.vx < this.maxSpeedX) this.vx += this.accelerationX;
        else if (!right && this.vx > -this.maxSpeedX) this.vx -= this.accelerationX;
    }
    decrementVelocityX() {
        if (this.vx < 0) this.vx += this.decelerationX;
        if (this.vx > 0) this.vx -= this.decelerationX;
    }

    incrementVelocityY(down) {
        if (down && this.vy < this.maxSpeedY) this.vy += this.accelerationY;
        else if (!down && this.vy > -this.maxSpeedY) this.vy -= this.accelerationY;
    }
    decrementVelocityY() {
        if (this.vy < 0) this.vy += this.decelerationY;
        if (this.vy > 0) this.vy -= this.decelerationY;
    }

    updateX() {
        this.x += this.vx;
        if (this.pastLeftWall()) this.x = 0;
        if (this.pastRightWall()) this.x = this.maxWidth - this.width;
        this.decrementVelocityX();
    }
    updateY() {
        this.y += this.vy;
        if (this.pastGround()) this.y = this.maxHeight - this.height;
        this.fall();
    }

    update() { this.updateX(); this.updateY(); }
}
