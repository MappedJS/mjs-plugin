import {LatLng} from "../src/js/LatLng.js";
import {Bounds} from "../src/js/Bounds.js";

describe('Bounds', () => {
    "use strict";

    it("new()", () => {
        let b = new Bounds();
        expect(b.nw).toBeDefined();
        expect(b.se).toBeDefined();
        expect(b.nw.lat).toEqual(0);
        expect(b.nw.lng).toEqual(0);
        expect(b.se.lat).toEqual(0);
        expect(b.se.lng).toEqual(0);
    });

    it("new(latlng)", () => {
        let nw = new LatLng(15, -15),
            b = new Bounds(nw);
        expect(b.nw).toBeDefined();
        expect(b.se).toBeDefined();
        expect(b.nw).toEqual(nw);
        expect(b.se.lat).toEqual(0);
        expect(b.se.lng).toEqual(0);
    });

    it("new(latlng, latlng)", () => {
        let nw = new LatLng(16, 14),
            se = new LatLng(15, 15),
            b = new Bounds(nw, se);
        expect(b.nw).toBeDefined();
        expect(b.se).toBeDefined();
        expect(b.nw).toEqual(nw);
        expect(b.se).toEqual(se);
    });

    it("new(latlng, latlng) with wrong values", () => {
        let nw = new LatLng(16, 14),
            se = new LatLng(15, 15);
        expect(() => {
            let b = new Bounds(se, nw);
        }).toThrow(new Error());
    });

    it("width", () => {
        let latlng1 = new LatLng(15, 15),
            latlng5 = new LatLng(16, 14),
            latlng2 = new LatLng(-15, -15),
            latlng7 = new LatLng(-16, -14),
            latlng3 = new LatLng(-15, 15),
            latlng8 = new LatLng(-14, 14),
            latlng4 = new LatLng(15, -15),
            latlng9 = new LatLng(16, -16);

        const b1 = new Bounds(latlng4, latlng1);
        const b2 = new Bounds(latlng5, latlng1);
        const b3 = new Bounds(latlng2, latlng7);
        const b4 = new Bounds(latlng8, latlng3);
        const b5 = new Bounds(latlng9, latlng4);

        expect(b1.width).toEqual(30);
        expect(b2.width).toEqual(1);
        expect(b3.width).toEqual(1);
        expect(b4.width).toEqual(1);
        expect(b5.width).toEqual(1);
    });

    it("height", () => {
        let latlng1 = new LatLng(15, 15),
            latlng5 = new LatLng(16, 14),
            latlng2 = new LatLng(-15, -15),
            latlng7 = new LatLng(-16, -14),
            latlng3 = new LatLng(-15, 15),
            latlng8 = new LatLng(-14, 14),
            latlng4 = new LatLng(15, -15),
            latlng9 = new LatLng(16, -16);

        const b1 = new Bounds(latlng4, latlng1);
        const b2 = new Bounds(latlng5, latlng1);
        const b3 = new Bounds(latlng2, latlng7);
        const b4 = new Bounds(latlng8, latlng3);
        const b5 = new Bounds(latlng9, latlng4);

        expect(b1.height).toEqual(0);
        expect(b2.height).toEqual(1);
        expect(b3.height).toEqual(1);
        expect(b4.height).toEqual(1);
        expect(b5.height).toEqual(1);
    });


});
