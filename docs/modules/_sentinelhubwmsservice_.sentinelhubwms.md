
# Module: SentinelHubWms

## Index

### Functions

* [createShapeAsImage](_sentinelhubwmsservice_.sentinelhubwms.md#createshapeasimage)
* [getDangerZone](_sentinelhubwmsservice_.sentinelhubwms.md#getdangerzone)
* [getImage](_sentinelhubwmsservice_.sentinelhubwms.md#getimage)
* [getShapeFromImage](_sentinelhubwmsservice_.sentinelhubwms.md#getshapefromimage)
* [getShapeFromSentinel](_sentinelhubwmsservice_.sentinelhubwms.md#getshapefromsentinel)
* [getShapesFromImage](_sentinelhubwmsservice_.sentinelhubwms.md#getshapesfromimage)
* [getShapesFromSentinel](_sentinelhubwmsservice_.sentinelhubwms.md#getshapesfromsentinel)
* [latLngToXYTool](_sentinelhubwmsservice_.sentinelhubwms.md#latlngtoxytool)

## Functions

###  createShapeAsImage

▸ **createShapeAsImage**(`feature`: [GeoJsonFeature](../interfaces/_interfaces_.geojsonfeature.md), `img`: string, `latLongXY`: [LagLngXY](../classes/_laglngxy_.laglngxy.md)): *Promise‹object›*

**Parameters:**

Name | Type |
------ | ------ |
`feature` | [GeoJsonFeature](../interfaces/_interfaces_.geojsonfeature.md) |
`img` | string |
`latLongXY` | [LagLngXY](../classes/_laglngxy_.laglngxy.md) |

**Returns:** *Promise‹object›*

___

###  getDangerZone

▸ **getDangerZone**(`feature`: [GeoJsonFeature](../interfaces/_interfaces_.geojsonfeature.md), `image`: string | HTMLImageElement): *Promise‹[GeoJson](../interfaces/_interfaces_.geojson.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`feature` | [GeoJsonFeature](../interfaces/_interfaces_.geojsonfeature.md) |
`image` | string &#124; HTMLImageElement |

**Returns:** *Promise‹[GeoJson](../interfaces/_interfaces_.geojson.md)›*

___

###  getImage

▸ **getImage**(`uuid`: string, `bbox`: [number[], number[]], `options`: object): *Promise‹object›*

**Parameters:**

▪ **uuid**: *string*

▪ **bbox**: *[number[], number[]]*

▪ **options**: *object*

Name | Type |
------ | ------ |
`date` | Date |
`layers` | [Sentinel_2](../enums/_wmsparameters_.wmsparameters.sentinel_2.md)[] |

**Returns:** *Promise‹object›*

___

###  getShapeFromImage

▸ **getShapeFromImage**(`img`: Blob, `feature`: [GeoJsonFeature](../interfaces/_interfaces_.geojsonfeature.md)): *Promise‹object›*

**Parameters:**

Name | Type |
------ | ------ |
`img` | Blob |
`feature` | [GeoJsonFeature](../interfaces/_interfaces_.geojsonfeature.md) |

**Returns:** *Promise‹object›*

___

###  getShapeFromSentinel

▸ **getShapeFromSentinel**(`feature`: [GeoJsonFeature](../interfaces/_interfaces_.geojsonfeature.md), `uuid`: string, `options`: object): *Promise‹object›*

**Parameters:**

▪ **feature**: *[GeoJsonFeature](../interfaces/_interfaces_.geojsonfeature.md)*

▪ **uuid**: *string*

▪ **options**: *object*

Name | Type |
------ | ------ |
`date` | Date |
`layers` | [Sentinel_2](../enums/_wmsparameters_.wmsparameters.sentinel_2.md)[] |
`removeRoof` | boolean |

**Returns:** *Promise‹object›*

___

###  getShapesFromImage

▸ **getShapesFromImage**(`img`: Blob, `geoJson`: [GeoJson](../interfaces/_interfaces_.geojson.md)): *Promise‹Array‹object››*

**Parameters:**

Name | Type |
------ | ------ |
`img` | Blob |
`geoJson` | [GeoJson](../interfaces/_interfaces_.geojson.md) |

**Returns:** *Promise‹Array‹object››*

___

###  getShapesFromSentinel

▸ **getShapesFromSentinel**(`geoJson`: [GeoJson](../interfaces/_interfaces_.geojson.md), `uuid`: string, `options`: object): *Promise‹Array‹object››*

**Parameters:**

▪ **geoJson**: *[GeoJson](../interfaces/_interfaces_.geojson.md)*

▪ **uuid**: *string*

▪ **options**: *object*

Name | Type |
------ | ------ |
`date` | Date |
`layers` | [Sentinel_2](../enums/_wmsparameters_.wmsparameters.sentinel_2.md)[] |

**Returns:** *Promise‹Array‹object››*

___

###  latLngToXYTool

▸ **latLngToXYTool**(`geoJson`: [GeoJson](../interfaces/_interfaces_.geojson.md) | [GeoJsonFeature](../interfaces/_interfaces_.geojsonfeature.md)): *[LagLngXY](../classes/_laglngxy_.laglngxy.md)‹›[]*

Uses a GeoJSON to an array of objects that can make several transformation to use a GeoJSON features as shapes, just like a GIS system

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`geoJson` | [GeoJson](../interfaces/_interfaces_.geojson.md) &#124; [GeoJsonFeature](../interfaces/_interfaces_.geojsonfeature.md) | ;  |

**Returns:** *[LagLngXY](../classes/_laglngxy_.laglngxy.md)‹›[]*
