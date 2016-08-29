import {
    Events
} from './Events.js';
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
import {
    Rectangle
} from './Rectangle.js';
import {
    Texture
} from './Texture.js';

/**
 * @author Michael Duve <mduve@designmail.net>
 * @file shows an icon and/or a text at given position
 * @copyright Michael Duve 2016
 */
export class Marker extends Drawable {

    /**
     * position of marker
     * @return {Point} position
     */
    get position() {
        return this.info.convertLatLngToPoint(this.nearestPositionToCenter)
            .translate(this.view.x, this.view.y)
            .multiply(this.distortionFactor, 1)
            .translate(this.offsetToCenter, 0);
    }

    /**
     * get dimensions of marker
     * @return {Rectangle} dimensions
     */
    get boundingBox() {
        if (!this.icon) {
            return new Rectangle();
        }
        const x = (this.icon.type !== "image") ? this.position.x - (this.icon.size.x / 2) : this.position.x + this.offset.x;
        const y = (this.icon.type !== "image") ? this.position.y - (this.icon.size.x / 2) : this.position.y + this.offset.y;
        const w = this.icon.size.x;
        const h = (this.icon.type === "circle") ? this.icon.size.x : this.icon.size.y;
        return new Rectangle(x, y, w, h);
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
     * @param  {Object} settings = {} - settings for marker
     * @param  {CanvasRenderingContext2D} context = null - canvas context
     * @param  {Number} id = 0 - id of parent instance
     * @return {Marker} instance of Marker for chaining
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
        this.isHovered = false;
        this.active = false;
        this.visible = true;

        if (this.icon && this.icon.type === "circle") {
            this.drawIconType = this.drawCircleIcon(this.icon.size.x);
        } else if (this.icon && this.icon.type === "square") {
            this.drawIconType = this.drawSquareIcon(this.icon.size);
        } else if (this.icon && this.icon.type === "image") {
            this.texture = new Texture({
                path: this.info.path + this.icon.url,
                size: this.icon.size,
                offset: this.icon.offset
            });
            this.drawIconType = this.drawImageIcon(this.texture, this.icon.size, this.icon.offset);
        }
        this.drawElements = this.decideWhatToDraw(this.text, this.icon);

        this.bindEvents();

        return this;
    }

    /**
     * check if marker can be clustered
     * @return {Boolean} wheter it can be clustered or not
     */
    isClusterable() {
        return this.icon && this.latlng instanceof LatLng;
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
     * set active to true
     * @param  {Point} point - specified point to check against
     * @param  {Boolean} oneIsHit = false - if one item was hit before
     * @return {Boolean} indicate hit (true) or not
     */
    isActive(point, oneIsHit = false) {
        if (!this.content || !this.visible) {
            return false;
        }
        const isHovered = (!oneIsHit) ? this.hit(point) : false;
        if (this.isHovered !== isHovered) {
            this.eventManager.publish(Events.TileMap.DRAW);
        }
        document.body.style.cursor = (isHovered || oneIsHit) ? 'pointer' : 'default';
        this.isHovered = isHovered;
        return isHovered;
    }

    /**
     * execute bound action of cluster
     * @return {Marker} instance of Marker for chaining
     */
    action(point) {
        if (this.visible && this.isActive(point)) {
            this.eventManager.publish(Events.ToolTip.OPEN, this.content);
            this.active = true;
        }
    }

    /**
     * bind all events
     * @return {Marker} instance of Marker for chaining
     */
    bindEvents() {
        this.eventManager.subscribe(Events.ToolTip.OPEN, () => this.active = false);
        this.eventManager.subscribe(Events.ToolTip.CLOSE, () => this.active = false);
        return this;
    }

    /**
     * draw a marker
     * @return {Marker} instance of Marker for chaining
     */
    draw() {
        if (this.visible && this.level >= this.visibility.min && this.level <= this.visibility.max) {
            const pos = this.position;
            let textPos = new Point();

            if (this.text) {
                textPos = pos.clone.add(this.text.offset);
            }
            this.context.beginPath();
            this.drawElements(pos, textPos);
            this.context.closePath();
        }
        return this;
    }

    /**
     * check hit of point
     * @param  {Point} point - specified point to check against
     * @return {Booelan} Wheter it is a hit or not
     */
    hit(point) {
        if (this.boundingBox.containsPoint(point)) {
            if (this.texture) {
                const p = point.clone.substract(this.boundingBox.topLeft);
                return this.texture.isHit(p);
            }
            return true;
        }
        return false;
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
            return (pos) => {
                this.drawIcon(pos);
            };
        } else if (text) {
            return (pos, textPos) => this.drawText(textPos);
        }
    }

    /**
     * draw text of marker
     * @param  {Point} pos - origin of marker
     */
    drawText(pos) {
        this.context.textAlign = this.text.align;
        this.context.textBaseline = this.text.baseline;
        this.context.font = this.text.font;
        this.context.fillStyle = this.text.color;
        this.context.fillText(this.text.content, pos.x, pos.y);
    }

    /**
     * draw icon of marker
     * @param  {Point} pos - origin of marker
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
        return (pos) => {
            let focusFactor = 1.0;
            if (this.content && (this.isHovered || this.active)) {
                focusFactor = 1.2;
            }
            this.context.arc(pos.x, pos.y, (size / 2) * focusFactor, 0, 2 * Math.PI, false);
        };
    }

    /**
     * currying function for drawing a square
     * @param  {Number} size - size of square
     * @return {Function} function for drawing square icon
     */
    drawSquareIcon(size) {
        return (pos) => {
            let focusFactor = 1.0;
            if (this.content && (this.isHovered || this.active)) {
                focusFactor = 1.2;
            }
            const w = size.x * focusFactor;
            const h = size.y * focusFactor;
            this.context.rect(pos.x - (w / 2), pos.y - (h / 2), w, h);
        };
    }

    /**
     * currying function for drawing an image
     * @param  {Texture} texture - texture to be drawn
     * @param  {Point} size - dimension of image
     * @param  {Point} offset - offset of image
     * @return {Function} function for drawing image icon
     */
    drawImageIcon(texture, size, offset) {
        this.offset = offset;
        return (pos) => {
            if (texture.ready) {
                if (this.content && (this.isHovered || this.active)) {
                    this.context.drawImage(texture.img, size.x, 0, size.x, size.y, pos.x + offset.x, pos.y + offset.y, size.x, size.y);
                } else {
                    this.context.drawImage(texture.img, 0, 0, size.x, size.y, pos.x + offset.x, pos.y + offset.y, size.x, size.y);
                }
            }
        };
    }

}
