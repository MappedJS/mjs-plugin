import {Point} from "../src/js/Point.js";
import {Rectangle} from "../src/js/Rectangle.js";

describe('Rectangle', () => {
    "use strict";

    it("new()", () => {
        let rect = new Rectangle();
        expect(rect.x).toEqual(0);
        expect(rect.y).toEqual(0);
        expect(rect.width).toEqual(0);
        expect(rect.height).toEqual(0);
    });

    it("new(x, y, w, h)", () => {
        let rect = new Rectangle(50, 60, 70, 80);
        expect(rect.x).toEqual(50);
        expect(rect.y).toEqual(60);
        expect(rect.width).toEqual(70);
        expect(rect.height).toEqual(80);
    });

    it("center", () => {
        let rect = new Rectangle(-50, -50, 100, 100);
        expect(rect.center).toEqual(new Point(0, 0));
        rect.x = 0;
        rect.y = 0;
        expect(rect.center).toEqual(new Point(50, 50));
    });

    it("topLeft", () => {
        let rect = new Rectangle(-50, -50, 100, 100);
        expect(rect.topLeft).toEqual(new Point(-50, -50));
        rect.x = 0;
        rect.y = 0;
        expect(rect.topLeft).toEqual(new Point(0, 0));
    });

    it("topRight", () => {
        let rect = new Rectangle(-50, -50, 100, 100);
        expect(rect.topRight).toEqual(new Point(50, -50));
        rect.x = 0;
        rect.y = 0;
        expect(rect.topRight).toEqual(new Point(100, 0));
    });

    it("bottomLeft", () => {
        let rect = new Rectangle(-50, -50, 100, 100);
        expect(rect.bottomLeft).toEqual(new Point(-50, 50));
        rect.x = 0;
        rect.y = 0;
        expect(rect.bottomLeft).toEqual(new Point(0, 100));
    });

    it("bottomRight", () => {
        let rect = new Rectangle(-50, -50, 100, 100);
        expect(rect.bottomRight).toEqual(new Point(50, 50));
        rect.x = 0;
        rect.y = 0;
        expect(rect.bottomRight).toEqual(new Point(100, 100));
    });

    it("equals(Rectangle)", () => {
        let rect1 = new Rectangle(0, 0, 100, 100),
            rect2 = new Rectangle(1, 0, 100, 100),
            rect3 = new Rectangle(0, 1, 100, 100),
            rect4 = new Rectangle(0, 0, 101, 100),
            rect5 = new Rectangle(0, 0, 100, 101),
            rect6 = new Rectangle(0, 0, 100, 100);
        expect(rect1.equals(rect2)).toBeFalsy();
        expect(rect1.equals(rect3)).toBeFalsy();
        expect(rect1.equals(rect4)).toBeFalsy();
        expect(rect1.equals(rect5)).toBeFalsy();
        expect(rect1.equals(rect6)).toBeTruthy();
        expect(rect1.equals({})).toBeFalsy();
    });

    it("containsPoint()", () => {
        let rect = new Rectangle(-50, -50, 100, 100);
        expect(rect.containsPoint()).toBeTruthy();
    });

    it("containsPoint(Object)", () => {
        let rect = new Rectangle(-50, -50, 100, 100);
        expect(rect.containsPoint({})).toBeFalsy();
    });

    it("containsPoint(Point)", () => {
        let rect = new Rectangle(0, 0, 100, 100),
            p1 = new Point(0, 0),
            p2 = new Point(-1, 0),
            p3 = new Point(1, -1);
        expect(rect.containsPoint(p1)).toBeTruthy();
        expect(rect.containsPoint(p2)).toBeFalsy();
        expect(rect.containsPoint(p3)).toBeFalsy();
    });

    it("containsRect()", () => {
        let rect1 = new Rectangle(-50, -50, 100, 100);
        expect(rect1.containsRect()).toBeTruthy();
    });

    it("containsRect(Object)", () => {
        let rect1 = new Rectangle(-50, -50, 100, 100);
        expect(rect1.containsRect({})).toBeFalsy();
    });

    it("containsRect(Rectangle)", () => {
        let rect1 = new Rectangle(0, 0, 50, 50),
            rect2 = new Rectangle(0, 0, 100, 100);
        expect(rect1.containsRect(rect1)).toBeTruthy();
        expect(rect1.containsRect(rect2)).toBeFalsy();
        expect(rect2.containsRect(rect1)).toBeTruthy();
    });

    it("contains(RectanglePoint)", () => {
        let rect1 = new Rectangle(0, 0, 50, 50),
            rect2 = new Rectangle(0, 0, 100, 100),
            rect3 = new Rectangle(0, 0, 100, 100),
            p1 = new Point(0, 0),
            p2 = new Point(-1, 0),
            p3 = new Point(1, -1);
        expect(rect1.contains(rect1)).toBeTruthy();
        expect(rect1.contains(rect2)).toBeFalsy();
        expect(rect2.contains(rect1)).toBeTruthy();
        expect(rect3.contains(p1)).toBeTruthy();
        expect(rect3.contains(p2)).toBeFalsy();
        expect(rect3.contains(p3)).toBeFalsy();
        expect(rect3.contains()).toBeFalsy();
    });

    it("translate()", () => {
        let rect1 = new Rectangle(0, 0, 0, 0);
        expect(rect1.translate()).toEqual(new Rectangle(0, 0, 0, 0));
    });

    it("translate(x)", () => {
        let rect1 = new Rectangle(0, 0, 0, 0);
        expect(rect1.translate(5)).toEqual(new Rectangle(5, 5, 0, 0));
    });

    it("translate(x, y)", () => {
        let rect1 = new Rectangle(0, 0, 0, 0);
        expect(rect1.translate(0, 0)).toEqual(new Rectangle(0, 0, 0, 0));
        expect(rect1.translate(-100, -100)).toEqual(new Rectangle(-100, -100, 0, 0));
        expect(rect1.translate(200, 600)).toEqual(new Rectangle(100, 500, 0, 0));
    });

    it("transform()", () => {
        let rect1 = new Rectangle(0, 0, 0, 0);
        expect(rect1.transform()).toEqual(new Rectangle(0, 0, 0, 0));
    });

    it("transform(x)", () => {
        let rect1 = new Rectangle(0, 0, 0, 0);
        expect(rect1.transform(5)).toEqual(new Rectangle(5, 5, 0, 0));
    });

    it("transform(x, y)", () => {
        let rect1 = new Rectangle(0, 0, 0, 0);
        expect(rect1.transform(5, 4)).toEqual(new Rectangle(5, 4, 0, 0));
    });

    it("transform(x, y, w)", () => {
        let rect1 = new Rectangle(0, 0, 0, 0),
            rect2 = new Rectangle(1, 2, 3, 4);
        expect(rect1.transform(5, 4, 100)).toEqual(new Rectangle(5, 4, 100, 100));
        expect(rect2.transform(5, 4, 100)).toEqual(new Rectangle(6, 6, 103, 104));
    });

    it("transform(x, y, w, h)", () => {
        let rect1 = new Rectangle(0, 0, 0, 0);
        expect(rect1.transform(0, 0, 100, 100)).toEqual(new Rectangle(0, 0, 100, 100));
        expect(rect1.transform(-100, -100, -200, -300)).toEqual(new Rectangle(-100, -100, -100, -200));
        expect(rect1.transform(200, 600, 200, 700)).toEqual(new Rectangle(100, 500, 100, 500));
    });

    it("position()", () => {
        let rect1 = new Rectangle(0, 0, 0, 0),
            rect2 = new Rectangle(5, 234, 100, 200);
        expect(rect1.position()).toEqual(new Rectangle(0, 0, 0, 0));
        expect(rect2.position()).toEqual(new Rectangle(0, 0, 100, 200));
    });

    it("position(x)", () => {
        let rect1 = new Rectangle(0, 0, 0, 0),
            rect2 = new Rectangle(5, 234, 100, 200);
        expect(rect1.position(0)).toEqual(new Rectangle(0, 0, 0, 0));
        expect(rect1.position(5)).toEqual(new Rectangle(5, 5, 0, 0));
        expect(rect2.position(5)).toEqual(new Rectangle(5, 5, 100, 200));
    });

    it("position(x, y)", () => {
        let rect1 = new Rectangle(0, 0, 0, 0);
        expect(rect1.position(0, 0)).toEqual(new Rectangle(0, 0, 0, 0));
        expect(rect1.position(-100, -100)).toEqual(new Rectangle(-100, -100, 0, 0));
        expect(rect1.position(200, 600)).toEqual(new Rectangle(200, 600, 0, 0));
    });

    it("size()", () => {
        let rect1 = new Rectangle(0, 0, 0, 0),
            rect2 = new Rectangle(1, 2, 3, 4);
        expect(rect1.size()).toEqual(new Rectangle(0, 0, 0, 0));
        expect(rect2.size()).toEqual(new Rectangle(0, 0, 0, 0));
    });

    it("size(x)", () => {
        let rect1 = new Rectangle(0, 0, 0, 0),
            rect2 = new Rectangle(1, 2, 3, 4);
        expect(rect1.size(6)).toEqual(new Rectangle(6, 6, 0, 0));
        expect(rect2.size(5)).toEqual(new Rectangle(5, 5, 0, 0));
    });

    it("size(x, y)", () => {
        let rect1 = new Rectangle(0, 0, 0, 0),
            rect2 = new Rectangle(1, 2, 3, 4);
        expect(rect1.size(6, 5)).toEqual(new Rectangle(6, 5, 0, 0));
        expect(rect2.size(5, 4)).toEqual(new Rectangle(5, 4, 0, 0));
    });

    it("size(x, y, w)", () => {
        let rect1 = new Rectangle(0, 0, 0, 0),
            rect2 = new Rectangle(1, 2, 3, 4);
        expect(rect1.size(6, 5, 4)).toEqual(new Rectangle(6, 5, 4, 4));
        expect(rect2.size(5, 4, 3)).toEqual(new Rectangle(5, 4, 3, 3));
    });

    it("size(x, y, w, h)", () => {
        let rect1 = new Rectangle(0, 0, 0, 0);
        expect(rect1.size(0, 0, 100, 100)).toEqual(new Rectangle(0, 0, 100, 100));
        expect(rect1.size(-100, -100, -200, -300)).toEqual(new Rectangle(-100, -100, -200, -300));
        expect(rect1.size(200, 600, 200, 700)).toEqual(new Rectangle(200, 600, 200, 700));
    });

    it("setSize()", () => {
        let rect1 = new Rectangle(0, 0, 0, 0),
            rect2 = new Rectangle(1, 2, 3, 4);
        expect(rect1.setSize()).toEqual(new Rectangle(0, 0, 0, 0));
        expect(rect2.setSize()).toEqual(new Rectangle(1, 2, 0, 0));
    });

    it("setSize(w)", () => {
        let rect1 = new Rectangle(0, 0, 0, 0),
            rect2 = new Rectangle(1, 2, 3, 4);
        expect(rect1.setSize(5)).toEqual(new Rectangle(0, 0, 5, 5));
        expect(rect2.setSize(5)).toEqual(new Rectangle(1, 2, 5, 5));
    });

    it("setSize(w, h)", () => {
        let rect1 = new Rectangle(0, 0, 0, 0),
            rect2 = new Rectangle(1, 2, 3, 4);
        expect(rect1.setSize(5, 4)).toEqual(new Rectangle(0, 0, 5, 4));
        expect(rect2.setSize(5, 6)).toEqual(new Rectangle(1, 2, 5, 6));
    });

    it("setCenter()", () => {
        let rect1 = new Rectangle(0, 0, 200, 200);
        rect1.setCenter();
        expect(rect1.center).toEqual(new Point(0, 0));
    });

    it("setCenter(Point)", () => {
        let rect1 = new Rectangle(0, 0, 200, 200),
            rect2 = new Rectangle(-100, -100, 200, 200),
            newCenter1 = new Point(110, 110),
            newCenter2 = new Point(-10, -10);
        rect1.setCenter(newCenter1);
        rect2.setCenter(newCenter2);
        expect(rect1.center).toEqual(new Point(110, 110));
        expect(rect2.center).toEqual(new Point(-10, -10));
    });

    it("setCenterX()", () => {
        let rect1 = new Rectangle(0, 0, 200, 200);
        rect1.setCenterX();
        expect(rect1.center.x).toEqual(0);
    });

    it("setCenterX(x)", () => {
        let rect1 = new Rectangle(0, 0, 200, 200);
        rect1.setCenterX(-1);
        expect(rect1.center.x).toEqual(-1);
        rect1.setCenterX(42);
        expect(rect1.center.x).toEqual(42);
    });

    it("setCenterY()", () => {
        let rect1 = new Rectangle(0, 0, 200, 200);
        rect1.setCenterY();
        expect(rect1.center.y).toEqual(0);
    });

    it("setCenterY(y)", () => {
        let rect1 = new Rectangle(0, 0, 200, 200);
        rect1.setCenterY(42);
        expect(rect1.center.y).toEqual(42);
    });

    it("extend(Rectangle)", () => {
        let rect1 = new Rectangle(0, 0, 200, 200),
            rect2 = new Rectangle(-100, -100, 100, 100);
        rect1.extend(rect2);
        expect(rect1).toEqual(new Rectangle(-100, -100, 300, 300));

    });

    it("scale()", () => {
        let rect1 = new Rectangle(0, 0, 200, 200);
        expect(rect1.scale()).toEqual(new Rectangle(0, 0, 200, 200));
    });

    it("scale(x)", () => {
        let rect1 = new Rectangle(0, 0, 200, 200),
            rect2 = new Rectangle(1, 2, 3, 4);
        expect(rect1.scale(1)).toEqual(new Rectangle(0, 0, 200, 200));
        expect(rect1.scale(2)).toEqual(new Rectangle(0, 0, 400, 400));
        expect(rect2.scale(2)).toEqual(new Rectangle(2, 4, 6, 8));
    });

    it("scale(x, y)", () => {
        let rect1 = new Rectangle(0, 0, 200, 200),
            rect2 = new Rectangle(1, 2, 3, 4);
        expect(rect1.scale(1, 2)).toEqual(new Rectangle(0, 0, 200, 400));
        expect(rect1.scale(2, 3)).toEqual(new Rectangle(0, 0, 400, 1200));
        expect(rect2.scale(3, 2)).toEqual(new Rectangle(3, 4, 9, 8));
    });

    it("scaleX()", () => {
        let rect1 = new Rectangle(0, 0, 200, 200);
        expect(rect1.scaleX()).toEqual(rect1);
    });

    it("scaleX(x)", () => {
        let rect1 = new Rectangle(0, 0, 200, 200);
        expect(rect1.scaleX(5)).toEqual(new Rectangle(0, 0, 1000, 200));
    });

    it("scaleY()", () => {
        let rect1 = new Rectangle(0, 0, 200, 200);
        expect(rect1.scaleY()).toEqual(rect1);
    });

    it("scaleY(y)", () => {
        let rect1 = new Rectangle(0, 0, 200, 200);
        expect(rect1.scaleY(5)).toEqual(new Rectangle(0, 0, 200, 1000));
    });

    it("scaleCenter()", () => {
        let rect1 = new Rectangle(0, 0, 200, 200);
        rect1.scaleCenter();
        expect(rect1.center).toEqual(new Point(100, 100));
    });

    it("scaleCenter(x)", () => {
        let rect1 = new Rectangle(50, 50, 200, 200);
        rect1.scaleCenter(5);
        expect(rect1.center).toEqual(rect1.center);
        expect(rect1).toEqual(new Rectangle(-350, -350, 1000, 1000));
    });

    it("scaleCenter(x, y)", () => {
        let rect1 = new Rectangle(0, 0, 200, 200);
        rect1.scaleCenter(5, 10);
        expect(rect1.center).toEqual(new Point(100, 100));
        expect(rect1).toEqual(new Rectangle(-400, -900, 1000, 2000));
    });

    it("intersects()", () => {
        let rect1 = new Rectangle(0, 0, 200, 200);
        expect(rect1.intersects()).toBeTruthy();
    });

    it("intersects(Rectangle)", () => {
        let rect1 = new Rectangle(0, 0, 200, 200),
            rect2 = new Rectangle(0, 0, 100, 100),
            rect3 = new Rectangle(-200, -200, 100, 100);
        expect(rect1.intersects(rect1)).toBeTruthy();
        expect(rect1.intersects(rect2)).toBeTruthy();
        expect(rect2.intersects(rect1)).toBeTruthy();
        expect(rect3.intersects(rect1)).toBeFalsy();
        expect(rect3.intersects(rect2)).toBeFalsy();
    });

    it("getDistortedRect()", () => {
        let rect1 = new Rectangle(0, 0, 200, 200);
        expect(rect1.getDistortedRect()).toEqual(rect1);
    });

    it("getDistortedRect(x)", () => {
        let rect1 = new Rectangle(0, 0, 200, 200),
            rect2 = new Rectangle(100, 100, 200, 200);
        expect(rect1.getDistortedRect(1)).toEqual(rect1);
        expect(rect1.getDistortedRect(1)).not.toBe(rect1);
        expect(rect1.getDistortedRect(0.5)).toEqual(new Rectangle(0, 0, 100, 200));
        expect(rect2.getDistortedRect(0.5)).toEqual(new Rectangle(50, 100, 100, 200));
    });

    it("getNormalRect()", () => {
        let rect1 = new Rectangle(0, 0, 200, 200);
        expect(rect1.getNormalRect()).toEqual(rect1);
    });

    it("getNormalRect(x)", () => {
        let rect1 = new Rectangle(0, 0, 200, 200),
            rect2 = new Rectangle(100, 100, 200, 200);
        expect(rect1.getNormalRect(1)).toEqual(rect1);
        expect(rect1.getNormalRect(1)).not.toBe(rect1);
        expect(rect1.getNormalRect(0.5)).toEqual(new Rectangle(0, 0, 400, 200));
        expect(rect2.getNormalRect(0.5)).toEqual(new Rectangle(200, 100, 400, 200));
    });

});
