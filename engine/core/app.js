import StateManager from './stateManager.js';
import InputHandler from './inputHandler.js';

export default class App {
    /** Manages the game loop. */

    constructor(width, height, context, start, states) { 
        this.width = width, this.height = height, this.context = context, this.lastTime = 0;
        this.stateManager = new StateManager(start, states);
        this.inputHandler = new InputHandler();

        this.runTick = this.runTick.bind(this);
    }

    runTick(timeStamp) {
        const dt = timeStamp - this.lastTime;
        this.lastTime = timeStamp;

        this.context.clearRect(0, 0, this.width, this.height);
        this.stateManager.passInputs(this.inputHandler.getInputs());
        this.stateManager.update(dt);
        this.stateManager.draw(this.context);

        requestAnimationFrame(this.runTick);
    }

}
