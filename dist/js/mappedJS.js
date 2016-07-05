(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Handlebars"));
	else if(typeof define === 'function' && define.amd)
		define(["Handlebars"], factory);
	else if(typeof exports === 'object')
		exports["de"] = factory(require("Handlebars"));
	else
		root["de"] = factory(root["Handlebars"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_107__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(8)
	  , core      = __webpack_require__(10)
	  , hide      = __webpack_require__(18)
	  , redefine  = __webpack_require__(29)
	  , ctx       = __webpack_require__(22)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target && !own)redefine(target, key, out);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 1 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(45)('wks')
	  , uid    = __webpack_require__(32)
	  , Symbol = __webpack_require__(8).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * @author Michael Duve <mduve@designmail.net>
	 * @file Helper for general purposes
	 * @copyright Michael Duve 2016
	 * @module Helper
	 */
	var Helper = exports.Helper = {
	    /**
	     * request json-data from given file and calls callback on success
	     * @function
	     * @memberof module:Helper
	     * @param  {String} filename - path to file
	     * @param  {Helper~requestJSONCallback} callback - function called when data is loaded successfully
	     * @return {Helper} Helper object for chaining
	     */

	    requestJSON: function requestJSON(filename, callback) {
	        Helper.getFile(filename, function (jsonFileData) {
	            if (callback) callback(JSON.parse(jsonFileData));
	        });
	        return this;
	    },

	    /**
	     * find an element in DOM
	     * @function
	     * @memberof module:Helper
	     * @param  {String} elementString = "*" - element to lookup
	     * @param  {HTMLElement} element = null - element to start looking in for
	     * @return {HTMLElement} reference to HTMLElement or null if not found
	     */
	    find: function find() {
	        var elementString = arguments.length <= 0 || arguments[0] === undefined ? "*" : arguments[0];
	        var element = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	        return (element || document).querySelector(elementString);
	    },

	    /**
	     * find multiple elements in DOM
	     * @function
	     * @memberof module:Helper
	     * @param  {String} elementString = "*" - element to lookup
	     * @param  {HTMLElement} element = null - element to start looking in for
	     * @return {NodeList} list of found elements
	     */
	    findAll: function findAll() {
	        var elementString = arguments.length <= 0 || arguments[0] === undefined ? "*" : arguments[0];
	        var element = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	        return (element || document).querySelectorAll(elementString);
	    },

	    /**
	     * show a HTMLElement
	     * @function
	     * @memberof module:Helper
	     * @param  {HTMLElement} elem - specified element
	     * @return {Helper} reference of Helper for chaining
	     */
	    show: function show(elem) {
	        elem.style.display = "";
	        return this;
	    },

	    /**
	     * hide a HTMLElement
	     * @function
	     * @memberof module:Helper
	     * @param  {HTMLElement} elem - specified element
	     * @return {Helper} reference of Helper for chaining
	     */
	    hide: function hide(elem) {
	        elem.style.display = "none";
	    },

	    /**
	     * applies css to given HTMLElement
	     * @function
	     * @memberof module:Helper
	     * @param  {HTMLElement} elem - specified element to apply css to
	     * @param  {Object} css - object containing css property and value
	     * @return {Helper} reference of Helper for chaining
	     */
	    css: function css(elem, _css) {
	        for (var property in _css) {
	            elem.style[property] = _css[property];
	        }
	    },

	    /**
	     * adds a listener to given HTMLElement
	     * @function
	     * @memberof module:Helper
	     * @param  {HTMLElement} elem - specified element to bind listener to
	     * @param  {String} bindTo - names of events to bind to, seperated by spaces
	     * @param  {Function} fn~addListenerCallback - callback-function for binding
	     * @return {Helper} reference of Helper for chaining
	     */
	    addListener: function addListener(elem, bindTo, fn) {
	        bindTo.split(" ").forEach(function (e) {
	            return elem.addEventListener(e, fn, false);
	        });
	        return this;
	    },

	    /**
	     * clamps a value to specified min and max
	     * @function
	     * @memberof module:Helper
	     * @param  {Number} v = 0 - specified value to clamp
	     * @param  {Number} min = v - minimum value to clamp to
	     * @param  {Number} max = v - maximum value to clamp to
	     * @return {Number} clamped value
	     */
	    clamp: function clamp() {
	        var v = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	        var min = arguments.length <= 1 || arguments[1] === undefined ? v : arguments[1];
	        var max = arguments.length <= 2 || arguments[2] === undefined ? v : arguments[2];

	        return Math.min(Math.max(v, min), max);
	    },

	    /**
	     * loads an image and calls callback on success
	     * @function
	     * @memberof module:Helper
	     * @param {Helper~loadImageCallback} cb - callback-function on success
	     * @return {Helper} reference of Helper for chaining
	     */
	    loadImage: function loadImage(path, cb) {
	        var img = new Image();
	        img.onload = function () {
	            if (cb && typeof cb === "function") cb(img);
	        };
	        img.src = path;
	        return this;
	    },

	    /**
	     * request data from given file and calls callback on success
	     * @function
	     * @memberof module:Helper
	     * @param  {string} url - path to file
	     * @param  {Helper~getFileCallback} callback - function called when data is loaded successfully
	     * @return {Helper} reference of Helper for chaining
	     */
	    getFile: function getFile(url, callback) {
	        var xhr = new XMLHttpRequest();
	        xhr.onreadystatechange = function () {
	            if (xhr.readyState === XMLHttpRequest.DONE) {
	                if (xhr.status === 200 && callback) callback(xhr.responseText);else throw new Error("The JSON submitted seems not valid", xhr);
	            }
	        };
	        xhr.open("GET", url, true);
	        xhr.send();
	        return this;
	    },

	    /**
	     * loads a js script
	     * @function
	     * @memberof module:Helper
	     * @param  {String} url - url to be loaded
	     * @param  {Helper~loadScriptCallback} callback - function called when script is loaded successfully
	     * @return {Helper} reference of Helper for chaining
	     */
	    loadScript: function loadScript(url, callback) {
	        var head = Helper.find('head');
	        var script = document.createElement('script');
	        script.type = 'text/javascript';
	        script.src = url;
	        script.onreadystatechange = callback;
	        script.onload = callback;
	        head.appendChild(script);
	        return this;
	    },

	    /**
	     * for each helper
	     * @function
	     * @memberof module:Helper
	     * @param  {Object[]} a - array to iterate over each value
	     * @param  {Helper~forEachCallback} cb - callback for each object
	     * @return {Helper} reference of Helper for chaining
	     */
	    forEach: function forEach(a, cb) {
	        for (var i in a) {
	            if (a[i] !== undefined && typeof cb === "function") cb(a[i], i);
	        }
	        return this;
	    },

	    /**
	     * convert degree to radian
	     * @function
	     * @memberof module:Helper
	     * @param {Number} degrees - specified degrees
	     * @return {Number} converted radian
	     */
	    toRadians: function toRadians(degrees) {
	        return degrees * Math.PI / 180;
	    },
	    /**
	     * checks if mouse is possible
	     * @function
	     * @memberof module:Helper
	     * @return {Boolean} if true, mouse is possible
	     */
	    isMouse: function isMouse() {
	        return 'onmousedown' in window;
	    },
	    /**
	     * checks if touch is possible
	     * @function
	     * @memberof module:Helper
	     * @return {Boolean} if true, touch is possible
	     */
	    isTouch: function isTouch() {
	        return 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
	    },
	    /**
	     * checks if IE is used
	     * @function
	     * @memberof module:Helper
	     * @return {Boolean} if true, IE is used
	     */
	    isIE: function isIE() {
	        return navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
	    },
	    /**
	     * gets cross-browser scroll-event
	     * @function
	     * @memberof module:Helper
	     * @return {String} name of scroll event
	     */
	    scrollEvent: function scrollEvent() {
	        return "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll";
	    }
		};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @author Michael Duve <mduve@designmail.net>
	 * @file Helper for naming events
	 * @copyright Michael Duve 2016
	 * @namespace Events
	 */
	var Events = exports.Events = {
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

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @author Michael Duve <mduve@designmail.net>
	 * @file represents a point with x and y value
	 * @copyright Michael Duve 2016
	 */

	var Point = exports.Point = function () {
	  _createClass(Point, [{
	    key: "length",


	    /**
	     * length of a point
	     * @return {Number} length of a point
	     */
	    get: function get() {
	      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	    }

	    /**
	     * gets a clone of this point
	     * @return {Point} new instance equals this point
	     */

	  }, {
	    key: "clone",
	    get: function get() {
	      return Point.createFromPoint(this);
	    }

	    /**
	     * gets absolute Point
	     * @return {Point} returns Point with absolute values
	     */

	  }, {
	    key: "abs",
	    get: function get() {
	      return new Point(Math.abs(this.x), Math.abs(this.y));
	    }

	    /**
	     * @constructor
	     * @param  {Number} x = 0 - representation of x coordinate
	     * @param  {Number} y = 0 - representation of y coordinate
	     * @return {Point} instance of Point for chaining
	     */

	  }]);

	  function Point() {
	    var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	    var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	    _classCallCheck(this, Point);

	    this.x = x;
	    this.y = y;
	    return this;
	  }

	  /**
	   * substracts 2 points
	   * @param  {Point} point = new Point() - the point to substract from this
	   * @return {Point} instance of Point for chaining
	   */


	  Point.prototype.substract = function substract() {
	    var point = arguments.length <= 0 || arguments[0] === undefined ? new Point() : arguments[0];

	    this.x -= point.x;
	    this.y -= point.y;
	    return this;
	  };

	  /**
	   * adds 2 points
	   * @param  {Point} point = new Point() - the point to add to this
	   * @return {Point} instance of Point for chaining
	   */


	  Point.prototype.add = function add() {
	    var point = arguments.length <= 0 || arguments[0] === undefined ? new Point() : arguments[0];

	    this.x += point.x;
	    this.y += point.y;
	    return this;
	  };

	  /**
	   * multiplicates a point with a given x and y
	   * @param  {Number} x = 1 - factor to multiplicate x with
	   * @param  {Number} y = x - factor to multiplicate y with
	   * @return {Point} instance of Point for chaining
	   */


	  Point.prototype.multiply = function multiply() {
	    var x = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	    var y = arguments.length <= 1 || arguments[1] === undefined ? x : arguments[1];

	    this.x *= x;
	    this.y *= y;
	    return this;
	  };

	  /**
	   * divide a point with a given x and y
	   * @param  {Number} x = 1 - factor to divide x with
	   * @param  {Number} y = x - factor to divide y with
	   * @return {Point} instance of Point for chaining
	   */


	  Point.prototype.divide = function divide() {
	    var x = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	    var y = arguments.length <= 1 || arguments[1] === undefined ? x : arguments[1];

	    this.x /= x;
	    this.y /= y;
	    return this;
	  };

	  /**
	   * check if points are equal
	   * @param  {Point} point - the point to check against this
	   * @return {Boolean} is true, if x and y are the same
	   */


	  Point.prototype.equals = function equals(point) {
	    return this.x === point.x && this.y === point.y;
	  };

	  /**
	   * Returns the distance from this Point to a specified Point
	   * @param  {Point} point = new Point() - the specified point to be measured against this Point
	   * @return {Point} the distance between this Point and specified point
	   */


	  Point.prototype.distance = function distance() {
	    var point = arguments.length <= 0 || arguments[0] === undefined ? new Point() : arguments[0];

	    return this.clone.substract(point).length;
	  };

	  /**
	   * translates a point by x and y
	   * @param  {Number} x = 0 - value to move x
	   * @param  {Number} y = x - value to move y
	   * @return {Point} instance of Point for chaining
	   */


	  Point.prototype.translate = function translate() {
	    var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	    var y = arguments.length <= 1 || arguments[1] === undefined ? x : arguments[1];

	    this.x += x;
	    this.y += y;
	    return this;
	  };

	  /**
	   * positions a point by x and y
	   * @param  {Number} x = 0 - value to position x
	   * @param  {Number} y = x - value to position y
	   * @return {Point} instance of Point for chaining
	   */


	  Point.prototype.position = function position() {
	    var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	    var y = arguments.length <= 1 || arguments[1] === undefined ? x : arguments[1];

	    this.x = x;
	    this.y = y;
	    return this;
	  };

	  /**
	   * translates a Point to an array
	   * @return {Array} Returns Point as Array(x, y)
	   */


	  Point.prototype.toArray = function toArray() {
	    return [this.x, this.y];
	  };

	  return Point;
	}();

	/**
	 * Creates a Point from specified point
	 * @param  {Point} point - specified point
	 * @return {Point} the point specified
	 */


	Point.createFromPoint = function (point) {
	  return new Point(point.x, point.y);
		};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(0)
	  , core    = __webpack_require__(10)
	  , fails   = __webpack_require__(11);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(23);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(26)
	  , defined = __webpack_require__(23);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Publisher = undefined;

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _Events = __webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @author Michael Duve <mduve@designmail.net>
	 * @file Publish/Subscribe pattern
	 * @copyright Michael Duve 2016
	 */

	var Publisher = exports.Publisher = function () {

	    /**
	     * @constructor
	     * @param {Number} id = 0 - id of parent instance
	     * @return {Publisher} singleton instance of Publisher for chaining
	     */

	    function Publisher() {
	        var id = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	        _classCallCheck(this, Publisher);

	        if (!Publisher.instances[id]) {
	            this.subscribers = {};
	            this.id = id;
	            Publisher.instances[id] = this;
	        }
	        return Publisher.instances[id];
	    }

	    /**
	     * subscribe to a topic
	     * @param  {String} type = "any" - a topic
	     * @param  {Function} fn = function(){} - a function to callback
	     * @return {Publisher} instance of Publisher for chaining
	     */


	    Publisher.prototype.subscribe = function subscribe() {
	        var type = arguments.length <= 0 || arguments[0] === undefined ? "any" : arguments[0];
	        var fn = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

	        if (this.subscribers[type] === undefined) this.subscribers[type] = [];
	        this.subscribers[type].push(fn);
	        return this;
	    };

	    /**
	     * unsubscribe from a topic
	     * @param  {String} type = "any" - a topic
	     * @param  {Function} fn = function(){} - a function to callback
	     * @return {Publisher} instance of Publisher for chaining
	     */


	    Publisher.prototype.unsubscribe = function unsubscribe() {
	        var type = arguments.length <= 0 || arguments[0] === undefined ? "any" : arguments[0];
	        var fn = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

	        return this.handle(_Events.Events.Publisher.UNSUBSCRIBE, type, fn);
	    };

	    /**
	     * publish to a topic
	     * @param  {String} type = "any" - a topic
	     * @param  {Function} arg = [] - list of parameters
	     * @return {Publisher} instance of Publisher for chaining
	     */


	    Publisher.prototype.publish = function publish() {
	        var type = arguments.length <= 0 || arguments[0] === undefined ? "any" : arguments[0];
	        var arg = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	        return this.handle(_Events.Events.Publisher.PUBLISH, type, arg);
	    };

	    /**
	     * handle subscribe to a topic
	     * @param  {String} action - eventname
	     * @param  {String} type = "any" - a topic
	     * @param  {Object} a function to callback or arguments
	     * @return {Publisher} instance of Publisher for chaining
	     */


	    Publisher.prototype.handle = function handle(action, type, data) {
	        var subs = this.subscribers[type] !== undefined ? this.subscribers[type] : [];
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = subs.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var _step$value = _slicedToArray(_step.value, 2);

	                var i = _step$value[0];
	                var fn = _step$value[1];

	                if (action === _Events.Events.Publisher.PUBLISH) {
	                    fn(data);
	                } else {
	                    if (fn === data) subs.splice(i, 1);
	                }
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }

	        return this;
	    };

	    /**
	     * destroys singleton instance
	     */


	    Publisher.prototype.destroy = function destroy() {
	        Publisher.instances[this.id] = null;
	    };

	    return Publisher;
	}();

	/**
	 * singleton instance wrapper
	 * @type {Object}
	 */


		Publisher.instances = {};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(31)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Drawable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Publisher = __webpack_require__(13);

	var _MapInformation = __webpack_require__(38);

	var _Rectangle2 = __webpack_require__(16);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @author Michael Duve <mduve@designmail.net>
	 * @file represents an item, that is displayed and needs information for its position
	 * @copyright Michael Duve 2016
	 */

	var Drawable = exports.Drawable = function (_Rectangle) {
	    _inherits(Drawable, _Rectangle);

	    _createClass(Drawable, [{
	        key: 'view',


	        /**
	         * stores mapdimension information
	         * @return {Rectangle} map
	         */
	        get: function get() {
	            return this.info.get().view;
	        }

	        /**
	         * stores level information
	         * @return {Number} level
	         */

	    }, {
	        key: 'level',
	        get: function get() {
	            return this.info.get().level;
	        }

	        /**
	         * stores viewport information
	         * @return {Rectangle} viewport
	         */

	    }, {
	        key: 'viewport',
	        get: function get() {
	            return this.info.get().viewport;
	        }

	        /**
	         * stores distortion information
	         * @return {Number} distortionFactor
	         */

	    }, {
	        key: 'distortionFactor',
	        get: function get() {
	            return this.info.get().distortionFactor;
	        }

	        /**
	         * stores x offset to center
	         * @return {Number} offsetToCenter
	         */

	    }, {
	        key: 'offsetToCenter',
	        get: function get() {
	            return this.info.get().offsetToCenter;
	        }

	        /**
	         * stores latlng position of map center
	         * @return {LatLng} center
	         */

	    }, {
	        key: 'centerPosition',
	        get: function get() {
	            return this.info.get().center;
	        }

	        /**
	         * stores current zoom factor
	         * @return {Number} zoomFactor
	         */

	    }, {
	        key: 'zoomFactor',
	        get: function get() {
	            return this.info.get().zoomFactor;
	        }

	        /**
	         * stores boundary information
	         * @return {Bounds} bounds
	         */

	    }, {
	        key: 'bounds',
	        get: function get() {
	            return this.info.get().bounds;
	        }

	        /**
	         * @constructor
	         * @param  {Number} id = 0 - id of parent instance
	         * @param  {Number} x  = 0 - position x of element
	         * @param  {Number} y  = 0 - position y of element
	         * @param  {Number} w  = 0 - width of element
	         * @param  {Number} h  = 0 - height of element
	         * @return {Drawable} instance of Drawable for chaining
	         */

	    }]);

	    function Drawable() {
	        var id = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	        var x = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	        var y = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	        var w = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

	        var _ret;

	        var h = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];

	        _classCallCheck(this, Drawable);

	        var _this = _possibleConstructorReturn(this, _Rectangle.call(this, x, y, w, h));

	        _this.id = id;
	        _this.info = new _MapInformation.MapInformation(_this.id);
	        _this.eventManager = new _Publisher.Publisher(_this.id);
	        return _ret = _this, _possibleConstructorReturn(_this, _ret);
	    }

	    /**
	     * execute on displaying instance
	     * @return {Drawable} instance of Drawable for chaining
	     */


	    Drawable.prototype.draw = function draw() {
	        return this;
	    };

	    return Drawable;
	}(_Rectangle2.Rectangle);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Rectangle = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Point2 = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @author Michael Duve <mduve@designmail.net>
	 * @file represents a rectangle with a point as position, width and height
	 * @extends Point
	 * @copyright Michael Duve 2016
	 */

	var Rectangle = exports.Rectangle = function (_Point) {
	  _inherits(Rectangle, _Point);

	  _createClass(Rectangle, [{
	    key: 'center',


	    /**
	     * get center-position of rectangle
	     * @return {Point} center point
	     */
	    get: function get() {
	      return new _Point2.Point(this.x + this.width / 2, this.y + this.height / 2);
	    }

	    /**
	     * get top-left-position of rectangle
	     * @return {Point} top-left point
	     */

	  }, {
	    key: 'topLeft',
	    get: function get() {
	      return new _Point2.Point(this.x, this.y);
	    }

	    /**
	     * get top-right-position of rectangle
	     * @return {Point} top-right point
	     */

	  }, {
	    key: 'topRight',
	    get: function get() {
	      return new _Point2.Point(this.x + this.width, this.y);
	    }

	    /**
	     * get bottom-left-position of rectangle
	     * @return {Point} bottom-left point
	     */

	  }, {
	    key: 'bottomLeft',
	    get: function get() {
	      return new _Point2.Point(this.x, this.y + this.height);
	    }

	    /**
	     * get bottom-right-position of rectangle
	     * @return {Point} bottom-right point
	     */

	  }, {
	    key: 'bottomRight',
	    get: function get() {
	      return new _Point2.Point(this.x + this.width, this.y + this.height);
	    }

	    /**
	     * Returns right position of Rectangle
	     * @return {Number} right position
	     */

	  }, {
	    key: 'right',
	    get: function get() {
	      return this.x + this.width;
	    }

	    /**
	     * Returns left position of Rectangle
	     * @return {Number} left position
	     */

	  }, {
	    key: 'left',
	    get: function get() {
	      return this.x;
	    }

	    /**
	     * Returns top position of Rectangle
	     * @return {Number} top position
	     */

	  }, {
	    key: 'top',
	    get: function get() {
	      return this.y;
	    }

	    /**
	     * Returns bottom position of Rectangle
	     * @return {Number} bottom position
	     */

	  }, {
	    key: 'bottom',
	    get: function get() {
	      return this.y + this.height;
	    }

	    /**
	     * clones a rectangle
	     * @return {Rectangle} duplicated rectangle
	     */

	  }, {
	    key: 'clone',
	    get: function get() {
	      return Rectangle.createFromRectangle(this);
	    }

	    /**
	     * @constructor
	     * @param  {Number} x = 0 - x-position of specified rectangle
	     * @param  {Number} y = 0 - y-position of specified rectangle
	     * @param  {Number} width = 0 - width of specified rectangle
	     * @param  {Number} height = 0 - height of specified rectangle
	     * @return {Rectangle} instance of Rectangle for chaining
	     */

	  }]);

	  function Rectangle() {
	    var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	    var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	    var width = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

	    var _ret;

	    var height = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

	    _classCallCheck(this, Rectangle);

	    var _this = _possibleConstructorReturn(this, _Point.call(this, x, y));

	    _this.width = width;
	    _this.height = height;
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }

	  /**
	   * Checks whether Rectangle intersects with specified Rectangle
	   * @param  {Rectangle} rect = new Rectangle() - the specified rectangle to check against
	   * @return {Boolean} true if containment is entirely
	   */


	  Rectangle.prototype.intersects = function intersects() {
	    var rect = arguments.length <= 0 || arguments[0] === undefined ? new Rectangle() : arguments[0];

	    return !(rect.left > this.right || rect.right < this.left || rect.top > this.bottom || rect.bottom < this.top);
	  };

	  /**
	   * Checks whether Rectangle entirely contains the Rectangle or Point
	   * @param  {Rectangle|Point} rectOrPoint - the specified point or rectangle to check against
	   * @return {Boolean} true if containment is entirely
	   */


	  Rectangle.prototype.contains = function contains(rectOrPoint) {
	    return rectOrPoint instanceof Rectangle ? this.containsRect(rectOrPoint) : rectOrPoint instanceof _Point2.Point ? this.containsPoint(rectOrPoint) : false;
	  };

	  /**
	   * extend a rectangle by specified rectangle dimensions
	   * @param  {Rectangle} rect - specified rectangle
	   * @return {Rectangle} instance of Rectangle for chaining
	   */


	  Rectangle.prototype.extend = function extend(rect) {
	    var left = Math.min(this.left, rect.left);
	    var right = Math.max(this.right, rect.right);
	    var top = Math.min(this.top, rect.top);
	    var bottom = Math.max(this.bottom, rect.bottom);
	    this.size(left, top, right - left, bottom - top);
	    return this;
	  };

	  /**
	   * Sets the center of this Rectangle to specified point
	   * @param  {Point} point = new Point() - specified point to set center of rectangle to
	   * @return {Rectangle} instance of Rectangle for chaining
	   */


	  Rectangle.prototype.setCenter = function setCenter() {
	    var point = arguments.length <= 0 || arguments[0] === undefined ? new _Point2.Point() : arguments[0];

	    var difference = point.substract(this.center);
	    this.translate(difference.x, difference.y);
	    return this;
	  };

	  /**
	   * Sets the x-center of this Rectangle to specified x
	   * @param  {Number} x = 0 - specified x coordinate to set x center of rectangle to
	   * @return {Rectangle} instance of Rectangle for chaining
	   */


	  Rectangle.prototype.setCenterX = function setCenterX() {
	    var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	    var difference = x - this.center.x;
	    this.translate(difference, 0);
	    return this;
	  };

	  /**
	   * Sets the y-center of this Rectangle to specified y
	   * @param  {Number} y = 0 - specified y coordinate to set y center of rectangle to
	   * @return {Rectangle} instance of Rectangle for chaining
	   */


	  Rectangle.prototype.setCenterY = function setCenterY() {
	    var y = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	    var difference = y - this.center.y;
	    this.translate(0, difference);
	    return this;
	  };

	  /**
	   * Checks whether Rectangle entirely contains the Point
	   * @param  {Point} point = new Point() - the specified point to check against
	   * @return {Boolean} true if containment is entirely
	   */


	  Rectangle.prototype.containsPoint = function containsPoint() {
	    var point = arguments.length <= 0 || arguments[0] === undefined ? new _Point2.Point() : arguments[0];

	    return point instanceof _Point2.Point ? point.x >= this.left && point.y >= this.top && point.x <= this.right && point.y <= this.bottom : false;
	  };

	  /**
	   * Checks whether Rectangle entirely contains the Rectangle
	   * @param  {Rectangle} rect = new Rectangle() - the specified rectangle to check against
	   * @return {Boolean} true if containment is entirely
	   */


	  Rectangle.prototype.containsRect = function containsRect() {
	    var rect = arguments.length <= 0 || arguments[0] === undefined ? new Rectangle() : arguments[0];

	    return rect instanceof Rectangle ? rect.left >= this.left && rect.top >= this.top && rect.right <= this.right && rect.bottom <= this.bottom : false;
	  };

	  /**
	   * distorts rectangle by factor
	   * @param  {Number} factor = 1 - the specified factor of distortion
	   * @return {Rectangle} a distorted Rectangle
	   */


	  Rectangle.prototype.getDistortedRect = function getDistortedRect() {
	    var factor = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

	    return new Rectangle(this.x, this.y, this.width, this.height).scaleX(factor);
	  };

	  /**
	   * redistorts rectangle by factor
	   * @param  {Number} factor = 1- the specified factor of distortion
	   * @return {Rectangle} an undistorted Rectangle
	   */


	  Rectangle.prototype.getNormalRect = function getNormalRect() {
	    var factor = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

	    return new Rectangle(this.x, this.y, this.width, this.height).scaleX(1 / factor);
	  };

	  /**
	   * scale x and width of rectangle
	   * @param  {Number} x = 1 - factor to be applied to scale
	   * @return {Rectangle} instance of Rectangle for chaining
	   */


	  Rectangle.prototype.scaleX = function scaleX() {
	    var x = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

	    this.x *= x;
	    this.width *= x;
	    return this;
	  };

	  /**
	   * scale y and height of rectangle
	   * @param  {Number} y = 1- factor to be applied to scale
	   * @return {Rectangle} instance of Rectangle for chaining
	   */


	  Rectangle.prototype.scaleY = function scaleY() {
	    var y = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

	    this.y *= y;
	    this.height *= y;
	    return this;
	  };

	  /**
	   * scale x and y for width and height of rectangle
	   * @param  {Number} x = 1 - factor to be applied to scale
	   * @param  {Number} y = x - factor to be applied to scale
	   * @return {Rectangle} instance of Rectangle for chaining
	   */


	  Rectangle.prototype.scale = function scale() {
	    var x = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	    var y = arguments.length <= 1 || arguments[1] === undefined ? x : arguments[1];

	    this.scaleX(x);
	    this.scaleY(y);
	    return this;
	  };

	  /**
	   * scale x and y for width and height of rectangle
	   * @param  {Number} x = 1 - factor to be applied to scale
	   * @param  {Number} y = x - factor to be applied to scale
	   * @return {Rectangle} instance of Rectangle for chaining
	   */


	  Rectangle.prototype.scaleCenter = function scaleCenter() {
	    var x = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	    var y = arguments.length <= 1 || arguments[1] === undefined ? x : arguments[1];

	    var oldCenter = this.clone.center;
	    this.scale(x, y);
	    this.setCenter(oldCenter);
	    return this;
	  };

	  /**
	   * moves a rectangle by specified coords
	   * @param  {Number} x = 0 - specified x to be added to x position
	   * @param  {Number} y = x - specified y to be added to y position
	   * @return {Rectangle} instance of Rectangle for chaining
	   */


	  Rectangle.prototype.translate = function translate() {
	    var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	    var y = arguments.length <= 1 || arguments[1] === undefined ? x : arguments[1];

	    _Point.prototype.translate.call(this, x, y);
	    return this;
	  };

	  /**
	   * transforms a rectangle by specified coords
	   * @param  {Number} x = 0 - specified x to be added to x position
	   * @param  {Number} y = x - specified y to be added to y position
	   * @param  {Number} width = 0 - specified width to be added to this width
	   * @param  {Number} height = 0 - specified height to be added to this height
	   * @return {Rectangle} instance of Rectangle for chaining
	   */


	  Rectangle.prototype.transform = function transform() {
	    var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	    var y = arguments.length <= 1 || arguments[1] === undefined ? x : arguments[1];
	    var width = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	    var height = arguments.length <= 3 || arguments[3] === undefined ? width : arguments[3];

	    this.translate(x, y);
	    this.width += width;
	    this.height += height;
	    return this;
	  };

	  /**
	   * changes the position a rectangle by specified coords
	   * @param  {Number} x = 0 - the new x position
	   * @param  {Number} y = 0 - he new y position
	   * @return {Rectangle} instance of Rectangle for chaining
	   */


	  Rectangle.prototype.position = function position() {
	    var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	    var y = arguments.length <= 1 || arguments[1] === undefined ? x : arguments[1];

	    _Point.prototype.position.call(this, x, y);
	    return this;
	  };

	  /**
	   * changes the size of a rectangle by specified params
	   * @param  {Number} x = 0- the new x position
	   * @param  {Number} y = x - the new y position
	   * @param  {Number} width = 0 - the new width
	   * @param  {Number} height = 0 - the new width
	   * @return {Rectangle} instance of Rectangle for chaining
	   */


	  Rectangle.prototype.size = function size() {
	    var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	    var y = arguments.length <= 1 || arguments[1] === undefined ? x : arguments[1];
	    var width = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	    var height = arguments.length <= 3 || arguments[3] === undefined ? width : arguments[3];

	    this.position(x, y);
	    this.width = width;
	    this.height = height;
	    return this;
	  };

	  /**
	   * changes the size of a rectangle by specified params
	   * @param  {Number} width = 0 - the new width
	   * @param  {Number} height = width - the new width
	   * @return {Rectangle} instance of Rectangle for chaining
	   */


	  Rectangle.prototype.setSize = function setSize() {
	    var width = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	    var height = arguments.length <= 1 || arguments[1] === undefined ? width : arguments[1];

	    this.width = width;
	    this.height = height;
	    return this;
	  };

	  /**
	   * check if rectangles are equal
	   * @param  {Rectangle} rectangle - the specified rectangle to check against this
	   * @return {Boolean} is true, if x, y, width and height are the same
	   */


	  Rectangle.prototype.equals = function equals(rectangle) {
	    return rectangle instanceof Rectangle ? this.x === rectangle.x && this.y === rectangle.y && this.width === rectangle.width && this.height === rectangle.height : false;
	  };

	  return Rectangle;
	}(_Point2.Point);

	/**
	 * Creates a Rectangle from specified Rectangle
	 * @param  {Rectangle} rect - specified Rectangle
	 * @return {Rectangle} a copy of specified rectangle
	 */


	Rectangle.createFromRectangle = function (rect) {
	  return new Rectangle(rect.x, rect.y, rect.width, rect.height);
		};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(2)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(18)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(1)
	  , createDesc = __webpack_require__(28);
	module.exports = __webpack_require__(24) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @author Michael Duve <mduve@designmail.net>
	 * @file represents latitude and longitude coordinates in a geographic coordinate system
	 * @copyright Michael Duve 2016
	 */

	var LatLng = exports.LatLng = function () {
	  _createClass(LatLng, [{
	    key: "length",


	    /**
	     * length of a latlng
	     * @return {Number} length of latlng
	     */
	    get: function get() {
	      return Math.sqrt(Math.pow(this.lat, 2) + Math.pow(this.lng, 2));
	    }

	    /**
	     * gets a clone of this latlng
	     * @return {LatLng} create a copy
	     */

	  }, {
	    key: "clone",
	    get: function get() {
	      return LatLng.createFromLatLng(this);
	    }

	    /**
	     * @constructor
	     * @param  {Number} lat = 0 - representation of latitude
	     * @param  {Number} lng = 0 - representation of longitude
	     * @return {LatLng} instance of LatLng for chaining
	     */

	  }]);

	  function LatLng() {
	    var lat = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	    var lng = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	    _classCallCheck(this, LatLng);

	    this.lat = lat;
	    this.lng = lng;
	    return this;
	  }

	  /**
	   * calculates distance between this and specified latlng
	   * @param  {LatLng} latlng = new LatLng() - specified latlng
	   * @return {Number} distance
	   */


	  LatLng.prototype.distance = function distance() {
	    var latlng = arguments.length <= 0 || arguments[0] === undefined ? new LatLng() : arguments[0];

	    return this.clone.substract(latlng).length;
	  };

	  /**
	   * substract specified coord from this coordinate
	   * @param  {LatLng} coord = new LatLng() - specified coordinate to substract from this coord
	   * @return {LatLng} instance of LatLng for chaining
	   */


	  LatLng.prototype.substract = function substract() {
	    var coord = arguments.length <= 0 || arguments[0] === undefined ? new LatLng() : arguments[0];

	    this.lat -= coord.lat;
	    this.lng -= coord.lng;
	    return this;
	  };

	  /**
	   * add specified coord to this coordinate
	   * @param  {LatLng} coord = new LatLng() - specified coordinate to add to this coord
	   * @return {LatLng} instance of LatLng for chaining
	   */


	  LatLng.prototype.add = function add() {
	    var coord = arguments.length <= 0 || arguments[0] === undefined ? new LatLng() : arguments[0];

	    this.lat += coord.lat;
	    this.lng += coord.lng;
	    return this;
	  };

	  /**
	   * divides a latlng with a given factor
	   * @param  {Number} factorLat = 1 - factor to divide lat with
	   * @param  {Number} factorLng = factorLat - factor to divide lng with
	   * @return {LatLng} instance of LatLng for chaining
	   */


	  LatLng.prototype.divide = function divide() {
	    var factorLat = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	    var factorLng = arguments.length <= 1 || arguments[1] === undefined ? factorLat : arguments[1];

	    this.lat /= factorLat;
	    this.lng /= factorLng;
	    return this;
	  };

	  /**
	   * multiplicates a latlng with a given factor
	   * @param  {Number} factorLat = 1 - factor to multiplicate lat with
	   * @param  {Number} factorLng = factorLat - factor to multiplicate lng with
	   * @return {LatLng} instance of LatLng for chaining
	   */


	  LatLng.prototype.multiply = function multiply() {
	    var factorLat = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	    var factorLng = arguments.length <= 1 || arguments[1] === undefined ? factorLat : arguments[1];

	    this.lat *= factorLat;
	    this.lng *= factorLng;
	    return this;
	  };

	  /**
	   * checks if specified coord equals this coord
	   * @param  {LatLng} coord - specified coord to check against
	   * @return {Boolean} Returns if specified coord equals this coord
	   */


	  LatLng.prototype.equals = function equals(coord) {
	    return this.lat === coord.lat && this.lng === coord.lng;
	  };

	  /**
	   * converts a LatLng to string
	   * @return {String} representing LatLng
	   */


	  LatLng.prototype.toString = function toString() {
	    return "(" + this.lat + ", " + this.lng + ")";
	  };

	  return LatLng;
	}();

	/**
	 * Creates a LatLng from specified LatLng
	 * @param  {LatLng} LatLng - specified LatLng
	 * @return {LatLng} the LatLng specified
	 */


	LatLng.createFromLatLng = function (latlng) {
	  return new LatLng(latlng.lat, latlng.lng);
		};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(4);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(40);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(11)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 25 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(21);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// add fake Function#toString
	// for correct work wrapped methods / constructors with methods like LoDash isNative
	var global    = __webpack_require__(8)
	  , hide      = __webpack_require__(18)
	  , SRC       = __webpack_require__(32)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(10).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  if(typeof val == 'function'){
	    val.hasOwnProperty(SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	    val.hasOwnProperty('name') || hide(val, 'name', key);
	  }
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe)delete O[key];
	    hide(O, key, val);
	  }
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(31)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(22)
	  , IObject  = __webpack_require__(26)
	  , toObject = __webpack_require__(9)
	  , toLength = __webpack_require__(14)
	  , asc      = __webpack_require__(69);
	module.exports = function(TYPE){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(21);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(1).setDesc
	  , has = __webpack_require__(25)
	  , TAG = __webpack_require__(2)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DataEnrichment = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _Helper = __webpack_require__(3);

	var _Point = __webpack_require__(6);

	var _LatLng = __webpack_require__(19);

	var _Bounds = __webpack_require__(37);

	/**
	 * @author Michael Duve <mduve@designmail.net>
	 * @file enriches delivered data with default values
	 * @copyright Michael Duve 2016
	 * @module DataEnrichment
	 */
	var DataEnrichment = exports.DataEnrichment = {
	    /**
	     * enriches marker data with all needed data
	     * @function
	     * @memberof module:DataEnrichment
	     * @param  {Object} data - specified data for marker
	     * @return {Object} enriched marker data
	     */

	    marker: function marker(data) {

	        var enrichedData = [];

	        _Helper.Helper.forEach(data, function (entry) {
	            entry = Object.assign({}, DataEnrichment.DATA_MARKER, entry);

	            var offset = new _Point.Point(entry.offset.x, entry.offset.y),
	                latlng = new _LatLng.LatLng(entry.position.lat, entry.position.lng),
	                size = new _Point.Point(entry.size.width, entry.size.height);

	            enrichedData.push({
	                offset: offset,
	                latlng: latlng,
	                size: size,
	                hover: entry.hover,
	                icon: entry.icon,
	                content: entry.content
	            });
	        });

	        return enrichedData;
	    },

	    /**
	     * enriches label data with all needed data
	     * @function
	     * @memberof module:DataEnrichment
	     * @param  {Object} data - specified data for label
	     * @return {Object} enriched label data
	     */
	    label: function label(data) {
	        var enrichedData = [];

	        _Helper.Helper.forEach(data, function (entry) {
	            entry = Object.assign({}, DataEnrichment.DATA_LABEL, entry);

	            if (entry.text) entry.text = Object.assign({}, DataEnrichment.DATA_LABEL_TEXT, entry.text);
	            if (entry.icon) entry.icon = Object.assign({}, DataEnrichment.DATA_LABEL_ICON, entry.icon);

	            if (typeof entry.position[0] === "number") {
	                entry.position = new _LatLng.LatLng(entry.position[0], entry.position[1]);
	            } else {
	                _Helper.Helper.forEach(entry.position, function (pos, i) {
	                    entry.position[i] = new _LatLng.LatLng(pos[0], pos[1]);
	                });
	            }

	            if (entry.text) entry.text.offset = new _Point.Point(entry.text.offset[0], entry.text.offset[1]);
	            if (entry.icon) entry.icon.offset = new _Point.Point(entry.icon.offset[0], entry.icon.offset[1]);
	            if (entry.icon && typeof entry.icon.size !== "number") entry.icon.size = new _Point.Point(entry.icon.size[0], entry.icon.size[1]);

	            enrichedData.push(entry);
	        });

	        return enrichedData;
	    },

	    /**
	     * enriches map data with all needed data
	     * @function
	     * @memberof module:DataEnrichment
	     * @param  {Object} data - specified data for mapsettings
	     * @return {Object} enriched mapsettings data
	     */
	    mapSettings: function mapSettings() {
	        var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var enrichedData = Object.assign({}, DataEnrichment.MAP_SETTINGS, data),
	            bounds = new _Bounds.Bounds(new _LatLng.LatLng(enrichedData.bounds.northWest[0], enrichedData.bounds.northWest[1]), new _LatLng.LatLng(enrichedData.bounds.southEast[0], enrichedData.bounds.southEast[1])),
	            center = new _LatLng.LatLng(enrichedData.center.lat, enrichedData.center.lng);

	        if (_typeof(data.limitToBounds) === "object") {
	            var boundsNW = new _LatLng.LatLng(data.limitToBounds.northWest[0], data.limitToBounds.northWest[1]);
	            var boundsSE = new _LatLng.LatLng(data.limitToBounds.southEast[0], data.limitToBounds.southEast[1]);
	            var boundsLimit = new _Bounds.Bounds(boundsNW, boundsSE);
	            enrichedData.limitToBounds = boundsLimit;
	        } else {
	            enrichedData.limitToBounds = bounds;
	        }

	        enrichedData.bounds = bounds;
	        enrichedData.center = center;

	        return enrichedData;
	    },

	    /**
	     * enriches tooltip data with all needed data
	     * @function
	     * @memberof module:DataEnrichment
	     * @param  {Object} data - specified data for tooltip
	     * @return {Object} enriched tooltip data
	     */
	    tooltip: function tooltip() {
	        var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        return Object.assign({}, DataEnrichment.TOOLTIP, data);
	    }
	};

	/**
	 * Default initial values for a Marker
	 * @type {Object}
	 */
	DataEnrichment.DATA_MARKER = {
	    icon: null,
	    hover: false,
	    position: {
	        lat: 0,
	        lng: 0
	    },
	    offset: {
	        x: 0,
	        y: 0
	    },
	    size: {
	        width: 32,
	        height: 32
	    },
	    content: []
	};
	/**
	 * Default initial values for a Map
	 * @type {Object}
	 */
	DataEnrichment.MAP_SETTINGS = {
	    level: 0,
	    center: {
	        "lat": 0,
	        "lng": 0
	    },
	    bounds: {
	        "northWest": [90, -180],
	        "southEast": [-90, 180]
	    },
	    controls: {
	        zoom: false,
	        home: false,
	        position: "bottom-right",
	        theme: "dark"
	    }
	};
	/**
	 * Default initial values for a Label
	 * @type {Object}
	 */
	DataEnrichment.DATA_LABEL = {
	    "position": [0, 0],
	    "visibility": {
	        "min": 0,
	        "max": Number.MAX_VALUE
	    }
	};
	/**
	 * Default initial values for a Label with text
	 * @type {Object}
	 */
	DataEnrichment.DATA_LABEL_TEXT = {
	    "content": "",
	    "color": "#333333",
	    "offset": [0, 0],
	    "align": "center",
	    "baseline": "hanging",
	    "font": "10pt Arial"
	};
	/**
	 * Default initial values for a Label with an icon
	 * @type {Object}
	 */
	DataEnrichment.DATA_LABEL_ICON = {
	    "type": "circle",
	    "size": 2,
	    "color": "#333333",
	    "offset": [0, 0]
	};
	/**
	 * Default initial values for a ToolTip
	 * @type {Object}
	 */
	DataEnrichment.TOOLTIP = {
	    image: "/hbs/image.hbs",
	    text: "/hbs/text.hbs",
	    headline: "/hbs/headline.hbs",
	    crossheading: "/hbs/crossheading.hbs",
	    iframe: "/hbs/iframe.hbs"
		};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Bounds = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _LatLng = __webpack_require__(19);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @author Michael Duve <mduve@designmail.net>
	 * @file represents boundaries of a geographic coordinate system
	 * @copyright Michael Duve 2016
	 */

	var Bounds = exports.Bounds = function () {
	    _createClass(Bounds, [{
	        key: 'width',


	        /**
	         * get width of boundaries
	         * @return {Number} distance between east and west boundary
	         */
	        get: function get() {
	            return Math.abs(this.se.lng - this.nw.lng);
	        }

	        /**
	         * get height of boundaries
	         * @return {Number} distance between north and south boundary
	         */

	    }, {
	        key: 'height',
	        get: function get() {
	            return Math.abs(this.se.lat - this.nw.lat);
	        }

	        /**
	         * @constructor
	         * @param  {Number} northWest = new LatLng() - representation of northWest boundary
	         * @param  {Number} southEast = new LatLng() - representation of southEast boundary
	         * @return {Bounds} instance of Bounds for chaining
	         */

	    }]);

	    function Bounds() {
	        var northWest = arguments.length <= 0 || arguments[0] === undefined ? new _LatLng.LatLng() : arguments[0];
	        var southEast = arguments.length <= 1 || arguments[1] === undefined ? new _LatLng.LatLng() : arguments[1];

	        _classCallCheck(this, Bounds);

	        if (northWest.lat < southEast.lat || northWest.lng > southEast.lng) throw new Error(northWest + ' needs to be top-left corner and ' + southEast + ' bottom-right');
	        this.nw = northWest;
	        this.se = southEast;
	        return this;
	    }

	    return Bounds;
	}();

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MapInformation = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Events = __webpack_require__(5);

	var _Helper = __webpack_require__(3);

	var _Publisher = __webpack_require__(13);

	var _LatLng = __webpack_require__(19);

	var _Bounds = __webpack_require__(37);

	var _Point = __webpack_require__(6);

	var _Rectangle = __webpack_require__(16);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @author Michael Duve <mduve@designmail.net>
	 * @file stores and handles all information for a map
	 * @copyright Michael Duve 2016
	 */

	var MapInformation = exports.MapInformation = function () {
	    _createClass(MapInformation, [{
	        key: 'offsetToCenter',


	        /**
	         * Returns the current distorted viewport
	         */
	        get: function get() {
	            return (this.data.viewport.width - this.data.viewport.width * this.data.distortionFactor) / 2;
	        }

	        /**
	         * how many pixels per lat and lng
	         * @return {Point} pixels per lat/lng
	         */

	    }, {
	        key: 'pixelPerLatLng',
	        get: function get() {
	            return new _Point.Point(this.data.view.width / this.data.bounds.width || 0, this.data.view.height / this.data.bounds.height || 0);
	        }

	        /**
	         * @constructor
	         * @return {MapInformation} singleton instance of MapInformation for chaining
	         */

	    }]);

	    function MapInformation() {
	        var id = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	        _classCallCheck(this, MapInformation);

	        if (!MapInformation.instances[id]) {
	            this.id = id;
	            this.data = {
	                center: new _LatLng.LatLng(),
	                view: new _Rectangle.Rectangle(),
	                viewport: new _Rectangle.Rectangle(),
	                distortionFactor: 1,
	                offsetToCenter: 0,
	                bounds: new _Bounds.Bounds(),
	                zoomFactor: 1,
	                level: 0
	            };
	            this.data.offsetToCenter = this.offsetToCenter;
	            this.eventManager = new _Publisher.Publisher(this.id);
	            this.bindEvents();
	            MapInformation.instances[id] = this;
	        }
	        return MapInformation.instances[id];
	    }

	    /**
	     * gets current data
	     * @return {Object} map information
	     */


	    MapInformation.prototype.get = function get() {
	        return this.data;
	    };

	    /**
	     * bind all events
	     * @return {MapInformation} instance of MapInformation for chaining
	     */


	    MapInformation.prototype.bindEvents = function bindEvents() {
	        this.eventManager.subscribe(_Events.Events.MapInformation.UPDATE, this.update.bind(this));
	        return this;
	    };

	    /**
	     * updates current information
	     * @param  {Object} obj = {} - new data delivered
	     * @return {MapInformation} instance of MapInformation for chaining
	     */


	    MapInformation.prototype.update = function update() {
	        var obj = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var oldData = this.data;
	        this.data = Object.assign({}, this.data, obj);
	        var centerUpdateDone = !oldData.center.equals(this.data.center) ? this.centerUpdated() : false;
	        if (!centerUpdateDone && !oldData.viewport.equals(this.data.viewport)) this.updateOffsetToCenter();
	        return this;
	    };

	    /**
	     * converts a Point to LatLng in view
	     * @param  {Point} point - specified point to be converted
	     * @return {LatLng} presentation of point in lat-lng system
	     */


	    MapInformation.prototype.convertPointToLatLng = function convertPointToLatLng(point) {
	        point.divide(this.pixelPerLatLng.x, this.pixelPerLatLng.y);
	        return new _LatLng.LatLng(this.data.bounds.nw.lat - point.y, point.x + this.data.bounds.nw.lng);
	    };

	    /**
	     * converts a LatLng to Point in view
	     * @param  {LatLng} latlng - specified latlng to be converted
	     * @return {Point} presentation of point in pixel system
	     */


	    MapInformation.prototype.convertLatLngToPoint = function convertLatLngToPoint(latlng) {
	        var relativePosition = this.data.bounds.nw.clone.substract(latlng);
	        relativePosition.multiply(this.pixelPerLatLng.y, this.pixelPerLatLng.x);
	        return new _Point.Point(relativePosition.lng, relativePosition.lat).abs;
	    };

	    /**
	     * center position was updated
	     * @return {Boolean} information was updated
	     */


	    MapInformation.prototype.centerUpdated = function centerUpdated() {
	        this.data.distortionFactor = this.getDistortionFactorForLatitude(this.data.center);
	        this.updateOffsetToCenter();
	        return true;
	    };

	    /**
	     * offset to center was updated
	     * @return {Boolean} information was updated
	     */


	    MapInformation.prototype.updateOffsetToCenter = function updateOffsetToCenter() {
	        this.data.offsetToCenter = this.offsetToCenter;
	        return true;
	    };

	    /**
	     * get distortion factor for specified latitude
	     * @param  {LatLng} latlng - lat/lng position
	     * @return {Number} distortion factor
	     */


	    MapInformation.prototype.getDistortionFactorForLatitude = function getDistortionFactorForLatitude(latlng) {
	        return Math.cos(_Helper.Helper.toRadians(latlng.lat));
	    };

	    /**
	     * destroys singleton instance
	     */


	    MapInformation.prototype.destroy = function destroy() {
	        MapInformation.instances[this.id] = null;
	    };

	    return MapInformation;
	}();

	/**
	 * singleton instance wrapper
	 * @type {Object}
	 */


		MapInformation.instances = {};

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @author Michael Duve <mduve@designmail.net>
	 * @file State pattern
	 * @copyright Michael Duve 2016
	 */

	var StateHandler = exports.StateHandler = function () {
	    _createClass(StateHandler, [{
	        key: 'current',


	        /**
	         * get current state
	         * @return {Object} current state from STATES-array
	         */
	        get: function get() {
	            return this.states[this.i];
	        }

	        /**
	         * get number of states
	         * @return {Number} number of states
	         */

	    }, {
	        key: 'length',
	        get: function get() {
	            return this.states.length;
	        }

	        /**
	         * @constructor
	         * @param  {Array} states_array = [{value: 0, description: 'Default'}] - [description]
	         * @return {StateHandler} instance of StateHandler for chaining
	         */

	    }]);

	    function StateHandler() {
	        var states_array = arguments.length <= 0 || arguments[0] === undefined ? [{
	            value: 0,
	            description: 'Default'
	        }] : arguments[0];

	        _classCallCheck(this, StateHandler);

	        this.states = states_array;
	        this.i = 0;
	        this.lastState = this.current;
	        return this;
	    }

	    /**
	     * get the next element
	     * @return {StateHandler} instance of StateHandler for chaining
	     */


	    StateHandler.prototype.next = function next() {
	        this.lastState = this.current;
	        if (this.hasNext()) this.i++;
	        return this;
	    };

	    /**
	     * get the previous element
	     * @return {StateHandler} instance of StateHandler for chaining
	     */


	    StateHandler.prototype.previous = function previous() {
	        this.lastState = this.current;
	        if (this.hasPrevious()) this.i--;
	        return this;
	    };

	    /**
	     * change the state to specified state
	     * @param {Number} state - index of state in array
	     * @return {StateHandler} instance of StateHandler for chaining
	     */


	    StateHandler.prototype.changeTo = function changeTo(state) {
	        if (state >= 0 && state < this.length) this.i = state;
	        return this;
	    };

	    /**
	     * checks if there is a next element
	     * @return {Boolean} wheter there is a next state or not
	     */


	    StateHandler.prototype.hasNext = function hasNext() {
	        return this.i < this.length - 1;
	    };

	    /**
	     * checks if there is a previous element
	     * @return {Boolean} wheter there is a previous state or not
	     */


	    StateHandler.prototype.hasPrevious = function hasPrevious() {
	        return this.i > 0;
	    };

	    return StateHandler;
	}();

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(21)
	  , TAG = __webpack_require__(2)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(12)
	  , getNames  = __webpack_require__(1).getNames
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	var LIBRARY        = __webpack_require__(44)
	  , $export        = __webpack_require__(0)
	  , redefine       = __webpack_require__(29)
	  , hide           = __webpack_require__(18)
	  , has            = __webpack_require__(25)
	  , Iterators      = __webpack_require__(27)
	  , $iterCreate    = __webpack_require__(76)
	  , setToStringTag = __webpack_require__(35)
	  , getProto       = __webpack_require__(1).getProto
	  , ITERATOR       = __webpack_require__(2)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(8)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(4);

	__webpack_require__(7)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(4);

	__webpack_require__(7)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(4);

	__webpack_require__(7)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(4);

	__webpack_require__(7)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(4);

	__webpack_require__(7)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
	  };
	});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(4);

	__webpack_require__(7)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Interact = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*global PointerEvent,MSPointerEvent*/


	var _Helper = __webpack_require__(3);

	var _Point = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @author Michael Duve <mduve@designmail.net>
	 * @file implements interaction like panning, zooming, flicking and more, cross-browser and cross-device
	 * @copyright Michael Duve 2016
	 */

	var Interact = exports.Interact = function () {
	    _createClass(Interact, [{
	        key: 'timeToLastMove',


	        /**
	         * get time difference to last
	         * @return {Number} difference
	         */
	        get: function get() {
	            return this.data.timeEnd - this.data.timeLast;
	        }

	        /**
	         * get time difference to start
	         * @return {Number} difference
	         */

	    }, {
	        key: 'time',
	        get: function get() {
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

	    }]);

	    function Interact() {
	        var settings = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        _classCallCheck(this, Interact);

	        this.settings = Object.assign(this.getDefaultSettings(), settings);
	        this.data = this.getDefaultData();
	        this.pointerArray = {};
	        if (this.settings.overwriteViewportSettings) this.handleViewport(this.settings.overwriteViewportSettings);
	        this.init(this.settings.container);
	    }

	    /**
	     * get the default settings
	     * @return {Object} settings
	     */


	    Interact.prototype.getDefaultSettings = function getDefaultSettings() {
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
	            pinchBalanceTime: 500,
	            callbacks: this.getDefaultCallbacks(),
	            events: this.getDefaultEventNames()
	        };
	    };

	    /**
	     * get default callbacks
	     * @return {Object} callbacks
	     */


	    Interact.prototype.getDefaultCallbacks = function getDefaultCallbacks() {
	        return {
	            tap: null,
	            tapHold: null,
	            doubletap: null,
	            hold: null,
	            pan: null,
	            swipe: null,
	            flick: null,
	            zoom: null,
	            wheel: null,
	            pinch: null
	        };
	    };

	    /**
	     * get default eventnames
	     * @return {Object} eventnames
	     */


	    Interact.prototype.getDefaultEventNames = function getDefaultEventNames() {
	        var isIE = _Helper.Helper.isIE();
	        return {
	            start: {
	                touch: isIE ? "MSPointerDown pointerdown" : "touchstart",
	                mouse: isIE ? "MSPointerDown pointerdown" : "mousedown"
	            },
	            move: {
	                touch: isIE ? "MSPointerMove pointermove" : "touchmove",
	                mouse: isIE ? "MSPointerMove pointermove" : "mousemove"
	            },
	            end: {
	                touch: isIE ? "MSPointerUp pointerup" : "touchend",
	                mouse: isIE ? "MSPointerUp pointerup" : "mouseup"
	            },
	            leave: {
	                touch: isIE ? "MSPointerLeave pointerleave" : "touchleave",
	                mouse: isIE ? "MSPointerLeave pointerleave" : "mouseleave"
	            },
	            scroll: _Helper.Helper.scrollEvent()
	        };
	    };

	    /**
	     * get default data
	     * @return {Object} data
	     */


	    Interact.prototype.getDefaultData = function getDefaultData() {
	        return {
	            down: false,
	            moved: false,
	            pinched: false,
	            multitouch: false,
	            distance: null,
	            distanceLast: null,
	            actionLast: null,
	            direction: new _Point.Point(),
	            velocity: new _Point.Point(),
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
	    };

	    /**
	     * handles the overwrite of viewport meta
	     * @param  {Boolean|String} viewport - specified viewport option
	     * @return {Interact} Returns this instance
	     */


	    Interact.prototype.handleViewport = function handleViewport(viewport) {
	        if (typeof viewport !== "string") viewport = "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no";
	        var metaViewInHead = _Helper.Helper.find("meta[name=viewport]");
	        var viewportMeta = metaViewInHead ? metaViewInHead : _Helper.Helper.find("head").appendChild(document.createElement("head").setAttribute("name", "viewport"));
	        viewportMeta.setAttribute("content", viewport);
	        return this;
	    };

	    /**
	     * initializes class settings and bindings
	     * @param  {HTMLElement|String} container - Container, either string or DOM object
	     * @return {Interact} Returns this instance
	     */


	    Interact.prototype.init = function init(container) {
	        this.container = typeof container === "string" ? _Helper.Helper.find(container) : container;
	        var css = {
	            "-ms-touch-action": "none",
	            "touch-action": "none",
	            "-ms-content-zooming": "none"
	        };
	        _Helper.Helper.css(this.container, css);
	        for (var i = 0; i < this.container.childNodes; i++) {
	            _Helper.Helper.css(this.container.childNodes[i], css);
	        }
	        this.bindEvents();
	        return this;
	    };

	    /**
	     * binds all needed events
	     * @return {Interact} Returns this instance
	     */


	    Interact.prototype.bindEvents = function bindEvents() {
	        if (_Helper.Helper.isIE()) {
	            this.bindIEEvents();
	        } else {
	            if (_Helper.Helper.isTouch()) this.bindTouchEvents();
	            if (_Helper.Helper.isMouse()) this.bindMouseEvents();
	        }
	        return this;
	    };

	    /**
	     * binds all needed events for IE
	     * @return {Interact} Returns this instance
	     */


	    Interact.prototype.bindIEEvents = function bindIEEvents() {
	        _Helper.Helper.addListener(this.container, this.settings.events.scroll, this.scrollHandler.bind(this));
	        this.bindTouchEvents();
	        _Helper.Helper.addListener(this.container, "contextmenu", function (e) {
	            return e.preventDefault();
	        }, false);
	        return this;
	    };

	    /**
	     * binds all needed events for touch devices
	     * @return {Interact} Returns this instance
	     */


	    Interact.prototype.bindTouchEvents = function bindTouchEvents() {
	        _Helper.Helper.addListener(this.container, this.settings.events.start.touch, this.startHandler.bind(this));
	        _Helper.Helper.addListener(this.container, this.settings.events.move.touch, this.moveHandler.bind(this));
	        _Helper.Helper.addListener(this.container, this.settings.events.end.touch, this.endHandler.bind(this));
	        _Helper.Helper.addListener(this.container, this.settings.events.leave.touch, this.endHandler.bind(this));
	        return this;
	    };

	    /**
	     * binds all needed events for mouse devices
	     * @return {Interact} Returns this instance
	     */


	    Interact.prototype.bindMouseEvents = function bindMouseEvents() {
	        _Helper.Helper.addListener(this.container, this.settings.events.scroll, this.scrollHandler.bind(this));
	        _Helper.Helper.addListener(this.container, this.settings.events.start.mouse, this.startHandler.bind(this));
	        _Helper.Helper.addListener(this.container, this.settings.events.move.mouse, this.moveHandler.bind(this));
	        _Helper.Helper.addListener(this.container, this.settings.events.end.mouse, this.endHandler.bind(this));
	        _Helper.Helper.addListener(this.container, this.settings.events.leave.mouse, this.endHandler.bind(this));
	        return this;
	    };

	    /**
	     * pre handle all events
	     * @param  {Event} event - event
	     * @return {Object} normalized Event
	     */


	    Interact.prototype.preHandle = function preHandle(event) {
	        if (this.settings.stopPropagation) event.stopPropagation();
	        if (this.settings.preventDefault) event.preventDefault();
	        return this.getEvent(event);
	    };

	    /**
	     * handles cross-browser and -device scroll
	     * @param  {Event} event - event
	     * @return {Boolean} always returns false
	     */


	    Interact.prototype.scrollHandler = function scrollHandler(event) {
	        event = event || window.event;
	        this.data.target = event.target;
	        var e = this.preHandle(event) || event;

	        this.data.delta = this.normalizeWheelDelta(event);
	        this.data.positionStart = this.getRelativePosition(e);
	        this.data.directions = this.getScrollDirection(e);
	        this.data.zoom = this.data.directions.indexOf("up") > -1 ? 1 : this.data.directions.indexOf("down") > -1 ? -1 : 0;

	        if (this.settings.callbacks.wheel) {
	            this.eventCallback(this.settings.callbacks.wheel, this.data);
	        }
	        if (this.settings.callbacks.zoom && (this.data.directions.indexOf("up") > -1 || this.data.directions.indexOf("down") > -1)) {
	            this.eventCallback(this.settings.callbacks.zoom, this.data);
	        }
	        return false;
	    };

	    /**
	     *
	     * Solution from http://jsfiddle.net/uNeBr/
	     * @param  {Event} e - event
	     * @return {Number} normalized wheel delta
	     */


	    Interact.prototype.normalizeWheelDelta = function normalizeWheelDelta(e) {
	        var o = e.originalEvent || e,
	            w = o.wheelDelta || o.deltaY * -1 * 10,
	            n = 225,
	            n1 = n - 1;

	        var d = o.detail,
	            f = void 0;

	        // Normalize delta
	        d = d ? w && (f = w / d) ? d / f : -d / 1.35 : w / 120;
	        // Quadratic scale if |d| > 1
	        d = d < 1 ? d < -1 ? (-Math.pow(d, 2) - n1) / n : d : (Math.pow(d, 2) + n1) / n;
	        // Delta *should* not be greater than 2...
	        return _Helper.Helper.clamp(d / 2, -1, 1);
	    };

	    /**
	     * check if event is a PointerEvent (IE)
	     * @param  {Event} e - event
	     * @return {Boolean} Whether event is PointerEvent
	     */


	    Interact.prototype.isPointerEvent = function isPointerEvent(e) {
	        return _Helper.Helper.isIE() && (e instanceof MSPointerEvent || e instanceof PointerEvent);
	    };

	    /**
	     * calculation to be made at start-handler
	     * @param  {Event} e - event
	     * @return {Object} calculated data
	     */


	    Interact.prototype.calculateStart = function calculateStart(e) {
	        var data = {
	            multitouch: false,
	            distance: 0,
	            down: true,
	            positionStart: new _Point.Point()
	        };
	        // mouse is used
	        if (e instanceof MouseEvent && !this.isPointerEvent(e)) {
	            return Object.assign({}, data, this.handleSingletouchStart(e));
	        } // if is pointerEvent
	        else if (this.isPointerEvent(e)) {
	                return this.handlePointerEventStart(data, e);
	            } // touch is used
	            else {
	                    // singletouch startet
	                    return this.handleTouchEventStart(data, e);
	                }
	    };

	    /**
	     * handle PointerEvent calculations
	     * @param  {Object} data - current data
	     * @param  {Event} e - event
	     * @return {Object} manipulated enriched data
	     */


	    Interact.prototype.handlePointerEventStart = function handlePointerEventStart(data, e) {
	        this.pointerArray[e.pointerId] = e;
	        var getData = Object.keys(this.pointerArray).length <= 1 ? this.handleSingletouchStart(e) : this.handleMultitouchStart(this.getPointerArray());
	        return Object.assign({}, data, getData);
	    };

	    /**
	     * handle TouchEvent calculations for start
	     * @param  {Object} data - current data
	     * @param  {Event} e - event
	     * @return {Object} manipulated enriched data
	     */


	    Interact.prototype.handleTouchEventStart = function handleTouchEventStart(data, e) {
	        return this.handleTouchEvent(data, e, this.handleSingletouchStart.bind(this), this.handleMultitouchStart.bind(this));
	    };

	    /**
	     * get array of pointers (IE)
	     * @return {Object} array of pointerIDs
	     */


	    Interact.prototype.getPointerArray = function getPointerArray() {
	        var pointerPos = [];
	        for (var pointer in this.pointerArray) {
	            if (this.pointerArray[pointer]) {
	                pointerPos.push(this.pointerArray[pointer]);
	            }
	        }
	        return pointerPos;
	    };

	    /**
	     * handles multitouch for start
	     * @param  {Object} positionsArray - array of positions
	     * @return {Object} manipulated enriched data
	     */


	    Interact.prototype.handleMultitouchStart = function handleMultitouchStart(positionsArray) {
	        var pos1 = this.getRelativePosition(positionsArray[0]),
	            pos2 = this.getRelativePosition(positionsArray[1]);
	        return {
	            multitouch: true,
	            distance: pos1.distance(pos2),
	            positionStart: pos1.clone.add(pos2).divide(2, 2)
	        };
	    };

	    /**
	     * handles singletouch for start
	     * @param  {Point} position - position of touch
	     * @return {Object} manipulated enriched data
	     */


	    Interact.prototype.handleSingletouchStart = function handleSingletouchStart(position) {
	        return {
	            positionStart: this.getRelativePosition(position)
	        };
	    };

	    /**
	     * handle action at start event handler
	     * @param  {String} action - last action made
	     * @return {Interact} instance of Interact for chaining
	     */


	    Interact.prototype.takeActionStart = function takeActionStart(action) {
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
	    };

	    /**
	     * handles cross-browser and -device start-event
	     * @param  {Event} event - event
	     * @return {Boolean} always returns false
	     */


	    Interact.prototype.startHandler = function startHandler(event) {
	        if (event.button && event.button !== 0) {
	            return false;
	        }
	        this.data.target = event.target;
	        var e = this.preHandle(event);
	        this.data.timeStart = event.timeStamp;
	        this.clearTimeouts(this.data.timeoutDefault);
	        this.data = Object.assign({}, this.data, this.calculateStart(e));
	        this.takeActionStart(this.data.actionLast);
	        return false;
	    };

	    /**
	     * clear timeout helper
	     * @param  {Object} timeout - timeout object to be cleared
	     * @return {Interact} instance of Interact for chaining
	     */


	    Interact.prototype.clearTimeouts = function clearTimeouts(timeout) {
	        if (timeout) {
	            timeout = clearTimeout(timeout);
	        }
	        return this;
	    };

	    /**
	     * calculation to be made at move-handler
	     * @param  {Event} e - event
	     * @return {Object} calculated data
	     */


	    Interact.prototype.calculateMove = function calculateMove(e) {
	        var data = {
	            moved: true,
	            actionLast: "moved",
	            positionMove: new _Point.Point()
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
	    };

	    /**
	     * handle PointerEvent at moving (IE)
	     * @param  {Object} data - specified input data
	     * @param  {Event} e - event
	     * @return {Object} manipulated enriched data
	     */


	    Interact.prototype.handlePointerEventMove = function handlePointerEventMove(data, e) {
	        this.pointerArray[e.pointerId] = e;
	        if (Object.keys(this.pointerArray).length <= 1) {
	            return Object.assign({}, data, this.handleSingletouchMove(e));
	        } else {
	            var pointerPos = this.getPointerArray();
	            return Object.assign({}, data, this.handleMultitouchMove(pointerPos));
	        }
	    };

	    /**
	     * handle TouchEvent calculations for move
	     * @param  {Object} data - current data
	     * @param  {Event} e - event
	     * @return {Object} manipulated enriched data
	     */


	    Interact.prototype.handleTouchEventMove = function handleTouchEventMove(data, e) {
	        return this.handleTouchEvent(data, e, this.handleSingletouchMove.bind(this), this.handleMultitouchMove.bind(this));
	    };

	    /**
	     * handles touch events
	     * @param  {Object} data - current data
	     * @param  {Event} e - event
	     * @param  {Function} fnSingle - callback for singletouch
	     * @param  {Function} fnMulti - callback for multitouch
	     * @return {Object} manipulated enriched data
	     */


	    Interact.prototype.handleTouchEvent = function handleTouchEvent(data, e, fnSingle, fnMulti) {
	        var getData = e.length === 1 ? fnSingle(e[0]) : fnMulti(e);
	        return Object.assign({}, data, getData);
	    };

	    /**
	     * handles multitouch for move
	     * @param  {Object} positionsArray - array of positions
	     * @return {Object} manipulated enriched data
	     */


	    Interact.prototype.handleMultitouchMove = function handleMultitouchMove(positionsArray) {
	        var pointerPos1 = this.getRelativePosition(positionsArray[0]);
	        var pointerPos2 = this.getRelativePosition(positionsArray[1]);
	        var pos = pointerPos2.clone.add(pointerPos1).divide(2);
	        return {
	            positionMove: pos,
	            distance: pointerPos1.distance(pointerPos2),
	            multitouch: true
	        };
	    };

	    /**
	     * handles singletouch for move
	     * @param  {Point} position - position
	     * @return {Object} manipulated enriched data
	     */


	    Interact.prototype.handleSingletouchMove = function handleSingletouchMove(position) {
	        var pos = this.getRelativePosition(position);
	        return {
	            positionMove: pos,
	            distance: this.data.positionLast.distance(pos),
	            multitouch: false
	        };
	    };

	    /**
	     * handles cross-browser and -device move-event
	     * @param  {Event} event - event
	     * @return {Boolean} always returns false
	     */


	    Interact.prototype.moveHandler = function moveHandler(event) {
	        // if touchstart event was not fired
	        if (!this.data.down || this.data.pinched) return false;

	        var e = this.preHandle(event);

	        this.data.positionLast = this.data.positionMove ? this.data.positionMove : this.data.positionStart;
	        this.data.timeLast = event.timeStamp;

	        // if positions have not changed
	        if (this.positionDidNotChange(e)) return false;

	        this.clearTimeouts(this.data.timeoutDefault);
	        this.clearTimeouts(this.data.timeoutHold);
	        this.data = Object.assign({}, this.data, this.calculateMove(e));

	        if (this.data.multitouch) {
	            this.handlePinchAndZoom();
	        } else {
	            this.eventCallback(this.settings.callbacks.pan, this.data);
	        }
	        return false;
	    };

	    /**
	     * handles pinch and zoom
	     * @return {Interact} instance of Interact for chaining
	     */


	    Interact.prototype.handlePinchAndZoom = function handlePinchAndZoom() {
	        if (!this.data.distanceLast) this.data.distanceLast = this.data.distance;

	        this.data.difference = this.data.distance - this.data.distanceLast;
	        if (Math.abs(this.data.difference) >= 0.005) {
	            if (this.settings.callbacks.pinch) this.eventCallback(this.settings.callbacks.pinch, this.data);
	            if (this.settings.callbacks.zoom) this.eventCallback(this.settings.callbacks.zoom, this.data);
	            this.data.distanceLast = this.data.distance;
	        }
	        return this;
	    };

	    /**
	     * check if position has been changed
	     * @param  {Event} e - event
	     * @return {Boolean} Whether or not position has changed
	     */


	    Interact.prototype.positionDidNotChange = function positionDidNotChange(e) {
	        return _Helper.Helper.isIE() && (this.getRelativePosition(e).equals(this.data.positionLast) || this.getRelativePosition(e).equals(this.data.positionStart)) || !_Helper.Helper.isIE() && _Helper.Helper.isTouch() && this.getRelativePosition(e[0]).equals(this.data.positionLast);
	    };

	    /**
	     * calculation to be made at end-handler
	     * @param  {Event} e - event
	     * @return {Object} calculated data
	     */


	    Interact.prototype.calculateEnd = function calculateEnd(e) {
	        var data = {
	            positionEnd: new _Point.Point()
	        };

	        if (e instanceof MouseEvent && !this.isPointerEvent(e)) {
	            return Object.assign({}, data, this.handleSingletouchEnd(e));
	        } // if is pointerEvent
	        else if (this.isPointerEvent(e)) {
	                var end = this.handleSingletouchEnd(e);
	                delete this.pointerArray[e.pointerId];
	                return Object.assign({}, data, end);
	            } // touch is used
	            else {
	                    // singletouch ended
	                    if (e.length <= 1) {
	                        return Object.assign({}, data, this.handleSingletouchEnd(e[0]));
	                    }
	                }
	    };

	    /**
	     * handles singletouch for end
	     * @param  {Point} position - position
	     * @return {Object} manipulated enriched data
	     */


	    Interact.prototype.handleSingletouchEnd = function handleSingletouchEnd(position) {
	        return {
	            positionEnd: this.getRelativePosition(position)
	        };
	    };

	    /**
	     * handle action at end event handler
	     * @param  {String} action - last action made
	     * @return {Interact} instance of Interact for chaining
	     */


	    Interact.prototype.takeActionEnd = function takeActionEnd(action) {
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
	    };

	    /**
	     * handles cross-browser and -device end-event
	     * @param  {Event} event - event
	     * @return {Boolean} always returns false
	     */


	    Interact.prototype.endHandler = function endHandler(event) {

	        var e = this.preHandle(event);

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
	    };

	    /**
	     * handles flick and swipe events
	     * @return {Interact} instance of Interact for chaining
	     */


	    Interact.prototype.handleSwipeAndFlick = function handleSwipeAndFlick() {
	        if (this.settings.callbacks.swipe || this.settings.callbacks.flick) {
	            this.data.direction = this.data.positionEnd.clone.substract(this.data.positionLast);
	            this.data.velocity = this.data.direction.clone.multiply(this.timeToLastMove);
	            this.data.distance = this.data.positionLast.distance(this.data.positionEnd);
	        }

	        if (this.settings.callbacks.swipe && this.time <= this.settings.timeTreshold.swipe) {
	            var originalStart = this.getAbsolutePosition(this.data.positionStart);
	            var originalEnd = this.getAbsolutePosition(this.data.positionEnd);
	            if (originalEnd.distance(originalStart) >= this.settings.distanceTreshold.swipe) {
	                this.data.directions = this.getSwipeDirections(this.data.direction);
	                this.eventCallback(this.settings.callbacks.swipe, this.data);
	            }
	        }
	        if (this.settings.callbacks.flick && this.timeToLastMove <= this.settings.timeTreshold.flick) {
	            this.eventCallback(this.settings.callbacks.flick, this.data);
	        }

	        return this;
	    };

	    /**
	     * handles multitouch for end
	     * @param  {Event} e - event
	     * @return {Interact} instance of Interact for chaining
	     */


	    Interact.prototype.handleMultitouchEnd = function handleMultitouchEnd(e) {
	        this.data.multitouch = false;
	        this.data.down = false;
	        this.data.moved = false;

	        // if is pointerEvent
	        if (this.isPointerEvent(e)) {
	            if (Object.keys(this.pointerArray).length > 1) {
	                this.data.multitouch = true;
	            } else if (Object.keys(this.pointerArray).length > 0) {
	                this.data.down = true;
	            }
	        } // touch is used
	        else {
	                if (e.length > 1) {
	                    this.data.multitouch = true;
	                } else if (e.length > 0) {
	                    this.data.down = true;
	                }
	                this.data.positionMove = undefined;
	            }
	        return this;
	    };

	    /**
	     * balances pinching after release of finger
	     * @return {Interact} instance of Interact for chaining
	     */


	    Interact.prototype.pinchBalance = function pinchBalance() {
	        var _this = this;

	        if (this.data.multitouch) {
	            this.data.pinched = true;
	            setTimeout(function () {
	                _this.data.pinched = false;
	                _this.data.distanceLast = null;
	            }, this.settings.pinchBalanceTime);
	        }
	        return this;
	    };

	    /**
	     * Returns an array of strings, representing the directions
	     * @param  {Point} direction - the specified direction in pixel
	     * @return {String[]} returns an array representing the directions as strings
	     */


	    Interact.prototype.getSwipeDirections = function getSwipeDirections(direction) {
	        return [direction.x < 0 ? "left" : direction.x > 0 ? "right" : "none", direction.y < 0 ? "up" : direction.y > 0 ? "down" : "none"];
	    };

	    /**
	     * Helper for setting a timeout for events
	     * @param {Function} callback - function to be called
	     * @param {Number} timeout - time in milliseconds
	     * @param {Object[]} args - array of arguments
	     * @param {Boolean} holdTimeout - if true, a different variable will be used
	     * @return {Interact} Returns this instance
	     */


	    Interact.prototype.setTimeoutForEvent = function setTimeoutForEvent(callback, timeout, args, holdTimeout) {
	        if (holdTimeout) {
	            this.data.timeoutHold = setTimeout(this.eventCallback.bind(this, callback, args), timeout);
	        } else {
	            this.data.timeoutDefault = setTimeout(this.eventCallback.bind(this, callback, args), timeout);
	        }
	        return this;
	    };

	    /**
	     * Eventhandler for handling the callbacks
	     * @param  {Function} callback - function to be called
	     * @param  {object[]} args - arguments for the function
	     * @return {Interact} Returns this instance
	     */


	    Interact.prototype.eventCallback = function eventCallback(callback, args) {
	        if (callback && typeof callback === "function") callback(args);
	        this.data.actionLast = null;
	        return this;
	    };

	    /**
	     * get the relative position of clientX and clientY
	     * @param  {Event} e - event
	     * @return {Point} calculated relative position
	     */


	    Interact.prototype.getRelativePosition = function getRelativePosition(e) {
	        var clientBounds = this.container.getBoundingClientRect(),
	            pos = new _Point.Point(e.clientX, e.clientY),
	            bounds = new _Point.Point(clientBounds.left, clientBounds.top);
	        return pos.substract(bounds).divide(clientBounds.width, clientBounds.height);
	    };

	    /**
	     * get the absolute position of clientX and clientY
	     * @param  {Point} point - specified point
	     * @return {Point} calculated absolute position
	     */


	    Interact.prototype.getAbsolutePosition = function getAbsolutePosition(point) {
	        var clientBounds = this.container.getBoundingClientRect();
	        return point.multiply(clientBounds.width, clientBounds.height);
	    };

	    /**
	     * get scroll direction from event
	     * @param  {Event} event - event
	     * @return {String[]} an array with scroll directions
	     */


	    Interact.prototype.getScrollDirection = function getScrollDirection(event) {
	        var axis = parseInt(event.axis, 10);
	        var direction = [];
	        if (this.isDownDirection(axis, event)) direction.push("down"); // down
	        else if (this.isUpDirection(axis, event)) direction.push("up"); // up
	        if (this.isRightDirection(axis, event)) direction.push("right"); // right
	        else if (this.isLeftDirection(axis, event)) direction.push("left"); // left
	        return direction;
	    };

	    /**
	     * checks if direction is down
	     * @param  {Number} axis - what axis is used
	     * @param  {Event} event - event
	     * @return {Boolean} Whether or not direction is down
	     */


	    Interact.prototype.isDownDirection = function isDownDirection(axis, event) {
	        return event.deltaY > 0 || !event.deltaY && event.wheelDeltaY < 0 || axis === 2 && event.detail > 0 || Math.max(-1, Math.min(1, event.wheelDelta || -event.detail)) < 0;
	    };

	    /**
	     * checks if direction is up
	     * @param  {Number} axis - what axis is used
	     * @param  {Event} event - event
	     * @return {Boolean} Whether or not direction is up
	     */


	    Interact.prototype.isUpDirection = function isUpDirection(axis, event) {
	        return event.deltaY < 0 || !event.deltaY && event.wheelDeltaY > 0 || axis === 2 && event.detail < 0 || Math.max(-1, Math.min(1, event.wheelDelta || -event.detail)) > 0;
	    };

	    /**
	     * checks if direction is right
	     * @param  {Number} axis - what axis is used
	     * @param  {Event} event - event
	     * @return {Boolean} Whether or not direction is right
	     */


	    Interact.prototype.isRightDirection = function isRightDirection(axis, event) {
	        return event.deltaX > 0 || !event.deltaX && event.wheelDeltaX > 0 || axis === 1 && event.detail > 0;
	    };

	    /**
	     * checks if direction is left
	     * @param  {Number} axis - what axis is used
	     * @param  {Event} event - event
	     * @return {Boolean} Whether or not direction is left
	     */


	    Interact.prototype.isLeftDirection = function isLeftDirection(axis, event) {
	        return event.deltaX < 0 || !event.deltaX && event.wheelDeltaX < 0 || axis === 1 && event.detail < 0;
	    };

	    /**
	     * Get event helper, applies event-fix too
	     * @param  {Event} e - event
	     * @return {Event} cross-device event
	     */


	    Interact.prototype.getEvent = function getEvent(e) {
	        if (e.touches && e.touches.length === 0) return e.changedTouches || e;
	        return e.touches || e.changedTouches || e;
	    };

	    return Interact;
	}();

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TileMap = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Helper = __webpack_require__(3);

	var _Events = __webpack_require__(5);

	var _Point = __webpack_require__(6);

	var _Publisher = __webpack_require__(13);

	var _StateHandler = __webpack_require__(39);

	var _Rectangle = __webpack_require__(16);

	var _View = __webpack_require__(65);

	var _Marker = __webpack_require__(61);

	var _DataEnrichment = __webpack_require__(36);

	var _ToolTip = __webpack_require__(64);

	var _Label = __webpack_require__(59);

	var _MarkerClusterer = __webpack_require__(62);

	var _MapInformation = __webpack_require__(38);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @author Michael Duve <mduve@designmail.net>
	 * @file Represents a map with its different levels of zooms and markers
	 * @copyright Michael Duve 2016
	 */

	var TileMap = exports.TileMap = function () {
	    _createClass(TileMap, [{
	        key: 'width',


	        /**
	         * Returns width of container
	         * @return {Number} - width of container
	         */
	        get: function get() {
	            return this.container.getBoundingClientRect().width;
	        }

	        /**
	         * Returns height of container
	         * @return {Number} - height of container
	         */

	    }, {
	        key: 'height',
	        get: function get() {
	            return this.container.getBoundingClientRect().height;
	        }

	        /**
	         * gets current viewport
	         * @return {Rectangle} viewport
	         */

	    }, {
	        key: 'viewport',
	        get: function get() {
	            return new _Rectangle.Rectangle(0, 0, this.width, this.height);
	        }

	        /**
	         * current view
	         * @return {View} view
	         */

	    }, {
	        key: 'view',
	        get: function get() {
	            return this.levelHandler.current.instance;
	        }

	        /**
	         * @constructor
	         * @param  {HTMLElement} container = null - jQuery-object holding the container
	         * @param  {Object} tilesData = {} - json object representing data of TileMap
	         * @param  {Object} settings = {} - json object representing settings of TileMap
	         * @param  {Number} id = 0 - id of parent instance
	         * @return {TileMap} instance of TileMap for chaining
	         */

	    }]);

	    function TileMap(_ref) {
	        var _this = this;

	        var _ref$container = _ref.container;
	        var container = _ref$container === undefined ? null : _ref$container;
	        var _ref$tilesData = _ref.tilesData;
	        var tilesData = _ref$tilesData === undefined ? {} : _ref$tilesData;
	        var _ref$settings = _ref.settings;
	        var settings = _ref$settings === undefined ? {} : _ref$settings;
	        var id = _ref.id;

	        _classCallCheck(this, TileMap);

	        if (!container) throw Error("You must define a container to initialize a TileMap");

	        this.container = container;
	        this.id = id;
	        this.settings = settings;

	        this.initialize(tilesData);
	        this.initializeCanvas();

	        _Helper.Helper.forEach(this.imgData, function (element, i) {
	            var currentLevel = {
	                value: element,
	                level: i,
	                instance: _this.createViewFromData(element),
	                bounds: settings.bounds,
	                center: settings.center,
	                zoom: settings.zoom
	            };
	            _this.levels.push(currentLevel);
	        });

	        this.levelHandler = new _StateHandler.StateHandler(this.levels);
	        this.levelHandler.changeTo(this.settings.level);

	        this.appendMarkerContainerToDom();
	        this.initializeLabels();

	        this.bindEvents();
	        this.stateHandler.next();
	        this.resizeCanvas();

	        this.eventManager.publish(_Events.Events.MapInformation.UPDATE, {
	            bounds: this.levelHandler.current.bounds,
	            zoom: this.levelHandler.current.zoom,
	            center: this.levelHandler.current.center
	        });
	        this.view.init();

	        this.reset();

	        window.requestAnimFrame(this.mainLoop.bind(this));

	        return this;
	    }

	    /**
	     * initialize map
	     * @param  {Object} tilesData - data of tiles, markers and labels
	     * @return {TileMap} instance of TileMap for chaining
	     */


	    TileMap.prototype.initialize = function initialize(tilesData) {
	        this.info = new _MapInformation.MapInformation(this.id);
	        this.eventManager = new _Publisher.Publisher(this.id);

	        this.eventManager.publish(_Events.Events.MapInformation.UPDATE, {
	            viewport: this.viewport
	        });

	        this.imgData = tilesData[_Events.Events.TileMap.IMG_DATA_NAME];
	        this.markerData = tilesData[_Events.Events.TileMap.MARKER_DATA_NAME];
	        this.labelData = tilesData[_Events.Events.TileMap.LABEL_DATA_NAME];

	        this.stateHandler = new _StateHandler.StateHandler([{
	            value: 0,
	            description: "start"
	        }, {
	            value: 1,
	            description: "view-initialized"
	        }, {
	            value: 2,
	            description: "marker-initialized"
	        }, {
	            value: 3,
	            description: "tooltip-initialized"
	        }]);

	        this.templates = this.settings.tooltip ? this.settings.tooltip.templates : {};
	        this.templates = _DataEnrichment.DataEnrichment.tooltip(this.templates);

	        this.levels = [];
	        this.clusterHandlingTimeout = null;

	        this.lastFrameMillisecs = Date.now();
	        this.deltaTiming = 1.0;
	        this.bestDeltaTiming = 1000.0 / 60.0;

	        this.velocity = new _Point.Point();
	        this.drawIsNeeded = false;

	        this.initial = {
	            bounds: this.settings.bounds,
	            center: this.settings.center,
	            level: this.settings.level,
	            zoom: this.settings.zoom
	        };

	        return this;
	    };

	    /**
	     * check if level can fit boundaries and if not iterate to closer level
	     * @return {Number} level
	     */


	    TileMap.prototype.checkIfLevelCanFitBounds = function checkIfLevelCanFitBounds() {
	        var newLevel = this.settings.level;
	        var fits = false;

	        while (!fits) {
	            var initialView = this.levelHandler.states[newLevel].instance;
	            var newView = initialView.originalMapView.clone.scale(initialView.maxZoom).getDistortedRect(this.info.getDistortionFactorForLatitude(this.initial.center));

	            if (!newView.containsRect(this.viewport)) {
	                newLevel++;
	            } else {
	                fits = true;
	            }
	        }
	        return newLevel;
	    };

	    /**
	     * resets view to initial state
	     * @return {TileMap} instance of TileMap for chaining
	     */


	    TileMap.prototype.reset = function reset() {
	        var newLevel = this.checkIfLevelCanFitBounds();
	        if (this.levelHandler.current.level !== this.settings.level) this.levelHandler.changeTo(newLevel);
	        this.eventManager.publish(_Events.Events.MapInformation.UPDATE, {
	            view: this.levelHandler.current.instance.view,
	            bounds: this.levelHandler.current.bounds,
	            level: this.levelHandler.current.level,
	            center: this.levelHandler.current.center,
	            zoomFactor: this.initial.zoom
	        });
	        this.view.reset(this.initial.center, this.initial.zoom);
	        this.clusterHandler();
	        this.redraw();
	        return this;
	    };

	    /**
	     * initialize all labels
	     * @return {TileMap} instance of TileMap for chaining
	     */


	    TileMap.prototype.initializeLabels = function initializeLabels() {
	        var _this2 = this;

	        this.labelData = this.enrichLabelData(this.labelData);
	        this.labels = [];
	        _Helper.Helper.forEach(this.labelData, function (label) {
	            var currentLabel = new _Label.Label({
	                context: _this2.canvasContext,
	                id: _this2.id,
	                settings: label
	            });
	            _this2.labels.push(currentLabel);
	        });
	        return this;
	    };

	    /**
	     * creates a View from specified parameters
	     * @param  {Object} data - specified data
	     * @return {View} created View
	     */


	    TileMap.prototype.createViewFromData = function createViewFromData(data) {
	        return new _View.View({
	            id: this.id,
	            view: new _Rectangle.Rectangle(0, 0, data.dimensions.width, data.dimensions.height),
	            data: data,
	            maxZoom: data.zoom ? data.zoom.max : 1,
	            minZoom: data.zoom ? data.zoom.min : 1,
	            context: this.canvasContext,
	            centerSmallMap: this.settings.centerSmallMap,
	            limitToBounds: this.settings.limitToBounds || this.levelHandler.current.bounds
	        });
	    };

	    /**
	     * reposition marker container
	     * @return {View} instance of View for chaining
	     */


	    TileMap.prototype.repositionMarkerContainer = function repositionMarkerContainer() {
	        if (this.markerContainer) {
	            var newSize = this.view.view.getDistortedRect(this.view.distortionFactor);
	            var width = parseInt(newSize.width, 10);
	            var height = parseInt(newSize.height, 10);
	            var left = parseInt(newSize.left + this.view.offsetToCenter, 10);
	            var top = parseInt(newSize.top, 10);
	            _Helper.Helper.css(this.markerContainer, {
	                "width": width + 'px',
	                "height": height + 'px',
	                "transform": 'translate3d(' + left + 'px, ' + top + 'px, 0px)',
	                "-ms-transform": 'translate(' + left + 'px, ' + top + 'px)'

	            });
	        }
	        return this;
	    };

	    /**
	     * enrich marker data
	     * @param  {Object} markerData - data of markers
	     * @return {Object} enriched marker data
	     */


	    TileMap.prototype.enrichMarkerData = function enrichMarkerData(markerData) {
	        return _DataEnrichment.DataEnrichment.marker(markerData);
	    };

	    /**
	     * enrich label data
	     * @param  {Object} labelData - data of labels
	     * @return {Object} enriched label data
	     */


	    TileMap.prototype.enrichLabelData = function enrichLabelData(labelData) {
	        return _DataEnrichment.DataEnrichment.label(labelData);
	    };

	    /**
	     * initializes all markers
	     * @param  {Object} markerData - data of all markers
	     * @return {TileMap} instance of TileMap for chaining
	     */


	    TileMap.prototype.initializeMarkers = function initializeMarkers() {
	        var _this3 = this;

	        if (this.markerData && this.markerData.length) {
	            (function () {
	                var markers = [];
	                _this3.markerData = _this3.enrichMarkerData(_this3.markerData);
	                _Helper.Helper.forEach(_this3.markerData, function (currentData) {
	                    markers.push(new _Marker.Marker({
	                        data: currentData,
	                        container: _this3.markerContainer,
	                        id: _this3.id
	                    }));
	                });
	                markers = markers.sort(function (a, b) {
	                    return b.latlng.lat - a.latlng.lat !== 0 ? b.latlng.lat - a.latlng.lat : b.latlng.lng - a.latlng.lng;
	                });
	                _Helper.Helper.forEach(markers, function (marker, i) {
	                    marker.icon.style.zIndex = i;
	                });

	                _this3.markerClusterer = new _MarkerClusterer.MarkerClusterer({
	                    markers: markers,
	                    id: _this3.id,
	                    container: _this3.markerContainer
	                });
	            })();
	        }
	        this.stateHandler.next();
	        return this;
	    };

	    /**
	     * append marker container to DOM
	    ´     * @return {TileMap} instance of TileMap for chaining
	     */


	    TileMap.prototype.appendMarkerContainerToDom = function appendMarkerContainerToDom() {
	        if (this.markerData && this.markerData.length) {
	            this.markerContainer = document.createElement("div");
	            this.markerContainer.classList.add("marker-container");
	            this.container.appendChild(this.markerContainer);
	        }
	        return this;
	    };

	    /**
	     * creates an instance of ToolTip
	     * @return {TileMap} instance of TileMap for chaining
	     */


	    TileMap.prototype.createTooltipContainer = function createTooltipContainer() {
	        this.tooltip = new _ToolTip.ToolTip({
	            container: this.container.parentNode,
	            id: this.id,
	            templates: this.templates
	        });
	        this.stateHandler.next();
	        return this;
	    };

	    /**
	     * bind all events
	     * @return {TileMap} instance of TileMap for chaining
	     */


	    TileMap.prototype.bindEvents = function bindEvents() {
	        var _this4 = this;

	        this.eventManager.subscribe(_Events.Events.TileMap.RESIZE, function () {
	            _this4.resize();
	        });
	        this.eventManager.subscribe(_Events.Events.TileMap.DRAW, function () {
	            _this4.redraw();
	        });
	        this.eventManager.subscribe(_Events.Events.View.THUMB_LOADED, function () {
	            _this4.thumbLoaded();
	        });
	        this.eventManager.subscribe(_Events.Events.TileMap.ZOOM_TO_BOUNDS, function (data) {
	            _this4.zoomToBounds(data.center, data.boundingBox);
	        });
	        this.eventManager.subscribe(_Events.Events.TileMap.NEXT_LEVEL, function () {
	            _this4.changelevel(1);
	        });
	        this.eventManager.subscribe(_Events.Events.TileMap.PREVIOUS_LEVEL, function () {
	            _this4.changelevel(-1);
	        });
	        return this;
	    };

	    /**
	     * zoom to boundaries on specified center
	     * @param  {LatLng} center - zoom to position
	     * @param  {Rectangle} boundingBox - specified bounds to toom to
	     * @return {TileMap} instance of TileMap for chaining
	     */


	    TileMap.prototype.zoomToBounds = function zoomToBounds(center, boundingBox) {
	        var zoomIncrease = Math.min(this.view.viewport.width / boundingBox.width, this.view.viewport.height / boundingBox.height);
	        while (zoomIncrease > 0) {
	            var possibleZoomOnLevel = this.view.maxZoom - this.view.zoomFactor;
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
	    };

	    /**
	     * called when thumbnail image was loaded
	     * @return {TileMap} instance of TileMap for chaining
	     */


	    TileMap.prototype.thumbLoaded = function thumbLoaded() {
	        this.redraw();
	        if (this.stateHandler.current.value < 2) {
	            this.initializeMarkers();
	            if (this.markerData && this.markerData.length) this.createTooltipContainer();
	        }
	        return this;
	    };

	    /**
	     * set new view to old views position and zoomlevel
	     * @param {LatLng} center - old center
	     * @param {Number} zoom - old zoom,
	     * @return {TileMap} instance of TileMap for chaining
	     */


	    TileMap.prototype.setViewToOldView = function setViewToOldView(center, zoom) {
	        this.eventManager.publish(_Events.Events.MapInformation.UPDATE, {
	            zoomFactor: zoom
	        });
	        this.view.zoom(0, this.view.viewport.center);
	        this.view.view.setCenter(center);
	        this.redraw();
	        return this;
	    };

	    /**
	     * change level up or down
	     * @param  {Number} direction - either 1 or -1
	     * @return {TileMap} instance of TileMap for chaining
	     */


	    TileMap.prototype.changelevel = function changelevel(direction) {
	        var lastLevel = this.levelHandler.current.level,
	            lastCenter = this.view.view.center;
	        var extrema = void 0;
	        if (direction < 0) {
	            this.levelHandler.previous();
	            extrema = this.view.maxZoom;
	        } else {
	            this.levelHandler.next();
	            extrema = this.view.minZoom;
	        }
	        this.eventManager.publish(_Events.Events.MapInformation.UPDATE, {
	            bounds: this.levelHandler.current.bounds,
	            zoom: this.levelHandler.current.zoom,
	            center: this.levelHandler.current.center
	        });
	        if (!this.view.isInitialized) {
	            this.view.init();
	        }
	        if (lastLevel !== this.levelHandler.current.level) {
	            this.setViewToOldView(lastCenter, extrema);
	        }
	        this.eventManager.publish(_Events.Events.MapInformation.UPDATE, {
	            level: this.levelHandler.current.level
	        });
	        return this;
	    };

	    /**
	     * initializes the canvas, adds to DOM
	     * @return {TileMap} instance of TileMap for chaining
	     */


	    TileMap.prototype.initializeCanvas = function initializeCanvas() {
	        this.canvas = document.createElement("canvas");
	        this.canvas.classList.add("mjs-canvas");
	        this.container.appendChild(this.canvas);
	        this.canvasContext = this.canvas.getContext("2d");
	        return this;
	    };

	    /**
	     * complete clear and draw of all visible tiles
	     * @return {TileMap} instance of TileMap for chaining
	     */


	    TileMap.prototype.redraw = function redraw() {
	        this.drawIsNeeded = true;
	        return this;
	    };

	    /**
	     * Handles resizing of TileMap
	     * @return {TileMap} instance of TileMap for chaining
	     */


	    TileMap.prototype.resize = function resize() {
	        return this.resizeCanvas().resizeView().redraw();
	    };

	    /**
	     * move view by delta
	     * @param  {Point} delta - delta of x/y
	     * @return {TileMap} instance of TileMap for chaining
	     */


	    TileMap.prototype.moveView = function moveView(delta) {
	        this.view.moveView(delta);
	        this.redraw();
	        return this;
	    };

	    /**
	     * handles zoom by factor and position
	     * @param  {Number} factor - difference in zoom scale
	     * @param  {Point} position - position to zoom to
	     * @return {TileMap} instance of TileMap for chaining
	     */


	    TileMap.prototype.zoom = function zoom(factor, position) {
	        if (factor !== 0) {
	            var levelChanged = this.view.zoom(factor, position);
	            if (levelChanged === 1 && this.levelHandler.hasNext() || levelChanged === -1 && this.levelHandler.hasPrevious()) {
	                this.zoom(factor, position);
	            }
	            this.clusterHandler();
	            this.redraw();
	        }
	        return this;
	    };

	    /**
	     * handles creation of clusters
	     * @return {TileMap} instance of TileMap for chaining
	     */


	    TileMap.prototype.clusterHandler = function clusterHandler() {
	        var _this5 = this;

	        if (this.clusterHandlingTimeout) {
	            this.clusterHandlingTimeout = clearTimeout(this.clusterHandlingTimeout);
	        }
	        this.clusterHandlingTimeout = setTimeout(function () {
	            if (_this5.levelHandler.hasNext()) {
	                _this5.eventManager.publish(_Events.Events.MarkerClusterer.CLUSTERIZE);
	            } else {
	                _this5.eventManager.publish(_Events.Events.MarkerClusterer.UNCLUSTERIZE);
	            }
	        }, 150);
	        return this;
	    };

	    /**
	     * resizes the canvas sizes
	     * @return {TileMap} instance of TileMap for chaining
	     */


	    TileMap.prototype.resizeCanvas = function resizeCanvas() {
	        this.canvas.width = this.width;
	        this.canvas.height = this.height;
	        return this;
	    };

	    /**
	     * Handles resizing of view
	     * @return {TileMap} instance of TileMap for chaining
	     */


	    TileMap.prototype.resizeView = function resizeView() {
	        this.eventManager.publish(_Events.Events.MapInformation.UPDATE, {
	            viewport: this.viewport
	        });
	        return this;
	    };

	    /**
	     * main draw call
	     */


	    TileMap.prototype.mainLoop = function mainLoop() {
	        var _this6 = this;

	        var currentMillisecs = Date.now();
	        var deltaMillisecs = currentMillisecs - this.lastFrameMillisecs;
	        this.lastFrameMillisecs = currentMillisecs;
	        this.deltaTiming = _Helper.Helper.clamp(deltaMillisecs / this.bestDeltaTiming, 1, 4);

	        if (this.velocity.length >= 0.2) this.moveView(this.velocity.multiply(0.9).clone.multiply(this.deltaTiming));

	        this.view.checkBoundaries();

	        if (this.drawIsNeeded) {
	            this.canvasContext.clearRect(0, 0, this.width, this.height);
	            this.view.draw();
	            this.drawLabels();
	            this.repositionMarkerContainer();
	            this.drawIsNeeded = false;
	        }

	        window.requestAnimFrame(function () {
	            return _this6.mainLoop();
	        });
	    };

	    /**
	     * draw all labels
	     * @return {TileMap} instance of TileMap for chaining
	     */


	    TileMap.prototype.drawLabels = function drawLabels() {
	        _Helper.Helper.forEach(this.labels, function (label) {
	            return label.draw();
	        });
	        return this;
	    };

	    return TileMap;
	}();

	/**
	 * request animation frame browser polyfill
	 * @return {Function} supported requestAnimationFrame-function
	 */


	window.requestAnimFrame = function () {
	    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
	        window.setTimeout(callback, 1000 / 60);
	    };
	}();

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(87);
	__webpack_require__(46);
	__webpack_require__(51);
	__webpack_require__(50);
	__webpack_require__(48);
	__webpack_require__(49);
	__webpack_require__(47);
	__webpack_require__(105);
	module.exports = __webpack_require__(10);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(104);
	__webpack_require__(92);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(93);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(91);
	__webpack_require__(90);
	module.exports = __webpack_require__(10).Array;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(106);
	__webpack_require__(96);
	__webpack_require__(100);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(46);
	__webpack_require__(51);
	__webpack_require__(50);
	__webpack_require__(48);
	__webpack_require__(49);
	__webpack_require__(47);
	__webpack_require__(97);
	__webpack_require__(99);
	__webpack_require__(101);
	__webpack_require__(98);

	module.exports = __webpack_require__(10).Object;

/***/ },
/* 57 */
/***/ function(module, exports) {

	/*
	 * classList.js: Cross-browser full element.classList implementation.
	 * 2014-07-23
	 *
	 * By Eli Grey, http://eligrey.com
	 * Public Domain.
	 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
	 */

	/*global self, document, DOMException */

	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

	/* Copied from MDN:
	 * https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
	 */

	if ("document" in window.self) {

	  // Full polyfill for browsers with no classList support
	  // Including IE < Edge missing SVGElement.classList
	  if (!("classList" in document.createElement("_"))
	    || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {

	  (function (view) {

	    "use strict";

	    if (!('Element' in view)) return;

	    var
	        classListProp = "classList"
	      , protoProp = "prototype"
	      , elemCtrProto = view.Element[protoProp]
	      , objCtr = Object
	      , strTrim = String[protoProp].trim || function () {
	        return this.replace(/^\s+|\s+$/g, "");
	      }
	      , arrIndexOf = Array[protoProp].indexOf || function (item) {
	        var
	            i = 0
	          , len = this.length
	        ;
	        for (; i < len; i++) {
	          if (i in this && this[i] === item) {
	            return i;
	          }
	        }
	        return -1;
	      }
	      // Vendors: please allow content code to instantiate DOMExceptions
	      , DOMEx = function (type, message) {
	        this.name = type;
	        this.code = DOMException[type];
	        this.message = message;
	      }
	      , checkTokenAndGetIndex = function (classList, token) {
	        if (token === "") {
	          throw new DOMEx(
	              "SYNTAX_ERR"
	            , "An invalid or illegal string was specified"
	          );
	        }
	        if (/\s/.test(token)) {
	          throw new DOMEx(
	              "INVALID_CHARACTER_ERR"
	            , "String contains an invalid character"
	          );
	        }
	        return arrIndexOf.call(classList, token);
	      }
	      , ClassList = function (elem) {
	        var
	            trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
	          , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
	          , i = 0
	          , len = classes.length
	        ;
	        for (; i < len; i++) {
	          this.push(classes[i]);
	        }
	        this._updateClassName = function () {
	          elem.setAttribute("class", this.toString());
	        };
	      }
	      , classListProto = ClassList[protoProp] = []
	      , classListGetter = function () {
	        return new ClassList(this);
	      }
	    ;
	    // Most DOMException implementations don't allow calling DOMException's toString()
	    // on non-DOMExceptions. Error's toString() is sufficient here.
	    DOMEx[protoProp] = Error[protoProp];
	    classListProto.item = function (i) {
	      return this[i] || null;
	    };
	    classListProto.contains = function (token) {
	      token += "";
	      return checkTokenAndGetIndex(this, token) !== -1;
	    };
	    classListProto.add = function () {
	      var
	          tokens = arguments
	        , i = 0
	        , l = tokens.length
	        , token
	        , updated = false
	      ;
	      do {
	        token = tokens[i] + "";
	        if (checkTokenAndGetIndex(this, token) === -1) {
	          this.push(token);
	          updated = true;
	        }
	      }
	      while (++i < l);

	      if (updated) {
	        this._updateClassName();
	      }
	    };
	    classListProto.remove = function () {
	      var
	          tokens = arguments
	        , i = 0
	        , l = tokens.length
	        , token
	        , updated = false
	        , index
	      ;
	      do {
	        token = tokens[i] + "";
	        index = checkTokenAndGetIndex(this, token);
	        while (index !== -1) {
	          this.splice(index, 1);
	          updated = true;
	          index = checkTokenAndGetIndex(this, token);
	        }
	      }
	      while (++i < l);

	      if (updated) {
	        this._updateClassName();
	      }
	    };
	    classListProto.toggle = function (token, force) {
	      token += "";

	      var
	          result = this.contains(token)
	        , method = result ?
	          force !== true && "remove"
	        :
	          force !== false && "add"
	      ;

	      if (method) {
	        this[method](token);
	      }

	      if (force === true || force === false) {
	        return force;
	      } else {
	        return !result;
	      }
	    };
	    classListProto.toString = function () {
	      return this.join(" ");
	    };

	    if (objCtr.defineProperty) {
	      var classListPropDesc = {
	          get: classListGetter
	        , enumerable: true
	        , configurable: true
	      };
	      try {
	        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	      } catch (ex) { // IE 8 doesn't support enumerable:true
	        if (ex.number === -0x7FF5EC54) {
	          classListPropDesc.enumerable = false;
	          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	        }
	      }
	    } else if (objCtr[protoProp].__defineGetter__) {
	      elemCtrProto.__defineGetter__(classListProp, classListGetter);
	    }

	    }(window.self));

	    } else {
	    // There is full or partial native classList support, so just check if we need
	    // to normalize the add/remove and toggle APIs.

	    (function () {
	      "use strict";

	      var testElement = document.createElement("_");

	      testElement.classList.add("c1", "c2");

	      // Polyfill for IE 10/11 and Firefox <26, where classList.add and
	      // classList.remove exist but support only one argument at a time.
	      if (!testElement.classList.contains("c2")) {
	        var createMethod = function(method) {
	          var original = DOMTokenList.prototype[method];

	          DOMTokenList.prototype[method] = function(token) {
	            var i, len = arguments.length;

	            for (i = 0; i < len; i++) {
	              token = arguments[i];
	              original.call(this, token);
	            }
	          };
	        };
	        createMethod('add');
	        createMethod('remove');
	      }

	      testElement.classList.toggle("c3", false);

	      // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	      // support the second argument.
	      if (testElement.classList.contains("c3")) {
	        var _toggle = DOMTokenList.prototype.toggle;

	        DOMTokenList.prototype.toggle = function(token, force) {
	          if (1 in arguments && !this.contains(token) === !force) {
	            return force;
	          } else {
	            return _toggle.call(this, token);
	          }
	        };

	      }

	      testElement = null;
	    }());
	  }
	}


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Cluster = undefined;

	var _Events = __webpack_require__(5);

	var _Helper = __webpack_require__(3);

	var _Point = __webpack_require__(6);

	var _Drawable2 = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @author Michael Duve <mduve@designmail.net>
	 * @file represents a cluster of markers
	 * @copyright Michael Duve 2016
	 */

	var Cluster = exports.Cluster = function (_Drawable) {
	    _inherits(Cluster, _Drawable);

	    /**
	     * @constructor
	     * @param  {HTMLDivElement} container =  null - parent container of
	     * @param  {Number} id = 0 - id of parent instance
	     * @return {Cluster} instance of Cluster for chaining
	     */

	    function Cluster(_ref) {
	        var _ret;

	        var _ref$container = _ref.container;
	        var container = _ref$container === undefined ? null : _ref$container;
	        var _ref$id = _ref.id;
	        var id = _ref$id === undefined ? 0 : _ref$id;

	        _classCallCheck(this, Cluster);

	        var _this = _possibleConstructorReturn(this, _Drawable.call(this, id));

	        _this.uniqueID = Cluster.count;
	        Cluster.count++;
	        _this.markers = [];
	        _this.container = container;
	        return _ret = _this, _possibleConstructorReturn(_this, _ret);
	    }

	    /**
	     * initialize a cluster
	     * @return {Cluster} instance of Cluster for chaining
	     */


	    Cluster.prototype.init = function init() {
	        if (this.markers.length === 1) {
	            _Helper.Helper.show(this.markers[0].icon);
	        } else {
	            this.createClusterMarker();
	        }
	        return this;
	    };

	    /**
	     * create cluster for markers
	     * @return {Cluster} instance of Cluster for chaining
	     */


	    Cluster.prototype.createClusterMarker = function createClusterMarker() {
	        var p = void 0;
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = this.markers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var marker = _step.value;

	                _Helper.Helper.hide(marker.icon);
	                var currentPos = new _Point.Point(parseFloat(marker.icon.style.left), parseFloat(marker.icon.style.top));
	                p = !p ? currentPos : p.add(currentPos);
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }

	        p.divide(this.markers.length);

	        this.cluster = document.createElement("div");
	        this.cluster.innerHTML = this.markers.length;
	        this.cluster.classList.add("cluster");
	        _Helper.Helper.css(this.cluster, {
	            "left": p.x + '%',
	            "top": p.y + '%',
	            "transform": "translateZ(0)"
	        });
	        this.cluster.setAttribute("data-id", 'cluster-' + this.uniqueID);
	        this.container.appendChild(this.cluster);
	        this.bindEvents();
	        return this;
	    };

	    /**
	     * bind all events
	     * @return {Cluster} instance of Cluster for chaining
	     */


	    Cluster.prototype.bindEvents = function bindEvents() {
	        this.eventManager.subscribe('cluster-' + this.uniqueID, this.action.bind(this));
	        return this;
	    };

	    /**
	     * unbind all events
	     * @return {Cluster} instance of Cluster for chaining
	     */


	    Cluster.prototype.unbindEvents = function unbindEvents() {
	        this.eventManager.unsubscribe('cluster-' + this.uniqueID, this.action.bind(this));
	        return this;
	    };

	    /**
	     * execute bound action of cluster
	     * @return {Cluster} instance of Cluster for chaining
	     */


	    Cluster.prototype.action = function action() {
	        var center = void 0;
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;

	        try {
	            for (var _iterator2 = this.markers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                var marker = _step2.value;

	                center = !center ? marker.latlng : center.add(marker.latlng);
	            }
	        } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                    _iterator2.return();
	                }
	            } finally {
	                if (_didIteratorError2) {
	                    throw _iteratorError2;
	                }
	            }
	        }

	        center.divide(this.markers.length);
	        this.eventManager.publish(_Events.Events.TileMap.ZOOM_TO_BOUNDS, {
	            boundingBox: this.boundingBox,
	            center: center
	        });
	        return this;
	    };

	    /**
	     * adds a marker to the cluster
	     * @param {Marker} marker - specified marker to be added to the cluster
	     * @return {Cluster} instance of Cluster for chaining
	     */


	    Cluster.prototype.addMarker = function addMarker(marker) {
	        this.markers.push(marker);
	        this.boundingBox = !this.boundingBox ? marker.boundingBox : this.boundingBox;
	        return this;
	    };

	    /**
	     * remove this cluster
	     * @return {Cluster} instance of Cluster for chaining
	     */


	    Cluster.prototype.removeFromDOM = function removeFromDOM() {
	        if (this.markers.length > 1) {
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = this.markers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var marker = _step3.value;

	                    _Helper.Helper.show(marker.icon);
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }

	            this.cluster.parentNode.removeChild(this.cluster);
	        }
	        this.unbindEvents();
	        return this;
	    };

	    return Cluster;
	}(_Drawable2.Drawable);

	/**
	 * counts all clusters
	 * @type {Number}
	 */


		Cluster.count = 0;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Label = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Helper = __webpack_require__(3);

	var _Drawable2 = __webpack_require__(15);

	var _LatLng = __webpack_require__(19);

	var _Point = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @author Michael Duve <mduve@designmail.net>
	 * @file shows an icon and/or a text at given position
	 * @copyright Michael Duve 2016
	 */

	var Label = exports.Label = function (_Drawable) {
	    _inherits(Label, _Drawable);

	    _createClass(Label, [{
	        key: 'position',


	        /**
	         * position of label
	         * @return {Point} position
	         */
	        get: function get() {
	            return this.info.convertLatLngToPoint(this.nearestPositionToCenter).translate(this.view.x, this.view.y).multiply(this.distortionFactor, 1).translate(this.offsetToCenter, 0);
	        }

	        /**
	         * find nearest position to mapcenter
	         * @return {LatLng} nearest position
	         */

	    }, {
	        key: 'nearestPositionToCenter',
	        get: function get() {
	            return this.latlng instanceof _LatLng.LatLng ? this.latlng : this.getNearestPositionToCenter();
	        }

	        /**
	        /**
	         * @constructor
	         * @param  {Object} settings = {} - settings for label
	         * @param  {CanvasRenderingContext2D} context = null - canvas context
	         * @param  {Number} id = 0 - id of parent instance
	         * @return {Label} instance of Label for chaining
	         */

	    }]);

	    function Label(_ref) {
	        var _ret;

	        var _ref$settings = _ref.settings;
	        var settings = _ref$settings === undefined ? {} : _ref$settings;
	        var _ref$context = _ref.context;
	        var context = _ref$context === undefined ? null : _ref$context;
	        var _ref$id = _ref.id;
	        var id = _ref$id === undefined ? 0 : _ref$id;

	        _classCallCheck(this, Label);

	        var _this = _possibleConstructorReturn(this, _Drawable.call(this, id));

	        _this.context = context;

	        _this.latlng = settings.position;
	        _this.text = settings.text;
	        _this.icon = settings.icon;
	        _this.content = settings.content;
	        _this.visibility = settings.visibility;
	        _this.offset = new _Point.Point();

	        if (_this.icon && _this.icon.type === "circle") _this.drawIconType = _this.drawCircleIcon(_this.icon.size);else if (_this.icon && _this.icon.type === "square") _this.drawIconType = _this.drawSquareIcon(_this.icon.size);else if (_this.icon && _this.icon.type === "image") {
	            _this.drawIconType = function () {};
	            _Helper.Helper.loadImage(_this.icon.url, function (img) {
	                _this.drawIconType = _this.drawImageIcon(img, _this.icon.size, _this.icon.offset);
	            });
	        }
	        _this.drawElements = _this.decideWhatToDraw(_this.text, _this.icon);

	        return _ret = _this, _possibleConstructorReturn(_this, _ret);
	    }

	    /**
	     * find nearest position to mapcenter
	     * @return {LatLng} nearest position
	     */


	    Label.prototype.getNearestPositionToCenter = function getNearestPositionToCenter() {
	        var _this2 = this;

	        var oldPos = this.latlng[0];
	        this.latlng = this.latlng.sort(function (a, b) {
	            var c = a.clone.multiply(1, _this2.distortionFactor);
	            var d = b.clone.multiply(1, _this2.distortionFactor);
	            var center = _this2.centerPosition.clone.multiply(1, _this2.distortionFactor);
	            return center.distance(c) - center.distance(d);
	        });
	        return this.latlng[0].distance(oldPos) > 0.01 ? this.latlng[0] : oldPos;
	    };

	    /**
	     * draw a label
	     * @return {Label} instance of Label for chaining
	     */


	    Label.prototype.draw = function draw() {
	        if (this.level >= this.visibility.min && this.level <= this.visibility.max) {
	            var pos = this.position;
	            var textPos = pos.clone.add(this.text.offset);

	            this.context.beginPath();
	            this.drawElements(pos, textPos);
	            this.context.closePath();
	        }
	        return this;
	    };

	    /**
	     * currying function for drawing text, icon or both
	     * @param  {Object} text - data for text
	     * @param  {Object} icon - data for icon
	     * @return {Function} function to be called on draw
	     */


	    Label.prototype.decideWhatToDraw = function decideWhatToDraw(text, icon) {
	        var _this3 = this;

	        if (text && icon) {
	            return function (pos, textPos) {
	                _this3.drawText(textPos);
	                _this3.drawIcon(pos);
	            };
	        } else if (icon) {
	            return function (pos) {
	                return _this3.drawIcon(pos);
	            };
	        } else if (text) {
	            return function (pos, textPos) {
	                return _this3.drawText(textPos);
	            };
	        }
	    };

	    /**
	     * draw text of label
	     * @param  {Point} pos - origin of label
	     */


	    Label.prototype.drawText = function drawText(pos) {
	        this.context.textAlign = this.text.align;
	        this.context.textBaseline = this.text.baseline;
	        this.context.font = this.text.font;
	        this.context.fillStyle = this.text.color;
	        this.context.fillText(this.text.content, pos.x, pos.y);
	    };

	    /**
	     * draw icon of label
	     * @param  {Point} pos - origin of label
	     */


	    Label.prototype.drawIcon = function drawIcon(pos) {
	        this.context.fillStyle = this.icon.color;
	        this.drawIconType(pos);
	        this.context.fill();
	    };

	    /**
	     * currying function for drawing a circle
	     * @param  {Number} size - size of circle
	     * @return {Function} function for drawing circle icon
	     */


	    Label.prototype.drawCircleIcon = function drawCircleIcon(size) {
	        var _this4 = this;

	        return function (pos) {
	            return _this4.context.arc(pos.x, pos.y, size, 0, 2 * Math.PI, false);
	        };
	    };

	    /**
	     * currying function for drawing a square
	     * @param  {Number} size - size of square
	     * @return {Function} function for drawing square icon
	     */


	    Label.prototype.drawSquareIcon = function drawSquareIcon(size) {
	        var _this5 = this;

	        return function (pos) {
	            return _this5.context.rect(pos.x, pos.y, size, size);
	        };
	    };

	    /**
	     * currying function for drawing an image
	     * @param  {Image} image - image to be drawn
	     * @param  {Point} size - dimension of image
	     * @param  {Point} offset - offset of image
	     * @return {Function} function for drawing image icon
	     */


	    Label.prototype.drawImageIcon = function drawImageIcon(image, size, offset) {
	        var _this6 = this;

	        this.offset = offset;
	        return function (pos) {
	            return _this6.context.drawImage(image, pos.x + offset.x, pos.y + offset.y, size.x, size.y);
	        };
	    };

	    return Label;
	}(_Drawable2.Drawable);

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MappedJS = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	__webpack_require__(54);

	__webpack_require__(56);

	__webpack_require__(55);

	var _Helper = __webpack_require__(3);

	var _Events = __webpack_require__(5);

	var _Publisher = __webpack_require__(13);

	var _TileMap = __webpack_require__(53);

	var _DataEnrichment = __webpack_require__(36);

	var _Interact = __webpack_require__(52);

	var _Point = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/* Polyfill start */
	__webpack_require__(57);
	/* Polyfill end */

	/**
	 * @author Michael Duve <mduve@designmail.net>
	 * @file application initializes all instances and objects
	 * @copyright Michael Duve 2016
	 */

	var MappedJS = exports.MappedJS = function () {

	    /**
	     * @constructor
	     * @param  {String|HTMLElement} container=".mjs" - Container, either string or dom-object
	     * @param  {String|Object} mapData={} - data of map tiles, can be json or path to file
	     * @param  {String|Object} markerData={} - data of markers, can be json or path to file
	     * @param  {String|Object} labelData={} - data of markers, can be json or path to file
	     * @param  {Object} mapSettings={} - settings for map, must be json
	     * @return {MappedJS} instance of MappedJS for chaining
	     */

	    function MappedJS(_ref) {
	        var _this = this;

	        var _ref$container = _ref.container;
	        var container = _ref$container === undefined ? ".mjs" : _ref$container;
	        var _ref$mapData = _ref.mapData;
	        var mapData = _ref$mapData === undefined ? {} : _ref$mapData;
	        var _ref$markerData = _ref.markerData;
	        var markerData = _ref$markerData === undefined ? {} : _ref$markerData;
	        var _ref$labelData = _ref.labelData;
	        var labelData = _ref$labelData === undefined ? {} : _ref$labelData;
	        var _ref$mapSettings = _ref.mapSettings;
	        var mapSettings = _ref$mapSettings === undefined ? {} : _ref$mapSettings;

	        _classCallCheck(this, MappedJS);

	        this.initializeSettings(container, mapSettings);

	        this.id = this.generateUniqueID();
	        MappedJS.count++;

	        this.eventManager = new _Publisher.Publisher(this.id);
	        this.initializeData(mapData, function (loadedMapData) {
	            _this.mapData = loadedMapData;
	            _this.initializeData(markerData, function (loadedMarkerData) {
	                _this.mapData = Object.assign(_this.mapData, loadedMarkerData);
	                _this.initializeData(labelData, function (loadedLabelData) {
	                    _this.mapData = Object.assign(_this.mapData, loadedLabelData);
	                    _this.initializeMap();
	                    _this.addControls();

	                    if (mapSettings.legend) _this.addInformationLayer("legend", mapSettings.legend);
	                    if (mapSettings.locator) _this.addInformationLayer("location", mapSettings.locator);

	                    _this.bindEvents();
	                    _this.loadingFinished();
	                });
	            });
	        });

	        this.keyTicks = 0;

	        return this;
	    }

	    /**
	     * generate a unique id for this instance
	     * @return {Number} unique id
	     */


	    MappedJS.prototype.generateUniqueID = function generateUniqueID() {
	        return parseInt(Date.now() * (Math.random() * 10), 10);
	    };

	    /**
	     * add an information layer to container
	     * @param {String} type - type of layer
	     * @param {Object} settings of layer
	     * @return {MappedJS} instance of MappedJS for chaining
	     */


	    MappedJS.prototype.addInformationLayer = function addInformationLayer(type, settings) {
	        var _this2 = this;

	        var infoElement = document.createElement("div");
	        infoElement.classList.add("info-container");
	        infoElement.classList.add(type);
	        infoElement.classList.add(settings.position);
	        infoElement.setAttribute('draggable', 'false');
	        infoElement.setAttribute('unselectable', 'on');
	        if (settings.show) infoElement.classList.add(_Events.Events.General.ACTIVE);

	        _Helper.Helper.loadImage(settings.path, function (img) {
	            infoElement.appendChild(img);
	            img.setAttribute('draggable', 'false');
	            img.setAttribute('unselectable', 'on');
	            _Helper.Helper.addListener(img, "dragstart", function () {
	                return false;
	            });
	            _this2[type] = infoElement;
	            _this2.container.appendChild(infoElement);
	            _Helper.Helper.addListener(infoElement, _Events.Events.Handling.CLICK, function () {
	                if (infoElement.classList.contains(_Events.Events.General.ACTIVE)) {
	                    infoElement.classList.remove(_Events.Events.General.ACTIVE);
	                } else {
	                    infoElement.classList.add(_Events.Events.General.ACTIVE);
	                }
	            });
	        });

	        return this;
	    };

	    /**
	     * add controls (zoom, home) to DOM
	     * @return {MappedJS} instance of MappedJS for chaining
	     */


	    MappedJS.prototype.addControls = function addControls() {
	        if (this.mapSettings.controls) {
	            this.controls = document.createElement("div");
	            this.controls.classList.add("control-container");
	            this.controls.classList.add(this.mapSettings.controls.theme);
	            this.controls.classList.add(this.mapSettings.controls.position);
	            this.zoomIn = document.createElement("div");
	            this.zoomIn.classList.add("control");
	            this.zoomIn.classList.add("zoom-in");
	            this.zoomOut = document.createElement("div");
	            this.zoomOut.classList.add("control");
	            this.zoomOut.classList.add("zoom-out");
	            this.home = document.createElement("div");
	            this.home.classList.add("control");
	            this.home.classList.add("home");
	            this.controls.appendChild(this.home);
	            this.controls.appendChild(this.zoomIn);
	            this.controls.appendChild(this.zoomOut);
	            this.content.appendChild(this.controls);
	        }
	        return this;
	    };

	    /**
	     * initializes the settings and handles errors
	     * @param  {String|HTMLElement} container - Container, either string or DOM object
	     * @param  {Object} settings - list of settings
	     * @return {MappedJS} instance of MappedJS for chaining
	     */


	    MappedJS.prototype.initializeSettings = function initializeSettings(container) {
	        var settings = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	        this.container = typeof container === "string" ? _Helper.Helper.find(container) : container;
	        this.container.classList.add("mappedJS");
	        this.content = document.createElement("div");
	        this.content.classList.add("map-content");
	        this.container.appendChild(this.content);
	        this.container.setAttribute("tabindex", MappedJS.count);
	        this.mapSettings = _DataEnrichment.DataEnrichment.mapSettings(settings);
	        return this;
	    };

	    /**
	     * initializes the data, asynchronous
	     * @param  {Object} mapData - data of map tiles, can be json or path to file
	     * @param  {Helper~requestJSONCallback} cb - called, when data is received
	     * @return {MappedJS} instance of MappedJS for chaining
	     */


	    MappedJS.prototype.initializeData = function initializeData(mapData, cb) {
	        if (typeof mapData === "string") {
	            _Helper.Helper.requestJSON(mapData, function (data) {
	                cb(data);
	            });
	        } else {
	            cb((typeof mapData === "undefined" ? "undefined" : _typeof(mapData)) === "object" ? mapData : null);
	        }
	        return this;
	    };

	    /**
	     * initializes Map module
	     * @return {MappedJS} instance of MappedJS for chaining
	     */


	    MappedJS.prototype.initializeMap = function initializeMap() {
	        this.tileMap = new _TileMap.TileMap({
	            container: this.content,
	            tilesData: this.mapData,
	            id: this.id,
	            settings: this.mapSettings
	        });
	        return this;
	    };

	    /**
	     * get absolute position of a point
	     * @param  {Point} point - specified relative position
	     * @return {Point} absolute position to viewport
	     */


	    MappedJS.prototype.getAbsolutePosition = function getAbsolutePosition(point) {
	        return point.clone.multiply(this.tileMap.width, this.tileMap.height);
	    };

	    /**
	     * initializes interaction
	     * @return {MappedJS} instance of MappedJS for chaining
	     */


	    MappedJS.prototype.initializeInteractForMap = function initializeInteractForMap() {
	        var _this3 = this;

	        this.interact = new _Interact.Interact({
	            container: this.content,
	            autoFireHold: 300,
	            overwriteViewportSettings: true,
	            callbacks: {
	                tap: function tap(data) {
	                    var pos = _this3.getAbsolutePosition(data.positionStart);
	                    _this3.tileMap.velocity = new _Point.Point();
	                    var id = data.target.getAttribute("data-id");
	                    if (id) _this3.eventManager.publish(id, pos);
	                },
	                doubletap: function doubletap(data) {
	                    _this3.tileMap.velocity = new _Point.Point();
	                    _this3.tileMap.zoom(0.2, _this3.getAbsolutePosition(data.positionStart));
	                },
	                pan: function pan(data) {
	                    if (data.target.classList.contains("control")) return false;
	                    var change = data.positionLast.clone.substract(data.positionMove);
	                    _this3.tileMap.velocity = new _Point.Point();
	                    _this3.tileMap.moveView(_this3.getAbsolutePosition(change).multiply(-1, -1));
	                },
	                wheel: function wheel(data) {
	                    var factor = data.delta / 4;
	                    _this3.tileMap.velocity = new _Point.Point();
	                    _this3.tileMap.zoom(factor, _this3.getAbsolutePosition(data.positionStart));
	                },
	                pinch: function pinch(data) {
	                    _this3.tileMap.velocity = new _Point.Point();
	                    _this3.tileMap.zoom(data.difference * 3, _this3.getAbsolutePosition(data.positionMove));
	                },
	                flick: function flick(data) {
	                    _this3.tileMap.velocity = data.velocity.multiply(20);
	                }
	            }
	        });
	        return this;
	    };

	    /**
	     * binds all events to handlers
	     * @return {MappedJS} instance of MappedJS for chaining
	     */


	    MappedJS.prototype.bindEvents = function bindEvents() {
	        var _this4 = this;

	        this.initializeInteractForMap();

	        _Helper.Helper.addListener(window, _Events.Events.Handling.RESIZE, this.resizeHandler.bind(this));

	        _Helper.Helper.addListener(document, _Events.Events.Handling.KEYDOWN, this.keyPress.bind(this));
	        _Helper.Helper.addListener(document, _Events.Events.Handling.KEYUP, this.keyRelease.bind(this));

	        _Helper.Helper.addListener(this.container, _Events.Events.Handling.ENTER, function () {
	            _this4.container.focus();
	        });

	        this.zoomIn.setAttribute("data-id", _Events.Events.General.ZOOM_IN);
	        this.eventManager.subscribe(_Events.Events.General.ZOOM_IN, this.zoomInToCenter.bind(this));

	        this.zoomOut.setAttribute("data-id", _Events.Events.General.ZOOM_OUT);
	        this.eventManager.subscribe(_Events.Events.General.ZOOM_OUT, this.zoomOutToCenter.bind(this));

	        this.home.setAttribute("data-id", _Events.Events.General.HOME);
	        this.eventManager.subscribe(_Events.Events.General.HOME, this.resetToInitialState.bind(this));

	        return this;
	    };

	    /**
	     * resets map to initial state
	     * @return {MappedJS} instance of MappedJS for chaining
	     */


	    MappedJS.prototype.resetToInitialState = function resetToInitialState() {
	        this.tileMap.reset();
	        return this;
	    };

	    /**
	     * zooms into center of map
	     * @return {MappedJS} instance of MappedJS for chaining
	     */


	    MappedJS.prototype.zoomInToCenter = function zoomInToCenter() {
	        this.tileMap.zoom(0.2, this.tileMap.view.viewport.center);
	        return this;
	    };

	    /**
	     * zooms out of center of map
	     * @return {MappedJS} instance of MappedJS for chaining
	     */


	    MappedJS.prototype.zoomOutToCenter = function zoomOutToCenter() {
	        this.tileMap.zoom(-0.2, this.tileMap.view.viewport.center);
	        return this;
	    };

	    /**
	     * Keypress handler
	     * @param  {KeyboardEvent} e - key event
	     * @return {MappedJS} instance of MappedJS for chaining
	     */


	    MappedJS.prototype.keyPress = function keyPress(e) {
	        if (this.container !== document.activeElement) return false;
	        switch (e.keyCode) {
	            case 38:
	                // up
	                this.handleMovementByKeys(new _Point.Point(0, 1));
	                break;
	            case 37:
	                // left
	                this.handleMovementByKeys(new _Point.Point(1, 0));
	                break;
	            case 39:
	                // right
	                this.handleMovementByKeys(new _Point.Point(-1, 0));
	                break;
	            case 40:
	                // down
	                this.handleMovementByKeys(new _Point.Point(0, -1));
	                break;
	            case 187: // plus
	            case 107:
	                // plus numpad
	                this.zoomInToCenter();
	                break;
	            case 189: // minus
	            case 109:
	                // minus numpad
	                this.zoomOutToCenter();
	                break;
	            case 72: // h
	            case 27:
	                // esc
	                this.resetToInitialState();
	                break;
	            default:
	                break;
	        }
	        this.eventManager.publish(_Events.Events.TileMap.DRAW);
	        return this;
	    };

	    /**
	     * handles the translation of the map by keypress
	     * @param  {Point} direction - x,y point where to translate to
	     * @return {MappedJS} instance of MappedJS for chaining
	     */


	    MappedJS.prototype.handleMovementByKeys = function handleMovementByKeys(direction) {
	        this.keyTicks++;
	        this.tileMap.moveView(direction.multiply(this.keyTicks));
	        return this;
	    };

	    /**
	     * key is released
	     * @return {MappedJS} instance of MappedJS for chaining
	     */


	    MappedJS.prototype.keyRelease = function keyRelease() {
	        this.keyTicks = 0;
	        return this;
	    };

	    /**
	     * handles resizing of window
	     * @return {MappedJS} instance of MappedJS for chaining
	     */


	    MappedJS.prototype.resizeHandler = function resizeHandler() {
	        this.tileMap.resize();
	        return this;
	    };

	    /**
	     * called when loading and initialization is finished
	     * @return {MappedJS} instance of MappedJS for chaining
	     */


	    MappedJS.prototype.loadingFinished = function loadingFinished() {
	        return this;
	    };

	    return MappedJS;
	}();

	/**
	 * instance counter
	 * @type {Number}
	 */


		MappedJS.count = 1;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Marker = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Events = __webpack_require__(5);

	var _Helper = __webpack_require__(3);

	var _Point = __webpack_require__(6);

	var _Rectangle = __webpack_require__(16);

	var _Drawable2 = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @author Michael Duve <mduve@designmail.net>
	 * @file represents a marker with an image, a position and content
	 * @copyright Michael Duve 2016
	 */

	var Marker = exports.Marker = function (_Drawable) {
	    _inherits(Marker, _Drawable);

	    _createClass(Marker, [{
	        key: 'boundingBox',


	        /**
	         * gets bounding box of marker
	         * @return {Rectangle} current dimension of this marker
	         */
	        get: function get() {
	            var bBox = this.icon.getBoundingClientRect();
	            var parentBBox = this.container.getBoundingClientRect();
	            return new _Rectangle.Rectangle(bBox.left - parentBBox.left, bBox.top - parentBBox.top, bBox.width, bBox.height).scaleCenter(2);
	        }

	        /**
	         * @constructor
	         * @param  {Object} data - enriched data
	         * @param  {HTMLElement} container = null - parent container
	         * @param  {Number} id = 0 - id of parent instance
	         * @return {Marker} - instance of Marker for chaining
	         */

	    }]);

	    function Marker(_ref) {
	        var _ret;

	        var data = _ref.data;
	        var _ref$container = _ref.container;
	        var container = _ref$container === undefined ? null : _ref$container;
	        var _ref$id = _ref.id;
	        var id = _ref$id === undefined ? 0 : _ref$id;

	        _classCallCheck(this, Marker);

	        var _this = _possibleConstructorReturn(this, _Drawable.call(this, id));

	        _this.container = container;

	        _this.uniqueID = Marker.count;
	        Marker.count++;

	        _this.size = data.size;

	        _this.hover = data.hover;
	        if (_this.hover) _this.size.divide(2, 1);

	        _this.img = data.icon;
	        _this.offset = data.offset.add(new _Point.Point(-(_this.size.x / 2), -_this.size.y));
	        _this.latlng = data.latlng;

	        _this.content = data.content;
	        _this.icon = _this.addMarkerToDOM(container);

	        return _ret = _this.bindEvents().positionMarker(), _possibleConstructorReturn(_this, _ret);
	    }

	    /**
	     * bind all events
	     * @return {Marker} instance of Marker for chaining
	     */


	    Marker.prototype.bindEvents = function bindEvents() {
	        var _this2 = this;

	        if (this.content.length) {
	            this.icon.setAttribute("data-id", 'marker-' + this.uniqueID);
	            this.eventManager.subscribe('marker-' + this.uniqueID, this.action.bind(this));
	            this.eventManager.subscribe(_Events.Events.Marker.DEACTIVATE, function () {
	                _this2.icon.classList.remove("active");
	            });
	        }
	        return this;
	    };

	    /**
	     * execute bound action of cluster
	     * @return {Marker} instance of Marker for chaining
	     */


	    Marker.prototype.action = function action() {
	        this.eventManager.publish(_Events.Events.ToolTip.OPEN, this.content);
	        this.eventManager.publish(_Events.Events.Marker.DEACTIVATE);
	        this.icon.classList.add("active");
	    };

	    /**
	     * add a marker to the DOM
	     * @param {HTMLElement} container - parent container to append to
	     * @returns {HTMLElement} DOM-selector of appended markup
	     */


	    Marker.prototype.addMarkerToDOM = function addMarkerToDOM(container) {
	        var icon = document.createElement("div");
	        icon.classList.add("marker");
	        _Helper.Helper.css(icon, {
	            "width": this.size.x + 'px',
	            "height": this.size.y + 'px',
	            "margin-left": this.offset.x + 'px',
	            "margin-top": this.offset.y + 'px',
	            "transform": 'translateZ(0)',
	            "background-image": 'url(' + this.img + ')',
	            "background-size": (this.hover ? this.size.x * 2 : this.size.x) + 'px ' + this.size.y + 'px'
	        });
	        if (container) {
	            _Helper.Helper.hide(icon);
	            container.appendChild(icon);
	        }
	        return icon;
	    };

	    /**
	     * set initial position of this marker
	     * @return {Marker} instance of Marker for chaining
	     */


	    Marker.prototype.positionMarker = function positionMarker() {
	        this.position = this.info.convertLatLngToPoint(this.latlng);
	        var p = this.position.clone.divide(this.view.width, this.view.height).multiply(100);
	        _Helper.Helper.css(this.icon, {
	            "left": p.x + '%',
	            "top": p.y + '%'
	        });
	        _Helper.Helper.show(this.icon);
	        return this;
	    };

	    return Marker;
	}(_Drawable2.Drawable);

	/**
	 * counts all markers
	 * @type {Number}
	 */


		Marker.count = 0;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MarkerClusterer = undefined;

	var _Events = __webpack_require__(5);

	var _Publisher = __webpack_require__(13);

	var _Cluster = __webpack_require__(58);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @author Michael Duve <mduve@designmail.net>
	 * @file represents a class which helps clustering overlapping markers
	 * @copyright Michael Duve 2016
	 */

	var MarkerClusterer = exports.MarkerClusterer = function () {

	    /**
	     * @constructor
	     * @param {Array} markers = [] - all markers
	     * @param {HTMLElement} container = null - parent container
	     * @param {Number} id = 0 - id of parent instance
	     * @return {MarkerClusterer} instance of MarkerClusterer for chaining
	     */

	    function MarkerClusterer(_ref) {
	        var _ref$markers = _ref.markers;
	        var markers = _ref$markers === undefined ? [] : _ref$markers;
	        var _ref$container = _ref.container;
	        var container = _ref$container === undefined ? null : _ref$container;
	        var _ref$id = _ref.id;
	        var id = _ref$id === undefined ? 0 : _ref$id;

	        _classCallCheck(this, MarkerClusterer);

	        this.markers = markers;
	        this.id = id;
	        this.container = container;
	        this.clusters = [];
	        this.eventManager = new _Publisher.Publisher(this.id);
	        this.bindEvents();
	        this.clusterize();
	        return this;
	    }

	    /**
	     * bind all events
	     * @return {MarkerClusterer} instance of MarkerClusterer for chaining
	     */


	    MarkerClusterer.prototype.bindEvents = function bindEvents() {
	        var _this = this;

	        this.eventManager.subscribe(_Events.Events.MarkerClusterer.CLUSTERIZE, function () {
	            _this.clusterize();
	        });
	        this.eventManager.subscribe(_Events.Events.MarkerClusterer.UNCLUSTERIZE, function () {
	            _this.deleteAllClusters();
	        });
	    };

	    /**
	     * decompose all markers into Cluster
	     * @return {MarkerClusterer} instance of MarkerClusterer for chaining
	     */


	    MarkerClusterer.prototype.clusterize = function clusterize() {
	        this.deleteAllClusters();
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = this.markers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var marker = _step.value;

	                var hits = [];
	                var _iteratorNormalCompletion3 = true;
	                var _didIteratorError3 = false;
	                var _iteratorError3 = undefined;

	                try {
	                    for (var _iterator3 = this.clusters[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                        var cluster = _step3.value;

	                        if (marker.boundingBox.intersects(cluster.boundingBox)) {
	                            hits.push(cluster);
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError3 = true;
	                    _iteratorError3 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                            _iterator3.return();
	                        }
	                    } finally {
	                        if (_didIteratorError3) {
	                            throw _iteratorError3;
	                        }
	                    }
	                }

	                if (!hits.length) {
	                    var newCluster = this.createCluster(marker);
	                    this.clusters.push(newCluster);
	                } else {
	                    var nearestCluster = this.findNearestHit(marker, hits);
	                    nearestCluster.addMarker(marker);
	                }
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }

	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;

	        try {
	            for (var _iterator2 = this.clusters[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                var _cluster = _step2.value;

	                _cluster.init();
	            }
	        } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                    _iterator2.return();
	                }
	            } finally {
	                if (_didIteratorError2) {
	                    throw _iteratorError2;
	                }
	            }
	        }

	        return this;
	    };

	    /**
	     * find nearest cluster if there are multiple hits
	     * @param  {Marker} marker - specified marker
	     * @param  {Array} hits - array of Clusters hit
	     * @return {Cluster} closest cluster
	     */


	    MarkerClusterer.prototype.findNearestHit = function findNearestHit(marker, hits) {
	        var lastDistance = void 0,
	            minimalHit = void 0;
	        var _iteratorNormalCompletion4 = true;
	        var _didIteratorError4 = false;
	        var _iteratorError4 = undefined;

	        try {
	            for (var _iterator4 = hits[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                var hit = _step4.value;

	                if (!lastDistance) {
	                    lastDistance = this.getDistance(marker, hit);
	                    minimalHit = hit;
	                } else {
	                    var currentDistance = this.getDistance(marker, hit);
	                    if (currentDistance < lastDistance) {
	                        lastDistance = currentDistance;
	                        minimalHit = hit;
	                    }
	                }
	            }
	        } catch (err) {
	            _didIteratorError4 = true;
	            _iteratorError4 = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                    _iterator4.return();
	                }
	            } finally {
	                if (_didIteratorError4) {
	                    throw _iteratorError4;
	                }
	            }
	        }

	        return minimalHit;
	    };

	    /**
	     * gets distance between marker and cluster
	     * @param  {Marker} marker - specified marker
	     * @param  {Cluster} cluster - specified cluster
	     * @return {Number} distance between them
	     */


	    MarkerClusterer.prototype.getDistance = function getDistance(marker, cluster) {
	        return marker.boundingBox.center.distance(cluster.boundingBox.center);
	    };

	    /**
	     * creates a new cluster for marker
	     * @param  {Marker} marker - specified marker
	     * @return {Cluster} created cluster
	     */


	    MarkerClusterer.prototype.createCluster = function createCluster(marker) {
	        var newCluster = new _Cluster.Cluster({
	            container: this.container,
	            id: this.id
	        });
	        newCluster.addMarker(marker);
	        return newCluster;
	    };

	    /**
	     * delete all clusters
	     * @return {MarkerClusterer} instance of MarkerClusterer for chaining
	     */


	    MarkerClusterer.prototype.deleteAllClusters = function deleteAllClusters() {
	        var _iteratorNormalCompletion5 = true;
	        var _didIteratorError5 = false;
	        var _iteratorError5 = undefined;

	        try {
	            for (var _iterator5 = this.clusters[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                var cluster = _step5.value;

	                cluster.removeFromDOM();
	            }
	        } catch (err) {
	            _didIteratorError5 = true;
	            _iteratorError5 = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                    _iterator5.return();
	                }
	            } finally {
	                if (_didIteratorError5) {
	                    throw _iteratorError5;
	                }
	            }
	        }

	        this.clusters = [];
	        _Cluster.Cluster.count = 0;
	        return this;
	    };

	    return MarkerClusterer;
	}();

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Tile = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Events = __webpack_require__(5);

	var _Helper = __webpack_require__(3);

	var _StateHandler = __webpack_require__(39);

	var _Drawable2 = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @author Michael Duve <mduve@designmail.net>
	 * @file Represents a part of the background map
	 * @extends Rectangle
	 * @copyright Michael Duve 2016
	 */

	var Tile = exports.Tile = function (_Drawable) {
	    _inherits(Tile, _Drawable);

	    _createClass(Tile, [{
	        key: 'distortedTile',


	        /**
	         * transform original tile to a distorted tile
	         * @return {Tile} distorted tile
	         */
	        get: function get() {
	            return this.clone.scale(this.zoomFactor).translate(this.view.x, this.view.y).scaleX(this.distortionFactor).translate(this.offsetToCenter, 0);
	        }

	        /**
	         * @constructor
	         * @param  {String} path = null - path to image
	         * @param  {Number} x = 0 - position x of tile
	         * @param  {Number} y = 0 - position y of tile
	         * @param  {Number} w = 0 - tile width
	         * @param  {Number} h = 0 - tile height
	         * @param  {CanvasRenderingContext2D} context = null - context of canvas
	         * @param  {Number} id = 0 - id of parent instance
	         * @return {Tile} instance of Tile for chaining
	         */

	    }]);

	    function Tile(_ref) {
	        var _ret;

	        var _ref$path = _ref.path;
	        var path = _ref$path === undefined ? null : _ref$path;
	        var _ref$x = _ref.x;
	        var x = _ref$x === undefined ? 0 : _ref$x;
	        var _ref$y = _ref.y;
	        var y = _ref$y === undefined ? 0 : _ref$y;
	        var _ref$w = _ref.w;
	        var w = _ref$w === undefined ? 0 : _ref$w;
	        var _ref$h = _ref.h;
	        var h = _ref$h === undefined ? 0 : _ref$h;
	        var _ref$context = _ref.context;
	        var context = _ref$context === undefined ? null : _ref$context;
	        var _ref$id = _ref.id;
	        var id = _ref$id === undefined ? 0 : _ref$id;

	        _classCallCheck(this, Tile);

	        var _this = _possibleConstructorReturn(this, _Drawable.call(this, id, x, y, w, h));

	        if (!path || typeof path !== "string" || path.length === 0) throw new TypeError('Path ' + path + ' needs to be of type string and should not be empty');
	        _this.state = new _StateHandler.StateHandler(Tile.STATES);
	        _this.context = context;
	        _this.path = path;
	        return _ret = _this, _possibleConstructorReturn(_this, _ret);
	    }

	    /**
	     * initializes tile and starts loading image
	     * @return {Tile} instance of Tile for chaining
	     */


	    Tile.prototype.initialize = function initialize() {
	        var _this2 = this;

	        this.state.next();
	        _Helper.Helper.loadImage(this.path, function (img) {
	            _this2.img = img;
	            _this2.state.next();
	            _this2.eventManager.publish(_Events.Events.TileMap.DRAW);
	        });
	        return this;
	    };

	    /**
	     * draws image data of tile on context
	     * @return {Tile} instance of Tile for chaining
	     */


	    Tile.prototype.draw = function draw() {
	        if (this.state.current.value >= 2) {
	            var t = this.distortedTile;
	            this.state.next();
	            this.context.drawImage(this.img, t.x, t.y, t.width, t.height);
	        } else if (this.state.current.value === 0) {
	            this.initialize();
	        }
	        return this;
	    };

	    return Tile;
	}(_Drawable2.Drawable);

	/**
	 * States of a tile
	 * @type {Array}
	 */


	Tile.STATES = [{
	    value: 0,
	    description: 'Starting'
	}, {
	    value: 1,
	    description: 'Initialized'
	}, {
	    value: 2,
	    description: 'Loaded'
	}, {
	    value: 3,
	    description: 'Drawn'
		}];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ToolTip = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Handlebars = __webpack_require__(107);

	var _Handlebars2 = _interopRequireDefault(_Handlebars);

	var _Events = __webpack_require__(5);

	var _Helper = __webpack_require__(3);

	var _Publisher = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @author Michael Duve <mduve@designmail.net>
	 * @file represents an overlay showing detailed contents
	 * @copyright Michael Duve 2016
	 */

	var ToolTip = exports.ToolTip = function () {
	    _createClass(ToolTip, [{
	        key: 'allTemplatesLoaded',


	        /**
	         * checks if all templates were loaded
	         * @return {Boolean} wheter true if all templates were loaded or false
	         */
	        get: function get() {
	            return this.loadedTemplates === Object.keys(this.templates).length;
	        }

	        /**
	         *
	         * @constructor
	         * @param  {String|HTMLElement} container - Container, either string or DOM object
	         * @param  {Array} templates = [] - defined templates
	         * @param  {Number} id = 0 - if of parent instance
	         * @return {ToolTip} instance of ToolTip for chaining
	         */

	    }]);

	    function ToolTip(_ref) {
	        var _this = this;

	        var container = _ref.container;
	        var _ref$templates = _ref.templates;
	        var templates = _ref$templates === undefined ? [] : _ref$templates;
	        var _ref$id = _ref.id;
	        var id = _ref$id === undefined ? 0 : _ref$id;

	        _classCallCheck(this, ToolTip);

	        this.container = container;
	        this.id = id;
	        this.eventManager = new _Publisher.Publisher(this.id);
	        if (_Handlebars2.default === undefined) {
	            _Helper.Helper.loadScript("https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js", function () {
	                _this.boot(templates);
	            });
	        } else {
	            this.boot(templates);
	        }
	        return this;
	    }

	    /**
	     * initialize boot up after Handlebars is loaded
	     * @param  {Array} templates = [] - defined templates
	     * @return {ToolTip} instance of ToolTip for chaining
	     */


	    ToolTip.prototype.boot = function boot(templates) {
	        this.container.classList.add(_Events.Events.ToolTip.CLOSE);
	        this.setupContainer();

	        this.bindEvents();
	        this.registerHandlebarHelpers();

	        this.setPosition().initializeTemplates(templates);
	        return this;
	    };

	    /**
	     * initialize all container and DOM objects for ToolTip
	     * @return {ToolTip} instance of ToolTip for chaining
	     */


	    ToolTip.prototype.setupContainer = function setupContainer() {
	        this.close = document.createElement("div");
	        this.close.classList.add("close-button");

	        this.content = document.createElement("div");
	        this.content.classList.add("tooltip-content");

	        this.popup = document.createElement("div");
	        this.popup.classList.add("tooltip-container");

	        this.popup.appendChild(this.close);
	        this.popup.appendChild(this.content);
	        return this;
	    };

	    /**
	     * register helpers for handlebars
	     * @return {ToolTip} instance of ToolTip for chaining
	     */


	    ToolTip.prototype.registerHandlebarHelpers = function registerHandlebarHelpers() {
	        if (_Handlebars2.default || window.Handlebars) {
	            (_Handlebars2.default || window.Handlebars).registerHelper('getRatio', function (w, h) {
	                return h / w * 100 + "%";
	            });
	        }
	        return this;
	    };

	    /**
	     * initialize all templates
	     * @param  {Object} templates = {} - all specified templates
	     * @return {ToolTip} instance of ToolTip for chaining
	     */


	    ToolTip.prototype.initializeTemplates = function initializeTemplates(templates) {
	        this.templates = templates;
	        this.loadedTemplates = 0;
	        this.compileTemplates();
	        return this;
	    };

	    /**
	     * bind all events
	     * @return {ToolTip} instance of ToolTip for chaining
	     */


	    ToolTip.prototype.bindEvents = function bindEvents() {
	        var _this2 = this;

	        _Helper.Helper.addListener(window, _Events.Events.Handling.RESIZE, this.resizeHandler.bind(this));
	        _Helper.Helper.addListener(this.close, _Events.Events.Handling.CLICK, function () {
	            _this2.closeTooltip();
	        });
	        this.eventManager.subscribe(_Events.Events.ToolTip.OPEN, this.open.bind(this));
	        this.eventManager.subscribe(_Events.Events.ToolTip.CLOSE, function () {
	            _this2.closeTooltip();
	        });
	        return this;
	    };

	    /**
	     * on resize check if tooltip is bottom or left position
	     * @return {ToolTip} instance of ToolTip for chaining
	     */


	    ToolTip.prototype.resizeHandler = function resizeHandler() {
	        this.setPosition();
	        return this;
	    };

	    /**
	     * inserts content to ToolTip instance container
	     * @param  {Object} content = {} - content object
	     * @return {ToolTip} instance of ToolTip for chaining
	     */


	    ToolTip.prototype.insertContent = function insertContent() {
	        var _this3 = this;

	        var content = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        this.content.innerHTML = "";
	        _Helper.Helper.forEach(content, function (data) {
	            if (_this3.templates[data.type]) {
	                var html = _this3.templates[data.type](data.content);
	                _this3.content.innerHTML += html;
	            }
	        });
	        return this;
	    };

	    /**
	     * opens a tooltip
	     * @param  {Object} data - content object
	     * @return {ToolTip} instance of ToolTip for chaining
	     */


	    ToolTip.prototype.open = function open(data) {
	        if (data) this.insertContent(data);
	        if (this.container.classList.contains(_Events.Events.ToolTip.CLOSE)) {
	            this.setPosition();
	            this.container.classList.remove(_Events.Events.ToolTip.CLOSE);
	            this.container.classList.add(_Events.Events.ToolTip.OPEN);
	            this.eventManager.publish(_Events.Events.TileMap.RESIZE);
	        }
	        return this;
	    };

	    /**
	     * closes a tooltip
	     * @return {ToolTip} instance of ToolTip for chaining
	     */


	    ToolTip.prototype.closeTooltip = function closeTooltip() {
	        if (this.container.classList.contains(_Events.Events.ToolTip.OPEN)) {
	            this.eventManager.publish(_Events.Events.Marker.DEACTIVATE);
	            this.setPosition();
	            this.container.classList.remove(_Events.Events.ToolTip.OPEN);
	            this.container.classList.add(_Events.Events.ToolTip.CLOSE);
	            this.eventManager.publish(_Events.Events.TileMap.RESIZE);
	        }
	        return this;
	    };

	    /**
	     * sets position of tooltip to left or bottom
	     * @return {ToolTip} instance of ToolTip for chaining
	     */


	    ToolTip.prototype.setPosition = function setPosition() {
	        if (this.container.clientWidth > this.container.clientHeight) {
	            this.container.classList.add("left");
	            this.container.classList.remove("bottom");
	        } else {
	            this.container.classList.add("bottom");
	            this.container.classList.remove("left");
	        }
	        return this;
	    };

	    /**
	     * precompiles all Handlebars templates
	     * @return {ToolTip} instance of ToolTip for chaining
	     */


	    ToolTip.prototype.compileTemplates = function compileTemplates() {
	        var _this4 = this;

	        _Helper.Helper.forEach(this.templates, function (template, type) {
	            _Helper.Helper.getFile(template, function (html) {
	                _this4.templates[type] = (_Handlebars2.default || window.Handlebars).compile(html);
	                _this4.loadedTemplates++;
	                if (_this4.allTemplatesLoaded) _this4.container.appendChild(_this4.popup);
	            });
	        });
	        return this;
	    };

	    return ToolTip;
	}();

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.View = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Helper = __webpack_require__(3);

	var _Events = __webpack_require__(5);

	var _Point = __webpack_require__(6);

	var _Rectangle = __webpack_require__(16);

	var _Tile = __webpack_require__(63);

	var _Drawable2 = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @author Michael Duve <mduve@designmail.net>
	 * @file represents a level of zoom
	 * @copyright Michael Duve 2016
	 */

	var View = exports.View = function (_Drawable) {
	    _inherits(View, _Drawable);

	    _createClass(View, [{
	        key: 'visibleTiles',


	        /**
	         * get all visible tiles
	         * @return {array} all tiles that are currently visible
	         */
	        get: function get() {
	            var _this2 = this;

	            return this.tiles.filter(function (t) {
	                var newTile = t.clone.scale(_this2.zoomFactor).getDistortedRect(_this2.distortionFactor).translate(_this2.view.x * _this2.distortionFactor + _this2.offsetToCenter, _this2.view.y);
	                return _this2.viewport.intersects(newTile);
	            });
	        }

	        /**
	         * @constructor
	         * @param  {Rectangle} view = new Rectangle() - representation of map
	         * @param  {Object} data = {} - tile data of current map
	         * @param  {CanvasRenderingContext2D} context = null - canvas context for drawing
	         * @param  {Number} maxZoom = 1.5 - maximal zoom of view
	         * @param  {Number} minZoom = 0.8 - minimal zoom of view
	         * @param  {Number} limitToBounds - where to limit panning
	         * @param  {Boolean} centerSmallMap = false - if map is smaller than viewport, center it
	         * @param  {Number} id = 0 - id of parent instance
	         * @return {View} instance of View for chaining
	         */

	    }]);

	    function View(_ref) {
	        var _ret;

	        var _ref$view = _ref.view;
	        var view = _ref$view === undefined ? new _Rectangle.Rectangle() : _ref$view;
	        var _ref$data = _ref.data;
	        var data = _ref$data === undefined ? {} : _ref$data;
	        var _ref$context = _ref.context;
	        var context = _ref$context === undefined ? null : _ref$context;
	        var _ref$maxZoom = _ref.maxZoom;
	        var maxZoom = _ref$maxZoom === undefined ? 1.5 : _ref$maxZoom;
	        var _ref$minZoom = _ref.minZoom;
	        var minZoom = _ref$minZoom === undefined ? 0.8 : _ref$minZoom;
	        var _ref$centerSmallMap = _ref.centerSmallMap;
	        var centerSmallMap = _ref$centerSmallMap === undefined ? false : _ref$centerSmallMap;
	        var limitToBounds = _ref.limitToBounds;
	        var _ref$id = _ref.id;
	        var id = _ref$id === undefined ? 0 : _ref$id;

	        _classCallCheck(this, View);

	        var _this = _possibleConstructorReturn(this, _Drawable.call(this, id));

	        _this.maxZoom = maxZoom;
	        _this.minZoom = minZoom;
	        _this.limitToBounds = limitToBounds;
	        _this.isInitialized = false;
	        _this.centerSmallMap = centerSmallMap;

	        _this.originalMapView = view.clone;

	        _this.eventManager.publish(_Events.Events.MapInformation.UPDATE, {
	            view: view
	        });

	        _this.tiles = [];
	        _this.data = data;
	        _this.context = context;

	        return _ret = _this.loadThumb(), _possibleConstructorReturn(_this, _ret);
	    }

	    /**
	     * initializes the view
	     * @return {View} instance of View for chaining
	     */


	    View.prototype.init = function init() {
	        this.eventManager.publish(_Events.Events.MapInformation.UPDATE, {
	            view: this.originalMapView.clone
	        });
	        this.view.translate(0 - this.offsetToCenter, 0);
	        this.initializeTiles();
	        this.isInitialized = true;
	        return this;
	    };

	    /**
	     * resets current View to its initial position
	     * @return {View} instance of View for chaining
	     */


	    View.prototype.reset = function reset(position, zoom) {
	        this.setLatLngToPosition(position, this.viewport.center);
	        var delta = zoom - this.zoomFactor;
	        this.zoom(delta, this.view.center);
	        return this;
	    };

	    /**
	     * distorts this view
	     * @return {View} [distorted View]
	     */


	    View.prototype.getDistortedView = function getDistortedView() {
	        var nw = this.info.convertLatLngToPoint(this.limitToBounds.nw),
	            se = this.info.convertLatLngToPoint(this.limitToBounds.se),
	            limit = new _Rectangle.Rectangle(nw.x + this.view.x, nw.y + this.view.y, se.x - nw.x, se.y - nw.y);
	        return limit.getDistortedRect(this.distortionFactor).translate(this.offsetToCenter, 0);
	    };

	    /**
	     * check boundaries of map and bounds
	     * @return {View} instance of View for chaining
	     */


	    View.prototype.checkBoundaries = function checkBoundaries() {
	        var offset = new _Point.Point();
	        var equalizedMap = this.getDistortedView();
	        if (!equalizedMap.containsRect(this.viewport)) {
	            var distanceLeft = equalizedMap.left - this.viewport.left,
	                distanceRight = equalizedMap.right - this.viewport.right,
	                distanceTop = equalizedMap.top - this.viewport.top,
	                distanceBottom = equalizedMap.bottom - this.viewport.bottom;

	            offset.x = this.checkX(distanceLeft, distanceRight, equalizedMap.width, this.viewport.width);
	            offset.y = this.checkX(distanceTop, distanceBottom, equalizedMap.height, this.viewport.height);
	        }
	        offset.multiply(1 / this.distortionFactor, 1);
	        this.view.translate(offset.x, offset.y);
	        this.eventManager.publish(_Events.Events.MapInformation.UPDATE, {
	            view: this.view
	        });

	        if (this.viewportIsSmallerThanView(equalizedMap)) {
	            var diffInHeight = 1 - equalizedMap.height / this.viewport.height;
	            var diffInWidth = 1 - equalizedMap.width / this.viewport.width;
	            var diff = _Helper.Helper.clamp(Math.max(diffInHeight, diffInWidth), 0, Number.MAX_VALUE);
	            this.zoom(diff, this.viewport.center, true);
	        }
	        return this;
	    };

	    /**
	     * check if viewport is smaller than view
	     * @param  {Rectangle} view - specified view
	     * @return {Boolean} true if smaller, else false
	     */


	    View.prototype.viewportIsSmallerThanView = function viewportIsSmallerThanView(view) {
	        return this.viewport.width > view.width || this.viewport.height > view.height;
	    };

	    /**
	     * check x boundaries
	     * @param  {Number} left - left position
	     * @param  {Number} right - right position
	     * @param  {Number} mapWidth - width of map
	     * @param  {Number} viewWidth - width of viewport
	     * @return {Number} calculated x to be in viewport
	     */


	    View.prototype.checkX = function checkX(left, right, mapWidth, viewWidth) {
	        var x = 0;
	        if (mapWidth >= viewWidth) {
	            if (left > 0) {
	                x -= left;
	            } else if (right < 0) {
	                x -= right;
	            }
	        } else {
	            if (!this.centerSmallMap) {
	                if (left < 0 && right < 0) {
	                    x -= left;
	                } else if (right > 0 && left > 0) {
	                    x -= right;
	                }
	            } else {
	                this.view.setCenterX(this.viewport.center.x);
	                this.eventManager.publish(_Events.Events.MapInformation.UPDATE, {
	                    view: this.view
	                });
	            }
	        }
	        return x;
	    };

	    /**
	     * check y boundaries
	     * @param  {Number} top - top position
	     * @param  {Number} bottom - bottom position
	     * @param  {Number} mapHeight - height of map
	     * @param  {Number} viewHeight - height of viewport
	     * @return {Number} calculated y to be in viewport
	     */


	    View.prototype.checkY = function checkY(top, bottom, mapHeight, viewHeight) {
	        var y = 0;
	        if (mapHeight >= viewHeight) {
	            if (top > 0) {
	                y -= top;
	            } else if (bottom < 0) {
	                y -= bottom;
	            }
	        } else {
	            if (!this.centerSmallMap) {
	                if (top < 0 && bottom < 0) {
	                    y -= top;
	                } else if (bottom > 0 && top > 0) {
	                    y -= bottom;
	                }
	            } else {
	                this.view.setCenterX(this.viewport.center.x);
	                this.eventManager.publish(_Events.Events.MapInformation.UPDATE, {
	                    view: this.view
	                });
	            }
	        }
	        return y;
	    };

	    /**
	     * loads thumbnail of view
	     * @return {View} instance of View for chaining
	     */


	    View.prototype.loadThumb = function loadThumb() {
	        var _this3 = this;

	        _Helper.Helper.loadImage(this.data.thumb, function (img) {
	            _this3.thumb = img;
	            _this3.eventManager.publish(_Events.Events.View.THUMB_LOADED);
	        });
	        return this;
	    };

	    /**
	     * set specified lat/lng to position x/y
	     * @param {LatLng} latlng - specified latlng to be set Point to
	     * @param {Point} position - specified position to set LatLng to
	     * @return {View} instance of View for chaining
	     */


	    View.prototype.setLatLngToPosition = function setLatLngToPosition(latlng, position) {
	        var currentPosition = this.view.topLeft.substract(position).multiply(-1),
	            diff = currentPosition.substract(this.info.convertLatLngToPoint(latlng));

	        this.view.translate(0, diff.y);
	        this.eventManager.publish(_Events.Events.MapInformation.UPDATE, {
	            view: this.view
	        });
	        this.calculateNewCenter();
	        this.view.translate(diff.x + this.getDeltaXToCenter(position), 0);
	        this.calculateNewCenter();
	        this.eventManager.publish(_Events.Events.MapInformation.UPDATE, {
	            view: this.view
	        });
	        return this;
	    };

	    /**
	     * receive relative Position to center of viewport
	     * @param  {Point} pos - specified position
	     * @return {Number} delta of point to center of viewport
	     */


	    View.prototype.getDeltaXToCenter = function getDeltaXToCenter(pos) {
	        var diffToCenter = pos.clone.substract(this.viewport.center),
	            distanceToCenter = diffToCenter.x / this.viewport.center.x,
	            delta = distanceToCenter * this.offsetToCenter;
	        return delta / this.distortionFactor;
	    };

	    /**
	     * zooming handler
	     * @param  {Number} factor - increase/decrease factor
	     * @param  {Point} pos - Position to zoom to
	     * @param  {Boolean} automatic = false - is resetted by programm in case of beholding boundaries
	     * @return {Number} indicates if direction has changed
	     */


	    View.prototype.zoom = function zoom(factor, pos) {
	        var automatic = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	        var equalizedMap = this.getDistortedView();
	        var viewportIsSmaller = this.viewportIsSmallerThanView(equalizedMap);

	        if (factor < 0 && (viewportIsSmaller || this.wasSmallerLastTime)) {
	            this.wasSmallerLastTime = true;
	            return false;
	        } else if (!automatic) {
	            this.wasSmallerLastTime = false;
	        } else if (automatic) {
	            this.wasSmallerLastTime = viewportIsSmaller;
	        }

	        var newZoom = _Helper.Helper.clamp(this.zoomFactor + factor, this.minZoom, this.maxZoom);

	        var mapPosition = this.view.topLeft.substract(pos).multiply(-1);
	        mapPosition.x += this.getDeltaXToCenter(pos);
	        var latlngPosition = this.info.convertPointToLatLng(mapPosition);

	        var newSize = this.originalMapView.clone.scale(newZoom);
	        this.view.setSize(newSize.width, newSize.height);
	        this.eventManager.publish(_Events.Events.MapInformation.UPDATE, {
	            zoomFactor: newZoom,
	            view: this.view
	        });

	        this.setLatLngToPosition(latlngPosition, pos);
	        return this.changeZoomLevelIfNecessary(factor, viewportIsSmaller);
	    };

	    /**
	     * changes zoom level if its necessary
	     * @param  {Number} factor - specified zoom change
	     * @param  {Boolean} viewportIsSmaller - is viewport smaller than view
	     * @return {Number} indicates if direction has changed
	     */


	    View.prototype.changeZoomLevelIfNecessary = function changeZoomLevelIfNecessary(factor, viewportIsSmaller) {
	        var zoomChangedDirection = 0;
	        if (this.zoomFactor >= this.maxZoom && factor > 0) {
	            this.eventManager.publish(_Events.Events.TileMap.NEXT_LEVEL);
	            zoomChangedDirection = 1;
	        } else if (this.zoomFactor <= this.minZoom && factor < 0 && !viewportIsSmaller) {
	            this.eventManager.publish(_Events.Events.TileMap.PREVIOUS_LEVEL);
	            zoomChangedDirection = -1;
	        }
	        return zoomChangedDirection;
	    };

	    /**
	     * update center position of view
	     * @return {View} instance of View for chaining
	     */


	    View.prototype.calculateNewCenter = function calculateNewCenter() {
	        var newCenter = this.info.convertPointToLatLng(this.viewport.center.substract(this.view.topLeft));
	        this.eventManager.publish(_Events.Events.MapInformation.UPDATE, {
	            center: newCenter
	        });
	        return this;
	    };

	    /**
	     * moves the view's current position by pos
	     * @param  {Point} pos - specified additional offset
	     * @return {View} instance of View for chaining
	     */


	    View.prototype.moveView = function moveView(pos) {
	        this.view.translate(0, pos.y);
	        this.calculateNewCenter();
	        this.view.translate(pos.x * (1 / this.distortionFactor), 0);
	        this.eventManager.publish(_Events.Events.MapInformation.UPDATE, {
	            view: this.view
	        });
	        return this;
	    };

	    /**
	     * Handles draw of visible elements
	     * @return {View} instance of View for chaining
	     */


	    View.prototype.draw = function draw() {
	        return this.drawThumbnail().drawVisibleTiles();
	    };

	    /**
	     * draws all visible tiles
	     * @return {View} instance of View for chaining
	     */


	    View.prototype.drawVisibleTiles = function drawVisibleTiles() {
	        _Helper.Helper.forEach(this.visibleTiles, function (tile) {
	            return tile.draw();
	        });
	        return this;
	    };

	    /**
	     * draws the thumbnail
	     * @return {View} instance of View for chaining
	     */


	    View.prototype.drawThumbnail = function drawThumbnail() {
	        if (this.thumb) {
	            var rect = this.view.getDistortedRect(this.distortionFactor).translate(this.offsetToCenter, 0);
	            this.context.drawImage(this.thumb, 0, 0, this.thumb.width, this.thumb.height, rect.x, rect.y, rect.width, rect.height);
	        }
	        return this;
	    };

	    /**
	     * initializes tiles
	     * @return {View} instance of View for chaining
	     */


	    View.prototype.initializeTiles = function initializeTiles() {
	        var _this4 = this;

	        var currentLevel = this.data.tiles;
	        _Helper.Helper.forEach(currentLevel, function (currentTileData) {
	            var tileData = Object.assign({}, currentTileData, {
	                context: _this4.context,
	                id: _this4.id
	            });
	            _this4.tiles.push(new _Tile.Tile(tileData));
	        });
	        return this;
	    };

	    return View;
	}(_Drawable2.Drawable);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(9)
	  , toIndex  = __webpack_require__(30)
	  , toLength = __webpack_require__(14);

	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , $$    = arguments
	    , end   = $$.length > 2 ? $$[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(9)
	  , toIndex  = __webpack_require__(30)
	  , toLength = __webpack_require__(14);
	module.exports = [].fill || function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , $$     = arguments
	    , $$len  = $$.length
	    , index  = toIndex($$len > 1 ? $$[1] : undefined, length)
	    , end    = $$len > 2 ? $$[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(12)
	  , toLength  = __webpack_require__(14)
	  , toIndex   = __webpack_require__(30);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var isObject = __webpack_require__(4)
	  , isArray  = __webpack_require__(34)
	  , SPECIES  = __webpack_require__(2)('species');
	module.exports = function(original, length){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length);
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(4)
	  , document = __webpack_require__(8).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(1);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8).document && document.documentElement;

/***/ },
/* 73 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(27)
	  , ITERATOR   = __webpack_require__(2)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(20);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	var $              = __webpack_require__(1)
	  , descriptor     = __webpack_require__(28)
	  , setToStringTag = __webpack_require__(35)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(18)(IteratorPrototype, __webpack_require__(2)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(2)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(1)
	  , toIObject = __webpack_require__(12);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(1)
	  , toObject = __webpack_require__(9)
	  , IObject  = __webpack_require__(26);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(11)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 81 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(1).getDesc
	  , isObject = __webpack_require__(4)
	  , anObject = __webpack_require__(20);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(22)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	var global      = __webpack_require__(8)
	  , $           = __webpack_require__(1)
	  , DESCRIPTORS = __webpack_require__(24)
	  , SPECIES     = __webpack_require__(2)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(31)
	  , defined   = __webpack_require__(23);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(0)
	  , defined = __webpack_require__(23)
	  , fails   = __webpack_require__(11)
	  , spaces  = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec){
	  var exp  = {};
	  exp[KEY] = exec(trim);
	  $export($export.P + $export.F * fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  }), 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(41)
	  , ITERATOR  = __webpack_require__(2)('iterator')
	  , Iterators = __webpack_require__(27);
	module.exports = __webpack_require__(10).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	var $                 = __webpack_require__(1)
	  , $export           = __webpack_require__(0)
	  , DESCRIPTORS       = __webpack_require__(24)
	  , createDesc        = __webpack_require__(28)
	  , html              = __webpack_require__(72)
	  , cel               = __webpack_require__(70)
	  , has               = __webpack_require__(25)
	  , cof               = __webpack_require__(21)
	  , invoke            = __webpack_require__(73)
	  , fails             = __webpack_require__(11)
	  , anObject          = __webpack_require__(20)
	  , aFunction         = __webpack_require__(40)
	  , isObject          = __webpack_require__(4)
	  , toObject          = __webpack_require__(9)
	  , toIObject         = __webpack_require__(12)
	  , toInteger         = __webpack_require__(31)
	  , toIndex           = __webpack_require__(30)
	  , toLength          = __webpack_require__(14)
	  , IObject           = __webpack_require__(26)
	  , IE_PROTO          = __webpack_require__(32)('__proto__')
	  , createArrayMethod = __webpack_require__(33)
	  , arrayIndexOf      = __webpack_require__(68)(false)
	  , ObjectProto       = Object.prototype
	  , ArrayProto        = Array.prototype
	  , arraySlice        = ArrayProto.slice
	  , arrayJoin         = ArrayProto.join
	  , defineProperty    = $.setDesc
	  , getOwnDescriptor  = $.getDesc
	  , defineProperties  = $.setDescs
	  , factories         = {}
	  , IE8_DOM_DEFINE;

	if(!DESCRIPTORS){
	  IE8_DOM_DEFINE = !fails(function(){
	    return defineProperty(cel('div'), 'a', {get: function(){ return 7; }}).a != 7;
	  });
	  $.setDesc = function(O, P, Attributes){
	    if(IE8_DOM_DEFINE)try {
	      return defineProperty(O, P, Attributes);
	    } catch(e){ /* empty */ }
	    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	    if('value' in Attributes)anObject(O)[P] = Attributes.value;
	    return O;
	  };
	  $.getDesc = function(O, P){
	    if(IE8_DOM_DEFINE)try {
	      return getOwnDescriptor(O, P);
	    } catch(e){ /* empty */ }
	    if(has(O, P))return createDesc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
	  };
	  $.setDescs = defineProperties = function(O, Properties){
	    anObject(O);
	    var keys   = $.getKeys(Properties)
	      , length = keys.length
	      , i = 0
	      , P;
	    while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
	    return O;
	  };
	}
	$export($export.S + $export.F * !DESCRIPTORS, 'Object', {
	  // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $.getDesc,
	  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	  defineProperty: $.setDesc,
	  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties
	});

	  // IE 8- don't enum bug keys
	var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
	            'toLocaleString,toString,valueOf').split(',')
	  // Additional keys for getOwnPropertyNames
	  , keys2 = keys1.concat('length', 'prototype')
	  , keysLen1 = keys1.length;

	// Create object with `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = cel('iframe')
	    , i      = keysLen1
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict.prototype[keys1[i]];
	  return createDict();
	};
	var createGetKeys = function(names, length){
	  return function(object){
	    var O      = toIObject(object)
	      , i      = 0
	      , result = []
	      , key;
	    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	    // Don't enum bug & hidden keys
	    while(length > i)if(has(O, key = names[i++])){
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	    return result;
	  };
	};
	var Empty = function(){};
	$export($export.S, 'Object', {
	  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	  getPrototypeOf: $.getProto = $.getProto || function(O){
	    O = toObject(O);
	    if(has(O, IE_PROTO))return O[IE_PROTO];
	    if(typeof O.constructor == 'function' && O instanceof O.constructor){
	      return O.constructor.prototype;
	    } return O instanceof Object ? ObjectProto : null;
	  },
	  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
	  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	  create: $.create = $.create || function(O, /*?*/Properties){
	    var result;
	    if(O !== null){
	      Empty.prototype = anObject(O);
	      result = new Empty();
	      Empty.prototype = null;
	      // add "__proto__" for Object.getPrototypeOf shim
	      result[IE_PROTO] = O;
	    } else result = createDict();
	    return Properties === undefined ? result : defineProperties(result, Properties);
	  },
	  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
	  keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false)
	});

	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  }
	  return factories[len](F, args);
	};

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	$export($export.P, 'Function', {
	  bind: function bind(that /*, args... */){
	    var fn       = aFunction(this)
	      , partArgs = arraySlice.call(arguments, 1);
	    var bound = function(/* args... */){
	      var args = partArgs.concat(arraySlice.call(arguments));
	      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	    };
	    if(isObject(fn.prototype))bound.prototype = fn.prototype;
	    return bound;
	  }
	});

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * fails(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});
	$export($export.P + $export.F * (IObject != Object), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(IObject(this), separator === undefined ? ',' : separator);
	  }
	});

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	$export($export.S, 'Array', {isArray: __webpack_require__(34)});

	var createArrayReduce = function(isRight){
	  return function(callbackfn, memo){
	    aFunction(callbackfn);
	    var O      = IObject(this)
	      , length = toLength(O.length)
	      , index  = isRight ? length - 1 : 0
	      , i      = isRight ? -1 : 1;
	    if(arguments.length < 2)for(;;){
	      if(index in O){
	        memo = O[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if(isRight ? index < 0 : length <= index){
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
	      memo = callbackfn(memo, O[index], index, this);
	    }
	    return memo;
	  };
	};

	var methodize = function($fn){
	  return function(arg1/*, arg2 = undefined */){
	    return $fn(this, arg1, arguments[1]);
	  };
	};

	$export($export.P, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: $.each = $.each || methodize(createArrayMethod(0)),
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: methodize(createArrayMethod(1)),
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: methodize(createArrayMethod(2)),
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: methodize(createArrayMethod(3)),
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: methodize(createArrayMethod(4)),
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: createArrayReduce(false),
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: createArrayReduce(true),
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: methodize(arrayIndexOf),
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function(el, fromIndex /* = @[*-1] */){
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(fromIndex));
	    if(index < 0)index = toLength(length + index);
	    for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
	    return -1;
	  }
	});

	// 20.3.3.1 / 15.9.4.4 Date.now()
	$export($export.S, 'Date', {now: function(){ return +new Date; }});

	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};

	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(this))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(0);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(66)});

	__webpack_require__(17)('copyWithin');

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(0);

	$export($export.P, 'Array', {fill: __webpack_require__(67)});

	__webpack_require__(17)('fill');

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(0)
	  , $find   = __webpack_require__(33)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(17)(KEY);

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(0)
	  , $find   = __webpack_require__(33)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(17)(KEY);

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	var ctx         = __webpack_require__(22)
	  , $export     = __webpack_require__(0)
	  , toObject    = __webpack_require__(9)
	  , call        = __webpack_require__(75)
	  , isArrayIter = __webpack_require__(74)
	  , toLength    = __webpack_require__(14)
	  , getIterFn   = __webpack_require__(86);
	$export($export.S + $export.F * !__webpack_require__(77)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	var addToUnscopables = __webpack_require__(17)
	  , step             = __webpack_require__(78)
	  , Iterators        = __webpack_require__(27)
	  , toIObject        = __webpack_require__(12);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(43)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	var $export = __webpack_require__(0);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , $$     = arguments
	      , $$len  = $$.length
	      , result = new (typeof this == 'function' ? this : Array)($$len);
	    while($$len > index)result[index] = $$[index++];
	    result.length = $$len;
	    return result;
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83)('Array');

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(0);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(80)});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(12);

	__webpack_require__(7)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(7)('getOwnPropertyNames', function(){
	  return __webpack_require__(42).get;
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(9);

	__webpack_require__(7)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(0);
	$export($export.S, 'Object', {is: __webpack_require__(81)});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(9);

	__webpack_require__(7)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(0);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(82).set});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(41)
	  , test    = {};
	test[__webpack_require__(2)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(29)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	var $at  = __webpack_require__(84)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(43)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(85)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(1)
	  , global         = __webpack_require__(8)
	  , has            = __webpack_require__(25)
	  , DESCRIPTORS    = __webpack_require__(24)
	  , $export        = __webpack_require__(0)
	  , redefine       = __webpack_require__(29)
	  , $fails         = __webpack_require__(11)
	  , shared         = __webpack_require__(45)
	  , setToStringTag = __webpack_require__(35)
	  , uid            = __webpack_require__(32)
	  , wks            = __webpack_require__(2)
	  , keyOf          = __webpack_require__(79)
	  , $names         = __webpack_require__(42)
	  , enumKeys       = __webpack_require__(71)
	  , isArray        = __webpack_require__(34)
	  , anObject       = __webpack_require__(20)
	  , toIObject      = __webpack_require__(12)
	  , createDesc     = __webpack_require__(28)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });

	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };

	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(44)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});

	setter = true;

	$export($export.G + $export.W, {Symbol: $Symbol});

	$export($export.S, 'Symbol', symbolStatics);

	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_107__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=mappedJS.js.map