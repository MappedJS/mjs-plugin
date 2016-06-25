/**
 * @author Michael Duve <mduve@designmail.net>
 * @file represents a point with x and y value
 * @copyright Michael Duve 2016
 */
export class Point {

    /**
     * length of a point
     * @return {Number} length of a point
     */
    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    /**
     * gets a clone of this point
     * @return {Point} new instance equals this point
     */
    get clone() {
        return Point.createFromPoint(this);
    }

    /**
     * gets absolute Point
     * @return {Point} returns Point with absolute values
     */
    get abs() {
        return new Point(Math.abs(this.x), Math.abs(this.y));
    }

    /**
     * @constructor
     * @param  {Number} x = 0 - representation of x coordinate
     * @param  {Number} y = 0 - representation of y coordinate
     * @return {Point} instance of Point for chaining
     */
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        return this;
    }

    /**
     * substracts 2 points
     * @param  {Point} point = new Point() - the point to substract from this
     * @return {Point} instance of Point for chaining
     */
    substract(point = new Point()) {
        this.x -= point.x;
        this.y -= point.y;
        return this;
    }

    /**
     * adds 2 points
     * @param  {Point} point = new Point() - the point to add to this
     * @return {Point} instance of Point for chaining
     */
    add(point = new Point()) {
        this.x += point.x;
        this.y += point.y;
        return this;
    }

    /**
     * multiplicates a point with a given x and y
     * @param  {Number} x = 1 - factor to multiplicate x with
     * @param  {Number} y = x - factor to multiplicate y with
     * @return {Point} instance of Point for chaining
     */
    multiply(x = 1, y = x) {
        this.x *= x;
        this.y *= y;
        return this;
    }

    /**
     * divide a point with a given x and y
     * @param  {Number} x = 1 - factor to divide x with
     * @param  {Number} y = x - factor to divide y with
     * @return {Point} instance of Point for chaining
     */
    divide(x = 1, y = x) {
        this.x /= x;
        this.y /= y;
        return this;
    }

    /**
     * check if points are equal
     * @param  {Point} point - the point to check against this
     * @return {Boolean} is true, if x and y are the same
     */
    equals(point) {
        return this.x === point.x && this.y === point.y;
    }

    /**
     * Returns the distance from this Point to a specified Point
     * @param  {Point} point = new Point() - the specified point to be measured against this Point
     * @return {Point} the distance between this Point and specified point
     */
    distance(point = new Point()) {
        return this.clone.substract(point).length;
    }

    /**
     * translates a point by x and y
     * @param  {Number} x = 0 - value to move x
     * @param  {Number} y = x - value to move y
     * @return {Point} instance of Point for chaining
     */
    translate(x = 0, y = x) {
        this.x += x;
        this.y += y;
        return this;
    }

    /**
     * positions a point by x and y
     * @param  {Number} x = 0 - value to position x
     * @param  {Number} y = x - value to position y
     * @return {Point} instance of Point for chaining
     */
    position(x = 0, y = x) {
        this.x = x;
        this.y = y;
        return this;
    }

    /**
     * translates a Point to an array
     * @return {Array} Returns Point as Array(x, y)
     */
    toArray() {
        return [this.x, this.y];
    }

}

/**
 * Creates a Point from specified point
 * @param  {Point} point - specified point
 * @return {Point} the point specified
 */
Point.createFromPoint = (point) => new Point(point.x, point.y);
