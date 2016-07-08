/*global PointerEvent,MSPointerEvent*/
import {
    Helper
} from './Helper.js';
import {
    Point
} from './Point.js';

/**
 * @author Michael Duve <mduve@designmail.net>
 * @file implements interaction like panning, zooming, flicking and more, cross-browser and cross-device
 * @copyright Michael Duve 2016
 */
export class Interact {

    /**
     * get time difference to last
     * @return {Number} difference
     */
    get timeToLastMove() {
        return this.data.timeEnd - this.data.timeLast;
    }

    /**
     * get time difference to start
     * @return {Number} difference
     */
    get time() {
        return this.data.timeEnd - this.data.timeStart;
    }

    /**
     * @constructor
     * @param {Object} settings = {} - all the settings
     * @param {String|HTMLElement} settings.container = ".interact-container" - Container, either string or dom-object
     * @param {Object} settings.timeTreshold = {} - settings for the timing tresholds
     * @param {Number} settings.timeTreshold.tap = 200 - timing treshold for tap
     * @param {Number} settings.timeTreshold.hold = 500 - timing treshold for hold
     * @param {Number} settings.timeTreshold.swipe = 300 - timing treshold for swipe
     * @param {Number} settings.timeTreshold.flick = 30 - timing treshold for flick
     * @param {Object} settings.distanceTreshold = {} - settings for the distance tresholds
     * @param {Number} settings.distanceTreshold.swipe = 200 - distance treshold for swipe
     * @param {Boolean|string} settings.overwriteViewportSettings = false - on true prevents pinching, can be a custom string too
     * @param {Boolean} settings.stopPropagation = true - on true stops the propagation of events
     * @param {Boolean} settings.preventDefault = true - on true prevents the default actions of events
     * @param {Boolean} settings.autoFireHold = false - if set to false hold-event is not fired
     * @param {Number} settings.pinchBalanceTime = 50 - prevents from firing too much pinching events
     * @param {Object} settings.callbacks = {} - settings for the callback-functions
     * @param {Function} settings.callbacks.tap = null - callback-function for tap
     * @param {Function} settings.callbacks.tapHold = null - callback-function for tapHold
     * @param {Function} settings.callbacks.doubletap = null - callback-function for doubletap
     * @param {Function} settings.callbacks.hold = null - callback-function for hold
     * @param {Function} settings.callbacks.pan = null - callback-function for pan
     * @param {Function} settings.callbacks.swipe = null - callback-function for swipe
     * @param {Function} settings.callbacks.flick = null - callback-function for flick
     * @param {Function} settings.callbacks.zoom = null - callback-function for zoom
     * @param {Function} settings.callbacks.wheel = null - callback-function for wheel
     * @param {Function} settings.callbacks.pinch = null - callback-function for pinch
     * @param {Object} settings.events = {} - settings all eventnames
     * @param {Object} settings.events.start = {} - settings all start eventnames
     * @param {Object} settings.events.start.touch = ("MSPointerDown pointerdown" || "touchstart") - settings start touch eventnames
     * @param {Object} settings.events.start.mouse = ("MSPointerDown pointerdown" || "mousedown") - settings start mouse eventnames
     * @param {Object} settings.events.move = {} - settings all move eventnames
     * @param {Object} settings.events.move.touch = ("MSPointerMove pointermove" || "touchmove") - settings move touch eventnames
     * @param {Object} settings.events.move.mouse = ("MSPointerMove pointermove" || "mousemove") - settings move mouse eventnames
     * @param {Object} settings.events.end = {} - settings all end eventnames
     * @param {Object} settings.events.end.touch = ("MSPointerUp pointerup" || "touchend") - settings end touch eventnames
     * @param {Object} settings.events.end.mouse = ("MSPointerUp pointerup" || "mouseup") - settings end mouse eventnames
     * @param {Object} settings.events.leave = {} - settings all leave eventnames
     * @param {Object} settings.events.leave.touch = ("MSPointerLeave pointerleave" || "touchleave") - settings leave touch eventnames
     * @param {Object} settings.events.leave.mouse = ("MSPointerLeave pointerleave" || "mouseleave") - settings leave mouse eventnames
     * @param {String} settings.events.scroll = ("wheel" || "mousewhell" || "DOMMouseScroll") - settings all scroll eventnames
     * @return {Interact} new instance
     */
    constructor(settings = {}) {
        this.settings = Object.assign(this.getDefaultSettings(), settings);
        this.data = this.getDefaultData();
        this.pointerArray = {};
        if (this.settings.overwriteViewportSettings) {
            this.handleViewport(this.settings.overwriteViewportSettings);
        }
        this.init(this.settings.container);
    }

