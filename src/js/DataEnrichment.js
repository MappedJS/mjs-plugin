import {
    Helper
} from './Helper.js';
import {
    Point
} from './Point.js';
import {
    LatLng
} from './LatLng.js';
import {
    Bounds
} from './Bounds.js';

/**
 * @author Michael Duve <mduve@designmail.net>
 * @file enriches delivered data with default values
 * @copyright Michael Duve 2016
 * @module DataEnrichment
 */
export const DataEnrichment = {
    /**
     * enriches marker data with all needed data
     * @function
     * @memberof module:DataEnrichment
     * @param  {Object} data - specified data for marker
     * @return {Object} enriched marker data
     */
    marker(data) {
        const enrichedData = [];

        Helper.forEach(data, (entry) => {
            entry = Object.assign({}, DataEnrichment.DATA_MARKER, entry);

            if (entry.text) {
                entry.text = Object.assign({}, DataEnrichment.DATA_MARKER_TEXT, entry.text);
            }
            if (entry.icon) {
                entry.icon = Object.assign({}, DataEnrichment.DATA_MARKER_ICON, entry.icon);
            }

            if (typeof entry.position[0] === "number") {
                entry.position = new LatLng(entry.position[0], entry.position[1]);
            } else {
                Helper.forEach(entry.position, (pos, i) => {
                    entry.position[i] = new LatLng(pos[0], pos[1]);
                });
            }

            if (entry.text) {
                entry.text.offset = new Point(entry.text.offset[0], entry.text.offset[1]);
            }
            if (entry.icon) {
                entry.icon.offset = new Point(entry.icon.offset[0], entry.icon.offset[1]);
            }
            if (entry.icon && typeof entry.icon.size !== "number") {
                entry.icon.size = new Point(entry.icon.size[0], entry.icon.size[1]);
            }

            enrichedData.push(entry);
        });

        return enrichedData;
    },
    /**
     * enriches map data with all needed data
     * @function
     * @memberof module:DataEnrichment
     * @param  {Object} data - specified data for mapsettings
     * @return {Object} enriched mapsettings data
     */
    mapSettings(data = {}) {
        const enrichedData = Object.assign({}, DataEnrichment.MAP_SETTINGS, data),
            bounds = new Bounds(new LatLng(enrichedData.bounds.northWest[0], enrichedData.bounds.northWest[1]), new LatLng(enrichedData.bounds.southEast[0], enrichedData.bounds.southEast[1])),
            center = new LatLng(enrichedData.center.lat, enrichedData.center.lng);

        if (typeof data.aoiBounds === "object") {
            const boundsNW = new LatLng(data.aoiBounds.northWest[0], data.aoiBounds.northWest[1]);
            const boundsSE = new LatLng(data.aoiBounds.southEast[0], data.aoiBounds.southEast[1]);
            const boundsLimit = new Bounds(boundsNW, boundsSE);
            enrichedData.aoiBounds = boundsLimit;
        } else {
            enrichedData.aoiBounds = bounds;
        }

        enrichedData.clusterImage.size = new Point(enrichedData.clusterImage.size[0], enrichedData.clusterImage.size[1]);
        enrichedData.clusterImage.offset = new Point(enrichedData.clusterImage.offset[0], enrichedData.clusterImage.offset[1]);

        enrichedData.bounds = bounds;
        enrichedData.center = center;

        return enrichedData;
    }
};

/**
 * Default initial values for a Map
 * @type {Object}
 */
DataEnrichment.MAP_SETTINGS = {
    level: 0,
    path: "./",
    center: {
        "lat": 0,
        "lng": 0
    },
    bounds: {
        "northWest": [90, -180],
        "southEast": [-90, 180]
    },
    clusterImage: {
        path: null,
        size: [0, 0],
        offset: [0, 0]
    },
    controls: {
        zoom: false,
        home: false,
        position: "bottom-right",
        theme: "dark"
    }
};
/**
 * Default initial values for a marker
 * @type {Object}
 */
DataEnrichment.DATA_MARKER = {
    "position": [0, 0],
    "visibility": {
        "min": 0,
        "max": Number.MAX_VALUE
    }
};
/**
 * Default initial values for a marker with text
 * @type {Object}
 */
DataEnrichment.DATA_MARKER_TEXT = {
    "content": "",
    "color": "#333333",
    "offset": [0, 0],
    "align": "center",
    "baseline": "hanging",
    "font": "10pt Arial"
};
/**
 * Default initial values for a marker with an icon
 * @type {Object}
 */
DataEnrichment.DATA_MARKER_ICON = {
    "type": "circle",
    "size": [2, 2],
    "color": "#333333",
    "offset": [0, 0]
};
/**
 * Default initial values for cluster font
 * @type {Object}
 */
DataEnrichment.CLUSTER_FONT = {
    color: "#333",
    font: "bold 10px sans-serif",
    offset: [0, 0]
};
