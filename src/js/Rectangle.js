import {
    Point
} from './Point.js';

/**
 * @author Michael Duve <mduve@designmail.net>
 * @file represents a rectangle with a point as position, width and height
 * @extends Point
 * @copyright Michael Duve 2016
 */
export class Rectangle extends Point {

    /**
     * get center-position of rectangle
     * @return {Point} center point
     */
    get center() {
        return new Point(this.x + (this.width / 2), this.y + (this.height / 2));
    }

    /**
     * get top-left-position of rectangle
     * @return {Point} top-left point
     */
    get topLeft() {
        return new Point(this.x, this.y);
    }

    /**
     * get top-right-position of rectangle
     * @return {Point} top-right point
     */
    get topRight() {
        return new Point(this.x + this.width, this.y);
    }

    /**
     * get bottom-left-position of rectangle
     * @return {Point} bottom-left point
     */
    get bottomLeft() {
        return new Point(this.x, this.y + this.height);
    }

    /**
     * get bottom-right-position of rectangle
     * @return {Point} bottom-right point
     */
    get bottomRight() {
        return new Point(this.x + this.width, this.y + this.height);
    }

    /**
     * Returns right position of Rectangle
     * @return {Number} right position
     */
    get right() {
        return this.x + this.width;
    }

    /**
     * Returns left position of Rectangle
     * @return {Number} left position
     */
    get left() {
        return this.x;
    }

    /**
     * Returns top position of Rectangle
     * @return {Number} top position
     */
    get top() {
        return this.y;
    }

    /**
     * Returns bottom position of Rectangle
     * @return {Number} bottom position
     */
    get bottom() {
        return this.y + this.height;
    }

    /**
     * clones a rectangle
     * @return {Rectangle} duplicated rectangle
     */
    get clone() {
        return Rectangle.createFromRectangle(this);
    }

    /**
     * @constructor
     * @param  {Number} x = 0 - x-position of specified rectangle
     * @param  {Number} y = 0 - y-position of specified rectangle
     * @param  {Number} width = 0 - width of specified rectangle
     * @param  {Number} height = 0 - height of specified rectangle
     * @return {Rectangle} instance of Rectangle for chaining
     */
    constructor(x = 0, y = 0, width = 0, height = 0) {
        super(x, y);
        this.width = width;
        this.height = height;
        return this;
    }

    /**
     * Checks whether Rectangle intersects with specified Rectangle
     * @param  {Rectangle} rect = new Rectangle() - the specified rectangle to check against
     * @return {Boolean} true if containment is entirely
     */
    intersects(rect = new Rectangle()) {
        return !(rect.left > this.right || rect.right < this.left || rect.top > this.bottom || rect.bottom < this.top);
    }

    /**
     * Checks whether Rectangle entirely contains the Rectangle or Point
     * @param  {Rectangle|Point} rectOrPoint - the specified point or rectangle to check against
     * @return {Boolean} true if containment is entirely
     */
    contains(rectOrPoint) {
        return (rectOrPoint instanceof Rectangle) ? this.containsRect(rectOrPoint) : (rectOrPoint instanceof Point) ? this.containsPoint(rectOrPoint) : false;
    }

    /**
     * extend a rectangle by specified rectangle dimensions
     * @param  {Rectangle} rect - specified rectangle
     * @return {Rectangle} instance of Rectangle for chaining
     */
    extend(rect) {
        const left = Math.min(this.left, rect.left);
        const right = Math.max(this.right, rect.right);
        const top = Math.min(this.top, rect.top);
        const bottom = Math.max(this.bottom, rect.bottom);
        this.size(left, top, right - left, bottom - top);
        return this;
    }

    /**
     * Sets the center of this Rectangle to specified point
     * @param  {Point} point = new Point() - specified point to set center of rectangle to
     * @return {Rectangle} instance of Rectangle for chaining
     */
    setCenter(point = new Point()) {
        const difference = point.substract(this.center);
        this.translate(difference.x, difference.y);
        return this;
    }

    /**
     * Sets the x-center of this Rectangle to specified x
     * @param  {Number} x = 0 - specified x coordinate to set x center of rectangle to
     * @return {Rectangle} instance of Rectangle for chaining
     */
    setCenterX(x = 0) {
        const difference = x - this.center.x;
        this.translate(difference, 0);
        return this;
    }

    /**
     * Sets the y-center of this Rectangle to specified y
     * @param  {Number} y = 0 - specified y coordinate to set y center of rectangle to
     * @return {Rectangle} instance of Rectangle for chaining
     */
    setCenterY(y = 0) {
        const difference = y - this.center.y;
        this.translate(0, difference);
        return this;
    }


    /**
     * Checks whether Rectangle entirely contains the Point
     * @param  {Point} point = new Point() - the specified point to check against
     * @return {Boolean} true if containment is entirely
     */
    containsPoint(point = new Point()) {
        return (point instanceof Point) ? point.x >= this.left && point.y >= this.top && point.x <= this.right && point.y <= this.bottom : false;
    }

