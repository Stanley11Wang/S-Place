class EntityState {
    constructor(entity, name) {
        this.entity = entity;
        this.name = name;
    }
}

class StandingLeft extends EntityState {
    constructor(entity) { super(entity, 'STANDING_RIGHT'); }

    enter() { this.player.frameY = 1; }

    handleInput(input) {
        // call set state
    }
}

class StandingRight extends EntityState {
    constructor(entity) { super(entity, 'STANDING_RIGHT'); }

    enter() { this.player.frameY = 0; }

    handleInput(input) {
        // call set state
    }
}
