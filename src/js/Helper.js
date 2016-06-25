/**
 * @author Michael Duve <mduve@designmail.net>
 * @file Helper for general purposes
 * @copyright Michael Duve 2016
 * @module Helper
 */
export const Helper = {
    /**
     * request json-data from given file and calls callback on success
     * @function
     * @memberof module:Helper
     * @param  {String} filename - path to file
     * @param  {Helper~requestJSONCallback} callback - function called when data is loaded successfully
     * @return {Helper} Helper object for chaining
     */
    requestJSON(filename, callback) {
        Helper.getFile(filename, (jsonFileData) => {
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
    find(elementString = "*", element = null) {
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
    findAll(elementString = "*", element = null) {
        return (element || document).querySelectorAll(elementString);
    },
    /**
     * show a HTMLElement
     * @function
     * @memberof module:Helper
     * @param  {HTMLElement} elem - specified element
     * @return {Helper} reference of Helper for chaining
     */
    show(elem) {
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
    hide(elem) {
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
    css(elem, css) {
        for (const property in css) {
            elem.style[property] = css[property];
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
    addListener(elem, bindTo, fn) {
        bindTo.split(" ").forEach((e) => elem.addEventListener(e, fn, false));
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
    clamp(v = 0, min = v, max = v) {
        return Math.min(Math.max(v, min), max);
    },
    /**
     * loads an image and calls callback on success
     * @function
     * @memberof module:Helper
     * @param {Helper~loadImageCallback} cb - callback-function on success
     * @return {Helper} reference of Helper for chaining
     */
    loadImage(path, cb) {
        const img = new Image();
        img.onload = () => {
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
    getFile(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200 && callback) callback(xhr.responseText);
                else throw new Error("The JSON submitted seems not valid", xhr);
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
    loadScript(url, callback) {
        const head = Helper.find('head');
        const script = document.createElement('script');
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
    forEach(a, cb) {
        for (const i in a) {
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
    toRadians: degrees => degrees * Math.PI / 180,
    /**
     * checks if mouse is possible
     * @function
     * @memberof module:Helper
     * @return {Boolean} if true, mouse is possible
     */
    isMouse: () => ('onmousedown' in window),
    /**
     * checks if touch is possible
     * @function
     * @memberof module:Helper
     * @return {Boolean} if true, touch is possible
     */
    isTouch: () => (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)),
    /**
     * checks if IE is used
     * @function
     * @memberof module:Helper
     * @return {Boolean} if true, IE is used
     */
    isIE: () => ((navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)),
    /**
     * gets cross-browser scroll-event
     * @function
     * @memberof module:Helper
     * @return {String} name of scroll event
     */
    scrollEvent: () => "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll"
};
