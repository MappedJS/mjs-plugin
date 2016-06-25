import {Point} from "../src/js/Point.js";

describe('Point', () => {
    "use strict";

    it("new()", () => {
        let p = new Point();
        expect(p.x).toEqual(0);
        expect(p.y).toEqual(0);
    });

    it("new(x,y)", () => {
        let p = new Point(1, 12);
        expect(p.x).toEqual(1);
        expect(p.y).toEqual(12);
    });

    it("abs", () => {
        let p1 = new Point(-2, 2),
            p2 = new Point(-2, -2),
            p3 = new Point(2, -2),
            p4 = new Point(2, 2),
            p5 = new Point(0, 0);
        expect(p1.abs).toEqual(p4);
        expect(p2.abs).toEqual(p4);
        expect(p3.abs).toEqual(p4);
        expect(p4.abs).toEqual(p4);
        expect(p5.abs).toEqual(new Point());
    });

    it("length", () => {
        let p1 = new Point(3, 3),
            p2 = new Point(2, 2);
        expect(p1.length).toEqual(Math.sqrt(18));
        expect(p2.length).toEqual(Math.sqrt(8));
    });

    it("clone", () => {
        let p1 = new Point(2, 2);
        expect(p1.clone).toEqual(p1);
        expect(p1.clone).not.toBe(p1);
    });

    it("substract()", () => {
        let p1 = new Point(2, 2);
        expect(p1.substract()).toEqual(p1);
    });

    it("substract(Point)", () => {
        let p1 = new Point(2, 2),
            p2 = new Point(2, 2),
            p3 = new Point();
        expect(p1.substract(p2)).toEqual(p3);
        expect(p3.substract(p2)).toEqual(new Point(-2, -2));
    });

    it("add()", () => {
        let p1 = new Point(2, 2),
            p2 = new Point(2, 2),
            p3 = new Point();
        expect(p1.add(p2)).toEqual(new Point(4, 4));
        expect(p3.add(p2)).toEqual(p2);
    });

    it("add(Point)", () => {
        let p1 = new Point(2, 2);
        expect(p1.add()).toEqual(p1);
    });

    it("multiply()", () => {
        let p1 = new Point(2, 2);
        expect(p1.multiply()).toEqual(p1);
    });

    it("multiply(Point)", () => {
        let p1 = new Point(2, 2);
        expect(p1.multiply(2)).toEqual(new Point(4, 4));
        expect(p1.multiply(2, 3)).toEqual(new Point(8, 12));
        expect(p1.multiply(0)).toEqual(new Point(0, 0));
    });

    it("divide()", () => {
        let p1 = new Point(10, 30);
        expect(p1.divide()).toEqual(p1);
    });

    it("divide(Point)", () => {
        let p1 = new Point(10, 30);
        expect(p1.divide(2)).toEqual(new Point(5, 15));
        expect(p1.divide(1, 5)).toEqual(new Point(5, 3));
    });

    it("translate()", () => {
        let p1 = new Point(2, 2);
        expect(p1.translate()).toEqual(p1);
    });

    it("translate(x)", () => {
        let p1 = new Point(2, 2);
        expect(p1.translate(0)).toEqual(p1);
    });

    it("translate(x, y)", () => {
        let p1 = new Point(2, 2);
        expect(p1.translate(-2, -2)).toEqual(new Point());
        expect(p1.translate(2, 2)).toEqual(new Point(2, 2));
    });

    it("position()", () => {
        let p1 = new Point(2, 2);
        expect(p1.position()).toEqual(new Point(0, 0));
    });

    it("position(x)", () => {
        let p1 = new Point(2, 2);
        expect(p1.position(1)).toEqual(new Point(1, 1));
    });

    it("position(x, y)", () => {
        let p1 = new Point(2, 2);
        expect(p1.position(-2, -2)).toEqual(new Point(-2, -2));
        expect(p1.position(1, 1)).toEqual(new Point(1, 1));
    });

    it("toArray()", () => {
        let p1 = new Point(2, 2);
        let a = p1.toArray();
        expect(a instanceof Array).toBeTruthy();
        expect(a[0]).toEqual(p1.x);
        expect(a[1]).toEqual(p1.y);
    });

    it("equals(Point)", () => {
        let p1 = new Point(1, 12),
            p2 = new Point(2, 2),
            p3 = new Point(),
            p4 = new Point(2, 2);
        expect(p2.equals(p4)).toEqual(true);
        expect(p1.equals(p3)).toEqual(false);
        expect(p3.equals(p4)).toEqual(false);
    });

    it("distance()", () => {
        let p1 = new Point(2, 2);
        expect(p1.distance()).toEqual(p1.distance(new Point()));
    });

    it("distance(Point)", () => {
        let p1 = new Point(2, 2),
            p2 = new Point(2, 2),
            p3 = new Point(4, 2),
            p4 = new Point(4, 3);
        expect(p1.distance(p2)).toEqual(0);
        expect(p1.distance(p3)).toEqual(2);
        expect(p4.distance(p2)).toEqual(2.23606797749979);
    });

});
