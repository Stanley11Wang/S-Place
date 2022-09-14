export default class DeltaTimeRunner {
    /** Responsible for running functions periodically based on delta time. */
    
    constructor(fps, interval) { 
        this.time = 0
        this.fps = fps, this.interval = interval / fps; 
    }

    setInterval(interval) { this.interval = interval; }

    deltaTimeUpdate(dt, func) {
        this.time += dt;
        if (this.time >= this.interval) {
            func();
            this.time = 0;
        }
    }
}
