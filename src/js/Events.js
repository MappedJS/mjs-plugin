/**
 * @author Michael Duve <mduve@designmail.net>
 * @file Helper for naming events
 * @copyright Michael Duve 2016
 * @namespace Events
 */
export const Events = {
    /**
     * Eventnames for ToolTip class
     * @type {Object}
     * @memberof Events
     * @property {Object} OPEN - when a tooltip should be openend
     * @property {Object} CLOSE - when a tooltip should be closed
     */
    ToolTip: {
        OPEN: "tooltip-open",
        CLOSE: "tooltip-close"
    },
    /**
     * Eventnames for Marker class
     * @type {Object}
     * @memberof Events
     * @property {Object} DEACTIVATE - when a Marker should be in deactived state
     */
    Marker: {
        DEACTIVATE: "deactivate-marker"
    },
    /**
     * Eventnames for Publisher class
     * @type {Object}
     * @memberof Events
     * @property {Object} PUBLISH - notifies all subscribers
     * @property {Object} SUBSCRIBE - subscribes to a topic
     * @property {Object} UNSUBSCRIBE - unsubscribes from a topic
     */
    Publisher: {
        PUBLISH: "publish",
        SUBSCRIBE: "subscribe",
        UNSUBSCRIBE: "unsubscribe"
    },
    /**
     * Eventnames for TileMap class
     * @type {Object}
     * @memberof Events
     * @property {Object} IMG_DATA_NAME - name of img data
     * @property {Object} MARKER_DATA_NAME - name of marker data
     * @property {Object} LABEL_DATA_NAME - name of label data
     * @property {Object} NEXT_LEVEL - next level of view
     * @property {Object} PREVIOUS_LEVEL - previous level of view
     * @property {Object} RESIZE - resize of view needed
     * @property {Object} ZOOM_TO_BOUNDS - zoom to bounds
     * @property {Object} DRAW - draw is needed
     */
    TileMap: {
        IMG_DATA_NAME: "img_data",
        MARKER_DATA_NAME: "marker",
        LABEL_DATA_NAME: "labels",
        NEXT_LEVEL: "next-level",
        PREVIOUS_LEVEL: "previous-level",
        RESIZE: "resize",
        ZOOM_TO_BOUNDS: "zoom-to-bounds",
        DRAW: "draw"
    },
    /**
     * Eventnames for Handling in all classes
     * @type {Object}
     * @memberof Events
     * @property {Object} RESIZE - resize of window happened needed
     * @property {Object} CLICK - click occured
     * @property {Object} TOUCHSTART - Touch started
     * @property {Object} TOUCHEND - Touch ended
     * @property {Object} MOUSEDOWN - Mouse started
     * @property {Object} MOUSEUP - Mouse ended
     * @property {Object} KEYDOWN - key pressed
     * @property {Object} KEYUP - key released
     * @property {Object} ENTER - entering of mouse
     */
    Handling: {
        RESIZE: "resize orientationchange",
        CLICK: "click",
        TOUCHSTART: "touchstart",
        MOUSEDOWN: "mousedown",
        TOUCHEND: "touchend",
        MOUSEUP: "mouseup",
        KEYDOWN: "keydown",
        KEYUP: "keyup",
        ENTER: "mouseenter pointerenter"
    },
    /**
     * Eventnames for View class
     * @type {Object}
     * @memberof Events
     * @property {Object} THUMB_LOADED - thumbnail was loaded
     */
    View: {
        THUMB_LOADED: "thumb-loaded"
    },
    /**
     * Eventnames for MarkerClusterer class
     * @type {Object}
     * @memberof Events
     * @property {Object} CLUSTERIZE - create cluster
     * @property {Object} UNCLUSTERIZE - destroy cluster
     */
    MarkerClusterer: {
        CLUSTERIZE: "clusterize",
        UNCLUSTERIZE: "unclusterize"

    },
    /**
     * Eventnames for MapInformation class
     * @type {Object}
     * @memberof Events
     * @property {Object} UPDATE - updates informations
     */
    MapInformation: {
        UPDATE: "information-update"
    },
    /**
     * Eventnames for MappedJS class
     * @type {Object}
     * @memberof Events
     * @property {Object} ACTIVE - DomElement is marked active
     * @property {Object} ZOOM_IN - zoom in button
     * @property {Object} ZOOM_OUT - zoom out button
     * @property {Object} HOME - home button
     */
    General: {
        ACTIVE: "active",
        ZOOM_IN: "zoom-button-plus",
        ZOOM_OUT: "zoom-button-minus",
        HOME: "home-button"
    }
};
