## Modules

<dl>
<dt><a href="#module_DataEnrichment">DataEnrichment</a></dt>
<dd><p>enriches delivered data with default values</p>
</dd>
<dt><a href="#module_Helper">Helper</a></dt>
<dd><p>Helper for general purposes</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#Bounds">Bounds</a></dt>
<dd></dd>
<dt><a href="#Cluster">Cluster</a></dt>
<dd></dd>
<dt><a href="#Drawable">Drawable</a></dt>
<dd></dd>
<dt><a href="#Interact">Interact</a></dt>
<dd></dd>
<dt><a href="#LatLng">LatLng</a></dt>
<dd></dd>
<dt><a href="#MappedJS">MappedJS</a></dt>
<dd></dd>
<dt><a href="#MapInformation">MapInformation</a></dt>
<dd></dd>
<dt><a href="#Marker">Marker</a></dt>
<dd></dd>
<dt><a href="#MarkerClusterer">MarkerClusterer</a></dt>
<dd></dd>
<dt><a href="#Point">Point</a></dt>
<dd></dd>
<dt><a href="#Publisher">Publisher</a></dt>
<dd></dd>
<dt><a href="#Rectangle">Rectangle</a></dt>
<dd></dd>
<dt><a href="#SideBar">SideBar</a></dt>
<dd></dd>
<dt><a href="#StateHandler">StateHandler</a></dt>
<dd></dd>
<dt><a href="#Texture">Texture</a></dt>
<dd></dd>
<dt><a href="#Tile">Tile</a></dt>
<dd></dd>
<dt><a href="#TileMap">TileMap</a></dt>
<dd></dd>
<dt><a href="#View">View</a></dt>
<dd></dd>
</dl>

## Objects

<dl>
<dt><a href="#Events">Events</a> : <code>object</code></dt>
<dd><p>Helper for naming events</p>
</dd>
</dl>

<a name="module_DataEnrichment"></a>

## DataEnrichment
enriches delivered data with default values

**Author:** Michael Duve <mduve@designmail.net>  
**Copyright**: Michael Duve 2016  

