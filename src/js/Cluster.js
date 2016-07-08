import {
    Events
} from './Events.js';
import {
    Helper
} from './Helper.js';
import {
    DataEnrichment
} from './DataEnrichment.js';
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
 * @file represents a cluster of markers
 * @copyright Michael Duve 2016
 */
export class Cluster extends Drawable {


    /**
     * calculates the actual position of a cluster
     * @return {Point} calculated position
     */
    get position() {
        return this.info.convertLatLngToPoint(this.latlng)
            .translate(this.view.x, this.view.y)
            .multiply(this.distortionFactor, 1)
            .translate(this.offsetToCenter, 0);
    }

    /**
     * calculates actual dimension and position of a cluster
     * @return {Rectangle} calculated dimension
     */
    get boundingBox() {
        return new Rectangle(this.position.x, this.position.y, 1, 1).scaleCenter(this.texture.width, this.texture.height);
    }

    /**
     * @constructor
     * @param {CanvasRenderingContext2D} context = null - context of canvas
     * @param {Texture} texture = null - texture of cluster
     * @param {Object} font = DataEnrichment.CLUSTER_FONT - style of font in cluster
     * @param {Number} id = 0 - id of parent instance
     * @return {Cluster} instance of Cluster for chaining
     */
    constructor({
        context = null,
        texture = null,
        font = DataEnrichment.CLUSTER_FONT,
        id = 0
    }) {
        super(id);
        this.markers = [];
        this.textSettings = font;
        this.texture = texture;
        this.context = context;
        this.isHovered = false;
        return this;
    }

    /**
     * initialize a cluster
     * @return {Cluster} instance of Cluster for chaining
     */
    init() {
        if (this.markers.length === 1) {
            this.markers[0].visible = true;
        } else {
            this.createClusterMarker();
        }
        return this;
    }

    /**
     * create cluster for markers
     * @return {Cluster} instance of Cluster for chaining
     */
    createClusterMarker() {
        for (const marker of this.markers) {
            marker.visible = false;
        }
        this.bindEvents();
        return this;
    }

    /**
     * draw this cluster
     * @return {Cluster} instance of Cluster for chaining
     */
    draw() {
        if (this.texture.ready) {
            if (this.isHovered) {
                this.context.drawImage(this.texture.img, this.texture.width, 0, this.texture.width, this.texture.height, this.boundingBox.x, this.boundingBox.y, this.texture.width, this.texture.height);
            } else {
                this.context.drawImage(this.texture.img, 0, 0, this.texture.width, this.texture.height, this.boundingBox.x, this.boundingBox.y, this.texture.width, this.texture.height);
            }
            this.context.beginPath();
            this.context.textAlign = "center";
            this.context.textBaseline = "middle";
            this.context.font = this.textSettings.font;
            this.context.fillStyle = this.textSettings.color;
            this.context.fillText(this.markers.length, this.boundingBox.center.x, this.boundingBox.center.y);
            this.context.closePath();
        }
        return this;
    }

    /**
     * bind all events
     * @return {Cluster} instance of Cluster for chaining
     */
    bindEvents() {
        this.eventManager.subscribe(`cluster-${this.uniqueID}`, this.action.bind(this));
        return this;
    }

    /**
     * unbind all events
     * @return {Cluster} instance of Cluster for chaining
     */
    unbindEvents() {
        this.eventManager.unsubscribe(`cluster-${this.uniqueID}`, this.action.bind(this));
        return this;
    }

    /**
     * set active to true
     * @param  {Point} point - specified point to check against
     * @param  {Boolean} oneIsHit = false - if one item was hit before
     * @return {Boolean} indicate hit (true) or not
     */
    isActive(point, oneIsHit = false) {
        const isHovered = (!oneIsHit) ? this.hit(point) : false;
        if (this.isHovered !== isHovered) {
            this.eventManager.publish(Events.TileMap.DRAW);
        }
        document.body.style.cursor = (isHovered || oneIsHit) ? 'pointer': 'default';
        this.isHovered = isHovered;
        return isHovered;
    }

    /**
     * check hit of point
     * @param  {Point} point - specified point to check against
     * @return {Booelan} Wheter it is a hit or not
     */
    hit(point) {
        if (this.boundingBox.containsPoint(point)) {
            const p = point.clone.substract(this.boundingBox.topLeft);
            return this.texture.isHit(p);
        }
        return false;
    }

    /**
     * execute bound action of cluster
     * @return {Cluster} instance of Cluster for chaining
     */
    action() {
        this.eventManager.publish(Events.TileMap.ZOOM_TO_BOUNDS, {
            boundingBox: this.boundingBox,
            center: this.calculateCenter()
        });
        return this;
    }

    /**
     * calculates the center of a cluster
     * @return {LatLng} center of cluster
     */
    calculateCenter() {
        let center;
        for (const marker of this.markers) {
            center = (!center) ? marker.latlng.clone : center.add(marker.latlng);
        }
        return center.divide(this.markers.length);
    }

    /**
     * adds a marker to the cluster
     * @param {Marker} marker - specified marker to be added to the cluster
     * @return {Cluster} instance of Cluster for chaining
     */
    addMarker(marker) {
        this.markers.push(marker);
        this.latlng = this.calculateCenter();
        return this;
    }

    /**
     * remove this cluster
     * @return {Cluster} instance of Cluster for chaining
     */
    remove() {
        for (const marker of this.markers) {
            marker.visible = true;
        }
        this.unbindEvents();
        return this;
    }

}
