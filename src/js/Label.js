import {
    Helper
} from './Helper.js';
import {
    Drawable
} from './Drawable.js';
import {
    LatLng
} from './LatLng.js';
import {
    Point
} from './Point.js';

/**
 * @author Michael Duve <mduve@designmail.net>
 * @file shows an icon and/or a text at given position
 * @copyright Michael Duve 2016
 */
export class Label extends Drawable {

    /**
     * position of label
     * @return {Point} position
     */
    get position() {
        return this.info.convertLatLngToPoint(this.nearestPositionToCenter)
            .translate(this.view.x, this.view.y)
            .multiply(this.distortionFactor, 1)
            .translate(this.offsetToCenter, 0);
    }

    /**
     * find nearest position to mapcenter
     * @return {LatLng} nearest position
     */
    get nearestPositionToCenter() {
        return (this.latlng instanceof LatLng) ? this.latlng : this.getNearestPositionToCenter();
    }

    /**
    /**
     * @constructor
     * @param  {Object} settings = {} - settings for label
     * @param  {CanvasRenderingContext2D} context = null - canvas context
     * @param  {Number} id = 0 - id of parent instance
     * @return {Label} instance of Label for chaining
     */
    constructor({
        settings = {},
        context = null,
        id = 0
    }) {
        super(id);

        this.context = context;

        this.latlng = settings.position;
        this.text = settings.text;
        this.icon = settings.icon;
        this.content = settings.content;
        this.visibility = settings.visibility;
        this.offset = new Point();

        if (this.icon && this.icon.type === "circle") this.drawIconType = this.drawCircleIcon(this.icon.size);
        else if (this.icon && this.icon.type === "square") this.drawIconType = this.drawSquareIcon(this.icon.size);
        else if (this.icon && this.icon.type === "image") {
            this.drawIconType = () => {};
            Helper.loadImage(this.icon.url, (img) => {
                this.drawIconType = this.drawImageIcon(img, this.icon.size, this.icon.offset);
            });
        }
        this.drawElements = this.decideWhatToDraw(this.text, this.icon);

        return this;
    }

    /**
     * find nearest position to mapcenter
     * @return {LatLng} nearest position
     */
    getNearestPositionToCenter() {
        const oldPos = this.latlng[0];
        this.latlng = this.latlng.sort((a, b) => {
            const c = a.clone.multiply(1, this.distortionFactor);
            const d = b.clone.multiply(1, this.distortionFactor);
            const center = this.centerPosition.clone.multiply(1, this.distortionFactor);
            return center.distance(c) - center.distance(d);
        });
        return (this.latlng[0].distance(oldPos) > 0.01) ? this.latlng[0] : oldPos;
    }

    /**
     * draw a label
     * @return {Label} instance of Label for chaining
     */
    draw() {
        if (this.level >= this.visibility.min && this.level <= this.visibility.max) {
            const pos = this.position;
            const textPos = pos.clone.add(this.text.offset);

            this.context.beginPath();
            this.drawElements(pos, textPos);
            this.context.closePath();
        }
        return this;
    }

    /**
     * currying function for drawing text, icon or both
     * @param  {Object} text - data for text
     * @param  {Object} icon - data for icon
     * @return {Function} function to be called on draw
     */
    decideWhatToDraw(text, icon) {
        if (text && icon) {
            return (pos, textPos) => {
                this.drawText(textPos);
                this.drawIcon(pos);
            };
        } else if (icon) {
            return (pos) => this.drawIcon(pos);
        } else if (text) {
            return (pos, textPos) => this.drawText(textPos);
        }
    }

    /**
     * draw text of label
     * @param  {Point} pos - origin of label
     */
    drawText(pos) {
        this.context.textAlign = this.text.align;
        this.context.textBaseline = this.text.baseline;
        this.context.font = this.text.font;
        this.context.fillStyle = this.text.color;
        this.context.fillText(this.text.content, pos.x, pos.y);
    }

    /**
     * draw icon of label
     * @param  {Point} pos - origin of label
     */
    drawIcon(pos) {
        this.context.fillStyle = this.icon.color;
        this.drawIconType(pos);
        this.context.fill();
    }

    /**
     * currying function for drawing a circle
     * @param  {Number} size - size of circle
     * @return {Function} function for drawing circle icon
     */
    drawCircleIcon(size) {
        return (pos) => this.context.arc(pos.x, pos.y, size, 0, 2 * Math.PI, false);
    }

    /**
     * currying function for drawing a square
     * @param  {Number} size - size of square
     * @return {Function} function for drawing square icon
     */
    drawSquareIcon(size) {
        return (pos) => this.context.rect(pos.x, pos.y, size, size);
    }

    /**
     * currying function for drawing an image
     * @param  {Image} image - image to be drawn
     * @param  {Point} size - dimension of image
     * @param  {Point} offset - offset of image
     * @return {Function} function for drawing image icon
     */
    drawImageIcon(image, size, offset) {
        this.offset = offset;
        return (pos) => this.context.drawImage(image, pos.x + offset.x, pos.y + offset.y, size.x, size.y);
    }

}
