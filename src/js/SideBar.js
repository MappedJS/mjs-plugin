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
export class SideBar {

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
     * @param  {String} path = [] - path to templates
     * @param  {Array} templates = [] - defined templates
     * @param  {Number} id = 0 - if of parent instance
     * @return {SideBar} instance of SideBar for chaining
     */
    constructor({
        container,
        templates = [],
        path = "./",
        id = 0
    }) {
        this.container = container;
        this.id = id;
        this.eventManager = new Publisher(this.id);
        this.path = path;
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
     * @return {SideBar} instance of SideBar for chaining
     */
    boot(templates) {
        this.container.classList.add(Events.SideBar.CLOSE);
        this.setupContainer();

        this.bindEvents();
        this.registerHandlebarHelpers();

        this.setPosition().initializeTemplates(templates);
        return this;
    }

    /**
     * initialize all container and DOM objects for SideBar
     * @return {SideBar} instance of SideBar for chaining
     */
    setupContainer() {
        this.close = document.createElement("div");
        this.close.classList.add("close-button");

        this.content = document.createElement("div");
        this.content.classList.add("sidebar-content");

        this.popup = document.createElement("div");
        this.popup.classList.add("sidebar-container");

        this.popup.appendChild(this.close);
        this.popup.appendChild(this.content);
        return this;
    }

    /**
     * register helpers for handlebars
     * @return {SideBar} instance of SideBar for chaining
     */
    registerHandlebarHelpers() {
        if (Handlebars || window.Handlebars) {
            (Handlebars || window.Handlebars).registerHelper('getRatio', (w, h) => (h / w * 100 + "%"));
        }
        return this;
    }

    /**
     * initialize all templates
     * @param  {Object} templates = {} - all specified templates
     * @return {SideBar} instance of SideBar for chaining
     */
    initializeTemplates(templates) {
        this.templates = templates;
        this.loadedTemplates = 0;
        this.compileTemplates();
        return this;
    }

    /**
     * bind all events
     * @return {SideBar} instance of SideBar for chaining
     */
    bindEvents() {
        Helper.addListener(window, Events.Handling.RESIZE, this.resizeHandler.bind(this));
        Helper.addListener(this.close, Events.Handling.CLICK, () => {
            this.eventManager.publish(Events.SideBar.CLOSE);
        });
        this.eventManager.subscribe(Events.SideBar.OPEN, this.open.bind(this));
        this.eventManager.subscribe(Events.SideBar.CLOSE, () => {
            this.closeSidebar();
        });
        return this;
    }

    /**
     * on resize check if sidebar is bottom or left position
     * @return {SideBar} instance of SideBar for chaining
     */
    resizeHandler() {
        this.setPosition();
        return this;
    }

    /**
     * inserts content to SideBar instance container
     * @param  {Object} content = {} - content object
     * @return {SideBar} instance of SideBar for chaining
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
     * opens a sidebar
     * @param  {Object} data - content object
     * @return {SideBar} instance of SideBar for chaining
     */
    open(data) {
        if (data) {
            this.insertContent(data);
        }
        if (this.container.classList.contains(Events.SideBar.CLOSE)) {
            this.setPosition();
            this.container.classList.remove(Events.SideBar.CLOSE);
            this.container.classList.add(Events.SideBar.OPEN);
            this.eventManager.publish(Events.TileMap.RESIZE);
        }
        return this;
    }

    /**
     * closes a sidebar
     * @return {SideBar} instance of SideBar for chaining
     */
    closeSidebar() {
        if (this.container.classList.contains(Events.SideBar.OPEN)) {
            this.setPosition();
            this.container.classList.remove(Events.SideBar.OPEN);
            this.container.classList.add(Events.SideBar.CLOSE);
            this.eventManager.publish(Events.TileMap.RESIZE);
        }
        return this;
    }

    /**
     * sets position of sidebar to left or bottom
     * @return {SideBar} instance of SideBar for chaining
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
     * @return {SideBar} instance of SideBar for chaining
     */
    compileTemplates() {
        Helper.forEach(this.templates, (template, type) => {
            console.log(this.path, template);
            Helper.getFile(this.path + template, (html) => {
                this.templates[type] = (Handlebars || window.Handlebars).compile(html);
                this.loadedTemplates++;
                if (this.allTemplatesLoaded) {
                    this.container.appendChild(this.popup);
                }
            });
        });
        return this;
    }

}