    /**
     * get the default settings
     * @return {Object} settings
     */
    getDefaultSettings() {
        return {
            container: ".interact-container",
            timeTreshold: {
                tap: 200,
                hold: 500,
                swipe: 300,
                flick: 20
            },
            distanceTreshold: {
                swipe: 200
            },
            speedThreshold: 0.01,
            overwriteViewportSettings: false,
            stopPropagation: true,
            preventDefault: true,
            autoFireHold: false,
            pinchBalanceTime: 50,
            callbacks: this.getDefaultCallbacks(),
            events: this.getDefaultEventNames()
        };
    }

    /**
     * get default callbacks
     * @return {Object} callbacks
     */
    getDefaultCallbacks() {
        return {
            tap: null,
            tapHold: null,
            doubletap: null,
            hold: null,
            hover: null,
            pan: null,
            swipe: null,
            flick: null,
            zoom: null,
            wheel: null,
            pinch: null
        };
    }

    /**
     * get default eventnames
     * @return {Object} eventnames
     */
    getDefaultEventNames() {
        const isIE = Helper.isIE();
        return {
            start: {
                touch: (isIE) ? "MSPointerDown pointerdown" : "touchstart",
                mouse: (isIE) ? "MSPointerDown pointerdown" : "mousedown"
            },
            move: {
                touch: (isIE) ? "MSPointerMove pointermove" : "touchmove",
                mouse: (isIE) ? "MSPointerMove pointermove" : "mousemove"
            },
            end: {
                touch: (isIE) ? "MSPointerUp pointerup" : "touchend",
                mouse: (isIE) ? "MSPointerUp pointerup" : "mouseup"
            },
            leave: {
                touch: (isIE) ? "MSPointerLeave pointerleave" : "touchleave",
                mouse: (isIE) ? "MSPointerLeave pointerleave" : "mouseleave"
            },
            scroll: Helper.scrollEvent()
        };
    }

    /**
     * get default data
     * @return {Object} data
     */
    getDefaultData() {
        return {
            down: false,
            moved: false,
            pinched: false,
            multitouch: false,
            distance: null,
            distanceLast: null,
            actionLast: null,
            direction: new Point(),
            velocity: new Point(),
            directions: [],
            zoom: 0,
            difference: null,
            target: null,
            positionLast: null,
            positionStart: null,
            positionMove: null,
            positionEnd: null,
            timeStart: null,
            timeLast: null,
            timeEnd: null,
            timeoutHold: null,
            timeoutDefault: null
        };
    }

    /**
     * handles the overwrite of viewport meta
     * @param  {Boolean|String} viewport - specified viewport option
     * @return {Interact} Returns this instance
     */
    handleViewport(viewport) {
        if (typeof viewport !== "string") {
            viewport = "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no";
        }
        const metaViewInHead = Helper.find("meta[name=viewport]");
        const viewportMeta = (metaViewInHead) ? metaViewInHead : Helper.find("head").appendChild(document.createElement("head").setAttribute("name", "viewport"));
        viewportMeta.setAttribute("content", viewport);
        return this;
    }

