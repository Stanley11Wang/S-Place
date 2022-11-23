import State from '../core/state.js';
import Player from '../gui/components/player.js';
import Enemy from '../gui/components/enemy.js';
import Background from '../gui/components/background.js';

export default class Test extends State {
    /** A test state for testing displays and features. */

    constructor() {
        super();
        const width = 1000, height = 500;
        this.player = new Player(width, height);
        this.enemy = new Enemy(width, height);
        this.background = new Background(width, height, 'background', [-7, 0]);
    }

    startup() {}
    cleanup() {}

    handleInputs(inputs) { 
        this.player.handleInputs(inputs);
    }

    update(dt) {
        this.background.update();
        this.player.update(dt);
        this.enemy.update(dt);
    }

    draw(context) { 
        this.background.draw(context);
        this.player.draw(context);
        this.enemy.draw(context);
    }
}
