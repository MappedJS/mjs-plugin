import {DataEnrichment} from "../src/js/DataEnrichment.js";
import {Point} from "../src/js/Point.js";
import {LatLng} from "../src/js/LatLng.js";
import {Bounds} from "../src/js/Bounds.js";

describe('DataEnrichment', () => {
    "use strict";

    it("marker()", () => {
        DataEnrichment.marker(undefined, (data) => {
            expect(data.length).toEqual(1);
            expect(data[0]).toEqual(DataEnrichment.DATA_LABEL);
        });
    });

    it("marker(icon)", () => {
        const itemIcon = {
            "icon": {}
        };
        DataEnrichment.marker([itemIcon], (data) => {
            expect(data[0].icon).toEqual(DataEnrichment.DATA_LABEL_ICON);
        });
    });

    it("marker(text)", () => {
        const itemText = {
            "text": {}
        };
        DataEnrichment.marker([itemText], (data) => {
            expect(data[0].icon).toEqual(DataEnrichment.DATA_LABEL_TEXT);
        });
    });

    it("marker(textAndIcon)", () => {
        const item = {
            "position": [[52.506725, 13.229573], [52.514072, 13.345305], [52.527950, 13.125600], [52.517405, 13.398682], [52.536113, 13.433050], [52.552125, 13.465810], [52.604561, 13.524158]],
            "text": {
                "content": "B2",
                "color": "#333333",
                "offset": [0, 5],
                "align": "center",
                "baseline": "hanging",
                "font": "10pt Arial"
            },
            "icon": {
                "type": "image",
                "size": [32, 32],
                "offset": [-12, -32],
                "url": "img/icon.png"
            },
            "visibility": {
                "min": 3,
                "max": 5
            }
        };
        const item2 = {
            "position": [52.604561, 13.524158],
            "icon": {
                "size": 6
            }
        };
        const item3 = {
            "position": [52.604561, 13.524158],
            "icon": {
            }
        };
        DataEnrichment.marker([item, item2, item3], (data) => {
            expect(data[0].text.offset).toEqual(new Point(0, 5));
            expect(data[0].icon.offset).toEqual(new Point(-12, -32));
            expect(data[0].icon.size).toEqual(new Point(32, 32));
            expect(data[0].position[0]).toBe(Array);

            expect(data[1].position).toBe(LatLng);
            expect(data[1].icon.size).toEqual(6);
            expect(data[1].position[0]).toBe(Number);
            expect(data[2].icon.size).toEqual(2);

        });
    });

    it("mapSettings()", () => {
        DataEnrichment.mapSettings(undefined, (data) => {
            expect(data.length).toEqual(1);
            expect(data[0]).toEqual(DataEnrichment.MAP_SETTINGS);
            expect(data[0].bounds).toBe(Bounds);
            expect(data[0].aoiBounds).toBe(Bounds);
            expect(data[0].aoiBounds).toEqual(data[0].bounds);
            expect(data[0].center).toBe(LatLng);
        });
    });

    it("mapSettings({})", () => {
        const settings = {};
        DataEnrichment.mapSettings(settings, (data) => {
            expect(typeof settings.aoiBounds !== "object").toEqual(true);
            expect(data[0].aoiBounds).toEqual(data[0].bounds);
            expect(data[0].aoiBounds).toBe(Bounds);
        });
    });

    it("mapSettings(settings)", () => {
        const settings = {
            aoiBounds: {
                northWest: [52.777, 12.916],
                southEast: [52.266, 13.938]
            }
        };
        DataEnrichment.mapSettings(settings, (data) => {
            expect(typeof settings.aoiBounds === "object").toEqual(true);
            expect(data[0].aoiBounds).not.toEqual(data[0].bounds);
            expect(data[0].aoiBounds.nw.lat).toEqual(settings.aoiBounds.northWest[0]);
            expect(data[0].aoiBounds.nw.lng).toEqual(settings.aoiBounds.northWest[1]);
            expect(data[0].aoiBounds.se.lat).toEqual(settings.aoiBounds.southEast[0]);
            expect(data[0].aoiBounds.se.lng).toEqual(settings.aoiBounds.southEast[1]);
        });
    });

});