    /**
     * initializes class settings and bindings
     * @param  {HTMLElement|String} container - Container, either string or DOM object
     * @return {Interact} Returns this instance
     */
    init(container) {
        this.container = (typeof container === "string") ? Helper.find(container) : container;
        const css = {
            "-ms-touch-action": "none",
            "touch-action": "none",
            "-ms-content-zooming": "none"
        };
        Helper.css(this.container, css);
        for (let i = 0; i < this.container.childNodes; i++) {
            Helper.css(this.container.childNodes[i], css);
        }
        this.bindEvents();
        return this;
    }

    /**
     * binds all needed events
     * @return {Interact} Returns this instance
     */
    bindEvents() {
        if (Helper.isIE()) {
            this.bindIEEvents();
        } else {
            if (Helper.isTouch()) {
                this.bindTouchEvents();
            }
            if (Helper.isMouse()) {
                this.bindMouseEvents();
            }
        }
        return this;
    }

    /**
     * binds all needed events for IE
     * @return {Interact} Returns this instance
     */
    bindIEEvents() {
        Helper.addListener(this.container, this.settings.events.scroll, this.scrollHandler.bind(this));
        this.bindTouchEvents();
        Helper.addListener(this.container, "contextmenu", (e) => e.preventDefault(), false);
        return this;
    }

    /**
     * binds all needed events for touch devices
     * @return {Interact} Returns this instance
     */
    bindTouchEvents() {
        Helper.addListener(this.container, this.settings.events.start.touch, this.startHandler.bind(this));
        Helper.addListener(this.container, this.settings.events.move.touch, this.moveHandler.bind(this));
        Helper.addListener(this.container, this.settings.events.end.touch, this.endHandler.bind(this));
        Helper.addListener(this.container, this.settings.events.leave.touch, this.endHandler.bind(this));
        return this;
    }

    /**
     * binds all needed events for mouse devices
     * @return {Interact} Returns this instance
     */
    bindMouseEvents() {
        Helper.addListener(this.container, this.settings.events.scroll, this.scrollHandler.bind(this));
        Helper.addListener(this.container, this.settings.events.start.mouse, this.startHandler.bind(this));
        Helper.addListener(this.container, this.settings.events.move.mouse, this.moveHandler.bind(this));
        Helper.addListener(this.container, this.settings.events.end.mouse, this.endHandler.bind(this));
        Helper.addListener(this.container, this.settings.events.leave.mouse, this.endHandler.bind(this));
        return this;
    }

    /**
     * pre handle all events
     * @param  {Event} event - event
     * @return {Object} normalized Event
     */
    preHandle(event) {
        if (this.settings.stopPropagation) {
            event.stopPropagation();
        }
        if (this.settings.preventDefault) {
            event.preventDefault();
        }
        return this.getEvent(event);
    }

    /**
     * handles cross-browser and -device scroll
     * @param  {Event} event - event
     * @return {Boolean} always returns false
     */
    scrollHandler(event) {
        event = event || window.event;
        this.data.target = event.target;
        const e = this.preHandle(event) || event;

        this.data.delta = this.normalizeWheelDelta(event);
        this.data.positionStart = this.getRelativePosition(e);
        this.data.directions = this.getScrollDirection(e);
        this.data.zoom = (this.data.directions.indexOf("up") > -1) ? 1 : (this.data.directions.indexOf("down") > -1) ? -1 : 0;

        if (this.settings.callbacks.wheel) {
            this.eventCallback(this.settings.callbacks.wheel, this.data);
        }
        if (this.settings.callbacks.zoom && (this.data.directions.indexOf("up") > -1 || this.data.directions.indexOf("down") > -1)) {
            this.eventCallback(this.settings.callbacks.zoom, this.data);
        }
        return false;
    }

