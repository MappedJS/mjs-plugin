import {
    Helper
} from './Helper.js';
import {
    Events
} from './Events.js';
import {
    Point
} from './Point.js';
import {
    Publisher
} from './Publisher.js';
import {
    StateHandler
} from './StateHandler.js';
import {
    Rectangle
} from './Rectangle.js';
import {
    View
} from './View.js';
import {
    Marker
} from './Marker.js';
import {
    SideBar
} from './SideBar.js';
import {
    MarkerClusterer
} from './MarkerClusterer.js';
import {
    MapInformation
} from './MapInformation.js';

/**
 * @author Michael Duve <mduve@designmail.net>
 * @file Represents a map with its different levels of zooms and markers
 * @copyright Michael Duve 2016
 */
export class TileMap {

    /**
     * Returns width of container
     * @return {Number} - width of container
     */
    get width() {
        return this.container.getBoundingClientRect().width;
    }

    /**
     * Returns height of container
     * @return {Number} - height of container
     */
    get height() {
        return this.container.getBoundingClientRect().height;
    }

    /**
     * gets current viewport
     * @return {Rectangle} viewport
     */
    get viewport() {
        return new Rectangle(0, 0, this.width, this.height);
    }

    /**
     * current view
     * @return {View} view
     */
    get view() {
        return this.currentLevel.instance;
    }

    /**
     * current level
     * @return {Object} information of level
     */
    get currentLevel() {
        return this.levelHandler.current;
    }

    /**
     * returns all clusters
     * @return {Array} array of clusters
     */
    get clusters() {
        return (!this.markerClusterer) ? [] : this.markerClusterer.clusters;
    }

    /**
     * @constructor
     * @param  {HTMLElement} container = null - jQuery-object holding the container
     * @param  {String} path="./" - path to data
     * @param  {Object} tilesData = {} - json object representing data of TileMap
     * @param  {Object} settings = {} - json object representing settings of TileMap
     * @param  {Number} id = 0 - id of parent instance
     * @return {TileMap} instance of TileMap for chaining
     */
    constructor({
        container = null,
        path = "./",
        tilesData = {},
        markerData = {},
        settings = {},
        id
    }) {
        if (!container) {
            throw Error("You must define a container to initialize a TileMap");
        }

        this.initializeInstanceVariables(id, container, settings, markerData, path);
        this.initializeCanvas();

        this.eventManager.publish(Events.MapInformation.UPDATE, {
            viewport: this.viewport,
            bounds: this.settings.bounds
        });

        this.initializeLevels(tilesData);
        this.bindEvents();
        this.resizeCanvas();

        this.reset();

        return this;
    }

    /**
     * initializes all levels
     * @param  {Object} data = {} - json object representing data of TileMap
     * @return {TileMap} instance of TileMap for chaining
     */
    initializeLevels(data) {
        Helper.forEach(data, (element, i) => {
            const currentLevel = {
                value: element,
                level: i,
                instance: this.createViewFromData(element),
                bounds: this.settings.bounds,
                center: this.settings.center,
                zoom: this.settings.zoom
            };
            this.levels.push(currentLevel);
        });
        this.levelHandler = new StateHandler(this.levels);
        return this;
    }

    /**
     * initialize all variables
     * @param  {Number} id = 0 - id of parent instance
     * @param  {HTMLElement} container = null - jQuery-object holding the container
     * @param  {Object} markerData = {} - json object representing data of TileMap
     * @param  {Object} settings = {} - json object representing settings of TileMap
     * @param  {String} path="./" - path to data
     * @return {TileMap} instance of TileMap for chaining
     */
    initializeInstanceVariables(id, container, settings, markerData, path) {
        this.container = container;
        this.id = id;
        this.settings = settings;
        this.markers = [];
        this.thumbsLoaded = 0;
        this.path = path;
        this.info = new MapInformation(this.id, path);
        this.eventManager = new Publisher(this.id);
        this.markerData = markerData;
        this.levels = [];
        this.clusterHandlingTimeout = null;
        this.templates = (this.settings.sidebar) ? this.settings.sidebar.templates : {};
        this.initial = {
            bounds: this.settings.bounds,
            center: this.settings.center,
            level: this.settings.level,
            zoom: this.settings.zoom
        };
        return this;
    }

