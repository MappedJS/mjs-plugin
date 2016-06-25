import {LatLng} from "../src/js/LatLng.js";

describe('LatLng', () => {
    "use strict";

    it("new()", () => {
        const latlng = new LatLng();
        expect(latlng.lat).toEqual(0);
        expect(latlng.lng).toEqual(0);
    });

    it("new(lat, lng)", () => {
        const latlng = new LatLng(15, 15);
        expect(latlng.lat).toEqual(15);
        expect(latlng.lng).toEqual(15);
    });

    it("length", () => {
        let c1 = new LatLng(3, -3),
            c2 = new LatLng(-8, 9);
        expect(c1.length).toEqual(Math.sqrt(18));
        expect(c2.length).toEqual(Math.sqrt(145));
    });

    it("clone", () => {
        let c1 = new LatLng(2, 2);
        expect(c1.clone).toEqual(c1);
        expect(c1.clone).not.toBe(c1);
    });

    it("distance()", () => {
        const coord0 = new LatLng(0, 0);
        expect(coord0.distance()).toEqual(0);
    });

    it("distance(LatLng)", () => {
        const value = Math.sqrt(2,2);
        const coord1 = new LatLng(value, value),
            coord2 = new LatLng(-value, value),
            coord3 = new LatLng(value, -value),
            coord4 = new LatLng(-value, -value),
            coord0 = new LatLng(0, 0);
        expect(coord0.distance(new LatLng())).toEqual(0);
        expect(coord1.distance(coord1)).toEqual(0);
        expect(coord1.distance(coord0)).toEqual(2);
        expect(coord2.distance(coord0)).toEqual(2);
        expect(coord3.distance(coord0)).toEqual(2);
        expect(coord4.distance(coord0)).toEqual(2);
    });

    it("substract()", () => {
        let coord1 = new LatLng(30, 30);
        expect(coord1.substract()).toEqual(coord1);
    });

    it("substract(LatLng)", () => {
        let coord1 = new LatLng(30, 30),
            coord2 = new LatLng(30, -30),
            coord3 = new LatLng(-30, 30),
            coord4 = new LatLng(-30, -30);
        expect(coord1.substract(coord2)).toEqual(new LatLng(0, 60));
        expect(coord2.substract(coord1)).toEqual(new LatLng(30, -90));
        expect(coord3.substract(coord4)).toEqual(new LatLng(0, 60));
    });

    it("add()", () => {
        let coord1 = new LatLng(30, 30);
        expect(coord1.add()).toEqual(coord1);
    });

    it("add(LatLng)", () => {
        let coord1 = new LatLng(30, 30),
            coord2 = new LatLng(30, -30),
            coord3 = new LatLng(-30, 30),
            coord4 = new LatLng(-30, -30);
        expect(coord1.add(coord2)).toEqual(new LatLng(60, 0));
        expect(coord3.add(coord4)).toEqual(new LatLng(-60, 0));
        expect(coord2.add(coord4)).toEqual(new LatLng(0, -60));
    });

    it("divide()", () => {
        let coord1 = new LatLng(30, 30);
        expect(coord1.divide()).toEqual(coord1);
    });

    it("divide(lat)", () => {
        let coord1 = new LatLng(30, 30);
        expect(coord1.divide(1)).toEqual(coord1);
        expect(coord1.divide(0.5)).toEqual(new LatLng(60, 60));
    });

    it("divide(lat, lng)", () => {
        let coord1 = new LatLng(30, 30);
        expect(coord1.divide(1, 1)).toEqual(coord1);
        expect(coord1.divide(0.5)).toEqual(new LatLng(60, 60));
    });

    it("multiply()", () => {
        let coord1 = new LatLng(30, 30);
        expect(coord1.multiply()).toEqual(coord1);
    });

    it("multiply(lat)", () => {
        let coord1 = new LatLng(30, 30);
        expect(coord1.multiply(1)).toEqual(coord1);
        expect(coord1.multiply(0.5)).toEqual(new LatLng(15, 15));
    });

    it("multiply(lat, lng)", () => {
        let coord1 = new LatLng(30, 30);
        expect(coord1.multiply(1, 1)).toEqual(coord1);
        expect(coord1.multiply(0.5)).toEqual(new LatLng(15, 15));
    });

    it("equals(LatLng)", () => {
        let coord1 = new LatLng(50, 50),
            coord2 = new LatLng(50, -50),
            coord3 = new LatLng(-50, 50),
            coord4 = new LatLng(-50, -50),
            coord5 = new LatLng(50, 50);
        expect(coord1.equals(coord1)).toBeTruthy();
        expect(coord1.equals(coord5)).toBeTruthy();
        expect(coord1.equals(coord2)).toBeFalsy();
        expect(coord3.equals(coord4)).toBeFalsy();
    });

});
