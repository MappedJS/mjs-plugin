import {Publisher} from "../src/js/Publisher.js";
import {LatLng} from "../src/js/LatLng.js";
import {Bounds} from "../src/js/Bounds.js";
import {Rectangle} from "../src/js/Rectangle.js";
import {MapInformation} from "../src/js/MapInformation.js";
import {Drawable} from "../src/js/Drawable.js";

describe('Drawable', () => {
    "use strict";

    it("new()", () => {
        let drawable = new Drawable();
        expect(drawable instanceof Rectangle).toBeTruthy();
        expect(drawable.id).toEqual(0);
        expect(drawable.x).toEqual(0);
        expect(drawable.y).toEqual(0);
        expect(drawable.width).toEqual(0);
        expect(drawable.height).toEqual(0);
        expect(drawable.info instanceof MapInformation).toBeTruthy();
        expect(drawable.eventManager instanceof Publisher).toBeTruthy();
    });

    it("new(id)", () => {
        let drawable = new Drawable(55);
        expect(drawable.id).toEqual(55);
        expect(drawable.x).toEqual(0);
        expect(drawable.y).toEqual(0);
        expect(drawable.width).toEqual(0);
        expect(drawable.height).toEqual(0);
    });

    it("new(id, x, y, w, h)", () => {
        let drawable = new Drawable(55, -50, -50, 100, 100);
        expect(drawable.id).toEqual(55);
        expect(drawable.x).toEqual(-50);
        expect(drawable.y).toEqual(-50);
        expect(drawable.width).toEqual(100);
        expect(drawable.height).toEqual(100);
    });

    it("view", () => {
        let drawable = new Drawable();
        expect(drawable.view instanceof Rectangle).toBeTruthy();
        expect(drawable.view).toEqual(new Rectangle(0, 0, 0, 0));
    });

    it("viewport", () => {
        let drawable = new Drawable();
        expect(drawable.viewport instanceof Rectangle).toBeTruthy();
        expect(drawable.viewport).toEqual(new Rectangle());
    });

    it("distortionFactor", () => {
        let drawable = new Drawable();
        expect(drawable.distortionFactor).toEqual(1);
    });

    it("level", () => {
        let drawable = new Drawable();
        expect(drawable.level).toEqual(0);
    });

    it("offsetToCenter", () => {
        let drawable = new Drawable();
        expect(drawable.offsetToCenter).toEqual(0);
    });

    it("centerPosition", () => {
        let drawable = new Drawable();
        expect(drawable.centerPosition instanceof LatLng).toBeTruthy();
        expect(drawable.centerPosition).toEqual(new LatLng());
    });

    it("zoomFactor", () => {
        let drawable = new Drawable();
        expect(drawable.zoomFactor).toEqual(1);
    });

    it("bounds", () => {
        let drawable = new Drawable();
        expect(drawable.bounds instanceof Bounds).toBeTruthy();
        expect(drawable.bounds).toEqual(new Bounds());
    });

    it("draw()", () => {
        let drawable = new Drawable();
        const t = drawable.draw();
        expect(t instanceof Drawable).toBeTruthy();
    });

});