    /**
     * resets view to initial state
     * @return {TileMap} instance of TileMap for chaining
     */
    reset() {
        const xScale = this.settings.aoiBounds.width / this.settings.bounds.width;
        const yScale = this.settings.aoiBounds.height / this.settings.bounds.height;

        let scaleTemp = 1;
        this.levelHandler.changeTo(0);

        for (const i in this.levels) {
            if (this.levels.hasOwnProperty(i)) {
                const level = this.levels[i];
                const currentView = level.instance.originalMapView.clone;
                currentView.scale(xScale, yScale).scale(level.instance.maxZoom).scaleX(this.info.getDistortionFactorForLatitude(this.settings.aoiBounds.center));
                if (this.viewport.containsRect(currentView)) {
                    this.levelHandler.next();
                } else {
                    currentView.scale(1 / level.instance.maxZoom);
                    scaleTemp = Math.min(this.viewport.width / currentView.width, this.viewport.height / currentView.height);
                    break;
                }
            }
        }

        this.view.init();

        this.eventManager.publish(Events.MapInformation.UPDATE, {
            view: this.view.view,
            viewport: this.viewport,
            bounds: this.currentLevel.bounds,
            zoom: this.currentLevel.zoom,
            center: this.settings.aoiBounds.center
        });

        this.view.reset(this.settings.aoiBounds.center, scaleTemp);

        this.view.zoom(0, this.view.viewport.center);
        this.eventManager.publish(Events.MarkerClusterer.CLUSTERIZE);

        this.redraw();

        return this;
    }

    /**
     * initialize all markers
     * @return {TileMap} instance of TileMap for chaining
     */
    initializeMarkers() {
        Helper.forEach(this.markerData, (markerSettings) => {
            const currentMarker = new Marker({
                context: this.canvasContext,
                id: this.id,
                settings: markerSettings
            });
            this.markers.push(currentMarker);
        });
        this.markers = this.markers.sort((a, b) => ((b.latlng.lat - a.latlng.lat !== 0) ? b.latlng.lat - a.latlng.lat : b.latlng.lng - a.latlng.lng));
        if (this.markers.length > 0) {
            this.markerClusterer = new MarkerClusterer({
                markers: this.markers.filter((marker) => {
                    return marker.isClusterable();
                }),
                id: this.id,
                clusterImage: this.settings.clusterImage,
                context: this.canvasContext,
                container: this.markerContainer || document.body
            });
            this.eventManager.publish(Events.MarkerClusterer.CLUSTERIZE);
        }
        return this;
    }

    /**
     * creates a View from specified parameters
     * @param  {Object} data - specified data
     * @return {View} created View
     */
    createViewFromData(data) {
        return new View({
            id: this.id,
            view: new Rectangle(0, 0, data.dimensions.width, data.dimensions.height),
            data: data,
            maxZoom: (data.zoom) ? data.zoom.max : 1,
            minZoom: (data.zoom) ? data.zoom.min : 1,
            context: this.canvasContext,
            aoiBounds: this.settings.aoiBounds || this.currentLevel.bounds
        });
    }

    /**
     * creates an instance of SideBar
     * @return {TileMap} instance of TileMap for chaining
     */
    createSidebarContainer(path) {
        this.sidebar = new SideBar({
            container: this.container.parentNode,
            path: this.path,
            id: this.id,
            templates: this.templates
        });
        return this;
    }

    /**
     * bind all events
     * @return {TileMap} instance of TileMap for chaining
     */
    bindEvents() {
        this.eventManager.subscribe(Events.MarkerClusterer.CLUSTERIZE, () => {
            this.eventManager.publish(Events.TileMap.DRAW);
        });
        this.eventManager.subscribe(Events.MarkerClusterer.UNCLUSTERIZE, () => {
            this.eventManager.publish(Events.TileMap.DRAW);
        });
        this.eventManager.subscribe(Events.TileMap.RESIZE, () => {
            this.resize();
        });
        this.eventManager.subscribe(Events.TileMap.DRAW, () => {
            this.redraw();
        });
        this.eventManager.subscribe(Events.View.THUMB_LOADED, () => {
            this.thumbLoaded();
        });
        this.eventManager.subscribe(Events.TileMap.ZOOM_TO_BOUNDS, (data) => {
            this.zoomToBounds(data.center, data.boundingBox);
        });
        this.eventManager.subscribe(Events.TileMap.NEXT_LEVEL, () => {
            this.changelevel(1);
        });
        this.eventManager.subscribe(Events.TileMap.PREVIOUS_LEVEL, () => {
            this.changelevel(-1);
        });
        return this;
    }