    /**
     *
     * Solution from http://jsfiddle.net/uNeBr/
     * @param  {Event} e - event
     * @return {Number} normalized wheel delta
     */
    normalizeWheelDelta(e) {
        const o = e.originalEvent || e,
            w = o.wheelDelta || (o.deltaY * -1) * 10,
            n = 225,
            n1 = n - 1;

        let d = o.detail,
            f;

        // Normalize delta
        d = d ? w && (f = w / d) ? d / f : -d / 1.35 : w / 120;
        // Quadratic scale if |d| > 1
        d = d < 1 ? d < -1 ? (-Math.pow(d, 2) - n1) / n : d : (Math.pow(d, 2) + n1) / n;
        // Delta *should* not be greater than 2...
        return Helper.clamp(d / 2, -1, 1);
    }

    /**
     * check if event is a PointerEvent (IE)
     * @param  {Event} e - event
     * @return {Boolean} Whether event is PointerEvent
     */
    isPointerEvent(e) {
        return Helper.isIE() && (e instanceof MSPointerEvent || e instanceof PointerEvent);
    }

    /**
     * calculation to be made at start-handler
     * @param  {Event} e - event
     * @return {Object} calculated data
     */
    calculateStart(e) {
        const data = {
            multitouch: false,
            distance: 0,
            down: true,
            positionStart: new Point()
        };
        // mouse is used
        if (e instanceof MouseEvent && !this.isPointerEvent(e)) {
            return Object.assign({}, data, this.handleSingletouchStart(e));
        } // if is pointerEvent
        else if (this.isPointerEvent(e)) {
            return this.handlePointerEventStart(data, e);
        } // touch is used
        else { // singletouch startet
            return this.handleTouchEventStart(data, e);
        }
    }

    /**
     * handle PointerEvent calculations
     * @param  {Object} data - current data
     * @param  {Event} e - event
     * @return {Object} manipulated enriched data
     */
    handlePointerEventStart(data, e) {
        this.pointerArray[e.pointerId] = e;
        const getData = (Object.keys(this.pointerArray).length <= 1) ? this.handleSingletouchStart(e) : this.handleMultitouchStart(this.getPointerArray());
        return Object.assign({}, data, getData);
    }

    /**
     * handle TouchEvent calculations for start
     * @param  {Object} data - current data
     * @param  {Event} e - event
     * @return {Object} manipulated enriched data
     */
    handleTouchEventStart(data, e) {
        return this.handleTouchEvent(data, e, this.handleSingletouchStart.bind(this), this.handleMultitouchStart.bind(this));
    }

    /**
     * get array of pointers (IE)
     * @return {Object} array of pointerIDs
     */
    getPointerArray() {
        const pointerPos = [];
        for (const pointer in this.pointerArray) {
            if (this.pointerArray[pointer]) {
                pointerPos.push(this.pointerArray[pointer]);
            }
        }
        return pointerPos;
    }

    /**
     * handles multitouch for start
     * @param  {Object} positionsArray - array of positions
     * @return {Object} manipulated enriched data
     */
    handleMultitouchStart(positionsArray) {
        const pos1 = this.getRelativePosition(positionsArray[0]),
            pos2 = this.getRelativePosition(positionsArray[1]);
        return {
            multitouch: true,
            distance: pos1.distance(pos2),
            positionStart: pos1.clone.add(pos2).divide(2, 2)
        };
    }

    /**
     * handles singletouch for start
     * @param  {Point} position - position of touch
     * @return {Object} manipulated enriched data
     */
    handleSingletouchStart(position) {
        return {
            positionStart: this.getRelativePosition(position)
        };
    }

    /**
     * handle action at start event handler
     * @param  {String} action - last action made
     * @return {Interact} instance of Interact for chaining
     */
    takeActionStart(action) {
        switch (action) {
            case null:
                this.data.actionLast = "tap";
                if (this.settings.autoFireHold) {
                    this.setTimeoutForEvent(this.settings.callbacks.hold, this.settings.autoFireHold, this.data, true);
                }
                break;
            case "tap":
                this.data.actionLast = "doubletap";
                if (this.settings.autoFireHold) {
                    this.setTimeoutForEvent(this.settings.callbacks.tapHold, this.settings.autoFireHold, this.data, true);
                }
                break;
            default:
                break;
        }
        return this;
    }

