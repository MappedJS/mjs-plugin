/**
 * @author Michael Duve <mduve@designmail.net>
 * @file represents latitude and longitude coordinates in a geographic coordinate system
 * @copyright Michael Duve 2016
 */
export class LatLng {

    /**
     * length of a latlng
     * @return {Number} length of latlng
     */
    get length() {
        return Math.sqrt(Math.pow(this.lat, 2) + Math.pow(this.lng, 2));
    }

    /**
     * gets a clone of this latlng
     * @return {LatLng} create a copy
     */
    get clone() {
        return LatLng.createFromLatLng(this);
    }

    /**
     * @constructor
     * @param  {Number} lat = 0 - representation of latitude
     * @param  {Number} lng = 0 - representation of longitude
     * @return {LatLng} instance of LatLng for chaining
     */
    constructor(lat = 0, lng = 0) {
        this.lat = lat;
        this.lng = lng;
        return this;
    }

    /**
     * calculates distance between this and specified latlng
     * @param  {LatLng} latlng = new LatLng() - specified latlng
     * @return {Number} distance
     */
    distance(latlng = new LatLng()) {
        return this.clone.substract(latlng).length;
    }

    /**
     * substract specified coord from this coordinate
     * @param  {LatLng} coord = new LatLng() - specified coordinate to substract from this coord
     * @return {LatLng} instance of LatLng for chaining
     */
    substract(coord = new LatLng()) {
        this.lat -= coord.lat;
        this.lng -= coord.lng;
        return this;
    }

    /**
     * add specified coord to this coordinate
     * @param  {LatLng} coord = new LatLng() - specified coordinate to add to this coord
     * @return {LatLng} instance of LatLng for chaining
     */
    add(coord = new LatLng()) {
        this.lat += coord.lat;
        this.lng += coord.lng;
        return this;
    }

    /**
     * divides a latlng with a given factor
     * @param  {Number} factorLat = 1 - factor to divide lat with
     * @param  {Number} factorLng = factorLat - factor to divide lng with
     * @return {LatLng} instance of LatLng for chaining
     */
    divide(factorLat = 1, factorLng = factorLat) {
        this.lat /= factorLat;
        this.lng /= factorLng;
        return this;
    }

    /**
     * multiplicates a latlng with a given factor
     * @param  {Number} factorLat = 1 - factor to multiplicate lat with
     * @param  {Number} factorLng = factorLat - factor to multiplicate lng with
     * @return {LatLng} instance of LatLng for chaining
     */
    multiply(factorLat = 1, factorLng = factorLat) {
        this.lat *= factorLat;
        this.lng *= factorLng;
        return this;
    }

    /**
     * checks if specified coord equals this coord
     * @param  {LatLng} coord - specified coord to check against
     * @return {Boolean} Returns if specified coord equals this coord
     */
    equals(coord) {
        return this.lat === coord.lat && this.lng === coord.lng;
    }

    /**
     * converts a LatLng to string
     * @return {String} representing LatLng
     */
    toString() {
        return `(${this.lat}, ${this.lng})`;
    }

}

/**
 * Creates a LatLng from specified LatLng
 * @param  {LatLng} LatLng - specified LatLng
 * @return {LatLng} the LatLng specified
 */
LatLng.createFromLatLng = (latlng) => new LatLng(latlng.lat, latlng.lng);