    /**
     * zoom to boundaries on specified center
     * @param  {LatLng} center - zoom to position
     * @param  {Rectangle} boundingBox - specified bounds to toom to
     * @return {TileMap} instance of TileMap for chaining
     */
    zoomToBounds(center, boundingBox) {
        let zoomIncrease = Math.min(this.view.viewport.width / boundingBox.width, this.view.viewport.height / boundingBox.height);
        while (zoomIncrease > 0) {
            const possibleZoomOnLevel = this.view.maxZoom - this.view.zoomFactor;
            zoomIncrease -= possibleZoomOnLevel;
            if (this.levelHandler.hasNext()) {
                this.changelevel(1);
            } else {
                this.zoom(possibleZoomOnLevel, this.view.viewport.center);
                zoomIncrease = 0;
            }
        }
        this.view.setLatLngToPosition(center, this.view.viewport.center);
        return this;
    }

    /**
     * called when thumbnail image was loaded
     * @return {TileMap} instance of TileMap for chaining
     */
    thumbLoaded() {
        this.redraw();
        this.thumbsLoaded++;
        if (this.thumbsLoaded === this.levels.length) {
            this.initializeMarkers();
            window.requestAnimFrame(this.mainLoop.bind(this));
            this.createSidebarContainer();
        }
        return this;
    }

    /**
     * set new view to old views position and zoomlevel
     * @param {LatLng} center - old center
     * @param {Number} zoom - old zoom,
     * @return {TileMap} instance of TileMap for chaining
     */
    setViewToOldView(center, zoom) {
        this.eventManager.publish(Events.MapInformation.UPDATE, {
            zoomFactor: zoom
        });
        this.view.zoom(0, this.view.viewport.center);
        this.view.view.setCenter(center);
        this.redraw();
        return this;
    }

    /**
     * change level up or down
     * @param  {Number} direction - either 1 or -1
     * @return {TileMap} instance of TileMap for chaining
     */
    changelevel(direction) {
        const lastLevel = this.currentLevel.level,
            lastCenter = this.view.view.center;
        let extrema;
        if (direction < 0) {
            this.levelHandler.previous();
            extrema = this.view.maxZoom;
        } else if (direction > 0) {
            this.levelHandler.next();
            extrema = this.view.minZoom;
        }
        if (!this.view.isInitialized) {
            this.view.init();
        }
        if (lastLevel !== this.currentLevel.level) {
            this.setViewToOldView(lastCenter, extrema);
        }
        this.eventManager.publish(Events.MapInformation.UPDATE, {
            bounds: this.currentLevel.bounds,
            zoom: this.currentLevel.zoom,
            center: this.currentLevel.center,
            level: this.currentLevel.level
        });
        return this;
    }

    /**
     * initializes the canvas, adds to DOM
     * @return {TileMap} instance of TileMap for chaining
     */
    initializeCanvas() {
        this.canvas = document.createElement("canvas");
        this.canvas.classList.add("mjs-canvas");
        this.container.appendChild(this.canvas);
        this.canvasContext = this.canvas.getContext("2d");
        this.lastFrameMillisecs = Date.now();
        this.deltaTiming = 1.0;
        this.bestDeltaTiming = 1000.0 / 60.0;
        this.velocity = new Point();
        this.drawIsNeeded = false;
        return this;
    }

    /**
     * complete clear and draw of all visible tiles
     * @return {TileMap} instance of TileMap for chaining
     */
    redraw() {
        this.drawIsNeeded = true;
        return this;
    }

    /**
     * Handles resizing of TileMap
     * @return {TileMap} instance of TileMap for chaining
     */
    resize() {
        return this.resizeCanvas().resizeView().redraw();
    }

    /**
     * move view by delta
     * @param  {Point} delta - delta of x/y
     * @return {TileMap} instance of TileMap for chaining
     */
    moveView(delta) {
        this.view.moveView(delta);
        this.redraw();
        return this;
    }

    /**
     * handles zoom by factor and position
     * @param  {Number} factor - difference in zoom scale
     * @param  {Point} position - position to zoom to
     * @return {TileMap} instance of TileMap for chaining
     */
    zoom(factor, position) {
        if (factor !== 0) {
            const levelChanged = this.view.zoom(factor, position);
            if (levelChanged === 1 && this.levelHandler.hasNext() || levelChanged === -1 && this.levelHandler.hasPrevious()) {
                this.zoom(factor, position);
            }
            this.clusterHandler();
            this.redraw();
        }
        return this;
    }

