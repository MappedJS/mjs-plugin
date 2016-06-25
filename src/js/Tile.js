import {
    Events
} from './Events.js';
import {
    Helper
} from './Helper.js';
import {
    StateHandler
} from './StateHandler.js';
import {
    Drawable
} from './Drawable.js';

/**
 * @author Michael Duve <mduve@designmail.net>
 * @file Represents a part of the background map
 * @extends Rectangle
 * @copyright Michael Duve 2016
 */
export class Tile extends Drawable {

    /**
     * transform original tile to a distorted tile
     * @return {Tile} distorted tile
     */
    get distortedTile() {
        return this.clone.scale(this.zoomFactor)
            .translate(this.view.x, this.view.y)
            .scaleX(this.distortionFactor)
            .translate(this.offsetToCenter, 0);
    }

    /**
     * @constructor
     * @param  {String} path = null - path to image
     * @param  {Number} x = 0 - position x of tile
     * @param  {Number} y = 0 - position y of tile
     * @param  {Number} w = 0 - tile width
     * @param  {Number} h = 0 - tile height
     * @param  {CanvasRenderingContext2D} context = null - context of canvas
     * @param  {Number} id = 0 - id of parent instance
     * @return {Tile} instance of Tile for chaining
     */
    constructor({
        path = null,
        x = 0,
        y = 0,
        w = 0,
        h = 0,
        context = null,
        id = 0
    }) {
        super(id, x, y, w, h);
        if (!path || typeof path !== "string" || path.length === 0) throw new TypeError(`Path ${path} needs to be of type string and should not be empty`);
        this.state = new StateHandler(Tile.STATES);
        this.context = context;
        this.path = path;
        return this;
    }

    /**
     * initializes tile and starts loading image
     * @return {Tile} instance of Tile for chaining
     */
    initialize() {
        this.state.next();
        Helper.loadImage(this.path, (img) => {
            this.img = img;
            this.state.next();
            this.eventManager.publish(Events.TileMap.DRAW);
        });
        return this;
    }

    /**
     * draws image data of tile on context
     * @return {Tile} instance of Tile for chaining
     */
    draw() {
        if (this.state.current.value >= 2) {
            const t = this.distortedTile;
            this.state.next();
            this.context.drawImage(this.img, t.x, t.y, t.width, t.height);
        } else if (this.state.current.value === 0) {
            this.initialize();
        }
        return this;
    }

}

/**
 * States of a tile
 * @type {Array}
 */
Tile.STATES = [{
    value: 0,
    description: 'Starting'
}, {
    value: 1,
    description: 'Initialized'
}, {
    value: 2,
    description: 'Loaded'
}, {
    value: 3,
    description: 'Drawn'
}];
