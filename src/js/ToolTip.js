import Handlebars from 'Handlebars';
import {
    Events
} from './Events.js';
import {
    Helper
} from './Helper.js';
import {
    Publisher
} from './Publisher.js';

/**
 * @author Michael Duve <mduve@designmail.net>
 * @file represents an overlay showing detailed contents
 * @copyright Michael Duve 2016
 */
export class ToolTip {

    /**
     * checks if all templates were loaded
     * @return {Boolean} wheter true if all templates were loaded or false
     */
    get allTemplatesLoaded() {
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
    constructor({
        container,
        templates = [],
        id = 0
    }) {
        this.container = container;
        this.id = id;
        this.eventManager = new Publisher(this.id);
        if (Handlebars === undefined) {
            Helper.loadScript("https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js", () => {
                this.boot(templates);
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
    boot(templates) {
        this.container.classList.add(Events.ToolTip.CLOSE);
        this.setupContainer();

        this.bindEvents();
        this.registerHandlebarHelpers();

        this.setPosition().initializeTemplates(templates);
        return this;
    }

    /**
     * initialize all container and DOM objects for ToolTip
     * @return {ToolTip} instance of ToolTip for chaining
     */
    setupContainer() {
        this.close = document.createElement("div");
        this.close.classList.add("close-button");

        this.content = document.createElement("div");
        this.content.classList.add("tooltip-content");

        this.popup = document.createElement("div");
        this.popup.classList.add("tooltip-container");

        this.popup.appendChild(this.close);
        this.popup.appendChild(this.content);
        return this;
    }

    /**
     * register helpers for handlebars
     * @return {ToolTip} instance of ToolTip for chaining
     */
    registerHandlebarHelpers() {
        if (Handlebars||window.Handlebars) {
            (Handlebars||window.Handlebars).registerHelper('getRatio', (w, h) => (h / w * 100 + "%"));
        }
        return this;
    }

    /**
     * initialize all templates
     * @param  {Object} templates = {} - all specified templates
     * @return {ToolTip} instance of ToolTip for chaining
     */
    initializeTemplates(templates) {
        this.templates = templates;
        this.loadedTemplates = 0;
        this.compileTemplates();
        return this;
    }

    /**
     * bind all events
     * @return {ToolTip} instance of ToolTip for chaining
     */
    bindEvents() {
        Helper.addListener(window, Events.Handling.RESIZE, this.resizeHandler.bind(this));
        Helper.addListener(this.close, Events.Handling.CLICK, () => {
            this.closeTooltip();
        });
        this.eventManager.subscribe(Events.ToolTip.OPEN, this.open.bind(this));
        this.eventManager.subscribe(Events.ToolTip.CLOSE, () => {
            this.closeTooltip();
        });
        return this;
    }

    /**
     * on resize check if tooltip is bottom or left position
     * @return {ToolTip} instance of ToolTip for chaining
     */
    resizeHandler() {
        this.setPosition();
        return this;
    }

    /**
     * inserts content to ToolTip instance container
     * @param  {Object} content = {} - content object
     * @return {ToolTip} instance of ToolTip for chaining
     */
    insertContent(content = {}) {
        this.content.innerHTML = "";
        Helper.forEach(content, (data) => {
            if (this.templates[data.type]) {
                const html = this.templates[data.type](data.content);
                this.content.innerHTML += html;
            }
        });
        return this;
    }

    /**
     * opens a tooltip
     * @param  {Object} data - content object
     * @return {ToolTip} instance of ToolTip for chaining
     */
    open(data) {
        if (data) this.insertContent(data);
        if (this.container.classList.contains(Events.ToolTip.CLOSE)) {
            this.setPosition();
            this.container.classList.remove(Events.ToolTip.CLOSE);
            this.container.classList.add(Events.ToolTip.OPEN);
            this.eventManager.publish(Events.TileMap.RESIZE);
        }
        return this;
    }

    /**
     * closes a tooltip
     * @return {ToolTip} instance of ToolTip for chaining
     */
    closeTooltip() {
        if (this.container.classList.contains(Events.ToolTip.OPEN)) {
            this.eventManager.publish(Events.Marker.DEACTIVATE);
            this.setPosition();
            this.container.classList.remove(Events.ToolTip.OPEN);
            this.container.classList.add(Events.ToolTip.CLOSE);
            this.eventManager.publish(Events.TileMap.RESIZE);
        }
        return this;
    }

    /**
     * sets position of tooltip to left or bottom
     * @return {ToolTip} instance of ToolTip for chaining
     */
    setPosition() {
        if (this.container.clientWidth > this.container.clientHeight) {
            this.container.classList.add("left");
            this.container.classList.remove("bottom");
        } else {
            this.container.classList.add("bottom");
            this.container.classList.remove("left");
        }
        return this;
    }

    /**
     * precompiles all Handlebars templates
     * @return {ToolTip} instance of ToolTip for chaining
     */
    compileTemplates() {
        Helper.forEach(this.templates, (template, type) => {
            Helper.getFile(template, (html) => {
                this.templates[type] = (Handlebars||window.Handlebars).compile(html);
                this.loadedTemplates++;
                if (this.allTemplatesLoaded) this.container.appendChild(this.popup);
            });
        });
        return this;
    }

}
