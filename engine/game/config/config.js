import Spritesheet from '../../gui/utils/spritesheet.js';

export const sheets = {
    'enemy': () => new Spritesheet('enemy', 160, 120, [6]),
    'player': () => new Spritesheet('player', 200, 200, [9, 7]),
    'background': () => new Spritesheet('background', 2400, 720, [1]),
    'background2': () => new Spritesheet('background2', 800, 1200, [1]),
    'boom': () => new Spritesheet('boom', 200, 180, [5])
};
