import {
    Events
} from './Events.js';

/**
 * @author Michael Duve <mduve@designmail.net>
 * @file Publish/Subscribe pattern
 * @copyright Michael Duve 2016
 */
export class Publisher {

    /**
     * @constructor
     * @param {Number} id = 0 - id of parent instance
     * @return {Publisher} singleton instance of Publisher for chaining
     */
    constructor(id = 0) {
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
    subscribe(type = "any", fn = function() {}) {
        if (this.subscribers[type] === undefined) this.subscribers[type] = [];
        this.subscribers[type].push(fn);
        return this;
    }

    /**
     * unsubscribe from a topic
     * @param  {String} type = "any" - a topic
     * @param  {Function} fn = function(){} - a function to callback
     * @return {Publisher} instance of Publisher for chaining
     */
    unsubscribe(type = "any", fn = function() {}) {
        return this.handle(Events.Publisher.UNSUBSCRIBE, type, fn);
    }

    /**
     * publish to a topic
     * @param  {String} type = "any" - a topic
     * @param  {Function} arg = [] - list of parameters
     * @return {Publisher} instance of Publisher for chaining
     */
    publish(type = "any", arg = []) {
        return this.handle(Events.Publisher.PUBLISH, type, arg);
    }

    /**
     * handle subscribe to a topic
     * @param  {String} action - eventname
     * @param  {String} type = "any" - a topic
     * @param  {Object} a function to callback or arguments
     * @return {Publisher} instance of Publisher for chaining
     */
    handle(action, type, data) {
        const subs = (this.subscribers[type] !== undefined) ? this.subscribers[type] : [];
        for (const [i, fn] of subs.entries()) {
            if (action === Events.Publisher.PUBLISH) {
                fn(data);
            } else {
                if (fn === data) subs.splice(i, 1);
            }
        }
        return this;
    }

    /**
     * destroys singleton instance
     */
    destroy() {
        Publisher.instances[this.id] = null;
    }

}

/**
 * singleton instance wrapper
 * @type {Object}
 */
Publisher.instances = {

};
