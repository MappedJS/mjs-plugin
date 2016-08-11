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
    Point
} from './Point.js';
import {
    Rectangle
} from './Rectangle.js';
import {
    Texture
} from './Texture.js';
import {
    Cluster
} from './Cluster.js';

/**
 * @author Michael Duve <mduve@designmail.net>
 * @file represents a class which helps clustering overlapping markers
 * @copyright Michael Duve 2016
 */
export class MarkerClusterer {

    /**
     * @constructor
     * @param {Array} markers = [] - all markers
     * @param {CanvasRenderingContext2D} context = null - canvas context
     * @param {Texture} clusterImage = null - texture to be drawn
     * @param {Number} id = 0 - id of parent instance
     * @return {MarkerClusterer} instance of MarkerClusterer for chaining
     */
    constructor({
        markers = [],
        clusterImage = null,
        context = null,
        id = 0
    }) {
        this.markers = markers;
        this.markers = markers.sort((marker1, marker2) => {
            return marker1.distance(marker2);
        });
        this.id = id;
        this.context = context;
        this.clusterImage = new Texture({
            path: clusterImage.path,
            size: clusterImage.size,
            offset: clusterImage.offset,
        });
        this.font = clusterImage.text;
        this.clusters = [];
        this.eventManager = new Publisher(this.id);
        this.bindEvents();
        return this;
    }

    /**
     * bind all events
     * @return {MarkerClusterer} instance of MarkerClusterer for chaining
     */
    bindEvents() {
        this.eventManager.subscribe(Events.MarkerClusterer.CLUSTERIZE, () => this.clusterize());
        this.eventManager.subscribe(Events.MarkerClusterer.UNCLUSTERIZE, () => this.deleteAllClusters());
    }

    /**
     * decompose all markers into Cluster
     * @return {MarkerClusterer} instance of MarkerClusterer for chaining
     */
    clusterize() {
        this.deleteAllClusters();

        markerLoop: for (const marker of this.markers) {

            const hits = [];

            clusterLoop: for (const cluster of this.clusters) {
                if (marker.boundingBox.intersects(cluster.boundingBox)) {
                    hits.push(cluster);
                }
            }

            if (hits.length > 0) {
                const nearestCluster = this.findNearestHit(marker, hits);
                nearestCluster.addMarker(marker);
                continue markerLoop;
            }

            const cluster = this.createCluster(marker);
            this.clusters.push(cluster);

        }

        for (let i = this.clusters.length - 1; i >= 0; i--) {
            const cluster = this.clusters[i];
            if (cluster.markers.length > 1) {
                cluster.init();
            } else {
                cluster.remove();
                this.clusters.splice(i, 1);
            }
        }

        return this;
    }

    /**
     * find nearest cluster if there are multiple hits
     * @param  {Marker} marker - specified marker
     * @param  {Array} hits - array of Clusters hit
     * @return {Cluster} closest cluster
     */
    findNearestHit(marker, hits) {
        let lastDistance,
            minimalHit;
        for (const hit of hits) {
            if (!lastDistance) {
                lastDistance = this.getDistance(marker.boundingBox, hit);
                minimalHit = hit;
            } else {
                const currentDistance = this.getDistance(marker.boundingBox, hit);
                if (currentDistance < lastDistance) {
                    lastDistance = currentDistance;
                    minimalHit = hit;
                }
            }
        }
        return minimalHit;
    }

    /**
     * gets distance between marker and cluster
     * @param  {Marker} marker - specified marker
     * @param  {Cluster} cluster - specified cluster
     * @return {Number} distance between them
     */
    getDistance(marker, cluster) {
        return marker.center.distance(cluster.boundingBox.center);
    }

    /**
     * creates a new cluster for marker
     * @param  {Marker} marker - specified marker
     * @return {Cluster} created cluster
     */
    createCluster(marker) {
        const newCluster = new Cluster({
            context: this.context,
            texture: this.clusterImage,
            font: this.font,
            id: this.id
        });
        newCluster.addMarker(marker);
        return newCluster;
    }

    drawClusters() {
        Helper.forEach(this.clusters, (cluster) => cluster.draw());
    }

    /**
     * delete all clusters
     * @return {MarkerClusterer} instance of MarkerClusterer for chaining
     */
    deleteAllClusters() {
        Helper.forEach(this.clusters, (cluster) => cluster.remove());
        this.clusters = [];
        return this;
    }

}
