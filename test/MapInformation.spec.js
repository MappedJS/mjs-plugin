import {Point} from "../src/js/Point.js";
import {LatLng} from "../src/js/LatLng.js";
import {Bounds} from "../src/js/Bounds.js";
import {Rectangle} from "../src/js/Rectangle.js";
import {MapInformation} from "../src/js/MapInformation.js";

describe('MapInformation', () => {
    "use strict";

    let info;

    beforeEach(() => {
        info = new MapInformation();
    });

    afterEach(() => {
        info.destroy();
    });


    it("new()", () => {
        expect(info instanceof MapInformation).toBeTruthy();
    });

    it("pixelPerLatLng", () => {
        expect(info.pixelPerLatLng instanceof Point).toBeTruthy();
        expect(info.pixelPerLatLng).toEqual(new Point());
    });

    it("get()", () => {
        expect(info.get()).toEqual(info.data);
    });

    it("getDistortionFactorForLatitude(latlng)", () => {
        expect(info.getDistortionFactorForLatitude(new LatLng(0, 0))).toEqual(1);
        expect(info.getDistortionFactorForLatitude(new LatLng(180, 90))).toEqual(Math.cos(Math.PI));
        expect(info.getDistortionFactorForLatitude(new LatLng(-180, -90))).toEqual(Math.cos(Math.PI));
    });

    it("update()", () => {
        const oldInfo = info.get();
        info.update();
        expect(info.data).toEqual(oldInfo);
    });

    it("update({})", () => {
        const oldInfo = info.get();
        info.update({});
        expect(info.data).toEqual(oldInfo);
    });

    it("update({center})", () => {
        const oldInfo = info.get();
        info.update({
            center: new LatLng(50, 50)
        });
        expect(info.data.center).not.toEqual(oldInfo.center);
        expect(info.data.center).toEqual(new LatLng(50, 50));
    });

    it("update({viewport})", () => {
        const oldInfo = info.get();
        info.update({
            viewport: new Rectangle(50, 50, 50, 50)
        });
        expect(info.data.viewport).not.toEqual(oldInfo.viewport);
        expect(info.data.viewport).toEqual(new Rectangle(50, 50, 50, 50));
    });

    it("convertPointToLatLng(point)", () => {
        info.update({
            center: new LatLng(0, 0),
            view: new Rectangle(-180, -90, 720, 360),
            viewport: new Rectangle(0, 0, 360, 180),
            bounds: new Bounds(new LatLng(90, -180), new LatLng(-90, 180)),
        });
        expect(info.data.view.center).toEqual(info.data.viewport.center);
        expect(info.convertPointToLatLng(new Point(0, 0))).toEqual(new LatLng(90, -180));
        expect(info.convertPointToLatLng(new Point(360, 180))).toEqual(new LatLng(0, 0));
        expect(info.convertPointToLatLng(new Point(720, 360))).toEqual(new LatLng(-90, 180));
        info.update({
            center: new LatLng(50, -50)
        });
        expect(info.convertPointToLatLng(new Point(0, 0))).toEqual(new LatLng(90, -180));
        expect(info.convertPointToLatLng(new Point(360, 180))).toEqual(new LatLng(0, 0));
        expect(info.convertPointToLatLng(new Point(720, 360))).toEqual(new LatLng(-90, 180));
    });

    it("convertLatLngToPoint(latlng)", () => {
        info.update({
            center: new LatLng(0, 0),
            view: new Rectangle(-180, -90, 720, 360),
            viewport: new Rectangle(0, 0, 360, 180),
            bounds: new Bounds(new LatLng(90, -180), new LatLng(-90, 180)),
        });
        expect(info.convertLatLngToPoint(new LatLng(90, -180))).toEqual(new Point(0, 0));
        expect(info.convertLatLngToPoint(new LatLng(0, 0))).toEqual(new Point(360, 180));
        expect(info.convertLatLngToPoint(new LatLng(-90, 180))).toEqual(new Point(720, 360));
    });

});
