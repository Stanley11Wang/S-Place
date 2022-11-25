import App from './core/app.js';
import Test from './game/states/test.js';

window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas');
    canvas.width = 1000, canvas.height = 500;
    const context = canvas.getContext('2d');
    const app = new App(canvas.width, canvas.height, context, 'test', {'test': new Test()});
    app.runTick(0);
})
