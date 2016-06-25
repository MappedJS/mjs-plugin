import {Tile} from "../src/js/Tile.js";
import {Rectangle} from "../src/js/Rectangle.js";

describe('Tile', () => {
    "use strict";

    it("new()", () => {
        expect(() => {
            let t = new Tile();
        }).toThrow(new Error());
    });

    it("new(settings, context, id)", () => {
        let tile = new Tile({
            path: "./",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
        }, null, 0);
        expect(tile instanceof Rectangle).toBeTruthy();
        expect(tile.state.current.value).toEqual(0);
        expect(tile.width).toEqual(0);
        expect(tile.height).toEqual(0);
    });

});