    /**
     * handles cross-browser and -device start-event
     * @param  {Event} event - event
     * @return {Boolean} always returns false
     */
    startHandler(event) {
        if (event.button && event.button !== 0) {
            return false;
        }
        this.data.target = event.target;
        const e = this.preHandle(event);
        this.data.timeStart = event.timeStamp;
        this.clearTimeouts(this.data.timeoutDefault);
        this.data = Object.assign({}, this.data, this.calculateStart(e));
        this.takeActionStart(this.data.actionLast);
        return false;
    }

    /**
     * clear timeout helper
     * @param  {Object} timeout - timeout object to be cleared
     * @return {Interact} instance of Interact for chaining
     */
    clearTimeouts(timeout) {
        if (timeout) {
            timeout = clearTimeout(timeout);
        }
        return this;
    }

    /**
     * calculation to be made at move-handler
     * @param  {Event} e - event
     * @return {Object} calculated data
     */
    calculateMove(e) {
        const data = {
            moved: true,
            actionLast: "moved",
            positionMove: new Point()
        };

        if (e instanceof MouseEvent && !this.isPointerEvent(e)) {
            return Object.assign({}, data, this.handleSingletouchMove(e));
        } // if is pointerEvent
        else if (this.isPointerEvent(e)) {
            return this.handlePointerEventMove(data, e);
        } // touch is used
        else {
            return this.handleTouchEventMove(data, e);
        }
    }

    /**
     * handle PointerEvent at moving (IE)
     * @param  {Object} data - specified input data
     * @param  {Event} e - event
     * @return {Object} manipulated enriched data
     */
    handlePointerEventMove(data, e) {
        this.pointerArray[e.pointerId] = e;
        if (Object.keys(this.pointerArray).length <= 1) {
            return Object.assign({}, data, this.handleSingletouchMove(e));
        } else {
            const pointerPos = this.getPointerArray();
            return Object.assign({}, data, this.handleMultitouchMove(pointerPos));
        }
    }

    /**
     * handle TouchEvent calculations for move
     * @param  {Object} data - current data
     * @param  {Event} e - event
     * @return {Object} manipulated enriched data
     */
    handleTouchEventMove(data, e) {
        return this.handleTouchEvent(data, e, this.handleSingletouchMove.bind(this), this.handleMultitouchMove.bind(this));
    }

    /**
     * handles touch events
     * @param  {Object} data - current data
     * @param  {Event} e - event
     * @param  {Function} fnSingle - callback for singletouch
     * @param  {Function} fnMulti - callback for multitouch
     * @return {Object} manipulated enriched data
     */
    handleTouchEvent(data, e, fnSingle, fnMulti) {
        const getData = (e.length === 1) ? fnSingle(e[0]) : fnMulti(e);
        return Object.assign({}, data, getData);
    }

    /**
     * handles multitouch for move
     * @param  {Object} positionsArray - array of positions
     * @return {Object} manipulated enriched data
     */
    handleMultitouchMove(positionsArray) {
        const pointerPos1 = this.getRelativePosition(positionsArray[0]);
        const pointerPos2 = this.getRelativePosition(positionsArray[1]);
        const pos = pointerPos2.clone.add(pointerPos1).divide(2);
        return {
            positionMove: pos,
            distance: pointerPos1.distance(pointerPos2),
            multitouch: true
        };
    }

    /**
     * handles singletouch for move
     * @param  {Point} position - position
     * @return {Object} manipulated enriched data
     */
    handleSingletouchMove(position) {
        const pos = this.getRelativePosition(position);
        return {
            positionMove: pos,
            distance: this.data.positionLast.distance(pos),
            multitouch: false
        };
    }

