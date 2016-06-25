import {MarkerClusterer} from "../src/js/MarkerClusterer.js";
import {Marker} from '../src/js/Marker.js';

describe('MarkerClusterer', () => {
    "use strict";

    it("new()", () => {
        let markerclusterer = new MarkerClusterer({});
        expect(markerclusterer.id).toEqual(0);
        expect(markerclusterer.clusters.length).toEqual(0);
        expect(markerclusterer.markers.length).toEqual(0);
    });

});