    /**
     * Checks whether Rectangle entirely contains the Rectangle
     * @param  {Rectangle} rect = new Rectangle() - the specified rectangle to check against
     * @return {Boolean} true if containment is entirely
     */
    containsRect(rect = new Rectangle()) {
        return (rect instanceof Rectangle) ? rect.left >= this.left && rect.top >= this.top && rect.right <= this.right && rect.bottom <= this.bottom : false;
    }

    /**
     * distorts rectangle by factor
     * @param  {Number} factor = 1 - the specified factor of distortion
     * @return {Rectangle} a distorted Rectangle
     */
    getDistortedRect(factor = 1) {
        return new Rectangle(this.x, this.y, this.width, this.height).scaleX(factor);
    }

    /**
     * redistorts rectangle by factor
     * @param  {Number} factor = 1- the specified factor of distortion
     * @return {Rectangle} an undistorted Rectangle
     */
    getNormalRect(factor = 1) {
        return new Rectangle(this.x, this.y, this.width, this.height).scaleX(1 / factor);
    }

    /**
     * scale x and width of rectangle
     * @param  {Number} x = 1 - factor to be applied to scale
     * @return {Rectangle} instance of Rectangle for chaining
     */
    scaleX(x = 1) {
        this.x *= x;
        this.width *= x;
        return this;
    }

    /**
     * scale y and height of rectangle
     * @param  {Number} y = 1- factor to be applied to scale
     * @return {Rectangle} instance of Rectangle for chaining
     */
    scaleY(y = 1) {
        this.y *= y;
        this.height *= y;
        return this;
    }

    /**
     * scale x and y for width and height of rectangle
     * @param  {Number} x = 1 - factor to be applied to scale
     * @param  {Number} y = x - factor to be applied to scale
     * @return {Rectangle} instance of Rectangle for chaining
     */
    scale(x = 1, y = x) {
        this.scaleX(x);
        this.scaleY(y);
        return this;
    }

    /**
     * scale x and y for width and height of rectangle
     * @param  {Number} x = 1 - factor to be applied to scale
     * @param  {Number} y = x - factor to be applied to scale
     * @return {Rectangle} instance of Rectangle for chaining
     */
    scaleCenter(x = 1, y = x) {
        const oldCenter = this.clone.center;
        this.scale(x, y);
        this.setCenter(oldCenter);
        return this;
    }

    /**
     * moves a rectangle by specified coords
     * @param  {Number} x = 0 - specified x to be added to x position
     * @param  {Number} y = x - specified y to be added to y position
     * @return {Rectangle} instance of Rectangle for chaining
     */
    translate(x = 0, y = x) {
        super.translate(x, y);
        return this;
    }

    /**
     * transforms a rectangle by specified coords
     * @param  {Number} x = 0 - specified x to be added to x position
     * @param  {Number} y = x - specified y to be added to y position
     * @param  {Number} width = 0 - specified width to be added to this width
     * @param  {Number} height = 0 - specified height to be added to this height
     * @return {Rectangle} instance of Rectangle for chaining
     */
    transform(x = 0, y = x, width = 0, height = width) {
        this.translate(x, y);
        this.width += width;
        this.height += height;
        return this;
    }

    /**
     * changes the position a rectangle by specified coords
     * @param  {Number} x = 0 - the new x position
     * @param  {Number} y = 0 - he new y position
     * @return {Rectangle} instance of Rectangle for chaining
     */
    position(x = 0, y = x) {
        super.position(x, y);
        return this;
    }

    /**
     * changes the size of a rectangle by specified params
     * @param  {Number} x = 0- the new x position
     * @param  {Number} y = x - the new y position
     * @param  {Number} width = 0 - the new width
     * @param  {Number} height = 0 - the new width
     * @return {Rectangle} instance of Rectangle for chaining
     */
    size(x = 0, y = x, width = 0, height = width) {
        this.position(x, y);
        this.width = width;
        this.height = height;
        return this;
    }

    /**
     * changes the size of a rectangle by specified params
     * @param  {Number} width = 0 - the new width
     * @param  {Number} height = width - the new width
     * @return {Rectangle} instance of Rectangle for chaining
     */
    setSize(width = 0, height = width) {
        this.width = width;
        this.height = height;
        return this;
    }

    /**
     * check if rectangles are equal
     * @param  {Rectangle} rectangle - the specified rectangle to check against this
     * @return {Boolean} is true, if x, y, width and height are the same
     */
    equals(rectangle) {
        return (rectangle instanceof Rectangle) ? this.x === rectangle.x && this.y === rectangle.y && this.width === rectangle.width && this.height === rectangle.height : false;
    }

}

/**
 * Creates a Rectangle from specified Rectangle
 * @param  {Rectangle} rect - specified Rectangle
 * @return {Rectangle} a copy of specified rectangle
 */
Rectangle.createFromRectangle = (rect) => new Rectangle(rect.x, rect.y, rect.width, rect.height);