    /**
     * handles cross-browser and -device move-event
     * @param  {Event} event - event
     * @return {Boolean} always returns false
     */
    moveHandler(event) {

        const e = this.preHandle(event);

        // if touchstart event was not fired
        if (!this.data.down || this.data.pinched) {
            if (e instanceof MouseEvent) {
                this.eventCallback(this.settings.callbacks.hover, this.getRelativePosition(e));
            }
            return false;
        }

        this.data.positionLast = (this.data.positionMove) ? this.data.positionMove : this.data.positionStart;
        this.data.timeLast = event.timeStamp;

        // if positions have not changed
        if (this.positionDidNotChange(e)) {
            return false;
        }

        this.clearTimeouts(this.data.timeoutDefault);
        this.clearTimeouts(this.data.timeoutHold);
        this.data = Object.assign({}, this.data, this.calculateMove(e));

        if (this.data.multitouch) {
            this.handlePinchAndZoom();
        } else {
            this.eventCallback(this.settings.callbacks.pan, this.data);
        }
        return false;
    }

    /**
     * handles pinch and zoom
     * @return {Interact} instance of Interact for chaining
     */
    handlePinchAndZoom() {
        if (!this.data.distanceLast) {
            this.data.distanceLast = this.data.distance;
        }

        this.data.difference = this.data.distance - this.data.distanceLast;
        if (Math.abs(this.data.difference) >= 0.005) {
            if (this.settings.callbacks.pinch) {
                this.eventCallback(this.settings.callbacks.pinch, this.data);
            }
            if (this.settings.callbacks.zoom) {
                this.eventCallback(this.settings.callbacks.zoom, this.data);
            }
            this.data.distanceLast = this.data.distance;
        }
        return this;
    }

    /**
     * check if position has been changed
     * @param  {Event} e - event
     * @return {Boolean} Whether or not position has changed
     */
    positionDidNotChange(e) {
        return Helper.isIE() && (this.getRelativePosition(e).equals(this.data.positionLast) ||
        this.getRelativePosition(e).equals(this.data.positionStart)) ||
        (!Helper.isIE() && Helper.isTouch() && this.getRelativePosition(e[0]).equals(this.data.positionLast));
    }

    /**
     * calculation to be made at end-handler
     * @param  {Event} e - event
     * @return {Object} calculated data
     */
    calculateEnd(e) {
        const data = {
            positionEnd: new Point()
        };

        if (e instanceof MouseEvent && !this.isPointerEvent(e)) {
            return Object.assign({}, data, this.handleSingletouchEnd(e));
        } // if is pointerEvent
        else if (this.isPointerEvent(e)) {
            const end = this.handleSingletouchEnd(e);
            delete this.pointerArray[e.pointerId];
            return Object.assign({}, data, end);
        } // touch is used
        else {
            // singletouch ended
            if (e.length <= 1) {
                return Object.assign({}, data, this.handleSingletouchEnd(e[0]));
            }
        }
    }

    /**
     * handles singletouch for end
     * @param  {Point} position - position
     * @return {Object} manipulated enriched data
     */
    handleSingletouchEnd(position) {
        return {
            positionEnd: this.getRelativePosition(position)
        };
    }

    /**
     * handle action at end event handler
     * @param  {String} action - last action made
     * @return {Interact} instance of Interact for chaining
     */
    takeActionEnd(action) {
        switch (action) {
            case "tap":
                if (this.time < this.settings.timeTreshold.hold) {
                    this.setTimeoutForEvent(this.settings.callbacks.tap, this.settings.timeTreshold.tap, this.data);
                } else {
                    this.eventCallback(this.settings.callbacks.hold, this.data);
                }
                break;
            case "doubletap":
                if (this.time < this.settings.timeTreshold.hold) {
                    this.setTimeoutForEvent(this.settings.callbacks.doubletap, this.settings.timeTreshold.tap, this.data);
                } else {
                    this.eventCallback(this.settings.callbacks.tapHold, this.data);
                }
                break;
            default:
                this.data.actionLast = null;
        }
    }

