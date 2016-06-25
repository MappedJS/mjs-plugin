import {
    Events
} from './Events.js';
import {
    Helper
} from './Helper.js';
import {
    Publisher
} from './Publisher.js';
import {
    LatLng
} from './LatLng.js';
import {
    Bounds
} from './Bounds.js';
import {
    Point
} from './Point.js';
import {
    Rectangle
} from './Rectangle.js';

/**
 * @author Michael Duve <mduve@designmail.net>
 * @file stores and handles all information for a map
 * @copyright Michael Duve 2016
 */
export class MapInformation {

    /**
     * Returns the current distorted viewport
     */
    get offsetToCenter() {
        return (this.data.viewport.width - this.data.viewport.width * this.data.distortionFactor) / 2;
    }

    /**
     * how many pixels per lat and lng
     * @return {Point} pixels per lat/lng
     */
    get pixelPerLatLng() {
        return new Point((this.data.view.width / this.data.bounds.width) || 0, (this.data.view.height / this.data.bounds.height) || 0);
    }

    /**
     * @constructor
     * @return {MapInformation} singleton instance of MapInformation for chaining
     */
    constructor(id = 0) {
        if (!MapInformation.instances[id]) {
            this.id = id;
            this.data = {
                center: new LatLng(),
                view: new Rectangle(),
                viewport: new Rectangle(),
                distortionFactor: 1,
                offsetToCenter: 0,
                bounds: new Bounds(),
                zoomFactor: 1,
                level: 0
            };
            this.data.offsetToCenter = this.offsetToCenter;
            this.eventManager = new Publisher(this.id);
            this.bindEvents();
            MapInformation.instances[id] = this;
        }
        return MapInformation.instances[id];
    }

    /**
     * gets current data
     * @return {Object} map information
     */
    get() {
        return this.data;
    }

    /**
     * bind all events
     * @return {MapInformation} instance of MapInformation for chaining
     */
    bindEvents() {
        this.eventManager.subscribe(Events.MapInformation.UPDATE, this.update.bind(this));
        return this;
    }

    /**
     * updates current information
     * @param  {Object} obj = {} - new data delivered
     * @return {MapInformation} instance of MapInformation for chaining
     */
    update(obj = {}) {
        const oldData = this.data;
        this.data = Object.assign({}, this.data, obj);
        const centerUpdateDone = (!oldData.center.equals(this.data.center)) ? this.centerUpdated() : false;
        if (!centerUpdateDone && !oldData.viewport.equals(this.data.viewport)) this.updateOffsetToCenter();
        return this;
    }

    /**
     * converts a Point to LatLng in view
     * @param  {Point} point - specified point to be converted
     * @return {LatLng} presentation of point in lat-lng system
     */
    convertPointToLatLng(point) {
        point.divide(this.pixelPerLatLng.x, this.pixelPerLatLng.y);
        return new LatLng(this.data.bounds.nw.lat - point.y, point.x + this.data.bounds.nw.lng);
    }

    /**
     * converts a LatLng to Point in view
     * @param  {LatLng} latlng - specified latlng to be converted
     * @return {Point} presentation of point in pixel system
     */
    convertLatLngToPoint(latlng) {
        const relativePosition = this.data.bounds.nw.clone.substract(latlng);
        relativePosition.multiply(this.pixelPerLatLng.y, this.pixelPerLatLng.x);
        return new Point(relativePosition.lng, relativePosition.lat).abs;
    }

    /**
     * center position was updated
     * @return {Boolean} information was updated
     */
    centerUpdated() {
        this.data.distortionFactor = this.getDistortionFactorForLatitude(this.data.center);
        this.updateOffsetToCenter();
        return true;
    }

    /**
     * offset to center was updated
     * @return {Boolean} information was updated
     */
    updateOffsetToCenter() {
        this.data.offsetToCenter = this.offsetToCenter;
        return true;
    }

    /**
     * get distortion factor for specified latitude
     * @param  {LatLng} latlng - lat/lng position
     * @return {Number} distortion factor
     */
    getDistortionFactorForLatitude(latlng) {
        return (Math.cos(Helper.toRadians(latlng.lat)));
    }

    /**
     * destroys singleton instance
     */
    destroy() {
        MapInformation.instances[this.id] = null;
    }

}

/**
 * singleton instance wrapper
 * @type {Object}
 */
MapInformation.instances = {

};
