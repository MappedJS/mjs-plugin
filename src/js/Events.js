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
     * @property {String} OPEN - when a tooltip should be openend
     * @property {String} CLOSE - when a tooltip should be closed
     */
    ToolTip: {
        OPEN: "tooltip-open",
        CLOSE: "tooltip-close"
    },
    /**
     * Eventnames for Publisher class
     * @type {Object}
     * @memberof Events
     * @property {String} PUBLISH - notifies all subscribers
     * @property {String} SUBSCRIBE - subscribes to a topic
     * @property {String} UNSUBSCRIBE - unsubscribes from a topic
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
     * @property {String} NEXT_LEVEL - next level of view
     * @property {String} PREVIOUS_LEVEL - previous level of view
     * @property {String} RESIZE - resize of view needed
     * @property {String} ZOOM_TO_BOUNDS - zoom to bounds
     * @property {String} DRAW - draw is needed
     */
    TileMap: {
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
     * @property {String} RESIZE - resize of window happened needed
     * @property {String} CLICK - click occured
     * @property {String} TOUCHSTART - Touch started
     * @property {String} TOUCHEND - Touch ended
     * @property {String} MOUSEDOWN - Mouse started
     * @property {String} MOUSEUP - Mouse ended
     * @property {String} KEYDOWN - key pressed
     * @property {String} KEYUP - key released
     * @property {String} ENTER - entering of mouse
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
     * @property {String} THUMB_LOADED - thumbnail was loaded
     */
    View: {
        THUMB_LOADED: "thumb-loaded"
    },
    /**
     * Eventnames for MarkerClusterer class
     * @type {Object}
     * @memberof Events
     * @property {String} CLUSTERIZE - create cluster
     * @property {String} UNCLUSTERIZE - destroy cluster
     */
    MarkerClusterer: {
        CLUSTERIZE: "clusterize",
        UNCLUSTERIZE: "unclusterize"

    },
    /**
     * Eventnames for MapInformation class
     * @type {Object}
     * @memberof Events
     * @property {String} UPDATE - updates informations
     */
    MapInformation: {
        UPDATE: "information-update"
    },
    /**
     * Eventnames for MappedJS class
     * @type {Object}
     * @memberof Events
     * @property {String} ACTIVE - DomElement is marked active
     * @property {String} ZOOM_IN - zoom in button
     * @property {String} ZOOM_OUT - zoom out button
     * @property {String} HOME - home button
     */
    General: {
        ACTIVE: "active",
        ZOOM_IN: "zoom-button-plus",
        ZOOM_OUT: "zoom-button-minus",
        HOME: "home-button"
    }
};