    /**
     * handles cross-browser and -device end-event
     * @param  {Event} event - event
     * @return {Boolean} always returns false
     */
    endHandler(event) {

        const e = this.preHandle(event);

        this.data.timeEnd = event.timeStamp;

        this.clearTimeouts(this.data.timeoutHold);

        this.data = Object.assign({}, this.data, this.calculateEnd(e));

        // called only when not moved
        if (!this.data.moved && this.data.down && !this.data.multitouch) {
            this.takeActionEnd(this.data.actionLast);
        }
        // if was moved
        else if (this.data.moved && this.data.down && !this.data.multitouch) {
            if (this.settings.callbacks.swipe || this.settings.callbacks.flick) {
                this.handleSwipeAndFlick();
            }
            this.data.actionLast = null;
        }
        this.pinchBalance();
        this.handleMultitouchEnd(e);

        this.data.positionLast = undefined;
        this.data.positionMove = undefined;

        return false;
    }

    /**
     * handles flick and swipe events
     * @return {Interact} instance of Interact for chaining
     */
    handleSwipeAndFlick() {
        if (this.settings.callbacks.swipe || this.settings.callbacks.flick) {
            this.data.direction = this.data.positionEnd.clone.substract(this.data.positionLast);
            this.data.velocity = this.data.direction.clone.multiply(this.timeToLastMove);
            this.data.distance = this.data.positionLast.distance(this.data.positionEnd);
        }

        if (this.settings.callbacks.swipe && this.time <= this.settings.timeTreshold.swipe) {
            const originalStart = this.getAbsolutePosition(this.data.positionStart);
            const originalEnd = this.getAbsolutePosition(this.data.positionEnd);
            if (originalEnd.distance(originalStart) >= this.settings.distanceTreshold.swipe) {
                this.data.directions = this.getSwipeDirections(this.data.direction);
                this.eventCallback(this.settings.callbacks.swipe, this.data);
            }
        }
        if (this.settings.callbacks.flick && (this.timeToLastMove <= this.settings.timeTreshold.flick)) {
            this.eventCallback(this.settings.callbacks.flick, this.data);
        }

        return this;
    }

    /**
     * handles multitouch for end
     * @param  {Event} e - event
     * @return {Interact} instance of Interact for chaining
     */
    handleMultitouchEnd(e) {
        this.data.multitouch = false;
        this.data.down = false;
        this.data.moved = false;

        // if is pointerEvent
        if (this.isPointerEvent(e)) {
            if (Object.keys(this.pointerArray).length > 1) {
                this.data.multitouch = true;
            } else if (Object.keys(this.pointerArray).length > 0) {
                this.data.positionStart = this.getRelativePosition(e[0]);
                this.data.down = true;
            }
        } // touch is used
        else {
            if (e.length > 1) {
                this.data.multitouch = true;
            } else if (e.length > 0) {
                this.data.positionStart = this.getRelativePosition(e[0]);
                this.data.down = true;
            }
            this.data.positionMove = undefined;
        }
        return this;
    }

    /**
     * balances pinching after release of finger
     * @return {Interact} instance of Interact for chaining
     */
    pinchBalance() {
        if (this.data.multitouch) {
            this.data.pinched = true;
            setTimeout(() => {
                this.data.pinched = false;
                this.data.distanceLast = null;
            }, this.settings.pinchBalanceTime);
        }
        return this;
    }

    /**
     * Returns an array of strings, representing the directions
     * @param  {Point} direction - the specified direction in pixel
     * @return {String[]} returns an array representing the directions as strings
     */
    getSwipeDirections(direction) {
        return [(direction.x < 0) ? "left" : (direction.x > 0) ? "right" : "none", (direction.y < 0) ? "up" : (direction.y > 0) ? "down" : "none"];
    }

