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

            const offset = new Point(entry.offset.x, entry.offset.y),
                latlng = new LatLng(entry.position.lat, entry.position.lng),
                size = new Point(entry.size.width, entry.size.height);

            enrichedData.push({
                offset: offset,
                latlng: latlng,
                size: size,
                hover: entry.hover,
                icon: entry.icon,
                content: entry.content
            });
        });

        return enrichedData;
    },
    /**
     * enriches label data with all needed data
     * @function
     * @memberof module:DataEnrichment
     * @param  {Object} data - specified data for label
     * @return {Object} enriched label data
     */
    label(data) {
        const enrichedData = [];

        Helper.forEach(data, (entry) => {
            entry = Object.assign({}, DataEnrichment.DATA_LABEL, entry);

            if (entry.text) entry.text = Object.assign({}, DataEnrichment.DATA_LABEL_TEXT, entry.text);
            if (entry.icon) entry.icon = Object.assign({}, DataEnrichment.DATA_LABEL_ICON, entry.icon);

            if (typeof entry.position[0] === "number") {
                entry.position = new LatLng(entry.position[0], entry.position[1]);
            } else {
                Helper.forEach(entry.position, (pos, i) => {
                    entry.position[i] = new LatLng(pos[0], pos[1]);
                });
            }

            if (entry.text) entry.text.offset = new Point(entry.text.offset[0], entry.text.offset[1]);
            if (entry.icon) entry.icon.offset = new Point(entry.icon.offset[0], entry.icon.offset[1]);
            if (entry.icon && typeof entry.icon.size !== "number") entry.icon.size = new Point(entry.icon.size[0], entry.icon.size[1]);

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

        if (typeof data.limitToBounds === "object") {
            const boundsNW = new LatLng(data.limitToBounds.northWest[0], data.limitToBounds.northWest[1]);
            const boundsSE = new LatLng(data.limitToBounds.southEast[0], data.limitToBounds.southEast[1]);
            const boundsLimit = new Bounds(boundsNW, boundsSE);
            enrichedData.limitToBounds = boundsLimit;
        } else {
            enrichedData.limitToBounds = bounds;
        }

        enrichedData.bounds = bounds;
        enrichedData.center = center;

        return enrichedData;
    },
    /**
     * enriches tooltip data with all needed data
     * @function
     * @memberof module:DataEnrichment
     * @param  {Object} data - specified data for tooltip
     * @return {Object} enriched tooltip data
     */
    tooltip(data = {}) {
        return Object.assign({}, DataEnrichment.TOOLTIP, data);
    }
};

/**
 * Default initial values for a Marker
 * @type {Object}
 */
DataEnrichment.DATA_MARKER = {
    icon: null,
    hover: false,
    position: {
        lat: 0,
        lng: 0
    },
    offset: {
        x: 0,
        y: 0
    },
    size: {
        width: 32,
        height: 32
    },
    content: []
};
/**
 * Default initial values for a Map
 * @type {Object}
 */
DataEnrichment.MAP_SETTINGS = {
    level: 0,
    center: {
        "lat": 0,
        "lng": 0
    },
    bounds: {
        "northWest": [90, -180],
        "southEast": [-90, 180]
    },
    controls: {
        zoom: false,
        home: false,
        position: "bottom-right",
        theme: "dark"
    }
};
/**
 * Default initial values for a Label
 * @type {Object}
 */
DataEnrichment.DATA_LABEL = {
    "position": [0, 0],
    "visibility": {
        "min": 0,
        "max": Number.MAX_VALUE
    }
};
/**
 * Default initial values for a Label with text
 * @type {Object}
 */
DataEnrichment.DATA_LABEL_TEXT = {
    "content": "",
    "color": "#333333",
    "offset": [0, 0],
    "align": "center",
    "baseline": "hanging",
    "font": "10pt Arial"
};
/**
 * Default initial values for a Label with an icon
 * @type {Object}
 */
DataEnrichment.DATA_LABEL_ICON = {
    "type": "circle",
    "size": 2,
    "color": "#333333",
    "offset": [0, 0]
};
/**
 * Default initial values for a ToolTip
 * @type {Object}
 */
DataEnrichment.TOOLTIP = {
    image: "/plugin/hbs/image.hbs",
    text: "/plugin/hbs/text.hbs",
    headline: "/plugin/hbs/headline.hbs",
    crossheading: "/plugin/hbs/crossheading.hbs",
    iframe: "/plugin/hbs/iframe.hbs"
};
