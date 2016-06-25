import {
    Publisher
} from './Publisher.js';
import {
    MapInformation
} from './MapInformation.js';
import {
    Rectangle
} from './Rectangle.js';

/**
 * @author Michael Duve <mduve@designmail.net>
 * @file represents an item, that is displayed and needs information for its position
 * @copyright Michael Duve 2016
 */
export class Drawable extends Rectangle {

    /**
     * stores mapdimension information
     * @return {Rectangle} map
     */
    get view() {
        return this.info.get().view;
    }

    /**
     * stores level information
     * @return {Number} level
     */
    get level() {
        return this.info.get().level;
    }

    /**
     * stores viewport information
     * @return {Rectangle} viewport
     */
    get viewport() {
        return this.info.get().viewport;
    }

    /**
     * stores distortion information
     * @return {Number} distortionFactor
     */
    get distortionFactor() {
        return this.info.get().distortionFactor;
    }

    /**
     * stores x offset to center
     * @return {Number} offsetToCenter
     */
    get offsetToCenter() {
        return this.info.get().offsetToCenter;
    }

    /**
     * stores latlng position of map center
     * @return {LatLng} center
     */
    get centerPosition() {
        return this.info.get().center;
    }

    /**
     * stores current zoom factor
     * @return {Number} zoomFactor
     */
    get zoomFactor() {
        return this.info.get().zoomFactor;
    }

    /**
     * stores boundary information
     * @return {Bounds} bounds
     */
    get bounds() {
        return this.info.get().bounds;
    }

    /**
     * @constructor
     * @param  {Number} id = 0 - id of parent instance
     * @param  {Number} x  = 0 - position x of element
     * @param  {Number} y  = 0 - position y of element
     * @param  {Number} w  = 0 - width of element
     * @param  {Number} h  = 0 - height of element
     * @return {Drawable} instance of Drawable for chaining
     */
    constructor(id = 0, x = 0, y = 0, w = 0, h = 0) {
        super(x, y, w, h);
        this.id = id;
        this.info = new MapInformation(this.id);
        this.eventManager = new Publisher(this.id);
        return this;
    }

    /**
     * execute on displaying instance
     * @return {Drawable} instance of Drawable for chaining
     */
    draw() {
        return this;
    }

}