    /**
     * Helper for setting a timeout for events
     * @param {Function} callback - function to be called
     * @param {Number} timeout - time in milliseconds
     * @param {Object[]} args - array of arguments
     * @param {Boolean} holdTimeout - if true, a different variable will be used
     * @return {Interact} Returns this instance
     */
    setTimeoutForEvent(callback, timeout, args, holdTimeout) {
        if (holdTimeout) {
            this.data.timeoutHold = setTimeout(this.eventCallback.bind(this, callback, args), timeout);
        } else {
            this.data.timeoutDefault = setTimeout(this.eventCallback.bind(this, callback, args), timeout);
        }
        return this;
    }

    /**
     * Eventhandler for handling the callbacks
     * @param  {Function} callback - function to be called
     * @param  {object[]} args - arguments for the function
     * @return {Interact} Returns this instance
     */
    eventCallback(callback, args) {
        if (callback && typeof callback === "function") {
            callback(args);
        }
        this.data.actionLast = null;
        return this;
    }

    /**
     * get the relative position of clientX and clientY
     * @param  {Event} e - event
     * @return {Point} calculated relative position
     */
    getRelativePosition(e) {
        const clientBounds = this.container.getBoundingClientRect(),
            pos = new Point(e.clientX, e.clientY),
            bounds = new Point(clientBounds.left, clientBounds.top);
        return pos.substract(bounds).divide(clientBounds.width, clientBounds.height);
    }

    /**
     * get the absolute position of clientX and clientY
     * @param  {Point} point - specified point
     * @return {Point} calculated absolute position
     */
    getAbsolutePosition(point) {
        const clientBounds = this.container.getBoundingClientRect();
        return point.multiply(clientBounds.width, clientBounds.height);
    }

    /**
     * get scroll direction from event
     * @param  {Event} event - event
     * @return {String[]} an array with scroll directions
     */
    getScrollDirection(event) {
        const axis = parseInt(event.axis, 10);
        const direction = [];
        if (this.isDownDirection(axis, event)) {
            direction.push("down"); // down
        } else if (this.isUpDirection(axis, event)) {
            direction.push("up"); // up
        }
        if (this.isRightDirection(axis, event)) {
            direction.push("right"); // right
        } else if (this.isLeftDirection(axis, event)) {
            direction.push("left"); // left
        }
        return direction;
    }

    /**
     * checks if direction is down
     * @param  {Number} axis - what axis is used
     * @param  {Event} event - event
     * @return {Boolean} Whether or not direction is down
     */
    isDownDirection(axis, event) {
        return event.deltaY > 0 || (!event.deltaY && event.wheelDeltaY < 0) || ((axis === 2) && (event.detail > 0)) || (Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail))) < 0);
    }

    /**
     * checks if direction is up
     * @param  {Number} axis - what axis is used
     * @param  {Event} event - event
     * @return {Boolean} Whether or not direction is up
     */
    isUpDirection(axis, event) {
        return event.deltaY < 0 || (!event.deltaY && event.wheelDeltaY > 0) || (axis === 2 && event.detail < 0) || (Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail))) > 0);
    }

    /**
     * checks if direction is right
     * @param  {Number} axis - what axis is used
     * @param  {Event} event - event
     * @return {Boolean} Whether or not direction is right
     */
    isRightDirection(axis, event) {
        return event.deltaX > 0 || (!event.deltaX && event.wheelDeltaX > 0) || (axis === 1 && event.detail > 0);
    }

    /**
     * checks if direction is left
     * @param  {Number} axis - what axis is used
     * @param  {Event} event - event
     * @return {Boolean} Whether or not direction is left
     */
    isLeftDirection(axis, event) {
        return event.deltaX < 0 || (!event.deltaX && event.wheelDeltaX < 0) || (axis === 1 && event.detail < 0);
    }

    /**
     * Get event helper, applies event-fix too
     * @param  {Event} e - event
     * @return {Event} cross-device event
     */
    getEvent(e) {
        if (e.touches && e.touches.length === 0) {
            return e.changedTouches || e;
        }
        return e.touches || e.changedTouches || e;
    }
}
