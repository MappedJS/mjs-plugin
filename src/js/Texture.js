import {
    Helper
} from './Helper.js';
import {
    Point
} from './Point.js';
import {
    Rectangle
} from './Rectangle.js';

/**
 * @author Michael Duve <mduve@designmail.net>
 * @file represents an Image
 * @copyright Michael Duve 2016
 */
export class Texture extends Rectangle {

    /**
     * @constructor
     * @param  {String} path = null - path to image
     * @param  {Point} size = new Point() - size of image
     * @param  {Point} offset = new Point() - offset of image to position
     * @return {Texture} instance of Texture for chaining
     */
    constructor({
        path = null,
        size = new Point(),
        offset = new Point()
    }) {
        super(offset.x, offset.y, size.x, size.y);

        let textureExists;
        Helper.forEach(Texture.textures, (texture) => {
            if (path === texture.settings.path && size.equals(texture.settings.size) && offset.equals(texture.settings.offset)) {
                textureExists = texture;
                return false;
            }
        });
        if (textureExists) {
            return textureExists;
        }

        this.settings = {
            path: path,
            size: size,
            offset: offset
        };
        this.ready = false;

        this.img = new Image();
        if (path !== null) {
            Helper.loadImage(path, (img) => {
                this.img = img;
                this.ready = true;
                this.initializeHitMap(size.x, size.y);
            });
        }
        Texture.textures.push(this);
        return this;
    }

    /**
     * initializes an offscreen canvas hitmap
     * @param  {Number} w - width of canvas
     * @param  {Number} h - height of canvas
     * @return {Texture} instance of Texture for chaining
     */
    initializeHitMap(w, h) {
        this.hitMap = document.createElement("canvas");
        this.hitMap.width = w;
        this.hitMap.height = h;
        this.ctx = this.hitMap.getContext("2d");
        this.ctx.drawImage(this.img, 0, 0, w, h, 0, 0, w, h);
        return this;
    }

    /**
     * checks wheter texture was hit
     * @param  {Point} point - specified point to check against
     * @return {Boolean} wheter texture is hit or not
     */
    isHit(point) {
        if (this.ctx) {
            const imgData = this.ctx.getImageData(point.x, point.y, 1, 1);
            const alpha = imgData.data[3];
            return alpha !== 0;
        }
        return false;
    }

}

/**
 * stores all initialized textures in this array
 * @type {Array}
 */
Texture.textures = [];
