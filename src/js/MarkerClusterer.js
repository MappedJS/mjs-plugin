import {
    Events
} from './Events.js';
import {
    Publisher
} from './Publisher.js';
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
     * @param {HTMLElement} container = null - parent container
     * @param {Number} id = 0 - id of parent instance
     * @return {MarkerClusterer} instance of MarkerClusterer for chaining
     */
    constructor({
        markers = [],
        container = null,
        id = 0
    }) {
        this.markers = markers;
        this.id = id;
        this.container = container;
        this.clusters = [];
        this.eventManager = new Publisher(this.id);
        this.bindEvents();
        this.clusterize();
        return this;
    }

    /**
     * bind all events
     * @return {MarkerClusterer} instance of MarkerClusterer for chaining
     */
    bindEvents() {
        this.eventManager.subscribe(Events.MarkerClusterer.CLUSTERIZE, () => {
            this.clusterize();
        });
        this.eventManager.subscribe(Events.MarkerClusterer.UNCLUSTERIZE, () => {
            this.deleteAllClusters();
        });
    }

    /**
     * decompose all markers into Cluster
     * @return {MarkerClusterer} instance of MarkerClusterer for chaining
     */
    clusterize() {
        this.deleteAllClusters();
        for (const marker of this.markers) {
            const hits = [];
            for (const cluster of this.clusters) {
                if (marker.boundingBox.intersects(cluster.boundingBox)) {
                    hits.push(cluster);
                }
            }
            if (!hits.length) {
                const newCluster = this.createCluster(marker);
                this.clusters.push(newCluster);
            } else {
                const nearestCluster = this.findNearestHit(marker, hits);
                nearestCluster.addMarker(marker);
            }
        }
        for (const cluster of this.clusters) {
            cluster.init();
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
                lastDistance = this.getDistance(marker, hit);
                minimalHit = hit;
            } else {
                const currentDistance = this.getDistance(marker, hit);
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
        return marker.boundingBox.center.distance(cluster.boundingBox.center);
    }

    /**
     * creates a new cluster for marker
     * @param  {Marker} marker - specified marker
     * @return {Cluster} created cluster
     */
    createCluster(marker) {
        const newCluster = new Cluster({
            container: this.container,
            id: this.id
        });
        newCluster.addMarker(marker);
        return newCluster;
    }

    /**
     * delete all clusters
     * @return {MarkerClusterer} instance of MarkerClusterer for chaining
     */
    deleteAllClusters() {
        for (const cluster of this.clusters) {
            cluster.removeFromDOM();
        }
        this.clusters = [];
        Cluster.count = 0;
        return this;
    }

}
