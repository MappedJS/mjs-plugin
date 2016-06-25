import {
    LatLng
} from './LatLng.js';

/**
 * @author Michael Duve <mduve@designmail.net>
 * @file represents boundaries of a geographic coordinate system
 * @copyright Michael Duve 2016
 */
export class Bounds {

    /**
     * get width of boundaries
     * @return {Number} distance between east and west boundary
     */
    get width() {
        return Math.abs(this.se.lng - this.nw.lng);
    }

    /**
     * get height of boundaries
     * @return {Number} distance between north and south boundary
     */
    get height() {
        return Math.abs(this.se.lat - this.nw.lat);
    }

    /**
     * @constructor
     * @param  {Number} northWest = new LatLng() - representation of northWest boundary
     * @param  {Number} southEast = new LatLng() - representation of southEast boundary
     * @return {Bounds} instance of Bounds for chaining
     */
    constructor(northWest = new LatLng(), southEast = new LatLng()) {
        if (northWest.lat < southEast.lat || northWest.lng > southEast.lng) throw new Error(`${northWest} needs to be top-left corner and ${southEast} bottom-right`);
        this.nw = northWest;
        this.se = southEast;
        return this;
    }

}
