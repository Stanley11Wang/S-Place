import { Grid } from './grid.js';
import { Control } from './control.js'

const CONTROL = new Control(document.getElementById('canvas'), new Grid(20, 20));
CONTROL.run();
