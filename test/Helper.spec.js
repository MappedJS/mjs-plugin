import {Helper} from "../src/js/Helper.js";
import {Point} from "../src/js/Point.js";

describe('Helper', () => {
    "use strict";

    it("forEach(items)", () => {
        let items = [1, 2, 3, 4, 5];
        let newItems = [];
        Helper.forEach(items, function(item, i) {
            expect(item).toEqual(items[i]);
            newItems.push(item);
        });
        expect(items).toEqual(newItems);
        Helper.forEach(items, {});
    });

    it("toRadians(deg)", () => {
        expect(Helper.toRadians(180)).toEqual(Math.PI);
        expect(Helper.toRadians(0)).toEqual(0);
        expect(Helper.toRadians(360)).toEqual(2 * Math.PI);
    });

    it("isMouse()", () => {
        let windowWithoutMouse = {},
            windowWithMouse = {
                "onmousedown": {}
            };
        global.window = windowWithoutMouse;
        expect(Helper.isMouse()).toBeFalsy();
        global.window = windowWithMouse;
        expect(Helper.isMouse()).toBeTruthy();
    });

    it("isTouch()", () => {
        let noTouch = {},
            touch = {
                "ontouchstart": {}
            };
        global.navigator = {};
        global.window = touch;
        expect(Helper.isTouch()).toBeTruthy();
        global.window = noTouch;
        expect(Helper.isTouch()).toBeFalsy();
        global.navigator.MaxTouchPoints = 1;
        expect(Helper.isTouch()).toBeTruthy();
        delete global.navigator.MaxTouchPoints;
        expect(Helper.isTouch()).toBeFalsy();
        global.navigator.msMaxTouchPoints = 1;
        expect(Helper.isTouch()).toBeTruthy();
        delete global.navigator.msMaxTouchPoints;
        expect(Helper.isTouch()).toBeFalsy();
    });

    it("isIE()", () => {
        global.navigator = {};
        global.navigator.MaxTouchPoints = 1;
        expect(Helper.isIE()).toBeTruthy();
        delete global.navigator.MaxTouchPoints;
        expect(Helper.isIE()).toBeFalsy();
        global.navigator.msMaxTouchPoints = 1;
        expect(Helper.isIE()).toBeTruthy();
        delete global.navigator.msMaxTouchPoints;
        expect(Helper.isIE()).toBeFalsy();
    });

    it("scrollEvent()", () => {
        let onOff = {"onwheel": {}};
        global.document = {
            createElement(str) {
                return onOff;
            }
        };
        expect(Helper.scrollEvent()).toEqual("wheel");
        onOff = {};
        global.document.onmousewheel = {};
        expect(Helper.scrollEvent()).toEqual("mousewheel");
        delete global.document.onmousewheel;
        expect(Helper.scrollEvent()).toEqual("DOMMouseScroll");
    });

    it("clamp()", () => {
        expect(Helper.clamp()).toEqual(0);
    });

    it("clamp(v)", () => {
        expect(Helper.clamp(5)).toEqual(5);
        expect(Helper.clamp(-5)).toEqual(-5);
    });

    it("clamp(v, min)", () => {
        expect(Helper.clamp(5, 3)).toEqual(5);
        expect(Helper.clamp(5, 6)).toEqual(5);
        expect(Helper.clamp(-5, -6)).toEqual(-5);
        expect(Helper.clamp(-5, -4)).toEqual(-5);
    });

    it("clamp(v, min, max)", () => {
        expect(Helper.clamp(1, 0, 3)).toEqual(1);
        expect(Helper.clamp(1, 1, 1)).toEqual(1);
        expect(Helper.clamp(1, 2, 3)).toEqual(2);
        expect(Helper.clamp(1, -2, 0)).toEqual(0);
    });

});