* [DataEnrichment](#module_DataEnrichment)
    * [.marker(data)](#module_DataEnrichment.marker) ⇒ <code>Object</code>
    * [.settings(data)](#module_DataEnrichment.settings) ⇒ <code>Object</code>

<a name="module_DataEnrichment.marker"></a>

### DataEnrichment.marker(data) ⇒ <code>Object</code>
enriches marker data with all needed data

**Kind**: static method of <code>[DataEnrichment](#module_DataEnrichment)</code>  
**Returns**: <code>Object</code> - enriched marker data  
**Params**

- data <code>Object</code> - specified data for marker

<a name="module_DataEnrichment.settings"></a>

### DataEnrichment.settings(data) ⇒ <code>Object</code>
enriches map data with all needed data

**Kind**: static method of <code>[DataEnrichment](#module_DataEnrichment)</code>  
**Returns**: <code>Object</code> - enriched settings data  
**Params**

- data <code>Object</code> - specified data for settings

<a name="module_Helper"></a>

## Helper
Helper for general purposes

**Author:** Michael Duve <mduve@designmail.net>  
**Copyright**: Michael Duve 2016  

* [Helper](#module_Helper)
    * [.requestJSON(filename, callback)](#module_Helper.requestJSON) ⇒ <code>Helper</code>
    * [.find(elementString, element)](#module_Helper.find) ⇒ <code>HTMLElement</code>
    * [.findAll(elementString, element)](#module_Helper.findAll) ⇒ <code>NodeList</code>
    * [.show(elem)](#module_Helper.show) ⇒ <code>Helper</code>
    * [.hide(elem)](#module_Helper.hide) ⇒ <code>Helper</code>
    * [.css(elem, css)](#module_Helper.css) ⇒ <code>Helper</code>
    * [.addListener(elem, bindTo, fn~addListenerCallback)](#module_Helper.addListener) ⇒ <code>Helper</code>
    * [.clamp(v, min, max)](#module_Helper.clamp) ⇒ <code>Number</code>
    * [.loadImage(cb)](#module_Helper.loadImage) ⇒ <code>Helper</code>
    * [.getFile(url, callback)](#module_Helper.getFile) ⇒ <code>Helper</code>
    * [.loadScript(url, callback)](#module_Helper.loadScript) ⇒ <code>Helper</code>
    * [.forEach(a, cb)](#module_Helper.forEach) ⇒ <code>Helper</code>
    * [.toRadians(degrees)](#module_Helper.toRadians) ⇒ <code>Number</code>
    * [.isMouse()](#module_Helper.isMouse) ⇒ <code>Boolean</code>
    * [.isTouch()](#module_Helper.isTouch) ⇒ <code>Boolean</code>
    * [.isIE()](#module_Helper.isIE) ⇒ <code>Boolean</code>
    * [.scrollEvent()](#module_Helper.scrollEvent) ⇒ <code>String</code>

<a name="module_Helper.requestJSON"></a>

### Helper.requestJSON(filename, callback) ⇒ <code>Helper</code>
request json-data from given file and calls callback on success

**Kind**: static method of <code>[Helper](#module_Helper)</code>  
**Returns**: <code>Helper</code> - Helper object for chaining  
**Params**

- filename <code>String</code> - path to file
- callback <code>Helper~requestJSONCallback</code> - function called when data is loaded successfully

<a name="module_Helper.find"></a>

### Helper.find(elementString, element) ⇒ <code>HTMLElement</code>
find an element in DOM

**Kind**: static method of <code>[Helper](#module_Helper)</code>  
**Returns**: <code>HTMLElement</code> - reference to HTMLElement or null if not found  
**Params**

- elementString <code>String</code> - = "*" - element to lookup
- element <code>HTMLElement</code> - = null - element to start looking in for

<a name="module_Helper.findAll"></a>

### Helper.findAll(elementString, element) ⇒ <code>NodeList</code>
find multiple elements in DOM

**Kind**: static method of <code>[Helper](#module_Helper)</code>  
**Returns**: <code>NodeList</code> - list of found elements  
**Params**

- elementString <code>String</code> - = "*" - element to lookup
- element <code>HTMLElement</code> - = null - element to start looking in for

<a name="module_Helper.show"></a>

### Helper.show(elem) ⇒ <code>Helper</code>
show a HTMLElement

**Kind**: static method of <code>[Helper](#module_Helper)</code>  
**Returns**: <code>Helper</code> - reference of Helper for chaining  
**Params**

- elem <code>HTMLElement</code> - specified element

<a name="module_Helper.hide"></a>

### Helper.hide(elem) ⇒ <code>Helper</code>
hide a HTMLElement

**Kind**: static method of <code>[Helper](#module_Helper)</code>  
**Returns**: <code>Helper</code> - reference of Helper for chaining  
**Params**

- elem <code>HTMLElement</code> - specified element

<a name="module_Helper.css"></a>

### Helper.css(elem, css) ⇒ <code>Helper</code>
applies css to given HTMLElement

**Kind**: static method of <code>[Helper](#module_Helper)</code>  
**Returns**: <code>Helper</code> - reference of Helper for chaining  
**Params**

- elem <code>HTMLElement</code> - specified element to apply css to
- css <code>Object</code> - object containing css property and value

<a name="module_Helper.addListener"></a>

### Helper.addListener(elem, bindTo, fn~addListenerCallback) ⇒ <code>Helper</code>
adds a listener to given HTMLElement

**Kind**: static method of <code>[Helper](#module_Helper)</code>  
**Returns**: <code>Helper</code> - reference of Helper for chaining  
**Params**

- elem <code>HTMLElement</code> - specified element to bind listener to
- bindTo <code>String</code> - names of events to bind to, seperated by spaces
- fn~addListenerCallback <code>function</code> - callback-function for binding

<a name="module_Helper.clamp"></a>

### Helper.clamp(v, min, max) ⇒ <code>Number</code>
clamps a value to specified min and max

**Kind**: static method of <code>[Helper](#module_Helper)</code>  
**Returns**: <code>Number</code> - clamped value  
**Params**

- v <code>Number</code> - = 0 - specified value to clamp
- min <code>Number</code> - = v - minimum value to clamp to
- max <code>Number</code> - = v - maximum value to clamp to

<a name="module_Helper.loadImage"></a>

### Helper.loadImage(cb) ⇒ <code>Helper</code>
loads an image and calls callback on success

**Kind**: static method of <code>[Helper](#module_Helper)</code>  
**Returns**: <code>Helper</code> - reference of Helper for chaining  
**Params**

- cb <code>Helper~loadImageCallback</code> - callback-function on success

<a name="module_Helper.getFile"></a>

### Helper.getFile(url, callback) ⇒ <code>Helper</code>
request data from given file and calls callback on success

**Kind**: static method of <code>[Helper](#module_Helper)</code>  
**Returns**: <code>Helper</code> - reference of Helper for chaining  
**Params**

- url <code>string</code> - path to file
- callback <code>Helper~getFileCallback</code> - function called when data is loaded successfully

<a name="module_Helper.loadScript"></a>

### Helper.loadScript(url, callback) ⇒ <code>Helper</code>
loads a js script

**Kind**: static method of <code>[Helper](#module_Helper)</code>  
**Returns**: <code>Helper</code> - reference of Helper for chaining  
**Params**

- url <code>String</code> - url to be loaded
- callback <code>Helper~loadScriptCallback</code> - function called when script is loaded successfully

<a name="module_Helper.forEach"></a>

### Helper.forEach(a, cb) ⇒ <code>Helper</code>
for each helper

**Kind**: static method of <code>[Helper](#module_Helper)</code>  
**Returns**: <code>Helper</code> - reference of Helper for chaining  
**Params**

- a <code>Array.&lt;Object&gt;</code> - array to iterate over each value
- cb <code>Helper~forEachCallback</code> - callback for each object

<a name="module_Helper.toRadians"></a>

### Helper.toRadians(degrees) ⇒ <code>Number</code>
convert degree to radian

**Kind**: static method of <code>[Helper](#module_Helper)</code>  
**Returns**: <code>Number</code> - converted radian  
**Params**

- degrees <code>Number</code> - specified degrees

<a name="module_Helper.isMouse"></a>

### Helper.isMouse() ⇒ <code>Boolean</code>
checks if mouse is possible

**Kind**: static method of <code>[Helper](#module_Helper)</code>  
**Returns**: <code>Boolean</code> - if true, mouse is possible  
<a name="module_Helper.isTouch"></a>

### Helper.isTouch() ⇒ <code>Boolean</code>
checks if touch is possible

**Kind**: static method of <code>[Helper](#module_Helper)</code>  
**Returns**: <code>Boolean</code> - if true, touch is possible  
<a name="module_Helper.isIE"></a>

### Helper.isIE() ⇒ <code>Boolean</code>
checks if IE is used

**Kind**: static method of <code>[Helper](#module_Helper)</code>  
**Returns**: <code>Boolean</code> - if true, IE is used  
<a name="module_Helper.scrollEvent"></a>

### Helper.scrollEvent() ⇒ <code>String</code>
gets cross-browser scroll-event

**Kind**: static method of <code>[Helper](#module_Helper)</code>  
**Returns**: <code>String</code> - name of scroll event  
<a name="Bounds"></a>

## Bounds
**Kind**: global class  

* [Bounds](#Bounds)
    * [new Bounds(northWest, southEast)](#new_Bounds_new)
    * [.width](#Bounds+width) ⇒ <code>Number</code>
    * [.height](#Bounds+height) ⇒ <code>Number</code>
    * [.equals(bounds)](#Bounds+equals) ⇒ <code>Boolean</code>
    * [.toString()](#Bounds+toString) ⇒ <code>String</code>

<a name="new_Bounds_new"></a>

### new Bounds(northWest, southEast)
**Returns**: <code>[Bounds](#Bounds)</code> - instance of Bounds for chaining  
**Params**

- northWest <code>Number</code> - = new LatLng() - representation of northWest boundary
- southEast <code>Number</code> - = new LatLng() - representation of southEast boundary

<a name="Bounds+width"></a>

### bounds.width ⇒ <code>Number</code>
get width of boundaries

**Kind**: instance property of <code>[Bounds](#Bounds)</code>  
**Returns**: <code>Number</code> - distance between east and west boundary  
<a name="Bounds+height"></a>

### bounds.height ⇒ <code>Number</code>
get height of boundaries

**Kind**: instance property of <code>[Bounds](#Bounds)</code>  
**Returns**: <code>Number</code> - distance between north and south boundary  
<a name="Bounds+equals"></a>

### bounds.equals(bounds) ⇒ <code>Boolean</code>
check if specified bounds equals this bounds

**Kind**: instance method of <code>[Bounds](#Bounds)</code>  
**Returns**: <code>Boolean</code> - Whether they are equal or not  
**Params**

- bounds <code>[Bounds](#Bounds)</code> - specified bounds

<a name="Bounds+toString"></a>

### bounds.toString() ⇒ <code>String</code>
string representation

**Kind**: instance method of <code>[Bounds](#Bounds)</code>  
**Returns**: <code>String</code> - string representation of object  
<a name="Cluster"></a>

## Cluster
**Kind**: global class  

* [Cluster](#Cluster)
    * [new Cluster(context, texture, font, id)](#new_Cluster_new)
    * [.position](#Cluster+position) ⇒ <code>[Point](#Point)</code>
    * [.boundingBox](#Cluster+boundingBox) ⇒ <code>[Rectangle](#Rectangle)</code>
    * [.init()](#Cluster+init) ⇒ <code>[Cluster](#Cluster)</code>
    * [.createClusterMarker()](#Cluster+createClusterMarker) ⇒ <code>[Cluster](#Cluster)</code>
    * [.draw()](#Cluster+draw) ⇒ <code>[Cluster](#Cluster)</code>
    * [.bindEvents()](#Cluster+bindEvents) ⇒ <code>[Cluster](#Cluster)</code>
    * [.unbindEvents()](#Cluster+unbindEvents) ⇒ <code>[Cluster](#Cluster)</code>
    * [.isActive(point, oneIsHit)](#Cluster+isActive) ⇒ <code>Boolean</code>
    * [.hit(point)](#Cluster+hit) ⇒ <code>Booelan</code>
    * [.action()](#Cluster+action) ⇒ <code>[Cluster](#Cluster)</code>
    * [.calculateCenter()](#Cluster+calculateCenter) ⇒ <code>[LatLng](#LatLng)</code>
    * [.addMarker(marker)](#Cluster+addMarker) ⇒ <code>[Cluster](#Cluster)</code>
    * [.remove()](#Cluster+remove) ⇒ <code>[Cluster](#Cluster)</code>

<a name="new_Cluster_new"></a>

### new Cluster(context, texture, font, id)
**Returns**: <code>[Cluster](#Cluster)</code> - instance of Cluster for chaining  
**Params**

- context <code>CanvasRenderingContext2D</code> - = null - context of canvas
- texture <code>[Texture](#Texture)</code> - = null - texture of cluster
- font <code>Object</code> - = {} - style of font in cluster
- id <code>Number</code> - = 0 - id of parent instance

<a name="Cluster+position"></a>

### cluster.position ⇒ <code>[Point](#Point)</code>
calculates the actual position of a cluster

**Kind**: instance property of <code>[Cluster](#Cluster)</code>  
**Returns**: <code>[Point](#Point)</code> - calculated position  
<a name="Cluster+boundingBox"></a>

### cluster.boundingBox ⇒ <code>[Rectangle](#Rectangle)</code>
calculates actual dimension and position of a cluster

**Kind**: instance property of <code>[Cluster](#Cluster)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - calculated dimension  
<a name="Cluster+init"></a>

### cluster.init() ⇒ <code>[Cluster](#Cluster)</code>
initialize a cluster

**Kind**: instance method of <code>[Cluster](#Cluster)</code>  
**Returns**: <code>[Cluster](#Cluster)</code> - instance of Cluster for chaining  
<a name="Cluster+createClusterMarker"></a>

### cluster.createClusterMarker() ⇒ <code>[Cluster](#Cluster)</code>
create cluster for markers

**Kind**: instance method of <code>[Cluster](#Cluster)</code>  
**Returns**: <code>[Cluster](#Cluster)</code> - instance of Cluster for chaining  
<a name="Cluster+draw"></a>

### cluster.draw() ⇒ <code>[Cluster](#Cluster)</code>
draw this cluster

**Kind**: instance method of <code>[Cluster](#Cluster)</code>  
**Returns**: <code>[Cluster](#Cluster)</code> - instance of Cluster for chaining  
<a name="Cluster+bindEvents"></a>

### cluster.bindEvents() ⇒ <code>[Cluster](#Cluster)</code>
bind all events

**Kind**: instance method of <code>[Cluster](#Cluster)</code>  
**Returns**: <code>[Cluster](#Cluster)</code> - instance of Cluster for chaining  
<a name="Cluster+unbindEvents"></a>

### cluster.unbindEvents() ⇒ <code>[Cluster](#Cluster)</code>
unbind all events

**Kind**: instance method of <code>[Cluster](#Cluster)</code>  
**Returns**: <code>[Cluster](#Cluster)</code> - instance of Cluster for chaining  
<a name="Cluster+isActive"></a>

### cluster.isActive(point, oneIsHit) ⇒ <code>Boolean</code>
set active to true

**Kind**: instance method of <code>[Cluster](#Cluster)</code>  
**Returns**: <code>Boolean</code> - indicate hit (true) or not  
**Params**

- point <code>[Point](#Point)</code> - specified point to check against
- oneIsHit <code>Boolean</code> <code> = false</code> - = false - if one item was hit before

<a name="Cluster+hit"></a>

### cluster.hit(point) ⇒ <code>Booelan</code>
check hit of point

**Kind**: instance method of <code>[Cluster](#Cluster)</code>  
**Returns**: <code>Booelan</code> - Wheter it is a hit or not  
**Params**

- point <code>[Point](#Point)</code> - specified point to check against

<a name="Cluster+action"></a>

### cluster.action() ⇒ <code>[Cluster](#Cluster)</code>
execute bound action of cluster

**Kind**: instance method of <code>[Cluster](#Cluster)</code>  
**Returns**: <code>[Cluster](#Cluster)</code> - instance of Cluster for chaining  
<a name="Cluster+calculateCenter"></a>

### cluster.calculateCenter() ⇒ <code>[LatLng](#LatLng)</code>
calculates the center of a cluster

**Kind**: instance method of <code>[Cluster](#Cluster)</code>  
**Returns**: <code>[LatLng](#LatLng)</code> - center of cluster  
<a name="Cluster+addMarker"></a>

### cluster.addMarker(marker) ⇒ <code>[Cluster](#Cluster)</code>
adds a marker to the cluster

**Kind**: instance method of <code>[Cluster](#Cluster)</code>  
**Returns**: <code>[Cluster](#Cluster)</code> - instance of Cluster for chaining  
**Params**

- marker <code>[Marker](#Marker)</code> - specified marker to be added to the cluster

<a name="Cluster+remove"></a>

### cluster.remove() ⇒ <code>[Cluster](#Cluster)</code>
remove this cluster

**Kind**: instance method of <code>[Cluster](#Cluster)</code>  
**Returns**: <code>[Cluster](#Cluster)</code> - instance of Cluster for chaining  
<a name="Drawable"></a>

## Drawable
**Kind**: global class  

* [Drawable](#Drawable)
    * [new Drawable(id, x, y, w, h)](#new_Drawable_new)
    * [.view](#Drawable+view) ⇒ <code>[Rectangle](#Rectangle)</code>
    * [.level](#Drawable+level) ⇒ <code>Number</code>
    * [.viewport](#Drawable+viewport) ⇒ <code>[Rectangle](#Rectangle)</code>
    * [.distortionFactor](#Drawable+distortionFactor) ⇒ <code>Number</code>
    * [.offsetToCenter](#Drawable+offsetToCenter) ⇒ <code>Number</code>
    * [.centerPosition](#Drawable+centerPosition) ⇒ <code>[LatLng](#LatLng)</code>
    * [.zoomFactor](#Drawable+zoomFactor) ⇒ <code>Number</code>
    * [.bounds](#Drawable+bounds) ⇒ <code>[Bounds](#Bounds)</code>
    * [.draw()](#Drawable+draw) ⇒ <code>[Drawable](#Drawable)</code>

<a name="new_Drawable_new"></a>

### new Drawable(id, x, y, w, h)
**Returns**: <code>[Drawable](#Drawable)</code> - instance of Drawable for chaining  
**Params**

- id <code>Number</code> <code> = 0</code> - = 0 - id of parent instance
- x <code>Number</code> <code> = 0</code> - = 0 - position x of element
- y <code>Number</code> <code> = 0</code> - = 0 - position y of element
- w <code>Number</code> <code> = 0</code> - = 0 - width of element
- h <code>Number</code> <code> = 0</code> - = 0 - height of element

<a name="Drawable+view"></a>

### drawable.view ⇒ <code>[Rectangle](#Rectangle)</code>
stores mapdimension information

**Kind**: instance property of <code>[Drawable](#Drawable)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - map  
<a name="Drawable+level"></a>

### drawable.level ⇒ <code>Number</code>
stores level information

**Kind**: instance property of <code>[Drawable](#Drawable)</code>  
**Returns**: <code>Number</code> - level  
<a name="Drawable+viewport"></a>

### drawable.viewport ⇒ <code>[Rectangle](#Rectangle)</code>
stores viewport information

**Kind**: instance property of <code>[Drawable](#Drawable)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - viewport  
<a name="Drawable+distortionFactor"></a>

### drawable.distortionFactor ⇒ <code>Number</code>
stores distortion information

**Kind**: instance property of <code>[Drawable](#Drawable)</code>  
**Returns**: <code>Number</code> - distortionFactor  
<a name="Drawable+offsetToCenter"></a>

### drawable.offsetToCenter ⇒ <code>Number</code>
stores x offset to center

**Kind**: instance property of <code>[Drawable](#Drawable)</code>  
**Returns**: <code>Number</code> - offsetToCenter  
<a name="Drawable+centerPosition"></a>

### drawable.centerPosition ⇒ <code>[LatLng](#LatLng)</code>
stores latlng position of map center

**Kind**: instance property of <code>[Drawable](#Drawable)</code>  
**Returns**: <code>[LatLng](#LatLng)</code> - center  
<a name="Drawable+zoomFactor"></a>

### drawable.zoomFactor ⇒ <code>Number</code>
stores current zoom factor

**Kind**: instance property of <code>[Drawable](#Drawable)</code>  
**Returns**: <code>Number</code> - zoomFactor  
<a name="Drawable+bounds"></a>

### drawable.bounds ⇒ <code>[Bounds](#Bounds)</code>
stores boundary information

**Kind**: instance property of <code>[Drawable](#Drawable)</code>  
**Returns**: <code>[Bounds](#Bounds)</code> - bounds  
<a name="Drawable+draw"></a>

### drawable.draw() ⇒ <code>[Drawable](#Drawable)</code>
execute on displaying instance

**Kind**: instance method of <code>[Drawable](#Drawable)</code>  
**Returns**: <code>[Drawable](#Drawable)</code> - instance of Drawable for chaining  
<a name="Interact"></a>

## Interact
**Kind**: global class  

* [Interact](#Interact)
    * [new Interact(settings)](#new_Interact_new)
    * [.timeToLastMove](#Interact+timeToLastMove) ⇒ <code>Number</code>
    * [.time](#Interact+time) ⇒ <code>Number</code>
    * [.getDefaultSettings()](#Interact+getDefaultSettings) ⇒ <code>Object</code>
    * [.getDefaultCallbacks()](#Interact+getDefaultCallbacks) ⇒ <code>Object</code>
    * [.getDefaultEventNames()](#Interact+getDefaultEventNames) ⇒ <code>Object</code>
    * [.getDefaultData()](#Interact+getDefaultData) ⇒ <code>Object</code>
    * [.handleViewport(viewport)](#Interact+handleViewport) ⇒ <code>[Interact](#Interact)</code>
    * [.init(container)](#Interact+init) ⇒ <code>[Interact](#Interact)</code>
    * [.bindEvents()](#Interact+bindEvents) ⇒ <code>[Interact](#Interact)</code>
    * [.bindIEEvents()](#Interact+bindIEEvents) ⇒ <code>[Interact](#Interact)</code>
    * [.bindTouchEvents()](#Interact+bindTouchEvents) ⇒ <code>[Interact](#Interact)</code>
    * [.bindMouseEvents()](#Interact+bindMouseEvents) ⇒ <code>[Interact](#Interact)</code>
    * [.preHandle(event)](#Interact+preHandle) ⇒ <code>Object</code>
    * [.scrollHandler(event)](#Interact+scrollHandler) ⇒ <code>Boolean</code>
    * [.normalizeWheelDelta(e)](#Interact+normalizeWheelDelta) ⇒ <code>Number</code>
    * [.isPointerEvent(e)](#Interact+isPointerEvent) ⇒ <code>Boolean</code>
    * [.calculateStart(e)](#Interact+calculateStart) ⇒ <code>Object</code>
    * [.handlePointerEventStart(data, e)](#Interact+handlePointerEventStart) ⇒ <code>Object</code>
    * [.handleTouchEventStart(data, e)](#Interact+handleTouchEventStart) ⇒ <code>Object</code>
    * [.getPointerArray()](#Interact+getPointerArray) ⇒ <code>Object</code>
    * [.handleMultitouchStart(positionsArray)](#Interact+handleMultitouchStart) ⇒ <code>Object</code>
    * [.handleSingletouchStart(position)](#Interact+handleSingletouchStart) ⇒ <code>Object</code>
    * [.takeActionStart(action)](#Interact+takeActionStart) ⇒ <code>[Interact](#Interact)</code>
    * [.startHandler(event)](#Interact+startHandler) ⇒ <code>Boolean</code>
    * [.clearTimeouts(timeout)](#Interact+clearTimeouts) ⇒ <code>[Interact](#Interact)</code>
    * [.calculateMove(e)](#Interact+calculateMove) ⇒ <code>Object</code>
    * [.handlePointerEventMove(data, e)](#Interact+handlePointerEventMove) ⇒ <code>Object</code>
    * [.handleTouchEventMove(data, e)](#Interact+handleTouchEventMove) ⇒ <code>Object</code>
    * [.handleTouchEvent(data, e, fnSingle, fnMulti)](#Interact+handleTouchEvent) ⇒ <code>Object</code>
    * [.handleMultitouchMove(positionsArray)](#Interact+handleMultitouchMove) ⇒ <code>Object</code>
    * [.handleSingletouchMove(position)](#Interact+handleSingletouchMove) ⇒ <code>Object</code>
    * [.moveHandler(event)](#Interact+moveHandler) ⇒ <code>Boolean</code>
    * [.handlePinchAndZoom()](#Interact+handlePinchAndZoom) ⇒ <code>[Interact](#Interact)</code>
    * [.positionDidNotChange(e)](#Interact+positionDidNotChange) ⇒ <code>Boolean</code>
    * [.calculateEnd(e)](#Interact+calculateEnd) ⇒ <code>Object</code>
    * [.handleSingletouchEnd(position)](#Interact+handleSingletouchEnd) ⇒ <code>Object</code>
    * [.takeActionEnd(action)](#Interact+takeActionEnd) ⇒ <code>[Interact](#Interact)</code>
    * [.endHandler(event)](#Interact+endHandler) ⇒ <code>Boolean</code>
    * [.handleSwipeAndFlick()](#Interact+handleSwipeAndFlick) ⇒ <code>[Interact](#Interact)</code>
    * [.handleMultitouchEnd(e)](#Interact+handleMultitouchEnd) ⇒ <code>[Interact](#Interact)</code>
    * [.pinchBalance()](#Interact+pinchBalance) ⇒ <code>[Interact](#Interact)</code>
    * [.getSwipeDirections(direction)](#Interact+getSwipeDirections) ⇒ <code>Array.&lt;String&gt;</code>
    * [.setTimeoutForEvent(callback, timeout, args, holdTimeout)](#Interact+setTimeoutForEvent) ⇒ <code>[Interact](#Interact)</code>
    * [.eventCallback(callback, args)](#Interact+eventCallback) ⇒ <code>[Interact](#Interact)</code>
    * [.getRelativePosition(e)](#Interact+getRelativePosition) ⇒ <code>[Point](#Point)</code>
    * [.getAbsolutePosition(point)](#Interact+getAbsolutePosition) ⇒ <code>[Point](#Point)</code>
    * [.getScrollDirection(event)](#Interact+getScrollDirection) ⇒ <code>Array.&lt;String&gt;</code>
    * [.isDownDirection(axis, event)](#Interact+isDownDirection) ⇒ <code>Boolean</code>
    * [.isUpDirection(axis, event)](#Interact+isUpDirection) ⇒ <code>Boolean</code>
    * [.isRightDirection(axis, event)](#Interact+isRightDirection) ⇒ <code>Boolean</code>
    * [.isLeftDirection(axis, event)](#Interact+isLeftDirection) ⇒ <code>Boolean</code>
    * [.getEvent(e)](#Interact+getEvent) ⇒ <code>Event</code>

<a name="new_Interact_new"></a>

### new Interact(settings)
**Returns**: <code>[Interact](#Interact)</code> - new instance  
**Params**

- settings <code>Object</code> - = {} - all the settings
    - .container <code>String</code> | <code>HTMLElement</code> - = ".interact-container" - Container, either string or dom-object
    - .timeTreshold <code>Object</code> - = {} - settings for the timing tresholds
        - .tap <code>Number</code> - = 200 - timing treshold for tap
        - .hold <code>Number</code> - = 500 - timing treshold for hold
        - .swipe <code>Number</code> - = 300 - timing treshold for swipe
        - .flick <code>Number</code> - = 30 - timing treshold for flick
    - .distanceTreshold <code>Object</code> - = {} - settings for the distance tresholds
        - .swipe <code>Number</code> - = 200 - distance treshold for swipe
    - .overwriteViewportSettings <code>Boolean</code> | <code>string</code> - = false - on true prevents pinching, can be a custom string too
    - .stopPropagation <code>Boolean</code> - = true - on true stops the propagation of events
    - .preventDefault <code>Boolean</code> - = true - on true prevents the default actions of events
    - .autoFireHold <code>Boolean</code> - = false - if set to false hold-event is not fired
    - .pinchBalanceTime <code>Number</code> - = 50 - prevents from firing too much pinching events
    - .callbacks <code>Object</code> - = {} - settings for the callback-functions
        - .tap <code>function</code> - = null - callback-function for tap
        - .tapHold <code>function</code> - = null - callback-function for tapHold
        - .doubletap <code>function</code> - = null - callback-function for doubletap
        - .hold <code>function</code> - = null - callback-function for hold
        - .pan <code>function</code> - = null - callback-function for pan
        - .swipe <code>function</code> - = null - callback-function for swipe
        - .flick <code>function</code> - = null - callback-function for flick
        - .zoom <code>function</code> - = null - callback-function for zoom
        - .wheel <code>function</code> - = null - callback-function for wheel
        - .pinch <code>function</code> - = null - callback-function for pinch
    - .events <code>Object</code> - = {} - settings all eventnames
        - .start <code>Object</code> - = {} - settings all start eventnames
            - .touch <code>Object</code> - = ("MSPointerDown pointerdown" || "touchstart") - settings start touch eventnames
            - .mouse <code>Object</code> - = ("MSPointerDown pointerdown" || "mousedown") - settings start mouse eventnames
        - .move <code>Object</code> - = {} - settings all move eventnames
            - .touch <code>Object</code> - = ("MSPointerMove pointermove" || "touchmove") - settings move touch eventnames
            - .mouse <code>Object</code> - = ("MSPointerMove pointermove" || "mousemove") - settings move mouse eventnames
        - .end <code>Object</code> - = {} - settings all end eventnames
            - .touch <code>Object</code> - = ("MSPointerUp pointerup" || "touchend") - settings end touch eventnames
            - .mouse <code>Object</code> - = ("MSPointerUp pointerup" || "mouseup") - settings end mouse eventnames
        - .leave <code>Object</code> - = {} - settings all leave eventnames
            - .touch <code>Object</code> - = ("MSPointerLeave pointerleave" || "touchleave") - settings leave touch eventnames
            - .mouse <code>Object</code> - = ("MSPointerLeave pointerleave" || "mouseleave") - settings leave mouse eventnames
        - .scroll <code>String</code> - = ("wheel" || "mousewhell" || "DOMMouseScroll") - settings all scroll eventnames

<a name="Interact+timeToLastMove"></a>

### interact.timeToLastMove ⇒ <code>Number</code>
get time difference to last

**Kind**: instance property of <code>[Interact](#Interact)</code>  
**Returns**: <code>Number</code> - difference  
<a name="Interact+time"></a>

### interact.time ⇒ <code>Number</code>
get time difference to start

**Kind**: instance property of <code>[Interact](#Interact)</code>  
**Returns**: <code>Number</code> - difference  
<a name="Interact+getDefaultSettings"></a>

### interact.getDefaultSettings() ⇒ <code>Object</code>
get the default settings

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Object</code> - settings  
<a name="Interact+getDefaultCallbacks"></a>

### interact.getDefaultCallbacks() ⇒ <code>Object</code>
get default callbacks

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Object</code> - callbacks  
<a name="Interact+getDefaultEventNames"></a>

### interact.getDefaultEventNames() ⇒ <code>Object</code>
get default eventnames

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Object</code> - eventnames  
<a name="Interact+getDefaultData"></a>

### interact.getDefaultData() ⇒ <code>Object</code>
get default data

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Object</code> - data  
<a name="Interact+handleViewport"></a>

### interact.handleViewport(viewport) ⇒ <code>[Interact](#Interact)</code>
handles the overwrite of viewport meta

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>[Interact](#Interact)</code> - Returns this instance  
**Params**

- viewport <code>Boolean</code> | <code>String</code> - specified viewport option

<a name="Interact+init"></a>

### interact.init(container) ⇒ <code>[Interact](#Interact)</code>
initializes class settings and bindings

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>[Interact](#Interact)</code> - Returns this instance  
**Params**

- container <code>HTMLElement</code> | <code>String</code> - Container, either string or DOM object

<a name="Interact+bindEvents"></a>

### interact.bindEvents() ⇒ <code>[Interact](#Interact)</code>
binds all needed events

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>[Interact](#Interact)</code> - Returns this instance  
<a name="Interact+bindIEEvents"></a>

### interact.bindIEEvents() ⇒ <code>[Interact](#Interact)</code>
binds all needed events for IE

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>[Interact](#Interact)</code> - Returns this instance  
<a name="Interact+bindTouchEvents"></a>

### interact.bindTouchEvents() ⇒ <code>[Interact](#Interact)</code>
binds all needed events for touch devices

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>[Interact](#Interact)</code> - Returns this instance  
<a name="Interact+bindMouseEvents"></a>

### interact.bindMouseEvents() ⇒ <code>[Interact](#Interact)</code>
binds all needed events for mouse devices

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>[Interact](#Interact)</code> - Returns this instance  
<a name="Interact+preHandle"></a>

### interact.preHandle(event) ⇒ <code>Object</code>
pre handle all events

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Object</code> - normalized Event  
**Params**

- event <code>Event</code> - event

<a name="Interact+scrollHandler"></a>

### interact.scrollHandler(event) ⇒ <code>Boolean</code>
handles cross-browser and -device scroll

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Boolean</code> - always returns false  
**Params**

- event <code>Event</code> - event

<a name="Interact+normalizeWheelDelta"></a>

### interact.normalizeWheelDelta(e) ⇒ <code>Number</code>
Solution from http://jsfiddle.net/uNeBr/

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Number</code> - normalized wheel delta  
**Params**

- e <code>Event</code> - event

<a name="Interact+isPointerEvent"></a>

### interact.isPointerEvent(e) ⇒ <code>Boolean</code>
check if event is a PointerEvent (IE)

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Boolean</code> - Whether event is PointerEvent  
**Params**

- e <code>Event</code> - event

<a name="Interact+calculateStart"></a>

### interact.calculateStart(e) ⇒ <code>Object</code>
calculation to be made at start-handler

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Object</code> - calculated data  
**Params**

- e <code>Event</code> - event

<a name="Interact+handlePointerEventStart"></a>

### interact.handlePointerEventStart(data, e) ⇒ <code>Object</code>
handle PointerEvent calculations

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Object</code> - manipulated enriched data  
**Params**

- data <code>Object</code> - current data
- e <code>Event</code> - event

<a name="Interact+handleTouchEventStart"></a>

### interact.handleTouchEventStart(data, e) ⇒ <code>Object</code>
handle TouchEvent calculations for start

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Object</code> - manipulated enriched data  
**Params**

- data <code>Object</code> - current data
- e <code>Event</code> - event

<a name="Interact+getPointerArray"></a>

### interact.getPointerArray() ⇒ <code>Object</code>
get array of pointers (IE)

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Object</code> - array of pointerIDs  
<a name="Interact+handleMultitouchStart"></a>

### interact.handleMultitouchStart(positionsArray) ⇒ <code>Object</code>
handles multitouch for start

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Object</code> - manipulated enriched data  
**Params**

- positionsArray <code>Object</code> - array of positions

<a name="Interact+handleSingletouchStart"></a>

### interact.handleSingletouchStart(position) ⇒ <code>Object</code>
handles singletouch for start

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Object</code> - manipulated enriched data  
**Params**

- position <code>[Point](#Point)</code> - position of touch

<a name="Interact+takeActionStart"></a>

### interact.takeActionStart(action) ⇒ <code>[Interact](#Interact)</code>
handle action at start event handler

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>[Interact](#Interact)</code> - instance of Interact for chaining  
**Params**

- action <code>String</code> - last action made

<a name="Interact+startHandler"></a>

### interact.startHandler(event) ⇒ <code>Boolean</code>
handles cross-browser and -device start-event

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Boolean</code> - always returns false  
**Params**

- event <code>Event</code> - event

<a name="Interact+clearTimeouts"></a>

### interact.clearTimeouts(timeout) ⇒ <code>[Interact](#Interact)</code>
clear timeout helper

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>[Interact](#Interact)</code> - instance of Interact for chaining  
**Params**

- timeout <code>Object</code> - timeout object to be cleared

<a name="Interact+calculateMove"></a>

### interact.calculateMove(e) ⇒ <code>Object</code>
calculation to be made at move-handler

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Object</code> - calculated data  
**Params**

- e <code>Event</code> - event

<a name="Interact+handlePointerEventMove"></a>

### interact.handlePointerEventMove(data, e) ⇒ <code>Object</code>
handle PointerEvent at moving (IE)

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Object</code> - manipulated enriched data  
**Params**

- data <code>Object</code> - specified input data
- e <code>Event</code> - event

<a name="Interact+handleTouchEventMove"></a>

### interact.handleTouchEventMove(data, e) ⇒ <code>Object</code>
handle TouchEvent calculations for move

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Object</code> - manipulated enriched data  
**Params**

- data <code>Object</code> - current data
- e <code>Event</code> - event

<a name="Interact+handleTouchEvent"></a>

### interact.handleTouchEvent(data, e, fnSingle, fnMulti) ⇒ <code>Object</code>
handles touch events

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Object</code> - manipulated enriched data  
**Params**

- data <code>Object</code> - current data
- e <code>Event</code> - event
- fnSingle <code>function</code> - callback for singletouch
- fnMulti <code>function</code> - callback for multitouch

<a name="Interact+handleMultitouchMove"></a>

### interact.handleMultitouchMove(positionsArray) ⇒ <code>Object</code>
handles multitouch for move

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Object</code> - manipulated enriched data  
**Params**

- positionsArray <code>Object</code> - array of positions

<a name="Interact+handleSingletouchMove"></a>

### interact.handleSingletouchMove(position) ⇒ <code>Object</code>
handles singletouch for move

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Object</code> - manipulated enriched data  
**Params**

- position <code>[Point](#Point)</code> - position

<a name="Interact+moveHandler"></a>

### interact.moveHandler(event) ⇒ <code>Boolean</code>
handles cross-browser and -device move-event

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Boolean</code> - always returns false  
**Params**

- event <code>Event</code> - event

<a name="Interact+handlePinchAndZoom"></a>

### interact.handlePinchAndZoom() ⇒ <code>[Interact](#Interact)</code>
handles pinch and zoom

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>[Interact](#Interact)</code> - instance of Interact for chaining  
<a name="Interact+positionDidNotChange"></a>

### interact.positionDidNotChange(e) ⇒ <code>Boolean</code>
check if position has been changed

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Boolean</code> - Whether or not position has changed  
**Params**

- e <code>Event</code> - event

<a name="Interact+calculateEnd"></a>

### interact.calculateEnd(e) ⇒ <code>Object</code>
calculation to be made at end-handler

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Object</code> - calculated data  
**Params**

- e <code>Event</code> - event

<a name="Interact+handleSingletouchEnd"></a>

### interact.handleSingletouchEnd(position) ⇒ <code>Object</code>
handles singletouch for end

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Object</code> - manipulated enriched data  
**Params**

- position <code>[Point](#Point)</code> - position

<a name="Interact+takeActionEnd"></a>

### interact.takeActionEnd(action) ⇒ <code>[Interact](#Interact)</code>
handle action at end event handler

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>[Interact](#Interact)</code> - instance of Interact for chaining  
**Params**

- action <code>String</code> - last action made

<a name="Interact+endHandler"></a>

### interact.endHandler(event) ⇒ <code>Boolean</code>
handles cross-browser and -device end-event

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Boolean</code> - always returns false  
**Params**

- event <code>Event</code> - event

<a name="Interact+handleSwipeAndFlick"></a>

### interact.handleSwipeAndFlick() ⇒ <code>[Interact](#Interact)</code>
handles flick and swipe events

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>[Interact](#Interact)</code> - instance of Interact for chaining  
<a name="Interact+handleMultitouchEnd"></a>

### interact.handleMultitouchEnd(e) ⇒ <code>[Interact](#Interact)</code>
handles multitouch for end

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>[Interact](#Interact)</code> - instance of Interact for chaining  
**Params**

- e <code>Event</code> - event

<a name="Interact+pinchBalance"></a>

### interact.pinchBalance() ⇒ <code>[Interact](#Interact)</code>
balances pinching after release of finger

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>[Interact](#Interact)</code> - instance of Interact for chaining  
<a name="Interact+getSwipeDirections"></a>

### interact.getSwipeDirections(direction) ⇒ <code>Array.&lt;String&gt;</code>
Returns an array of strings, representing the directions

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Array.&lt;String&gt;</code> - returns an array representing the directions as strings  
**Params**

- direction <code>[Point](#Point)</code> - the specified direction in pixel

<a name="Interact+setTimeoutForEvent"></a>

### interact.setTimeoutForEvent(callback, timeout, args, holdTimeout) ⇒ <code>[Interact](#Interact)</code>
Helper for setting a timeout for events

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>[Interact](#Interact)</code> - Returns this instance  
**Params**

- callback <code>function</code> - function to be called
- timeout <code>Number</code> - time in milliseconds
- args <code>Array.&lt;Object&gt;</code> - array of arguments
- holdTimeout <code>Boolean</code> - if true, a different variable will be used

<a name="Interact+eventCallback"></a>

### interact.eventCallback(callback, args) ⇒ <code>[Interact](#Interact)</code>
Eventhandler for handling the callbacks

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>[Interact](#Interact)</code> - Returns this instance  
**Params**

- callback <code>function</code> - function to be called
- args <code>Array.&lt;object&gt;</code> - arguments for the function

<a name="Interact+getRelativePosition"></a>

### interact.getRelativePosition(e) ⇒ <code>[Point](#Point)</code>
get the relative position of clientX and clientY

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>[Point](#Point)</code> - calculated relative position  
**Params**

- e <code>Event</code> - event

<a name="Interact+getAbsolutePosition"></a>

### interact.getAbsolutePosition(point) ⇒ <code>[Point](#Point)</code>
get the absolute position of clientX and clientY

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>[Point](#Point)</code> - calculated absolute position  
**Params**

- point <code>[Point](#Point)</code> - specified point

<a name="Interact+getScrollDirection"></a>

### interact.getScrollDirection(event) ⇒ <code>Array.&lt;String&gt;</code>
get scroll direction from event

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Array.&lt;String&gt;</code> - an array with scroll directions  
**Params**

- event <code>Event</code> - event

<a name="Interact+isDownDirection"></a>

### interact.isDownDirection(axis, event) ⇒ <code>Boolean</code>
checks if direction is down

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Boolean</code> - Whether or not direction is down  
**Params**

- axis <code>Number</code> - what axis is used
- event <code>Event</code> - event

<a name="Interact+isUpDirection"></a>

### interact.isUpDirection(axis, event) ⇒ <code>Boolean</code>
checks if direction is up

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Boolean</code> - Whether or not direction is up  
**Params**

- axis <code>Number</code> - what axis is used
- event <code>Event</code> - event

<a name="Interact+isRightDirection"></a>

### interact.isRightDirection(axis, event) ⇒ <code>Boolean</code>
checks if direction is right

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Boolean</code> - Whether or not direction is right  
**Params**

- axis <code>Number</code> - what axis is used
- event <code>Event</code> - event

<a name="Interact+isLeftDirection"></a>

### interact.isLeftDirection(axis, event) ⇒ <code>Boolean</code>
checks if direction is left

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Boolean</code> - Whether or not direction is left  
**Params**

- axis <code>Number</code> - what axis is used
- event <code>Event</code> - event

<a name="Interact+getEvent"></a>

### interact.getEvent(e) ⇒ <code>Event</code>
Get event helper, applies event-fix too

**Kind**: instance method of <code>[Interact](#Interact)</code>  
**Returns**: <code>Event</code> - cross-device event  
**Params**

- e <code>Event</code> - event

<a name="LatLng"></a>

## LatLng
**Kind**: global class  

* [LatLng](#LatLng)
    * [new LatLng(lat, lng)](#new_LatLng_new)
    * _instance_
        * [.length](#LatLng+length) ⇒ <code>Number</code>
        * [.clone](#LatLng+clone) ⇒ <code>[LatLng](#LatLng)</code>
        * [.distance(latlng)](#LatLng+distance) ⇒ <code>Number</code>
        * [.substract(coord)](#LatLng+substract) ⇒ <code>[LatLng](#LatLng)</code>
        * [.add(coord)](#LatLng+add) ⇒ <code>[LatLng](#LatLng)</code>
        * [.divide(factorLat, factorLng)](#LatLng+divide) ⇒ <code>[LatLng](#LatLng)</code>
        * [.multiply(factorLat, factorLng)](#LatLng+multiply) ⇒ <code>[LatLng](#LatLng)</code>
        * [.equals(coord)](#LatLng+equals) ⇒ <code>Boolean</code>
        * [.toString()](#LatLng+toString) ⇒ <code>String</code>
    * _static_
        * [.createFromLatLng(LatLng)](#LatLng.createFromLatLng) ⇒ <code>[LatLng](#LatLng)</code>

<a name="new_LatLng_new"></a>

### new LatLng(lat, lng)
**Returns**: <code>[LatLng](#LatLng)</code> - instance of LatLng for chaining  
**Params**

- lat <code>Number</code> <code> = 0</code> - = 0 - representation of latitude
- lng <code>Number</code> <code> = 0</code> - = 0 - representation of longitude

<a name="LatLng+length"></a>

### latLng.length ⇒ <code>Number</code>
length of a latlng

**Kind**: instance property of <code>[LatLng](#LatLng)</code>  
**Returns**: <code>Number</code> - length of latlng  
<a name="LatLng+clone"></a>

### latLng.clone ⇒ <code>[LatLng](#LatLng)</code>
gets a clone of this latlng

**Kind**: instance property of <code>[LatLng](#LatLng)</code>  
**Returns**: <code>[LatLng](#LatLng)</code> - create a copy  
<a name="LatLng+distance"></a>

### latLng.distance(latlng) ⇒ <code>Number</code>
calculates distance between this and specified latlng

**Kind**: instance method of <code>[LatLng](#LatLng)</code>  
**Returns**: <code>Number</code> - distance  
**Params**

- latlng <code>[LatLng](#LatLng)</code> - = new LatLng() - specified latlng

<a name="LatLng+substract"></a>

### latLng.substract(coord) ⇒ <code>[LatLng](#LatLng)</code>
substract specified coord from this coordinate

**Kind**: instance method of <code>[LatLng](#LatLng)</code>  
**Returns**: <code>[LatLng](#LatLng)</code> - instance of LatLng for chaining  
**Params**

- coord <code>[LatLng](#LatLng)</code> - = new LatLng() - specified coordinate to substract from this coord

<a name="LatLng+add"></a>

### latLng.add(coord) ⇒ <code>[LatLng](#LatLng)</code>
add specified coord to this coordinate

**Kind**: instance method of <code>[LatLng](#LatLng)</code>  
**Returns**: <code>[LatLng](#LatLng)</code> - instance of LatLng for chaining  
**Params**

- coord <code>[LatLng](#LatLng)</code> - = new LatLng() - specified coordinate to add to this coord

<a name="LatLng+divide"></a>

### latLng.divide(factorLat, factorLng) ⇒ <code>[LatLng](#LatLng)</code>
divides a latlng with a given factor

**Kind**: instance method of <code>[LatLng](#LatLng)</code>  
**Returns**: <code>[LatLng](#LatLng)</code> - instance of LatLng for chaining  
**Params**

- factorLat <code>Number</code> <code> = 1</code> - = 1 - factor to divide lat with
- factorLng <code>Number</code> - = factorLat - factor to divide lng with

<a name="LatLng+multiply"></a>

### latLng.multiply(factorLat, factorLng) ⇒ <code>[LatLng](#LatLng)</code>
multiplicates a latlng with a given factor

**Kind**: instance method of <code>[LatLng](#LatLng)</code>  
**Returns**: <code>[LatLng](#LatLng)</code> - instance of LatLng for chaining  
**Params**

- factorLat <code>Number</code> <code> = 1</code> - = 1 - factor to multiplicate lat with
- factorLng <code>Number</code> - = factorLat - factor to multiplicate lng with

<a name="LatLng+equals"></a>

### latLng.equals(coord) ⇒ <code>Boolean</code>
checks if specified coord equals this coord

**Kind**: instance method of <code>[LatLng](#LatLng)</code>  
**Returns**: <code>Boolean</code> - Returns if specified coord equals this coord  
**Params**

- coord <code>[LatLng](#LatLng)</code> - specified coord to check against

<a name="LatLng+toString"></a>

### latLng.toString() ⇒ <code>String</code>
converts a LatLng to string

**Kind**: instance method of <code>[LatLng](#LatLng)</code>  
**Returns**: <code>String</code> - representing LatLng  
<a name="LatLng.createFromLatLng"></a>

### LatLng.createFromLatLng(LatLng) ⇒ <code>[LatLng](#LatLng)</code>
Creates a LatLng from specified LatLng

**Kind**: static method of <code>[LatLng](#LatLng)</code>  
**Returns**: <code>[LatLng](#LatLng)</code> - the LatLng specified  
**Params**

- LatLng <code>[LatLng](#LatLng)</code> - specified LatLng

<a name="MappedJS"></a>

## MappedJS
**Kind**: global class  

* [MappedJS](#MappedJS)
    * [new MappedJS(tilesData, markerData, settings)](#new_MappedJS_new)
    * _instance_
        * [.generateUniqueID()](#MappedJS+generateUniqueID) ⇒ <code>Number</code>
        * [.addInformationLayer(type, settings)](#MappedJS+addInformationLayer) ⇒ <code>[MappedJS](#MappedJS)</code>
        * [.addControls()](#MappedJS+addControls) ⇒ <code>[MappedJS](#MappedJS)</code>
        * [.initializeSettings(settings)](#MappedJS+initializeSettings) ⇒ <code>[MappedJS](#MappedJS)</code>
        * [.initializeData(data, cb)](#MappedJS+initializeData) ⇒ <code>[MappedJS](#MappedJS)</code>
        * [.initializeMap()](#MappedJS+initializeMap) ⇒ <code>[MappedJS](#MappedJS)</code>
        * [.getAbsolutePosition(point)](#MappedJS+getAbsolutePosition) ⇒ <code>[Point](#Point)</code>
        * [.initializeInteractForMap()](#MappedJS+initializeInteractForMap) ⇒ <code>[MappedJS](#MappedJS)</code>
        * [.hoverItems(pos)](#MappedJS+hoverItems) ⇒ <code>[MappedJS](#MappedJS)</code>
        * [.bindEvents()](#MappedJS+bindEvents) ⇒ <code>[MappedJS](#MappedJS)</code>
        * [.resetToInitialState()](#MappedJS+resetToInitialState) ⇒ <code>[MappedJS](#MappedJS)</code>
        * [.zoomInToCenter()](#MappedJS+zoomInToCenter) ⇒ <code>[MappedJS](#MappedJS)</code>
        * [.zoomOutToCenter()](#MappedJS+zoomOutToCenter) ⇒ <code>[MappedJS](#MappedJS)</code>
        * [.keyPress(e)](#MappedJS+keyPress) ⇒ <code>[MappedJS](#MappedJS)</code>
        * [.handleMovementByKeys(direction)](#MappedJS+handleMovementByKeys) ⇒ <code>[MappedJS](#MappedJS)</code>
        * [.keyRelease()](#MappedJS+keyRelease) ⇒ <code>[MappedJS](#MappedJS)</code>
        * [.resizeHandler()](#MappedJS+resizeHandler) ⇒ <code>[MappedJS](#MappedJS)</code>
        * [.loadingFinished()](#MappedJS+loadingFinished) ⇒ <code>[MappedJS](#MappedJS)</code>
    * _static_
        * [.count](#MappedJS.count) : <code>Number</code>

<a name="new_MappedJS_new"></a>

### new MappedJS(tilesData, markerData, settings)
**Returns**: <code>[MappedJS](#MappedJS)</code> - instance of MappedJS for chaining  
**Params**

- tilesData <code>String</code> | <code>Object</code> <code> = {}</code> - data of map tiles, can be json or path to file
- markerData <code>String</code> | <code>Object</code> <code> = {}</code> - data of markers, can be json or path to file
- settings <code>Object</code> <code> = {}</code> - settings for map, must be json

<a name="MappedJS+generateUniqueID"></a>

### mappedJS.generateUniqueID() ⇒ <code>Number</code>
generate a unique id for this instance

**Kind**: instance method of <code>[MappedJS](#MappedJS)</code>  
**Returns**: <code>Number</code> - unique id  
<a name="MappedJS+addInformationLayer"></a>

### mappedJS.addInformationLayer(type, settings) ⇒ <code>[MappedJS](#MappedJS)</code>
add an information layer to container

**Kind**: instance method of <code>[MappedJS](#MappedJS)</code>  
**Returns**: <code>[MappedJS](#MappedJS)</code> - instance of MappedJS for chaining  
**Params**

- type <code>String</code> - type of layer
- settings <code>Object</code> - of layer

<a name="MappedJS+addControls"></a>

### mappedJS.addControls() ⇒ <code>[MappedJS](#MappedJS)</code>
add controls (zoom, home) to DOM

**Kind**: instance method of <code>[MappedJS](#MappedJS)</code>  
**Returns**: <code>[MappedJS](#MappedJS)</code> - instance of MappedJS for chaining  
<a name="MappedJS+initializeSettings"></a>

### mappedJS.initializeSettings(settings) ⇒ <code>[MappedJS](#MappedJS)</code>
initializes the settings and handles errors

**Kind**: instance method of <code>[MappedJS](#MappedJS)</code>  
**Returns**: <code>[MappedJS](#MappedJS)</code> - instance of MappedJS for chaining  
**Params**

- settings <code>Object</code> - list of settings

<a name="MappedJS+initializeData"></a>

### mappedJS.initializeData(data, cb) ⇒ <code>[MappedJS](#MappedJS)</code>
initializes the data, asynchronous

**Kind**: instance method of <code>[MappedJS](#MappedJS)</code>  
**Returns**: <code>[MappedJS](#MappedJS)</code> - instance of MappedJS for chaining  
**Params**

- data <code>Object</code> - data of map tiles, can be json or path to file
- cb <code>Helper~requestJSONCallback</code> - called, when data is received

<a name="MappedJS+initializeMap"></a>

### mappedJS.initializeMap() ⇒ <code>[MappedJS](#MappedJS)</code>
initializes Map module

**Kind**: instance method of <code>[MappedJS](#MappedJS)</code>  
**Returns**: <code>[MappedJS](#MappedJS)</code> - instance of MappedJS for chaining  
<a name="MappedJS+getAbsolutePosition"></a>

### mappedJS.getAbsolutePosition(point) ⇒ <code>[Point](#Point)</code>
get absolute position of a point

**Kind**: instance method of <code>[MappedJS](#MappedJS)</code>  
**Returns**: <code>[Point](#Point)</code> - absolute position to viewport  
**Params**

- point <code>[Point](#Point)</code> - specified relative position

<a name="MappedJS+initializeInteractForMap"></a>

### mappedJS.initializeInteractForMap() ⇒ <code>[MappedJS](#MappedJS)</code>
initializes interaction

**Kind**: instance method of <code>[MappedJS](#MappedJS)</code>  
**Returns**: <code>[MappedJS](#MappedJS)</code> - instance of MappedJS for chaining  
<a name="MappedJS+hoverItems"></a>

### mappedJS.hoverItems(pos) ⇒ <code>[MappedJS](#MappedJS)</code>
check hover of items

**Kind**: instance method of <code>[MappedJS](#MappedJS)</code>  
**Returns**: <code>[MappedJS](#MappedJS)</code> - instance of MappedJS for chaining  
**Params**

- pos <code>[Point](#Point)</code> - specified point to check against

<a name="MappedJS+bindEvents"></a>

### mappedJS.bindEvents() ⇒ <code>[MappedJS](#MappedJS)</code>
binds all events to handlers

**Kind**: instance method of <code>[MappedJS](#MappedJS)</code>  
**Returns**: <code>[MappedJS](#MappedJS)</code> - instance of MappedJS for chaining  
<a name="MappedJS+resetToInitialState"></a>

### mappedJS.resetToInitialState() ⇒ <code>[MappedJS](#MappedJS)</code>
resets map to initial state

**Kind**: instance method of <code>[MappedJS](#MappedJS)</code>  
**Returns**: <code>[MappedJS](#MappedJS)</code> - instance of MappedJS for chaining  
<a name="MappedJS+zoomInToCenter"></a>

### mappedJS.zoomInToCenter() ⇒ <code>[MappedJS](#MappedJS)</code>
zooms into center of map

**Kind**: instance method of <code>[MappedJS](#MappedJS)</code>  
**Returns**: <code>[MappedJS](#MappedJS)</code> - instance of MappedJS for chaining  
<a name="MappedJS+zoomOutToCenter"></a>

### mappedJS.zoomOutToCenter() ⇒ <code>[MappedJS](#MappedJS)</code>
zooms out of center of map

**Kind**: instance method of <code>[MappedJS](#MappedJS)</code>  
**Returns**: <code>[MappedJS](#MappedJS)</code> - instance of MappedJS for chaining  
<a name="MappedJS+keyPress"></a>

### mappedJS.keyPress(e) ⇒ <code>[MappedJS](#MappedJS)</code>
Keypress handler

**Kind**: instance method of <code>[MappedJS](#MappedJS)</code>  
**Returns**: <code>[MappedJS](#MappedJS)</code> - instance of MappedJS for chaining  
**Params**

- e <code>KeyboardEvent</code> - key event

<a name="MappedJS+handleMovementByKeys"></a>

### mappedJS.handleMovementByKeys(direction) ⇒ <code>[MappedJS](#MappedJS)</code>
handles the translation of the map by keypress

**Kind**: instance method of <code>[MappedJS](#MappedJS)</code>  
**Returns**: <code>[MappedJS](#MappedJS)</code> - instance of MappedJS for chaining  
**Params**

- direction <code>[Point](#Point)</code> - x,y point where to translate to

<a name="MappedJS+keyRelease"></a>

### mappedJS.keyRelease() ⇒ <code>[MappedJS](#MappedJS)</code>
key is released

**Kind**: instance method of <code>[MappedJS](#MappedJS)</code>  
**Returns**: <code>[MappedJS](#MappedJS)</code> - instance of MappedJS for chaining  
<a name="MappedJS+resizeHandler"></a>

### mappedJS.resizeHandler() ⇒ <code>[MappedJS](#MappedJS)</code>
handles resizing of window

**Kind**: instance method of <code>[MappedJS](#MappedJS)</code>  
**Returns**: <code>[MappedJS](#MappedJS)</code> - instance of MappedJS for chaining  
<a name="MappedJS+loadingFinished"></a>

### mappedJS.loadingFinished() ⇒ <code>[MappedJS](#MappedJS)</code>
called when loading and initialization is finished

**Kind**: instance method of <code>[MappedJS](#MappedJS)</code>  
**Returns**: <code>[MappedJS](#MappedJS)</code> - instance of MappedJS for chaining  
<a name="MappedJS.count"></a>

### MappedJS.count : <code>Number</code>
instance counter

**Kind**: static property of <code>[MappedJS](#MappedJS)</code>  
<a name="MapInformation"></a>

## MapInformation
**Kind**: global class  

* [MapInformation](#MapInformation)
    * [new MapInformation(id, path)](#new_MapInformation_new)
    * _instance_
        * [.offsetToCenter](#MapInformation+offsetToCenter)
        * [.pixelPerLatLng](#MapInformation+pixelPerLatLng) ⇒ <code>[Point](#Point)</code>
        * [.get()](#MapInformation+get) ⇒ <code>Object</code>
        * [.bindEvents()](#MapInformation+bindEvents) ⇒ <code>[MapInformation](#MapInformation)</code>
        * [.update(obj)](#MapInformation+update) ⇒ <code>[MapInformation](#MapInformation)</code>
        * [.convertPointToLatLng(point)](#MapInformation+convertPointToLatLng) ⇒ <code>[LatLng](#LatLng)</code>
        * [.convertLatLngToPoint(latlng)](#MapInformation+convertLatLngToPoint) ⇒ <code>[Point](#Point)</code>
        * [.centerUpdated()](#MapInformation+centerUpdated) ⇒ <code>Boolean</code>
        * [.updateOffsetToCenter()](#MapInformation+updateOffsetToCenter) ⇒ <code>Boolean</code>
        * [.getDistortionFactorForLatitude(latlng)](#MapInformation+getDistortionFactorForLatitude) ⇒ <code>Number</code>
        * [.destroy()](#MapInformation+destroy)
    * _static_
        * [.instances](#MapInformation.instances) : <code>Object</code>

<a name="new_MapInformation_new"></a>

### new MapInformation(id, path)
**Returns**: <code>[MapInformation](#MapInformation)</code> - singleton instance of MapInformation for chaining  
**Params**

- id <code>Number</code> <code> = 0</code> - id of MapInformation instance
- path <code>String</code> <code> = &quot;./&quot;</code> - path to data

<a name="MapInformation+offsetToCenter"></a>

### mapInformation.offsetToCenter
Returns the current distorted viewport

**Kind**: instance property of <code>[MapInformation](#MapInformation)</code>  
<a name="MapInformation+pixelPerLatLng"></a>

### mapInformation.pixelPerLatLng ⇒ <code>[Point](#Point)</code>
how many pixels per lat and lng

**Kind**: instance property of <code>[MapInformation](#MapInformation)</code>  
**Returns**: <code>[Point](#Point)</code> - pixels per lat/lng  
<a name="MapInformation+get"></a>

### mapInformation.get() ⇒ <code>Object</code>
gets current data

**Kind**: instance method of <code>[MapInformation](#MapInformation)</code>  
**Returns**: <code>Object</code> - map information  
<a name="MapInformation+bindEvents"></a>

### mapInformation.bindEvents() ⇒ <code>[MapInformation](#MapInformation)</code>
bind all events

**Kind**: instance method of <code>[MapInformation](#MapInformation)</code>  
**Returns**: <code>[MapInformation](#MapInformation)</code> - instance of MapInformation for chaining  
<a name="MapInformation+update"></a>

### mapInformation.update(obj) ⇒ <code>[MapInformation](#MapInformation)</code>
updates current information

**Kind**: instance method of <code>[MapInformation](#MapInformation)</code>  
**Returns**: <code>[MapInformation](#MapInformation)</code> - instance of MapInformation for chaining  
**Params**

- obj <code>Object</code> - = {} - new data delivered

<a name="MapInformation+convertPointToLatLng"></a>

### mapInformation.convertPointToLatLng(point) ⇒ <code>[LatLng](#LatLng)</code>
converts a Point to LatLng in view

**Kind**: instance method of <code>[MapInformation](#MapInformation)</code>  
**Returns**: <code>[LatLng](#LatLng)</code> - presentation of point in lat-lng system  
**Params**

- point <code>[Point](#Point)</code> - specified point to be converted

<a name="MapInformation+convertLatLngToPoint"></a>

### mapInformation.convertLatLngToPoint(latlng) ⇒ <code>[Point](#Point)</code>
converts a LatLng to Point in view

**Kind**: instance method of <code>[MapInformation](#MapInformation)</code>  
**Returns**: <code>[Point](#Point)</code> - presentation of point in pixel system  
**Params**

- latlng <code>[LatLng](#LatLng)</code> - specified latlng to be converted

<a name="MapInformation+centerUpdated"></a>

### mapInformation.centerUpdated() ⇒ <code>Boolean</code>
center position was updated

**Kind**: instance method of <code>[MapInformation](#MapInformation)</code>  
**Returns**: <code>Boolean</code> - information was updated  
<a name="MapInformation+updateOffsetToCenter"></a>

### mapInformation.updateOffsetToCenter() ⇒ <code>Boolean</code>
offset to center was updated

**Kind**: instance method of <code>[MapInformation](#MapInformation)</code>  
**Returns**: <code>Boolean</code> - information was updated  
<a name="MapInformation+getDistortionFactorForLatitude"></a>

### mapInformation.getDistortionFactorForLatitude(latlng) ⇒ <code>Number</code>
get distortion factor for specified latitude

**Kind**: instance method of <code>[MapInformation](#MapInformation)</code>  
**Returns**: <code>Number</code> - distortion factor  
**Params**

- latlng <code>[LatLng](#LatLng)</code> - lat/lng position

<a name="MapInformation+destroy"></a>

### mapInformation.destroy()
destroys singleton instance

**Kind**: instance method of <code>[MapInformation](#MapInformation)</code>  
<a name="MapInformation.instances"></a>

### MapInformation.instances : <code>Object</code>
singleton instance wrapper

**Kind**: static property of <code>[MapInformation](#MapInformation)</code>  
<a name="Marker"></a>

## Marker
**Kind**: global class  

* [Marker](#Marker)
    * [new Marker(settings, context, id)](#new_Marker_new)
    * [.position](#Marker+position) ⇒ <code>[Point](#Point)</code>
    * [.boundingBox](#Marker+boundingBox) ⇒ <code>[Rectangle](#Rectangle)</code>
    * [.nearestPositionToCenter](#Marker+nearestPositionToCenter) ⇒ <code>[LatLng](#LatLng)</code>
    * [.isClusterable()](#Marker+isClusterable) ⇒ <code>Boolean</code>
    * [.getNearestPositionToCenter()](#Marker+getNearestPositionToCenter) ⇒ <code>[LatLng](#LatLng)</code>
    * [.isActive(point, oneIsHit)](#Marker+isActive) ⇒ <code>Boolean</code>
    * [.action()](#Marker+action) ⇒ <code>[Marker](#Marker)</code>
    * [.bindEvents()](#Marker+bindEvents) ⇒ <code>[Marker](#Marker)</code>
    * [.draw()](#Marker+draw) ⇒ <code>[Marker](#Marker)</code>
    * [.hit(point)](#Marker+hit) ⇒ <code>Booelan</code>
    * [.decideWhatToDraw(text, icon)](#Marker+decideWhatToDraw) ⇒ <code>function</code>
    * [.drawText(pos)](#Marker+drawText)
    * [.drawIcon(pos)](#Marker+drawIcon)
    * [.drawCircleIcon(size)](#Marker+drawCircleIcon) ⇒ <code>function</code>
    * [.drawSquareIcon(size)](#Marker+drawSquareIcon) ⇒ <code>function</code>
    * [.drawImageIcon(texture, size, offset)](#Marker+drawImageIcon) ⇒ <code>function</code>

<a name="new_Marker_new"></a>

### new Marker(settings, context, id)
/**

**Returns**: <code>[Marker](#Marker)</code> - instance of Marker for chaining  
**Params**

- settings <code>Object</code> - = {} - settings for marker
- context <code>CanvasRenderingContext2D</code> - = null - canvas context
- id <code>Number</code> - = 0 - id of parent instance

<a name="Marker+position"></a>

### marker.position ⇒ <code>[Point](#Point)</code>
position of marker

**Kind**: instance property of <code>[Marker](#Marker)</code>  
**Returns**: <code>[Point](#Point)</code> - position  
<a name="Marker+boundingBox"></a>

### marker.boundingBox ⇒ <code>[Rectangle](#Rectangle)</code>
get dimensions of marker

**Kind**: instance property of <code>[Marker](#Marker)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - dimensions  
<a name="Marker+nearestPositionToCenter"></a>

### marker.nearestPositionToCenter ⇒ <code>[LatLng](#LatLng)</code>
find nearest position to mapcenter

**Kind**: instance property of <code>[Marker](#Marker)</code>  
**Returns**: <code>[LatLng](#LatLng)</code> - nearest position  
<a name="Marker+isClusterable"></a>

### marker.isClusterable() ⇒ <code>Boolean</code>
check if marker can be clustered

**Kind**: instance method of <code>[Marker](#Marker)</code>  
**Returns**: <code>Boolean</code> - wheter it can be clustered or not  
<a name="Marker+getNearestPositionToCenter"></a>

### marker.getNearestPositionToCenter() ⇒ <code>[LatLng](#LatLng)</code>
find nearest position to mapcenter

**Kind**: instance method of <code>[Marker](#Marker)</code>  
**Returns**: <code>[LatLng](#LatLng)</code> - nearest position  
<a name="Marker+isActive"></a>

### marker.isActive(point, oneIsHit) ⇒ <code>Boolean</code>
set active to true

**Kind**: instance method of <code>[Marker](#Marker)</code>  
**Returns**: <code>Boolean</code> - indicate hit (true) or not  
**Params**

- point <code>[Point](#Point)</code> - specified point to check against
- oneIsHit <code>Boolean</code> <code> = false</code> - = false - if one item was hit before

<a name="Marker+action"></a>

### marker.action() ⇒ <code>[Marker](#Marker)</code>
execute bound action of cluster

**Kind**: instance method of <code>[Marker](#Marker)</code>  
**Returns**: <code>[Marker](#Marker)</code> - instance of Marker for chaining  
<a name="Marker+bindEvents"></a>

### marker.bindEvents() ⇒ <code>[Marker](#Marker)</code>
bind all events

**Kind**: instance method of <code>[Marker](#Marker)</code>  
**Returns**: <code>[Marker](#Marker)</code> - instance of Marker for chaining  
<a name="Marker+draw"></a>

### marker.draw() ⇒ <code>[Marker](#Marker)</code>
draw a marker

**Kind**: instance method of <code>[Marker](#Marker)</code>  
**Returns**: <code>[Marker](#Marker)</code> - instance of Marker for chaining  
<a name="Marker+hit"></a>

### marker.hit(point) ⇒ <code>Booelan</code>
check hit of point

**Kind**: instance method of <code>[Marker](#Marker)</code>  
**Returns**: <code>Booelan</code> - Wheter it is a hit or not  
**Params**

- point <code>[Point](#Point)</code> - specified point to check against

<a name="Marker+decideWhatToDraw"></a>

### marker.decideWhatToDraw(text, icon) ⇒ <code>function</code>
currying function for drawing text, icon or both

**Kind**: instance method of <code>[Marker](#Marker)</code>  
**Returns**: <code>function</code> - function to be called on draw  
**Params**

- text <code>Object</code> - data for text
- icon <code>Object</code> - data for icon

<a name="Marker+drawText"></a>

### marker.drawText(pos)
draw text of marker

**Kind**: instance method of <code>[Marker](#Marker)</code>  
**Params**

- pos <code>[Point](#Point)</code> - origin of marker

<a name="Marker+drawIcon"></a>

### marker.drawIcon(pos)
draw icon of marker

**Kind**: instance method of <code>[Marker](#Marker)</code>  
**Params**

- pos <code>[Point](#Point)</code> - origin of marker

<a name="Marker+drawCircleIcon"></a>

### marker.drawCircleIcon(size) ⇒ <code>function</code>
currying function for drawing a circle

**Kind**: instance method of <code>[Marker](#Marker)</code>  
**Returns**: <code>function</code> - function for drawing circle icon  
**Params**

- size <code>Number</code> - size of circle

<a name="Marker+drawSquareIcon"></a>

### marker.drawSquareIcon(size) ⇒ <code>function</code>
currying function for drawing a square

**Kind**: instance method of <code>[Marker](#Marker)</code>  
**Returns**: <code>function</code> - function for drawing square icon  
**Params**

- size <code>Number</code> - size of square

<a name="Marker+drawImageIcon"></a>

### marker.drawImageIcon(texture, size, offset) ⇒ <code>function</code>
currying function for drawing an image

**Kind**: instance method of <code>[Marker](#Marker)</code>  
**Returns**: <code>function</code> - function for drawing image icon  
**Params**

- texture <code>[Texture](#Texture)</code> - texture to be drawn
- size <code>[Point](#Point)</code> - dimension of image
- offset <code>[Point](#Point)</code> - offset of image

<a name="MarkerClusterer"></a>

## MarkerClusterer
**Kind**: global class  

* [MarkerClusterer](#MarkerClusterer)
    * [new MarkerClusterer(markers, context, clusterImage, id)](#new_MarkerClusterer_new)
    * [.bindEvents()](#MarkerClusterer+bindEvents) ⇒ <code>[MarkerClusterer](#MarkerClusterer)</code>
    * [.clusterize()](#MarkerClusterer+clusterize) ⇒ <code>[MarkerClusterer](#MarkerClusterer)</code>
    * [.findNearestHit(marker, hits)](#MarkerClusterer+findNearestHit) ⇒ <code>[Cluster](#Cluster)</code>
    * [.getDistance(marker, cluster)](#MarkerClusterer+getDistance) ⇒ <code>Number</code>
    * [.createCluster(marker)](#MarkerClusterer+createCluster) ⇒ <code>[Cluster](#Cluster)</code>
    * [.deleteAllClusters()](#MarkerClusterer+deleteAllClusters) ⇒ <code>[MarkerClusterer](#MarkerClusterer)</code>

<a name="new_MarkerClusterer_new"></a>

### new MarkerClusterer(markers, context, clusterImage, id)
**Returns**: <code>[MarkerClusterer](#MarkerClusterer)</code> - instance of MarkerClusterer for chaining  
**Params**

- markers <code>Array</code> - = [] - all markers
- context <code>CanvasRenderingContext2D</code> - = null - canvas context
- clusterImage <code>[Texture](#Texture)</code> - = null - texture to be drawn
- id <code>Number</code> - = 0 - id of parent instance

<a name="MarkerClusterer+bindEvents"></a>

### markerClusterer.bindEvents() ⇒ <code>[MarkerClusterer](#MarkerClusterer)</code>
bind all events

**Kind**: instance method of <code>[MarkerClusterer](#MarkerClusterer)</code>  
**Returns**: <code>[MarkerClusterer](#MarkerClusterer)</code> - instance of MarkerClusterer for chaining  
<a name="MarkerClusterer+clusterize"></a>

### markerClusterer.clusterize() ⇒ <code>[MarkerClusterer](#MarkerClusterer)</code>
decompose all markers into Cluster

**Kind**: instance method of <code>[MarkerClusterer](#MarkerClusterer)</code>  
**Returns**: <code>[MarkerClusterer](#MarkerClusterer)</code> - instance of MarkerClusterer for chaining  
<a name="MarkerClusterer+findNearestHit"></a>

### markerClusterer.findNearestHit(marker, hits) ⇒ <code>[Cluster](#Cluster)</code>
find nearest cluster if there are multiple hits

**Kind**: instance method of <code>[MarkerClusterer](#MarkerClusterer)</code>  
**Returns**: <code>[Cluster](#Cluster)</code> - closest cluster  
**Params**

- marker <code>[Marker](#Marker)</code> - specified marker
- hits <code>Array</code> - array of Clusters hit

<a name="MarkerClusterer+getDistance"></a>

### markerClusterer.getDistance(marker, cluster) ⇒ <code>Number</code>
gets distance between marker and cluster

**Kind**: instance method of <code>[MarkerClusterer](#MarkerClusterer)</code>  
**Returns**: <code>Number</code> - distance between them  
**Params**

- marker <code>[Marker](#Marker)</code> - specified marker
- cluster <code>[Cluster](#Cluster)</code> - specified cluster

<a name="MarkerClusterer+createCluster"></a>

### markerClusterer.createCluster(marker) ⇒ <code>[Cluster](#Cluster)</code>
creates a new cluster for marker

**Kind**: instance method of <code>[MarkerClusterer](#MarkerClusterer)</code>  
**Returns**: <code>[Cluster](#Cluster)</code> - created cluster  
**Params**

- marker <code>[Marker](#Marker)</code> - specified marker

<a name="MarkerClusterer+deleteAllClusters"></a>

### markerClusterer.deleteAllClusters() ⇒ <code>[MarkerClusterer](#MarkerClusterer)</code>
delete all clusters

**Kind**: instance method of <code>[MarkerClusterer](#MarkerClusterer)</code>  
**Returns**: <code>[MarkerClusterer](#MarkerClusterer)</code> - instance of MarkerClusterer for chaining  
<a name="Point"></a>

## Point
**Kind**: global class  

* [Point](#Point)
    * [new Point(x, y)](#new_Point_new)
    * _instance_
        * [.length](#Point+length) ⇒ <code>Number</code>
        * [.clone](#Point+clone) ⇒ <code>[Point](#Point)</code>
        * [.abs](#Point+abs) ⇒ <code>[Point](#Point)</code>
        * [.substract(point)](#Point+substract) ⇒ <code>[Point](#Point)</code>
        * [.add(point)](#Point+add) ⇒ <code>[Point](#Point)</code>
        * [.multiply(x, y)](#Point+multiply) ⇒ <code>[Point](#Point)</code>
        * [.divide(x, y)](#Point+divide) ⇒ <code>[Point](#Point)</code>
        * [.equals(point)](#Point+equals) ⇒ <code>Boolean</code>
        * [.distance(point)](#Point+distance) ⇒ <code>[Point](#Point)</code>
        * [.translate(x, y)](#Point+translate) ⇒ <code>[Point](#Point)</code>
        * [.position(x, y)](#Point+position) ⇒ <code>[Point](#Point)</code>
        * [.toArray()](#Point+toArray) ⇒ <code>Array</code>
    * _static_
        * [.createFromPoint(point)](#Point.createFromPoint) ⇒ <code>[Point](#Point)</code>

<a name="new_Point_new"></a>

### new Point(x, y)
**Returns**: <code>[Point](#Point)</code> - instance of Point for chaining  
**Params**

- x <code>Number</code> <code> = 0</code> - = 0 - representation of x coordinate
- y <code>Number</code> <code> = 0</code> - = 0 - representation of y coordinate

<a name="Point+length"></a>

### point.length ⇒ <code>Number</code>
length of a point

**Kind**: instance property of <code>[Point](#Point)</code>  
**Returns**: <code>Number</code> - length of a point  
<a name="Point+clone"></a>

### point.clone ⇒ <code>[Point](#Point)</code>
gets a clone of this point

**Kind**: instance property of <code>[Point](#Point)</code>  
**Returns**: <code>[Point](#Point)</code> - new instance equals this point  
<a name="Point+abs"></a>

### point.abs ⇒ <code>[Point](#Point)</code>
gets absolute Point

**Kind**: instance property of <code>[Point](#Point)</code>  
**Returns**: <code>[Point](#Point)</code> - returns Point with absolute values  
<a name="Point+substract"></a>

### point.substract(point) ⇒ <code>[Point](#Point)</code>
substracts 2 points

**Kind**: instance method of <code>[Point](#Point)</code>  
**Returns**: <code>[Point](#Point)</code> - instance of Point for chaining  
**Params**

- point <code>[Point](#Point)</code> - = new Point() - the point to substract from this

<a name="Point+add"></a>

### point.add(point) ⇒ <code>[Point](#Point)</code>
adds 2 points

**Kind**: instance method of <code>[Point](#Point)</code>  
**Returns**: <code>[Point](#Point)</code> - instance of Point for chaining  
**Params**

- point <code>[Point](#Point)</code> - = new Point() - the point to add to this

<a name="Point+multiply"></a>

### point.multiply(x, y) ⇒ <code>[Point](#Point)</code>
multiplicates a point with a given x and y

**Kind**: instance method of <code>[Point](#Point)</code>  
**Returns**: <code>[Point](#Point)</code> - instance of Point for chaining  
**Params**

- x <code>Number</code> <code> = 1</code> - = 1 - factor to multiplicate x with
- y <code>Number</code> - = x - factor to multiplicate y with

<a name="Point+divide"></a>

### point.divide(x, y) ⇒ <code>[Point](#Point)</code>
divide a point with a given x and y

**Kind**: instance method of <code>[Point](#Point)</code>  
**Returns**: <code>[Point](#Point)</code> - instance of Point for chaining  
**Params**

- x <code>Number</code> <code> = 1</code> - = 1 - factor to divide x with
- y <code>Number</code> - = x - factor to divide y with

<a name="Point+equals"></a>

### point.equals(point) ⇒ <code>Boolean</code>
check if points are equal

**Kind**: instance method of <code>[Point](#Point)</code>  
**Returns**: <code>Boolean</code> - is true, if x and y are the same  
**Params**

- point <code>[Point](#Point)</code> - the point to check against this

<a name="Point+distance"></a>

### point.distance(point) ⇒ <code>[Point](#Point)</code>
Returns the distance from this Point to a specified Point

**Kind**: instance method of <code>[Point](#Point)</code>  
**Returns**: <code>[Point](#Point)</code> - the distance between this Point and specified point  
**Params**

- point <code>[Point](#Point)</code> - = new Point() - the specified point to be measured against this Point

<a name="Point+translate"></a>

### point.translate(x, y) ⇒ <code>[Point](#Point)</code>
translates a point by x and y

**Kind**: instance method of <code>[Point](#Point)</code>  
**Returns**: <code>[Point](#Point)</code> - instance of Point for chaining  
**Params**

- x <code>Number</code> <code> = 0</code> - = 0 - value to move x
- y <code>Number</code> - = x - value to move y

<a name="Point+position"></a>

### point.position(x, y) ⇒ <code>[Point](#Point)</code>
positions a point by x and y

**Kind**: instance method of <code>[Point](#Point)</code>  
**Returns**: <code>[Point](#Point)</code> - instance of Point for chaining  
**Params**

- x <code>Number</code> <code> = 0</code> - = 0 - value to position x
- y <code>Number</code> - = x - value to position y

<a name="Point+toArray"></a>

### point.toArray() ⇒ <code>Array</code>
translates a Point to an array

**Kind**: instance method of <code>[Point](#Point)</code>  
**Returns**: <code>Array</code> - Returns Point as Array(x, y)  
<a name="Point.createFromPoint"></a>

### Point.createFromPoint(point) ⇒ <code>[Point](#Point)</code>
Creates a Point from specified point

**Kind**: static method of <code>[Point](#Point)</code>  
**Returns**: <code>[Point](#Point)</code> - the point specified  
**Params**

- point <code>[Point](#Point)</code> - specified point

<a name="Publisher"></a>

## Publisher
**Kind**: global class  

* [Publisher](#Publisher)
    * [new Publisher(id)](#new_Publisher_new)
    * _instance_
        * [.subscribe(type, fn)](#Publisher+subscribe) ⇒ <code>[Publisher](#Publisher)</code>
        * [.unsubscribe(type, fn)](#Publisher+unsubscribe) ⇒ <code>[Publisher](#Publisher)</code>
        * [.publish(type, arg)](#Publisher+publish) ⇒ <code>[Publisher](#Publisher)</code>
        * [.handle(action, type, a)](#Publisher+handle) ⇒ <code>[Publisher](#Publisher)</code>
        * [.destroy()](#Publisher+destroy)
    * _static_
        * [.instances](#Publisher.instances) : <code>Object</code>

<a name="new_Publisher_new"></a>

### new Publisher(id)
**Returns**: <code>[Publisher](#Publisher)</code> - singleton instance of Publisher for chaining  
**Params**

- id <code>Number</code> <code> = 0</code> - = 0 - id of parent instance

<a name="Publisher+subscribe"></a>

### publisher.subscribe(type, fn) ⇒ <code>[Publisher](#Publisher)</code>
subscribe to a topic

**Kind**: instance method of <code>[Publisher](#Publisher)</code>  
**Returns**: <code>[Publisher](#Publisher)</code> - instance of Publisher for chaining  
**Params**

- type <code>String</code> <code> = any</code> - = "any" - a topic
- fn <code>function</code> - = function(){} - a function to callback

<a name="Publisher+unsubscribe"></a>

### publisher.unsubscribe(type, fn) ⇒ <code>[Publisher](#Publisher)</code>
unsubscribe from a topic

**Kind**: instance method of <code>[Publisher](#Publisher)</code>  
**Returns**: <code>[Publisher](#Publisher)</code> - instance of Publisher for chaining  
**Params**

- type <code>String</code> <code> = any</code> - = "any" - a topic
- fn <code>function</code> - = function(){} - a function to callback

<a name="Publisher+publish"></a>

### publisher.publish(type, arg) ⇒ <code>[Publisher](#Publisher)</code>
publish to a topic

**Kind**: instance method of <code>[Publisher](#Publisher)</code>  
**Returns**: <code>[Publisher](#Publisher)</code> - instance of Publisher for chaining  
**Params**

- type <code>String</code> <code> = any</code> - = "any" - a topic
- arg <code>function</code> - = [] - list of parameters

<a name="Publisher+handle"></a>

### publisher.handle(action, type, a) ⇒ <code>[Publisher](#Publisher)</code>
handle subscribe to a topic

**Kind**: instance method of <code>[Publisher](#Publisher)</code>  
**Returns**: <code>[Publisher](#Publisher)</code> - instance of Publisher for chaining  
**Params**

- action <code>String</code> - eventname
- type <code>String</code> - = "any" - a topic
- a <code>Object</code> - function to callback or arguments

<a name="Publisher+destroy"></a>

### publisher.destroy()
destroys singleton instance

**Kind**: instance method of <code>[Publisher](#Publisher)</code>  
<a name="Publisher.instances"></a>

### Publisher.instances : <code>Object</code>
singleton instance wrapper

**Kind**: static property of <code>[Publisher](#Publisher)</code>  
<a name="Rectangle"></a>

## Rectangle
**Kind**: global class  

* [Rectangle](#Rectangle)
    * [new Rectangle(x, y, width, height)](#new_Rectangle_new)
    * _instance_
        * [.center](#Rectangle+center) ⇒ <code>[Point](#Point)</code>
        * [.topLeft](#Rectangle+topLeft) ⇒ <code>[Point](#Point)</code>
        * [.topRight](#Rectangle+topRight) ⇒ <code>[Point](#Point)</code>
        * [.bottomLeft](#Rectangle+bottomLeft) ⇒ <code>[Point](#Point)</code>
        * [.bottomRight](#Rectangle+bottomRight) ⇒ <code>[Point](#Point)</code>
        * [.right](#Rectangle+right) ⇒ <code>Number</code>
        * [.left](#Rectangle+left) ⇒ <code>Number</code>
        * [.top](#Rectangle+top) ⇒ <code>Number</code>
        * [.bottom](#Rectangle+bottom) ⇒ <code>Number</code>
        * [.clone](#Rectangle+clone) ⇒ <code>[Rectangle](#Rectangle)</code>
        * [.intersects(rect)](#Rectangle+intersects) ⇒ <code>Boolean</code>
        * [.contains(rectOrPoint)](#Rectangle+contains) ⇒ <code>Boolean</code>
        * [.extend(rect)](#Rectangle+extend) ⇒ <code>[Rectangle](#Rectangle)</code>
        * [.setCenter(point)](#Rectangle+setCenter) ⇒ <code>[Rectangle](#Rectangle)</code>
        * [.setCenterX(x)](#Rectangle+setCenterX) ⇒ <code>[Rectangle](#Rectangle)</code>
        * [.setCenterY(y)](#Rectangle+setCenterY) ⇒ <code>[Rectangle](#Rectangle)</code>
        * [.containsPoint(point)](#Rectangle+containsPoint) ⇒ <code>Boolean</code>
        * [.containsRect(rect)](#Rectangle+containsRect) ⇒ <code>Boolean</code>
        * [.getDistortedRect(factor)](#Rectangle+getDistortedRect) ⇒ <code>[Rectangle](#Rectangle)</code>
        * [.getNormalRect(factor)](#Rectangle+getNormalRect) ⇒ <code>[Rectangle](#Rectangle)</code>
        * [.scaleX(x)](#Rectangle+scaleX) ⇒ <code>[Rectangle](#Rectangle)</code>
        * [.scaleY(y)](#Rectangle+scaleY) ⇒ <code>[Rectangle](#Rectangle)</code>
        * [.scale(x, y)](#Rectangle+scale) ⇒ <code>[Rectangle](#Rectangle)</code>
        * [.scaleCenter(x, y)](#Rectangle+scaleCenter) ⇒ <code>[Rectangle](#Rectangle)</code>
        * [.translate(x, y)](#Rectangle+translate) ⇒ <code>[Rectangle](#Rectangle)</code>
        * [.transform(x, y, width, height)](#Rectangle+transform) ⇒ <code>[Rectangle](#Rectangle)</code>
        * [.position(x, y)](#Rectangle+position) ⇒ <code>[Rectangle](#Rectangle)</code>
        * [.size(x, y, width, height)](#Rectangle+size) ⇒ <code>[Rectangle](#Rectangle)</code>
        * [.setSize(width, height)](#Rectangle+setSize) ⇒ <code>[Rectangle](#Rectangle)</code>
        * [.equals(rectangle)](#Rectangle+equals) ⇒ <code>Boolean</code>
    * _static_
        * [.createFromRectangle(rect)](#Rectangle.createFromRectangle) ⇒ <code>[Rectangle](#Rectangle)</code>

<a name="new_Rectangle_new"></a>

### new Rectangle(x, y, width, height)
**Returns**: <code>[Rectangle](#Rectangle)</code> - instance of Rectangle for chaining  
**Params**

- x <code>Number</code> <code> = 0</code> - = 0 - x-position of specified rectangle
- y <code>Number</code> <code> = 0</code> - = 0 - y-position of specified rectangle
- width <code>Number</code> <code> = 0</code> - = 0 - width of specified rectangle
- height <code>Number</code> <code> = 0</code> - = 0 - height of specified rectangle

<a name="Rectangle+center"></a>

### rectangle.center ⇒ <code>[Point](#Point)</code>
get center-position of rectangle

**Kind**: instance property of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Point](#Point)</code> - center point  
<a name="Rectangle+topLeft"></a>

### rectangle.topLeft ⇒ <code>[Point](#Point)</code>
get top-left-position of rectangle

**Kind**: instance property of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Point](#Point)</code> - top-left point  
<a name="Rectangle+topRight"></a>

### rectangle.topRight ⇒ <code>[Point](#Point)</code>
get top-right-position of rectangle

**Kind**: instance property of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Point](#Point)</code> - top-right point  
<a name="Rectangle+bottomLeft"></a>

### rectangle.bottomLeft ⇒ <code>[Point](#Point)</code>
get bottom-left-position of rectangle

**Kind**: instance property of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Point](#Point)</code> - bottom-left point  
<a name="Rectangle+bottomRight"></a>

### rectangle.bottomRight ⇒ <code>[Point](#Point)</code>
get bottom-right-position of rectangle

**Kind**: instance property of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Point](#Point)</code> - bottom-right point  
<a name="Rectangle+right"></a>

### rectangle.right ⇒ <code>Number</code>
Returns right position of Rectangle

**Kind**: instance property of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>Number</code> - right position  
<a name="Rectangle+left"></a>

### rectangle.left ⇒ <code>Number</code>
Returns left position of Rectangle

**Kind**: instance property of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>Number</code> - left position  
<a name="Rectangle+top"></a>

### rectangle.top ⇒ <code>Number</code>
Returns top position of Rectangle

**Kind**: instance property of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>Number</code> - top position  
<a name="Rectangle+bottom"></a>

### rectangle.bottom ⇒ <code>Number</code>
Returns bottom position of Rectangle

**Kind**: instance property of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>Number</code> - bottom position  
<a name="Rectangle+clone"></a>

### rectangle.clone ⇒ <code>[Rectangle](#Rectangle)</code>
clones a rectangle

**Kind**: instance property of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - duplicated rectangle  
<a name="Rectangle+intersects"></a>

### rectangle.intersects(rect) ⇒ <code>Boolean</code>
Checks whether Rectangle intersects with specified Rectangle

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>Boolean</code> - true if containment is entirely  
**Params**

- rect <code>[Rectangle](#Rectangle)</code> - = new Rectangle() - the specified rectangle to check against

<a name="Rectangle+contains"></a>

### rectangle.contains(rectOrPoint) ⇒ <code>Boolean</code>
Checks whether Rectangle entirely contains the Rectangle or Point

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>Boolean</code> - true if containment is entirely  
**Params**

- rectOrPoint <code>[Rectangle](#Rectangle)</code> | <code>[Point](#Point)</code> - the specified point or rectangle to check against

<a name="Rectangle+extend"></a>

### rectangle.extend(rect) ⇒ <code>[Rectangle](#Rectangle)</code>
extend a rectangle by specified rectangle dimensions

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - instance of Rectangle for chaining  
**Params**

- rect <code>[Rectangle](#Rectangle)</code> - specified rectangle

<a name="Rectangle+setCenter"></a>

### rectangle.setCenter(point) ⇒ <code>[Rectangle](#Rectangle)</code>
Sets the center of this Rectangle to specified point

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - instance of Rectangle for chaining  
**Params**

- point <code>[Point](#Point)</code> - = new Point() - specified point to set center of rectangle to

<a name="Rectangle+setCenterX"></a>

### rectangle.setCenterX(x) ⇒ <code>[Rectangle](#Rectangle)</code>
Sets the x-center of this Rectangle to specified x

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - instance of Rectangle for chaining  
**Params**

- x <code>Number</code> <code> = 0</code> - = 0 - specified x coordinate to set x center of rectangle to

<a name="Rectangle+setCenterY"></a>

### rectangle.setCenterY(y) ⇒ <code>[Rectangle](#Rectangle)</code>
Sets the y-center of this Rectangle to specified y

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - instance of Rectangle for chaining  
**Params**

- y <code>Number</code> <code> = 0</code> - = 0 - specified y coordinate to set y center of rectangle to

<a name="Rectangle+containsPoint"></a>

### rectangle.containsPoint(point) ⇒ <code>Boolean</code>
Checks whether Rectangle entirely contains the Point

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>Boolean</code> - true if containment is entirely  
**Params**

- point <code>[Point](#Point)</code> - = new Point() - the specified point to check against

<a name="Rectangle+containsRect"></a>

### rectangle.containsRect(rect) ⇒ <code>Boolean</code>
Checks whether Rectangle entirely contains the Rectangle

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>Boolean</code> - true if containment is entirely  
**Params**

- rect <code>[Rectangle](#Rectangle)</code> - = new Rectangle() - the specified rectangle to check against

<a name="Rectangle+getDistortedRect"></a>

### rectangle.getDistortedRect(factor) ⇒ <code>[Rectangle](#Rectangle)</code>
distorts rectangle by factor

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - a distorted Rectangle  
**Params**

- factor <code>Number</code> <code> = 1</code> - = 1 - the specified factor of distortion

<a name="Rectangle+getNormalRect"></a>

### rectangle.getNormalRect(factor) ⇒ <code>[Rectangle](#Rectangle)</code>
redistorts rectangle by factor

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - an undistorted Rectangle  
**Params**

- factor <code>Number</code> <code> = 1</code> - = 1- the specified factor of distortion

<a name="Rectangle+scaleX"></a>

### rectangle.scaleX(x) ⇒ <code>[Rectangle](#Rectangle)</code>
scale x and width of rectangle

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - instance of Rectangle for chaining  
**Params**

- x <code>Number</code> <code> = 1</code> - = 1 - factor to be applied to scale

<a name="Rectangle+scaleY"></a>

### rectangle.scaleY(y) ⇒ <code>[Rectangle](#Rectangle)</code>
scale y and height of rectangle

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - instance of Rectangle for chaining  
**Params**

- y <code>Number</code> <code> = 1</code> - = 1- factor to be applied to scale

<a name="Rectangle+scale"></a>

### rectangle.scale(x, y) ⇒ <code>[Rectangle](#Rectangle)</code>
scale x and y for width and height of rectangle

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - instance of Rectangle for chaining  
**Params**

- x <code>Number</code> <code> = 1</code> - = 1 - factor to be applied to scale
- y <code>Number</code> - = x - factor to be applied to scale

<a name="Rectangle+scaleCenter"></a>

### rectangle.scaleCenter(x, y) ⇒ <code>[Rectangle](#Rectangle)</code>
scale x and y for width and height of rectangle

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - instance of Rectangle for chaining  
**Params**

- x <code>Number</code> <code> = 1</code> - = 1 - factor to be applied to scale
- y <code>Number</code> - = x - factor to be applied to scale

<a name="Rectangle+translate"></a>

### rectangle.translate(x, y) ⇒ <code>[Rectangle](#Rectangle)</code>
moves a rectangle by specified coords

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - instance of Rectangle for chaining  
**Params**

- x <code>Number</code> <code> = 0</code> - = 0 - specified x to be added to x position
- y <code>Number</code> - = x - specified y to be added to y position

<a name="Rectangle+transform"></a>

### rectangle.transform(x, y, width, height) ⇒ <code>[Rectangle](#Rectangle)</code>
transforms a rectangle by specified coords

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - instance of Rectangle for chaining  
**Params**

- x <code>Number</code> <code> = 0</code> - = 0 - specified x to be added to x position
- y <code>Number</code> - = x - specified y to be added to y position
- width <code>Number</code> <code> = 0</code> - = 0 - specified width to be added to this width
- height <code>Number</code> - = 0 - specified height to be added to this height

<a name="Rectangle+position"></a>

### rectangle.position(x, y) ⇒ <code>[Rectangle](#Rectangle)</code>
changes the position a rectangle by specified coords

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - instance of Rectangle for chaining  
**Params**

- x <code>Number</code> <code> = 0</code> - = 0 - the new x position
- y <code>Number</code> - = 0 - he new y position

<a name="Rectangle+size"></a>

### rectangle.size(x, y, width, height) ⇒ <code>[Rectangle](#Rectangle)</code>
changes the size of a rectangle by specified params

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - instance of Rectangle for chaining  
**Params**

- x <code>Number</code> <code> = 0</code> - = 0- the new x position
- y <code>Number</code> - = x - the new y position
- width <code>Number</code> <code> = 0</code> - = 0 - the new width
- height <code>Number</code> - = 0 - the new width

<a name="Rectangle+setSize"></a>

### rectangle.setSize(width, height) ⇒ <code>[Rectangle](#Rectangle)</code>
changes the size of a rectangle by specified params

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - instance of Rectangle for chaining  
**Params**

- width <code>Number</code> <code> = 0</code> - = 0 - the new width
- height <code>Number</code> - = width - the new width

<a name="Rectangle+equals"></a>

### rectangle.equals(rectangle) ⇒ <code>Boolean</code>
check if rectangles are equal

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>Boolean</code> - is true, if x, y, width and height are the same  
**Params**

- rectangle <code>[Rectangle](#Rectangle)</code> - the specified rectangle to check against this

<a name="Rectangle.createFromRectangle"></a>

### Rectangle.createFromRectangle(rect) ⇒ <code>[Rectangle](#Rectangle)</code>
Creates a Rectangle from specified Rectangle

**Kind**: static method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - a copy of specified rectangle  
**Params**

- rect <code>[Rectangle](#Rectangle)</code> - specified Rectangle

<a name="SideBar"></a>

## SideBar
**Kind**: global class  

* [SideBar](#SideBar)
    * [new SideBar(container, path, templates, id)](#new_SideBar_new)
    * [.allTemplatesLoaded](#SideBar+allTemplatesLoaded) ⇒ <code>Boolean</code>
    * [.boot(templates)](#SideBar+boot) ⇒ <code>[SideBar](#SideBar)</code>
    * [.setupContainer()](#SideBar+setupContainer) ⇒ <code>[SideBar](#SideBar)</code>
    * [.registerHandlebarHelpers()](#SideBar+registerHandlebarHelpers) ⇒ <code>[SideBar](#SideBar)</code>
    * [.initializeTemplates(templates)](#SideBar+initializeTemplates) ⇒ <code>[SideBar](#SideBar)</code>
    * [.bindEvents()](#SideBar+bindEvents) ⇒ <code>[SideBar](#SideBar)</code>
    * [.resizeHandler()](#SideBar+resizeHandler) ⇒ <code>[SideBar](#SideBar)</code>
    * [.insertContent(content)](#SideBar+insertContent) ⇒ <code>[SideBar](#SideBar)</code>
    * [.open(data)](#SideBar+open) ⇒ <code>[SideBar](#SideBar)</code>
    * [.closeSidebar()](#SideBar+closeSidebar) ⇒ <code>[SideBar](#SideBar)</code>
    * [.setPosition()](#SideBar+setPosition) ⇒ <code>[SideBar](#SideBar)</code>
    * [.compileTemplates()](#SideBar+compileTemplates) ⇒ <code>[SideBar](#SideBar)</code>

<a name="new_SideBar_new"></a>

### new SideBar(container, path, templates, id)
**Returns**: <code>[SideBar](#SideBar)</code> - instance of SideBar for chaining  
**Params**

- container <code>String</code> | <code>HTMLElement</code> - Container, either string or DOM object
- path <code>String</code> - = [] - path to templates
- templates <code>Array</code> - = [] - defined templates
- id <code>Number</code> - = 0 - if of parent instance

<a name="SideBar+allTemplatesLoaded"></a>

### sideBar.allTemplatesLoaded ⇒ <code>Boolean</code>
checks if all templates were loaded

**Kind**: instance property of <code>[SideBar](#SideBar)</code>  
**Returns**: <code>Boolean</code> - wheter true if all templates were loaded or false  
<a name="SideBar+boot"></a>

### sideBar.boot(templates) ⇒ <code>[SideBar](#SideBar)</code>
initialize boot up after Handlebars is loaded

**Kind**: instance method of <code>[SideBar](#SideBar)</code>  
**Returns**: <code>[SideBar](#SideBar)</code> - instance of SideBar for chaining  
**Params**

- templates <code>Array</code> - = [] - defined templates

<a name="SideBar+setupContainer"></a>

### sideBar.setupContainer() ⇒ <code>[SideBar](#SideBar)</code>
initialize all container and DOM objects for SideBar

**Kind**: instance method of <code>[SideBar](#SideBar)</code>  
**Returns**: <code>[SideBar](#SideBar)</code> - instance of SideBar for chaining  
<a name="SideBar+registerHandlebarHelpers"></a>

### sideBar.registerHandlebarHelpers() ⇒ <code>[SideBar](#SideBar)</code>
register helpers for handlebars

**Kind**: instance method of <code>[SideBar](#SideBar)</code>  
**Returns**: <code>[SideBar](#SideBar)</code> - instance of SideBar for chaining  
<a name="SideBar+initializeTemplates"></a>

### sideBar.initializeTemplates(templates) ⇒ <code>[SideBar](#SideBar)</code>
initialize all templates

**Kind**: instance method of <code>[SideBar](#SideBar)</code>  
**Returns**: <code>[SideBar](#SideBar)</code> - instance of SideBar for chaining  
**Params**

- templates <code>Object</code> - = {} - all specified templates

<a name="SideBar+bindEvents"></a>

### sideBar.bindEvents() ⇒ <code>[SideBar](#SideBar)</code>
bind all events

**Kind**: instance method of <code>[SideBar](#SideBar)</code>  
**Returns**: <code>[SideBar](#SideBar)</code> - instance of SideBar for chaining  
<a name="SideBar+resizeHandler"></a>

### sideBar.resizeHandler() ⇒ <code>[SideBar](#SideBar)</code>
on resize check if sidebar is bottom or left position

**Kind**: instance method of <code>[SideBar](#SideBar)</code>  
**Returns**: <code>[SideBar](#SideBar)</code> - instance of SideBar for chaining  
<a name="SideBar+insertContent"></a>

### sideBar.insertContent(content) ⇒ <code>[SideBar](#SideBar)</code>
inserts content to SideBar instance container

**Kind**: instance method of <code>[SideBar](#SideBar)</code>  
**Returns**: <code>[SideBar](#SideBar)</code> - instance of SideBar for chaining  
**Params**

- content <code>Object</code> - = {} - content object

<a name="SideBar+open"></a>

### sideBar.open(data) ⇒ <code>[SideBar](#SideBar)</code>
opens a sidebar

**Kind**: instance method of <code>[SideBar](#SideBar)</code>  
**Returns**: <code>[SideBar](#SideBar)</code> - instance of SideBar for chaining  
**Params**

- data <code>Object</code> - content object

<a name="SideBar+closeSidebar"></a>

### sideBar.closeSidebar() ⇒ <code>[SideBar](#SideBar)</code>
closes a sidebar

**Kind**: instance method of <code>[SideBar](#SideBar)</code>  
**Returns**: <code>[SideBar](#SideBar)</code> - instance of SideBar for chaining  
<a name="SideBar+setPosition"></a>

### sideBar.setPosition() ⇒ <code>[SideBar](#SideBar)</code>
sets position of sidebar to left or bottom

**Kind**: instance method of <code>[SideBar](#SideBar)</code>  
**Returns**: <code>[SideBar](#SideBar)</code> - instance of SideBar for chaining  
<a name="SideBar+compileTemplates"></a>

### sideBar.compileTemplates() ⇒ <code>[SideBar](#SideBar)</code>
precompiles all Handlebars templates

**Kind**: instance method of <code>[SideBar](#SideBar)</code>  
**Returns**: <code>[SideBar](#SideBar)</code> - instance of SideBar for chaining  
<a name="StateHandler"></a>

## StateHandler
**Kind**: global class  

* [StateHandler](#StateHandler)
    * [new StateHandler(states_array)](#new_StateHandler_new)
    * [.current](#StateHandler+current) ⇒ <code>Object</code>
    * [.length](#StateHandler+length) ⇒ <code>Number</code>
    * [.next()](#StateHandler+next) ⇒ <code>[StateHandler](#StateHandler)</code>
    * [.previous()](#StateHandler+previous) ⇒ <code>[StateHandler](#StateHandler)</code>
    * [.changeTo(state)](#StateHandler+changeTo) ⇒ <code>[StateHandler](#StateHandler)</code>
    * [.hasNext()](#StateHandler+hasNext) ⇒ <code>Boolean</code>
    * [.hasPrevious()](#StateHandler+hasPrevious) ⇒ <code>Boolean</code>

<a name="new_StateHandler_new"></a>

### new StateHandler(states_array)
**Returns**: <code>[StateHandler](#StateHandler)</code> - instance of StateHandler for chaining  
**Params**

- states_array <code>Array</code> - = [{value: 0, description: 'Default'}] - [description]

<a name="StateHandler+current"></a>

### stateHandler.current ⇒ <code>Object</code>
get current state

**Kind**: instance property of <code>[StateHandler](#StateHandler)</code>  
**Returns**: <code>Object</code> - current state from STATES-array  
<a name="StateHandler+length"></a>

### stateHandler.length ⇒ <code>Number</code>
get number of states

**Kind**: instance property of <code>[StateHandler](#StateHandler)</code>  
**Returns**: <code>Number</code> - number of states  
<a name="StateHandler+next"></a>

### stateHandler.next() ⇒ <code>[StateHandler](#StateHandler)</code>
get the next element

**Kind**: instance method of <code>[StateHandler](#StateHandler)</code>  
**Returns**: <code>[StateHandler](#StateHandler)</code> - instance of StateHandler for chaining  
<a name="StateHandler+previous"></a>

### stateHandler.previous() ⇒ <code>[StateHandler](#StateHandler)</code>
get the previous element

**Kind**: instance method of <code>[StateHandler](#StateHandler)</code>  
**Returns**: <code>[StateHandler](#StateHandler)</code> - instance of StateHandler for chaining  
<a name="StateHandler+changeTo"></a>

### stateHandler.changeTo(state) ⇒ <code>[StateHandler](#StateHandler)</code>
change the state to specified state

**Kind**: instance method of <code>[StateHandler](#StateHandler)</code>  
**Returns**: <code>[StateHandler](#StateHandler)</code> - instance of StateHandler for chaining  
**Params**

- state <code>Number</code> - index of state in array

<a name="StateHandler+hasNext"></a>

### stateHandler.hasNext() ⇒ <code>Boolean</code>
checks if there is a next element

**Kind**: instance method of <code>[StateHandler](#StateHandler)</code>  
**Returns**: <code>Boolean</code> - wheter there is a next state or not  
<a name="StateHandler+hasPrevious"></a>

### stateHandler.hasPrevious() ⇒ <code>Boolean</code>
checks if there is a previous element

**Kind**: instance method of <code>[StateHandler](#StateHandler)</code>  
**Returns**: <code>Boolean</code> - wheter there is a previous state or not  
<a name="Texture"></a>

## Texture
**Kind**: global class  

* [Texture](#Texture)
    * [new Texture(path, size, offset)](#new_Texture_new)
    * _instance_
        * [.initializeHitMap(w, h)](#Texture+initializeHitMap) ⇒ <code>[Texture](#Texture)</code>
        * [.isHit(point)](#Texture+isHit) ⇒ <code>Boolean</code>
    * _static_
        * [.textures](#Texture.textures) : <code>Array</code>

<a name="new_Texture_new"></a>

### new Texture(path, size, offset)
**Returns**: <code>[Texture](#Texture)</code> - instance of Texture for chaining  
**Params**

- path <code>String</code> - = null - path to image
- size <code>[Point](#Point)</code> - = new Point() - size of image
- offset <code>[Point](#Point)</code> - = new Point() - offset of image to position

<a name="Texture+initializeHitMap"></a>

### texture.initializeHitMap(w, h) ⇒ <code>[Texture](#Texture)</code>
initializes an offscreen canvas hitmap

**Kind**: instance method of <code>[Texture](#Texture)</code>  
**Returns**: <code>[Texture](#Texture)</code> - instance of Texture for chaining  
**Params**

- w <code>Number</code> - width of canvas
- h <code>Number</code> - height of canvas

<a name="Texture+isHit"></a>

### texture.isHit(point) ⇒ <code>Boolean</code>
checks wheter texture was hit

**Kind**: instance method of <code>[Texture](#Texture)</code>  
**Returns**: <code>Boolean</code> - wheter texture is hit or not  
**Params**

- point <code>[Point](#Point)</code> - specified point to check against

<a name="Texture.textures"></a>

### Texture.textures : <code>Array</code>
stores all initialized textures in this array

**Kind**: static property of <code>[Texture](#Texture)</code>  
<a name="Tile"></a>

## Tile
**Kind**: global class  

* [Tile](#Tile)
    * [new Tile(path, x, y, w, h, context, id)](#new_Tile_new)
    * _instance_
        * [.distortedTile](#Tile+distortedTile) ⇒ <code>[Tile](#Tile)</code>
        * [.initialize()](#Tile+initialize) ⇒ <code>[Tile](#Tile)</code>
        * [.draw()](#Tile+draw) ⇒ <code>[Tile](#Tile)</code>
    * _static_
        * [.STATES](#Tile.STATES) : <code>Array</code>

<a name="new_Tile_new"></a>

### new Tile(path, x, y, w, h, context, id)
**Returns**: <code>[Tile](#Tile)</code> - instance of Tile for chaining  
**Params**

- path <code>String</code> - = null - path to image
- x <code>Number</code> - = 0 - position x of tile
- y <code>Number</code> - = 0 - position y of tile
- w <code>Number</code> - = 0 - tile width
- h <code>Number</code> - = 0 - tile height
- context <code>CanvasRenderingContext2D</code> - = null - context of canvas
- id <code>Number</code> - = 0 - id of parent instance

<a name="Tile+distortedTile"></a>

### tile.distortedTile ⇒ <code>[Tile](#Tile)</code>
transform original tile to a distorted tile

**Kind**: instance property of <code>[Tile](#Tile)</code>  
**Returns**: <code>[Tile](#Tile)</code> - distorted tile  
<a name="Tile+initialize"></a>

### tile.initialize() ⇒ <code>[Tile](#Tile)</code>
initializes tile and starts loading image

**Kind**: instance method of <code>[Tile](#Tile)</code>  
**Returns**: <code>[Tile](#Tile)</code> - instance of Tile for chaining  
<a name="Tile+draw"></a>

### tile.draw() ⇒ <code>[Tile](#Tile)</code>
draws image data of tile on context

**Kind**: instance method of <code>[Tile](#Tile)</code>  
**Returns**: <code>[Tile](#Tile)</code> - instance of Tile for chaining  
<a name="Tile.STATES"></a>

### Tile.STATES : <code>Array</code>
States of a tile

**Kind**: static property of <code>[Tile](#Tile)</code>  
<a name="TileMap"></a>

## TileMap
**Kind**: global class  

* [TileMap](#TileMap)
    * [new TileMap(container, path, tilesData, settings, id)](#new_TileMap_new)
    * [.width](#TileMap+width) ⇒ <code>Number</code>
    * [.height](#TileMap+height) ⇒ <code>Number</code>
    * [.viewport](#TileMap+viewport) ⇒ <code>[Rectangle](#Rectangle)</code>
    * [.view](#TileMap+view) ⇒ <code>[View](#View)</code>
    * [.currentLevel](#TileMap+currentLevel) ⇒ <code>Object</code>
    * [.clusters](#TileMap+clusters) ⇒ <code>Array</code>
    * [.initializeLevels(data)](#TileMap+initializeLevels) ⇒ <code>[TileMap](#TileMap)</code>
    * [.initializeInstanceVariables(id, container, markerData, settings, path)](#TileMap+initializeInstanceVariables) ⇒ <code>[TileMap](#TileMap)</code>
    * [.reset()](#TileMap+reset) ⇒ <code>[TileMap](#TileMap)</code>
    * [.initializeMarkers()](#TileMap+initializeMarkers) ⇒ <code>[TileMap](#TileMap)</code>
    * [.createViewFromData(data)](#TileMap+createViewFromData) ⇒ <code>[View](#View)</code>
    * [.createSidebarContainer()](#TileMap+createSidebarContainer) ⇒ <code>[TileMap](#TileMap)</code>
    * [.bindEvents()](#TileMap+bindEvents) ⇒ <code>[TileMap](#TileMap)</code>
    * [.zoomToBounds(center, boundingBox)](#TileMap+zoomToBounds) ⇒ <code>[TileMap](#TileMap)</code>
    * [.thumbLoaded()](#TileMap+thumbLoaded) ⇒ <code>[TileMap](#TileMap)</code>
    * [.setViewToOldView(center, zoom)](#TileMap+setViewToOldView) ⇒ <code>[TileMap](#TileMap)</code>
    * [.changelevel(direction)](#TileMap+changelevel) ⇒ <code>[TileMap](#TileMap)</code>
    * [.initializeCanvas()](#TileMap+initializeCanvas) ⇒ <code>[TileMap](#TileMap)</code>
    * [.redraw()](#TileMap+redraw) ⇒ <code>[TileMap](#TileMap)</code>
    * [.resize()](#TileMap+resize) ⇒ <code>[TileMap](#TileMap)</code>
    * [.moveView(delta)](#TileMap+moveView) ⇒ <code>[TileMap](#TileMap)</code>
    * [.zoom(factor, position)](#TileMap+zoom) ⇒ <code>[TileMap](#TileMap)</code>
    * [.clusterHandler()](#TileMap+clusterHandler) ⇒ <code>[TileMap](#TileMap)</code>
    * [.resizeCanvas()](#TileMap+resizeCanvas) ⇒ <code>[TileMap](#TileMap)</code>
    * [.resizeView()](#TileMap+resizeView) ⇒ <code>[TileMap](#TileMap)</code>
    * [.mainLoop()](#TileMap+mainLoop)
    * [.checkAoIBoundaries()](#TileMap+checkAoIBoundaries) ⇒ <code>[TileMap](#TileMap)</code>
    * [.drawClusters()](#TileMap+drawClusters) ⇒ <code>[TileMap](#TileMap)</code>
    * [.drawMarkers()](#TileMap+drawMarkers) ⇒ <code>[TileMap](#TileMap)</code>

<a name="new_TileMap_new"></a>

### new TileMap(container, path, tilesData, settings, id)
**Returns**: <code>[TileMap](#TileMap)</code> - instance of TileMap for chaining  
**Params**

- container <code>HTMLElement</code> - = null - jQuery-object holding the container
- path <code>String</code> <code> = &quot;./&quot;</code> - path to data
- tilesData <code>Object</code> - = {} - json object representing data of TileMap
- settings <code>Object</code> - = {} - json object representing settings of TileMap
- id <code>Number</code> - = 0 - id of parent instance

<a name="TileMap+width"></a>

### tileMap.width ⇒ <code>Number</code>
Returns width of container

**Kind**: instance property of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>Number</code> - - width of container  
<a name="TileMap+height"></a>

### tileMap.height ⇒ <code>Number</code>
Returns height of container

**Kind**: instance property of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>Number</code> - - height of container  
<a name="TileMap+viewport"></a>

### tileMap.viewport ⇒ <code>[Rectangle](#Rectangle)</code>
gets current viewport

**Kind**: instance property of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - viewport  
<a name="TileMap+view"></a>

### tileMap.view ⇒ <code>[View](#View)</code>
current view

**Kind**: instance property of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[View](#View)</code> - view  
<a name="TileMap+currentLevel"></a>

### tileMap.currentLevel ⇒ <code>Object</code>
current level

**Kind**: instance property of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>Object</code> - information of level  
<a name="TileMap+clusters"></a>

### tileMap.clusters ⇒ <code>Array</code>
returns all clusters

**Kind**: instance property of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>Array</code> - array of clusters  
<a name="TileMap+initializeLevels"></a>

### tileMap.initializeLevels(data) ⇒ <code>[TileMap](#TileMap)</code>
initializes all levels

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[TileMap](#TileMap)</code> - instance of TileMap for chaining  
**Params**

- data <code>Object</code> - = {} - json object representing data of TileMap

<a name="TileMap+initializeInstanceVariables"></a>

### tileMap.initializeInstanceVariables(id, container, markerData, settings, path) ⇒ <code>[TileMap](#TileMap)</code>
initialize all variables

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[TileMap](#TileMap)</code> - instance of TileMap for chaining  
**Params**

- id <code>Number</code> - = 0 - id of parent instance
- container <code>HTMLElement</code> - = null - jQuery-object holding the container
- markerData <code>Object</code> - = {} - json object representing data of TileMap
- settings <code>Object</code> - = {} - json object representing settings of TileMap
- path <code>String</code> <code> = &quot;./&quot;</code> - path to data

<a name="TileMap+reset"></a>

### tileMap.reset() ⇒ <code>[TileMap](#TileMap)</code>
resets view to initial state

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[TileMap](#TileMap)</code> - instance of TileMap for chaining  
<a name="TileMap+initializeMarkers"></a>

### tileMap.initializeMarkers() ⇒ <code>[TileMap](#TileMap)</code>
initialize all markers

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[TileMap](#TileMap)</code> - instance of TileMap for chaining  
<a name="TileMap+createViewFromData"></a>

### tileMap.createViewFromData(data) ⇒ <code>[View](#View)</code>
creates a View from specified parameters

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[View](#View)</code> - created View  
**Params**

- data <code>Object</code> - specified data

<a name="TileMap+createSidebarContainer"></a>

### tileMap.createSidebarContainer() ⇒ <code>[TileMap](#TileMap)</code>
creates an instance of SideBar

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[TileMap](#TileMap)</code> - instance of TileMap for chaining  
<a name="TileMap+bindEvents"></a>

### tileMap.bindEvents() ⇒ <code>[TileMap](#TileMap)</code>
bind all events

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[TileMap](#TileMap)</code> - instance of TileMap for chaining  
<a name="TileMap+zoomToBounds"></a>

### tileMap.zoomToBounds(center, boundingBox) ⇒ <code>[TileMap](#TileMap)</code>
zoom to boundaries on specified center

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[TileMap](#TileMap)</code> - instance of TileMap for chaining  
**Params**

- center <code>[LatLng](#LatLng)</code> - zoom to position
- boundingBox <code>[Rectangle](#Rectangle)</code> - specified bounds to toom to

<a name="TileMap+thumbLoaded"></a>

### tileMap.thumbLoaded() ⇒ <code>[TileMap](#TileMap)</code>
called when thumbnail image was loaded

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[TileMap](#TileMap)</code> - instance of TileMap for chaining  
<a name="TileMap+setViewToOldView"></a>

### tileMap.setViewToOldView(center, zoom) ⇒ <code>[TileMap](#TileMap)</code>
set new view to old views position and zoomlevel

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[TileMap](#TileMap)</code> - instance of TileMap for chaining  
**Params**

- center <code>[LatLng](#LatLng)</code> - old center
- zoom <code>Number</code> - old zoom,

<a name="TileMap+changelevel"></a>

### tileMap.changelevel(direction) ⇒ <code>[TileMap](#TileMap)</code>
change level up or down

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[TileMap](#TileMap)</code> - instance of TileMap for chaining  
**Params**

- direction <code>Number</code> - either 1 or -1

<a name="TileMap+initializeCanvas"></a>

### tileMap.initializeCanvas() ⇒ <code>[TileMap](#TileMap)</code>
initializes the canvas, adds to DOM

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[TileMap](#TileMap)</code> - instance of TileMap for chaining  
<a name="TileMap+redraw"></a>

### tileMap.redraw() ⇒ <code>[TileMap](#TileMap)</code>
complete clear and draw of all visible tiles

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[TileMap](#TileMap)</code> - instance of TileMap for chaining  
<a name="TileMap+resize"></a>

### tileMap.resize() ⇒ <code>[TileMap](#TileMap)</code>
Handles resizing of TileMap

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[TileMap](#TileMap)</code> - instance of TileMap for chaining  
<a name="TileMap+moveView"></a>

### tileMap.moveView(delta) ⇒ <code>[TileMap](#TileMap)</code>
move view by delta

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[TileMap](#TileMap)</code> - instance of TileMap for chaining  
**Params**

- delta <code>[Point](#Point)</code> - delta of x/y

<a name="TileMap+zoom"></a>

### tileMap.zoom(factor, position) ⇒ <code>[TileMap](#TileMap)</code>
handles zoom by factor and position

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[TileMap](#TileMap)</code> - instance of TileMap for chaining  
**Params**

- factor <code>Number</code> - difference in zoom scale
- position <code>[Point](#Point)</code> - position to zoom to

<a name="TileMap+clusterHandler"></a>

### tileMap.clusterHandler() ⇒ <code>[TileMap](#TileMap)</code>
handles creation of clusters

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[TileMap](#TileMap)</code> - instance of TileMap for chaining  
<a name="TileMap+resizeCanvas"></a>

### tileMap.resizeCanvas() ⇒ <code>[TileMap](#TileMap)</code>
resizes the canvas sizes

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[TileMap](#TileMap)</code> - instance of TileMap for chaining  
<a name="TileMap+resizeView"></a>

### tileMap.resizeView() ⇒ <code>[TileMap](#TileMap)</code>
Handles resizing of view

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[TileMap](#TileMap)</code> - instance of TileMap for chaining  
<a name="TileMap+mainLoop"></a>

### tileMap.mainLoop()
main draw call

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
<a name="TileMap+checkAoIBoundaries"></a>

### tileMap.checkAoIBoundaries() ⇒ <code>[TileMap](#TileMap)</code>
checks area of interest boundaries and resets positions if outside

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[TileMap](#TileMap)</code> - instance of TileMap for chaining  
<a name="TileMap+drawClusters"></a>

### tileMap.drawClusters() ⇒ <code>[TileMap](#TileMap)</code>
draw all clusters

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[TileMap](#TileMap)</code> - instance of TileMap for chaining  
<a name="TileMap+drawMarkers"></a>

### tileMap.drawMarkers() ⇒ <code>[TileMap](#TileMap)</code>
draw all markers

**Kind**: instance method of <code>[TileMap](#TileMap)</code>  
**Returns**: <code>[TileMap](#TileMap)</code> - instance of TileMap for chaining  
<a name="View"></a>

## View
**Kind**: global class  

* [View](#View)
    * [new View(view, data, context, maxZoom, minZoom, aoiBounds, id)](#new_View_new)
    * [.visibleTiles](#View+visibleTiles) ⇒ <code>array</code>
    * [.init()](#View+init) ⇒ <code>[View](#View)</code>
    * [.reset()](#View+reset) ⇒ <code>[View](#View)</code>
    * [.getDistortedView()](#View+getDistortedView) ⇒ <code>[View](#View)</code>
    * [.checkBoundaries()](#View+checkBoundaries) ⇒ <code>[View](#View)</code>
    * [.viewportIsSmallerThanView(view)](#View+viewportIsSmallerThanView) ⇒ <code>Boolean</code>
    * [.checkX(left, right, mapWidth, viewWidth)](#View+checkX) ⇒ <code>Number</code>
    * [.checkY(top, bottom, mapHeight, viewHeight)](#View+checkY) ⇒ <code>Number</code>
    * [.loadThumb()](#View+loadThumb) ⇒ <code>[View](#View)</code>
    * [.setLatLngToPosition(latlng, position)](#View+setLatLngToPosition) ⇒ <code>[View](#View)</code>
    * [.getDeltaXToCenter(pos)](#View+getDeltaXToCenter) ⇒ <code>Number</code>
    * [.zoom(factor, pos, automatic)](#View+zoom) ⇒ <code>Number</code>
    * [.changeZoomLevelIfNecessary(factor, viewportIsSmaller)](#View+changeZoomLevelIfNecessary) ⇒ <code>Number</code>
    * [.calculateNewCenter()](#View+calculateNewCenter) ⇒ <code>[View](#View)</code>
    * [.moveView(pos)](#View+moveView) ⇒ <code>[View](#View)</code>
    * [.draw()](#View+draw) ⇒ <code>[View](#View)</code>
    * [.drawVisibleTiles()](#View+drawVisibleTiles) ⇒ <code>[View](#View)</code>
    * [.drawThumbnail()](#View+drawThumbnail) ⇒ <code>[View](#View)</code>
    * [.initializeTiles()](#View+initializeTiles) ⇒ <code>[View](#View)</code>

<a name="new_View_new"></a>

### new View(view, data, context, maxZoom, minZoom, aoiBounds, id)
**Returns**: <code>[View](#View)</code> - instance of View for chaining  
**Params**

- view <code>[Rectangle](#Rectangle)</code> - = new Rectangle() - representation of map
- data <code>Object</code> - = {} - tile data of current map
- context <code>CanvasRenderingContext2D</code> - = null - canvas context for drawing
- maxZoom <code>Number</code> - = 1.5 - maximal zoom of view
- minZoom <code>Number</code> - = 0.8 - minimal zoom of view
- aoiBounds <code>Number</code> - where to limit panning
- id <code>Number</code> - = 0 - id of parent instance

<a name="View+visibleTiles"></a>

### view.visibleTiles ⇒ <code>array</code>
get all visible tiles

**Kind**: instance property of <code>[View](#View)</code>  
**Returns**: <code>array</code> - all tiles that are currently visible  
<a name="View+init"></a>

### view.init() ⇒ <code>[View](#View)</code>
initializes the view

**Kind**: instance method of <code>[View](#View)</code>  
**Returns**: <code>[View](#View)</code> - instance of View for chaining  
<a name="View+reset"></a>

### view.reset() ⇒ <code>[View](#View)</code>
resets current View to its initial position

**Kind**: instance method of <code>[View](#View)</code>  
**Returns**: <code>[View](#View)</code> - instance of View for chaining  
<a name="View+getDistortedView"></a>

### view.getDistortedView() ⇒ <code>[View](#View)</code>
distorts this view

**Kind**: instance method of <code>[View](#View)</code>  
**Returns**: <code>[View](#View)</code> - [distorted View]  
<a name="View+checkBoundaries"></a>

### view.checkBoundaries() ⇒ <code>[View](#View)</code>
check boundaries of map and bounds

**Kind**: instance method of <code>[View](#View)</code>  
**Returns**: <code>[View](#View)</code> - instance of View for chaining  
<a name="View+viewportIsSmallerThanView"></a>

### view.viewportIsSmallerThanView(view) ⇒ <code>Boolean</code>
check if viewport is smaller than view

**Kind**: instance method of <code>[View](#View)</code>  
**Returns**: <code>Boolean</code> - true if smaller, else false  
**Params**

- view <code>[Rectangle](#Rectangle)</code> - specified view

<a name="View+checkX"></a>

### view.checkX(left, right, mapWidth, viewWidth) ⇒ <code>Number</code>
check x boundaries

**Kind**: instance method of <code>[View](#View)</code>  
**Returns**: <code>Number</code> - calculated x to be in viewport  
**Params**

- left <code>Number</code> - left position
- right <code>Number</code> - right position
- mapWidth <code>Number</code> - width of map
- viewWidth <code>Number</code> - width of viewport

<a name="View+checkY"></a>

### view.checkY(top, bottom, mapHeight, viewHeight) ⇒ <code>Number</code>
check y boundaries

**Kind**: instance method of <code>[View](#View)</code>  
**Returns**: <code>Number</code> - calculated y to be in viewport  
**Params**

- top <code>Number</code> - top position
- bottom <code>Number</code> - bottom position
- mapHeight <code>Number</code> - height of map
- viewHeight <code>Number</code> - height of viewport

<a name="View+loadThumb"></a>

### view.loadThumb() ⇒ <code>[View](#View)</code>
loads thumbnail of view

**Kind**: instance method of <code>[View](#View)</code>  
**Returns**: <code>[View](#View)</code> - instance of View for chaining  
<a name="View+setLatLngToPosition"></a>

### view.setLatLngToPosition(latlng, position) ⇒ <code>[View](#View)</code>
set specified lat/lng to position x/y

**Kind**: instance method of <code>[View](#View)</code>  
**Returns**: <code>[View](#View)</code> - instance of View for chaining  
**Params**

- latlng <code>[LatLng](#LatLng)</code> - specified latlng to be set Point to
- position <code>[Point](#Point)</code> - specified position to set LatLng to

<a name="View+getDeltaXToCenter"></a>

### view.getDeltaXToCenter(pos) ⇒ <code>Number</code>
receive relative Position to center of viewport

**Kind**: instance method of <code>[View](#View)</code>  
**Returns**: <code>Number</code> - delta of point to center of viewport  
**Params**

- pos <code>[Point](#Point)</code> - specified position

<a name="View+zoom"></a>

### view.zoom(factor, pos, automatic) ⇒ <code>Number</code>
zooming handler

**Kind**: instance method of <code>[View](#View)</code>  
**Returns**: <code>Number</code> - indicates if direction has changed  
**Params**

- factor <code>Number</code> - increase/decrease factor
- pos <code>[Point](#Point)</code> - Position to zoom to
- automatic <code>Boolean</code> <code> = false</code> - = false - is resetted by programm in case of beholding boundaries

<a name="View+changeZoomLevelIfNecessary"></a>

### view.changeZoomLevelIfNecessary(factor, viewportIsSmaller) ⇒ <code>Number</code>
changes zoom level if its necessary

**Kind**: instance method of <code>[View](#View)</code>  
**Returns**: <code>Number</code> - indicates if direction has changed  
**Params**

- factor <code>Number</code> - specified zoom change
- viewportIsSmaller <code>Boolean</code> - is viewport smaller than view

<a name="View+calculateNewCenter"></a>

### view.calculateNewCenter() ⇒ <code>[View](#View)</code>
update center position of view

**Kind**: instance method of <code>[View](#View)</code>  
**Returns**: <code>[View](#View)</code> - instance of View for chaining  
<a name="View+moveView"></a>

### view.moveView(pos) ⇒ <code>[View](#View)</code>
moves the view's current position by pos

**Kind**: instance method of <code>[View](#View)</code>  
**Returns**: <code>[View](#View)</code> - instance of View for chaining  
**Params**

- pos <code>[Point](#Point)</code> - specified additional offset

<a name="View+draw"></a>

### view.draw() ⇒ <code>[View](#View)</code>
Handles draw of visible elements

**Kind**: instance method of <code>[View](#View)</code>  
**Returns**: <code>[View](#View)</code> - instance of View for chaining  
<a name="View+drawVisibleTiles"></a>

### view.drawVisibleTiles() ⇒ <code>[View](#View)</code>
draws all visible tiles

**Kind**: instance method of <code>[View](#View)</code>  
**Returns**: <code>[View](#View)</code> - instance of View for chaining  
<a name="View+drawThumbnail"></a>

### view.drawThumbnail() ⇒ <code>[View](#View)</code>
draws the thumbnail

**Kind**: instance method of <code>[View](#View)</code>  
**Returns**: <code>[View](#View)</code> - instance of View for chaining  
<a name="View+initializeTiles"></a>

### view.initializeTiles() ⇒ <code>[View](#View)</code>
initializes tiles

**Kind**: instance method of <code>[View](#View)</code>  
**Returns**: <code>[View](#View)</code> - instance of View for chaining  
<a name="Events"></a>

## Events : <code>object</code>
Helper for naming events

**Kind**: global namespace  
**Author:** Michael Duve <mduve@designmail.net>  
**Copyright**: Michael Duve 2016  

* [Events](#Events) : <code>object</code>
    * [.SideBar](#Events.SideBar) : <code>Object</code>
    * [.Publisher](#Events.Publisher) : <code>Object</code>
    * [.TileMap](#Events.TileMap) : <code>Object</code>
    * [.Handling](#Events.Handling) : <code>Object</code>
    * [.View](#Events.View) : <code>Object</code>
    * [.MarkerClusterer](#Events.MarkerClusterer) : <code>Object</code>
    * [.MapInformation](#Events.MapInformation) : <code>Object</code>
    * [.General](#Events.General) : <code>Object</code>

<a name="Events.SideBar"></a>

### Events.SideBar : <code>Object</code>
Eventnames for SideBar class

**Kind**: static property of <code>[Events](#Events)</code>  
**Properties**

- OPEN <code>String</code> - when a sidebar should be openend  
- CLOSE <code>String</code> - when a sidebar should be closed  

<a name="Events.Publisher"></a>

### Events.Publisher : <code>Object</code>
Eventnames for Publisher class

**Kind**: static property of <code>[Events](#Events)</code>  
**Properties**

- PUBLISH <code>String</code> - notifies all subscribers  
- SUBSCRIBE <code>String</code> - subscribes to a topic  
- UNSUBSCRIBE <code>String</code> - unsubscribes from a topic  

<a name="Events.TileMap"></a>

### Events.TileMap : <code>Object</code>
Eventnames for TileMap class

**Kind**: static property of <code>[Events](#Events)</code>  
**Properties**

- NEXT_LEVEL <code>String</code> - next level of view  
- PREVIOUS_LEVEL <code>String</code> - previous level of view  
- RESIZE <code>String</code> - resize of view needed  
- ZOOM_TO_BOUNDS <code>String</code> - zoom to bounds  
- DRAW <code>String</code> - draw is needed  

<a name="Events.Handling"></a>

### Events.Handling : <code>Object</code>
Eventnames for Handling in all classes

**Kind**: static property of <code>[Events](#Events)</code>  
**Properties**

- RESIZE <code>String</code> - resize of window happened needed  
- CLICK <code>String</code> - click occured  
- TOUCHSTART <code>String</code> - Touch started  
- TOUCHEND <code>String</code> - Touch ended  
- MOUSEDOWN <code>String</code> - Mouse started  
- MOUSEUP <code>String</code> - Mouse ended  
- KEYDOWN <code>String</code> - key pressed  
- KEYUP <code>String</code> - key released  
- ENTER <code>String</code> - entering of mouse  

<a name="Events.View"></a>

### Events.View : <code>Object</code>
Eventnames for View class

**Kind**: static property of <code>[Events](#Events)</code>  
**Properties**

- THUMB_LOADED <code>String</code> - thumbnail was loaded  

<a name="Events.MarkerClusterer"></a>

### Events.MarkerClusterer : <code>Object</code>
Eventnames for MarkerClusterer class

**Kind**: static property of <code>[Events](#Events)</code>  
**Properties**

- CLUSTERIZE <code>String</code> - create cluster  
- UNCLUSTERIZE <code>String</code> - destroy cluster  

<a name="Events.MapInformation"></a>

### Events.MapInformation : <code>Object</code>
Eventnames for MapInformation class

**Kind**: static property of <code>[Events](#Events)</code>  
**Properties**

- UPDATE <code>String</code> - updates informations  

<a name="Events.General"></a>

### Events.General : <code>Object</code>
Eventnames for MappedJS class

**Kind**: static property of <code>[Events](#Events)</code>  
**Properties**

- ACTIVE <code>String</code> - DomElement is marked active  
- ZOOM_IN <code>String</code> - zoom in button  
- ZOOM_OUT <code>String</code> - zoom out button  
- HOME <code>String</code> - home button  

