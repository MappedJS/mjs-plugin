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
    Drawable
} from './Drawable.js';

/**
 * @author Michael Duve <mduve@designmail.net>
 * @file represents a cluster of markers
 * @copyright Michael Duve 2016
 */
export class Cluster extends Drawable {

    /**
     * @constructor
     * @param  {HTMLDivElement} container =  null - parent container of
     * @param  {Number} id = 0 - id of parent instance
     * @return {Cluster} instance of Cluster for chaining
     */
    constructor({
        container = null,
        id = 0
    }) {
        super(id);
        this.uniqueID = Cluster.count;
        Cluster.count++;
        this.markers = [];
        this.container = container;
        return this;
    }

    /**
     * initialize a cluster
     * @return {Cluster} instance of Cluster for chaining
     */
    init() {
        if (this.markers.length === 1) {
            Helper.show(this.markers[0].icon);
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
        let p;
        for (const marker of this.markers) {
            Helper.hide(marker.icon);
            const currentPos = new Point(parseFloat(marker.icon.style.left), parseFloat(marker.icon.style.top));
            p = (!p) ? currentPos : p.add(currentPos);
        }
        p.divide(this.markers.length);

        this.cluster = document.createElement("div");
        this.cluster.innerHTML = this.markers.length;
        this.cluster.classList.add("cluster");
        Helper.css(this.cluster, {
            "left": `${p.x}%`,
            "top": `${p.y}%`,
            "transform": "translateZ(0)"
        });
        this.cluster.setAttribute("data-id", `cluster-${this.uniqueID}`);
        this.container.appendChild(this.cluster);
        this.bindEvents();
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
     * execute bound action of cluster
     * @return {Cluster} instance of Cluster for chaining
     */
    action() {
        let center;
        for (const marker of this.markers) {
            center = (!center) ? marker.latlng : center.add(marker.latlng);
        }
        center.divide(this.markers.length);
        this.eventManager.publish(Events.TileMap.ZOOM_TO_BOUNDS, {
            boundingBox: this.boundingBox,
            center: center
        });
        return this;
    }

    /**
     * adds a marker to the cluster
     * @param {Marker} marker - specified marker to be added to the cluster
     * @return {Cluster} instance of Cluster for chaining
     */
    addMarker(marker) {
        this.markers.push(marker);
        this.boundingBox = (!this.boundingBox) ? marker.boundingBox : this.boundingBox.extend(marker.boundingBox);
        return this;
    }

    /**
     * remove this cluster
     * @return {Cluster} instance of Cluster for chaining
     */
    removeFromDOM() {
        if (this.markers.length > 1) {
            for (const marker of this.markers) {
                Helper.show(marker.icon);
            }
            this.cluster.parentNode.removeChild(this.cluster);
        }
        this.unbindEvents();
        return this;
    }

}

/**
 * counts all clusters
 * @type {Number}
 */
Cluster.count = 0;
