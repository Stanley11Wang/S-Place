export default class Pool {
    /** Handles layers of game objects. */

    constructor(layers, collisionOrder) { 
        this.layers = layers;
        this.collisionOrder = collisionOrder;
    }

    addLayer(layerName, layer) { this.layers[layerName] = layer; }
    addObjectToLayer(layerName, gameObject) { this.layers[layerName].add(gameObject); }
    removeLayer(layerName) { delete this.layers[layerName]; }

    handleInputs(inputs) { this.layers.forEach(i => i.handleInputs(inputs)); }

    update(dt) { this.layers.forEach(i => i.update(dt)); }

    draw(context) { this.layers.forEach(i => i.draw(context)); }
}
