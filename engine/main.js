import { Player } from './player.js';
import { Enemy } from './enemy.js';
import { InputHandler } from './input.js';
import { Background } from './background.js';

window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.enemy = new Enemy(width, height);
            this.background = new Background(width, height);
            this.input = new InputHandler();
        }

        handle_event() {
            this.player.handle_event(this.input.getKeys());
        }

        displayStatusText(context) {
            context.fillStyle = 'black';
            context.font = '40px Helvetica';
            context.fillText('Score: ' + 0, 20, 50);
        }

        update (dt) {
            this.background.update();
            this.player.update(dt);
            this.enemy.update(dt);
        }

        draw (context) {
            this.background.draw(context);
            this.player.draw(context);
            this.enemy.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);

    let lastTime = 0;

    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.handle_event();
        game.update(deltaTime);
        game.draw(ctx);
        game.displayStatusText(ctx);
        requestAnimationFrame(animate);
    }

    animate(0);

})