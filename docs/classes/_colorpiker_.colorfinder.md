
# Class: ColorFinder

## Hierarchy

* **ColorFinder**

## Index

### Constructors

* [constructor](_colorpiker_.colorfinder.md#constructor)

### Properties

* [canvas](_colorpiker_.colorfinder.md#canvas)
* [canvas2](_colorpiker_.colorfinder.md#canvas2)
* [canvasContext](_colorpiker_.colorfinder.md#canvascontext)
* [height](_colorpiker_.colorfinder.md#height)
* [img](_colorpiker_.colorfinder.md#img)
* [width](_colorpiker_.colorfinder.md#width)

### Methods

* [getfindColor](_colorpiker_.colorfinder.md#getfindcolor)
* [map](_colorpiker_.colorfinder.md#map)

## Constructors

###  constructor

\+ **new ColorFinder**(`img`: HTMLImageElement): *[ColorFinder](_colorpiker_.colorfinder.md)*

**Parameters:**

Name | Type |
------ | ------ |
`img` | HTMLImageElement |

**Returns:** *[ColorFinder](_colorpiker_.colorfinder.md)*

## Properties

###  canvas

• **canvas**: *HTMLCanvasElement*

___

###  canvas2

• **canvas2**: *HTMLCanvasElement*

___

###  canvasContext

• **canvasContext**: *CanvasRenderingContext2D*

___

###  height

• **height**: *number* = 50

___

###  img

• **img**: *HTMLImageElement*

___

###  width

• **width**: *number* = 50

## Methods

###  getfindColor

▸ **getfindColor**(`geoJson`: [GeoJsonFeature](../interfaces/_interfaces_.geojsonfeature.md)): *Promise‹[GeoJsonFeature](../interfaces/_interfaces_.geojsonfeature.md)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`geoJson` | [GeoJsonFeature](../interfaces/_interfaces_.geojsonfeature.md) |

**Returns:** *Promise‹[GeoJsonFeature](../interfaces/_interfaces_.geojsonfeature.md)[]›*

___

###  map

▸ **map**(`x`: number, `in_min`: number, `in_max`: number, `out_min`: number, `out_max`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`in_min` | number |
`in_max` | number |
`out_min` | number |
`out_max` | number |

**Returns:** *number*