    /**
     * handles creation of clusters
     * @return {TileMap} instance of TileMap for chaining
     */
    clusterHandler() {
        if (this.clusterHandlingTimeout) {
            this.clusterHandlingTimeout = clearTimeout(this.clusterHandlingTimeout);
        }
        this.clusterHandlingTimeout = setTimeout(() => {
            if (this.levelHandler.hasNext()) {
                this.eventManager.publish(Events.MarkerClusterer.CLUSTERIZE);
            } else {
                this.eventManager.publish(Events.MarkerClusterer.UNCLUSTERIZE);
            }
        }, 150);
        return this;
    }

    /**
     * resizes the canvas sizes
     * @return {TileMap} instance of TileMap for chaining
     */
    resizeCanvas() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        return this;
    }

    /**
     * Handles resizing of view
     * @return {TileMap} instance of TileMap for chaining
     */
    resizeView() {
        this.eventManager.publish(Events.MapInformation.UPDATE, {
            viewport: this.viewport
        });
        return this;
    }

    /**
     * main draw call
     */
    mainLoop() {
        this.calculateDeltaTiming();
        this.calculateVelocity();

        this.checkAoIBoundaries();
        this.view.checkBoundaries();

        if (this.drawIsNeeded) {
            this.canvasContext.clearRect(0, 0, this.width, this.height);
            this.view.draw();
            this.drawMarkers();
            this.drawClusters();
            this.drawIsNeeded = false;
        }

        window.requestAnimFrame(() => this.mainLoop());
    }

    calculateDeltaTiming() {
        const currentMillisecs = Date.now();
        const deltaMillisecs = currentMillisecs - this.lastFrameMillisecs;
        this.lastFrameMillisecs = currentMillisecs;
        this.deltaTiming = Helper.clamp(deltaMillisecs / this.bestDeltaTiming, 1, 4);
    }

    calculateVelocity() {
        this.moveByVelocity = this.velocity.multiply(0.96).clone.multiply(this.deltaTiming);
        if (this.velocity.length >= 0.2) {
            this.moveView(this.moveByVelocity);
        }
    }

    /**
     * checks area of interest boundaries and resets positions if outside
     * @return {TileMap} instance of TileMap for chaining
     */
    checkAoIBoundaries() {
        if (!this.settings.aoiBounds.equals(this.settings.bounds)) {
            const normalizedMapPosition = this.view.view.topLeft.multiply(this.view.distortionFactor, 1);
            const posCenter = this.viewport.center;

            const aoiBoxNW = this.info.convertLatLngToPoint(this.settings.aoiBounds.nw);
            const aoiBoxSE = this.info.convertLatLngToPoint(this.settings.aoiBounds.se);

            aoiBoxNW.multiply(this.view.distortionFactor, 1).add(new Point(this.view.offsetToCenter, 0));
            aoiBoxSE.multiply(this.view.distortionFactor, 1).add(new Point(this.view.offsetToCenter, 0));

            aoiBoxNW.add(normalizedMapPosition);
            aoiBoxSE.add(normalizedMapPosition);

            const aoiBox = new Rectangle(aoiBoxNW.x, aoiBoxNW.y, aoiBoxSE.x - aoiBoxNW.x, aoiBoxSE.y - aoiBoxNW.y);

            if (!aoiBox.containsPoint(posCenter)) {
                const diffTopLeft = aoiBox.clone.topLeft.substract(posCenter);
                const diffBottomRight = aoiBox.clone.bottomRight.substract(posCenter);
                if (diffTopLeft.x > 0) {
                    this.moveView(new Point(-1 * diffTopLeft.x, 0));
                }
                if (diffTopLeft.y > 0) {
                    this.moveView(new Point(0, -1 * diffTopLeft.y));
                }
                if (diffBottomRight.x < 0) {
                    this.moveView(new Point(-1 * diffBottomRight.x, 0));
                }
                if (diffBottomRight.y < 0) {
                    this.moveView(new Point(0, -1 * diffBottomRight.y));
                }
            }

        }
        return this;
    }

    /**
     * draw all clusters
     * @return {TileMap} instance of TileMap for chaining
     */
    drawClusters() {
        if (this.markerClusterer) {
            this.markerClusterer.drawClusters();
        }
        return this;
    }

    /**
     * draw all markers
     * @return {TileMap} instance of TileMap for chaining
     */
    drawMarkers() {
        Helper.forEach(this.markers, (marker) => marker.draw());
        return this;
    }
}

/**
 * request animation frame browser polyfill
 * @return {Function} supported requestAnimationFrame-function
 */
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
