const COLORS = Object.freeze({
    RED: "#ff0000",
    GREEN: "#00ff00",
    BLUE: "#0000ff",
    BLACK: "#000000",
    WHITE: "#ffffff"
});

function randInt(max) { return Math.floor(Math.random() * max); }

export { COLORS, randInt };
