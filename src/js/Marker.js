import {
    Events
} from './Events.js';
import {
    Helper
} from './Helper.js';
import {
    Point
} from './Point.js';
import {
    Rectangle
} from './Rectangle.js';
import {
    Drawable
} from './Drawable.js';

/**
 * @author Michael Duve <mduve@designmail.net>
 * @file represents a marker with an image, a position and content
 * @copyright Michael Duve 2016
 */
export class Marker extends Drawable {

    /**
     * gets bounding box of marker
     * @return {Rectangle} current dimension of this marker
     */
    get boundingBox() {
        const bBox = this.icon.getBoundingClientRect();
        const parentBBox = this.container.getBoundingClientRect();
        return new Rectangle(bBox.left - parentBBox.left, bBox.top - parentBBox.top, bBox.width, bBox.height).scaleCenter(1.2);
    }

    /**
     * @constructor
     * @param  {Object} data - enriched data
     * @param  {HTMLElement} container = null - parent container
     * @param  {Number} id = 0 - id of parent instance
     * @return {Marker} - instance of Marker for chaining
     */
    constructor({
        data,
        container = null,
        id = 0
    }) {
        super(id);
        this.container = container;

        this.uniqueID = Marker.count;
        Marker.count++;

        this.size = data.size;

        this.hover = data.hover;
        if (this.hover) this.size.divide(2, 1);

        this.img = data.icon;
        this.offset = data.offset.add(new Point(-(this.size.x / 2), -this.size.y));
        this.latlng = data.latlng;

        this.content = data.content;
        this.icon = this.addMarkerToDOM(container);

        return this.bindEvents().positionMarker();
    }

    /**
     * bind all events
     * @return {Marker} instance of Marker for chaining
     */
    bindEvents() {
        if (this.content.length) {
            this.icon.setAttribute("data-id", `marker-${this.uniqueID}`);
            this.eventManager.subscribe(`marker-${this.uniqueID}`, this.action.bind(this));
            this.eventManager.subscribe(Events.Marker.DEACTIVATE, () => {
                this.icon.classList.remove("active");
            });
        }
        return this;
    }

    /**
     * execute bound action of cluster
     * @return {Marker} instance of Marker for chaining
     */
    action() {
        this.eventManager.publish(Events.ToolTip.OPEN, this.content);
        this.eventManager.publish(Events.Marker.DEACTIVATE);
        this.icon.classList.add("active");
    }

    /**
     * add a marker to the DOM
     * @param {HTMLElement} container - parent container to append to
     * @returns {HTMLElement} DOM-selector of appended markup
     */
    addMarkerToDOM(container) {
        const icon = document.createElement("div");
        icon.classList.add("marker");
        Helper.css(icon, {
            "width": `${this.size.x}px`,
            "height": `${this.size.y}px`,
            "margin-left": `${this.offset.x}px`,
            "margin-top": `${this.offset.y}px`,
            "transform": `translateZ(0)`,
            "background-image": `url(${this.img})`,
            "background-size": `${(this.hover) ? this.size.x*2 : this.size.x}px ${this.size.y}px`
        });
        if (container) {
            Helper.hide(icon);
            container.appendChild(icon);
        }
        return icon;
    }

    /**
     * set initial position of this marker
     * @return {Marker} instance of Marker for chaining
     */
    positionMarker() {
        this.position = this.info.convertLatLngToPoint(this.latlng);
        const p = this.position.clone.divide(this.view.width, this.view.height).multiply(100);
        Helper.css(this.icon, {
            "left": `${p.x}%`,
            "top": `${p.y}%`
        });
        Helper.show(this.icon);
        return this;
    }

}

/**
 * counts all markers
 * @type {Number}
 */
Marker.count = 0;
