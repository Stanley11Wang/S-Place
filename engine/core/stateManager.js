export default class StateManager {
    /** Runs one state at a time, switching out states when prompted. */

    constructor(start, states) {
        this.done = false;
        this.states = states, this.stateName = start;
        this.state = this.states[this.stateName];
        this.state.startup();
    }

    isDone() { return this.done; }

    toState() {
        const previous = this.stateName;
        this.state.done = false, this.stateName = this.state.next;
        this.state.cleanup();

        this.state = this.states[this.stateName];
        this.state.startup();
        this.state.previous = previous;
    }

    passInputs(inputs) { this.state.handleInputs(inputs); }

    update(dt) {
        if (this.state.quit) this.done = true;
        else if (this.state.done) this.toState();
        this.state.update(dt);
    }

    draw(context) { this.state.draw(context); }
}
