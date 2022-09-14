export const states = {
    STANDING_LEFT: 0,
    STANDING_RIGHT: 1,
}

class PlayerState {
    constructor(state) {
        this.state = state;
    }
}

class StandingLeft extends PlayerState {
    constructor(player) {
        super('STANDING_LEFT');
        this.player = player;
    }

    enter() {
        this.player.frameY = 1;
    }

    handleInput(input) {
        // call set state
    }
}

class StandingRight extends PlayerState {
    constructor(player) {
        super('STANDING_RIGHT');
        this.player = player;
    }

    enter() {
        this.player.frameY = 0;
    }

    handleInput(input) {
        // call set state
    }
}