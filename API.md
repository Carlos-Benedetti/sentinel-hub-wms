<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [@ciag/sentinel-hub-wms](#ciagsentinel-hub-wms)
- [OpenCIAg | sentinel-hub-wms](#openciag--sentinel-hub-wms)
  - [Install](#install)
  - [API](#api)
    - [geoJsonToShapeImgs()](#geojsontoshapeimgs)
    - [getImage()](#getimage)
- [@ciag/sentinel-hub-wms](#ciagsentinel-hub-wms-1)
  - [Index](#index)
    - [External modules](#external-modules)
- [Classes](#classes)
  - [Class: BoxCords](#class-boxcords)
    - [Hierarchy](#hierarchy)
    - [Index](#index-1)
    - [Constructors](#constructors)
    - [Properties](#properties)
    - [Methods](#methods)
  - [Class: ColorFinder](#class-colorfinder)
    - [Hierarchy](#hierarchy-1)
    - [Index](#index-2)
    - [Constructors](#constructors-1)
    - [Properties](#properties-1)
    - [Methods](#methods-1)
  - [Class: FindStructure](#class-findstructure)
    - [Hierarchy](#hierarchy-2)
    - [Index](#index-3)
    - [Constructors](#constructors-2)
    - [Properties](#properties-2)
    - [Methods](#methods-2)
  - [Class: GetMap](#class-getmap)
    - [Hierarchy](#hierarchy-3)
    - [Index](#index-4)
    - [Constructors](#constructors-3)
    - [Methods](#methods-3)
  - [Class: LagLngXY](#class-laglngxy)
    - [Hierarchy](#hierarchy-4)
    - [Index](#index-5)
    - [Constructors](#constructors-4)
    - [Properties](#properties-3)
    - [Methods](#methods-4)
    - [Object literals](#object-literals)
  - [Class: SentinelHubURL](#class-sentinelhuburl)
    - [Hierarchy](#hierarchy-5)
    - [Index](#index-6)
    - [Constructors](#constructors-5)
    - [Properties](#properties-4)
    - [Methods](#methods-5)
- [Enums](#enums)
  - [Enumeration: BgColor](#enumeration-bgcolor)
    - [Index](#index-7)
    - [Enumeration members](#enumeration-members)
  - [Enumeration: Exceptions](#enumeration-exceptions)
    - [Index](#index-8)
    - [Enumeration members](#enumeration-members-1)
  - [Enumeration: Format](#enumeration-format)
    - [Index](#index-9)
    - [Enumeration members](#enumeration-members-2)
  - [Enumeration: Sentinel_2](#enumeration-sentinel_2)
    - [Index](#index-10)
    - [Enumeration members](#enumeration-members-3)
- [Interfaces](#interfaces)
  - [Interface: BoxCordsSimple](#interface-boxcordssimple)
    - [Hierarchy](#hierarchy-6)
    - [Index](#index-11)
    - [Properties](#properties-5)
  - [Interface: GeoJson](#interface-geojson)
    - [Hierarchy](#hierarchy-7)
    - [Index](#index-12)
    - [Properties](#properties-6)
  - [Interface: GeoJsonFeature](#interface-geojsonfeature)
    - [Hierarchy](#hierarchy-8)
    - [Index](#index-13)
    - [Properties](#properties-7)
  - [Interface: GeoJsonFeatureGeomety](#interface-geojsonfeaturegeomety)
    - [Hierarchy](#hierarchy-9)
    - [Index](#index-14)
    - [Properties](#properties-8)
  - [Interface: latLong](#interface-latlong)
    - [Hierarchy](#hierarchy-10)
    - [Index](#index-15)
    - [Properties](#properties-9)
- [Modules](#modules)
  - [External module: "BoxCords"](#external-module-boxcords)
    - [Index](#index-16)
  - [External module: "colorPiker"](#external-module-colorpiker)
    - [Index](#index-17)
  - [Module: Cropper](#module-cropper)
    - [Index](#index-18)
    - [Functions](#functions)
  - [External module: "Cropper"](#external-module-cropper)
    - [Index](#index-19)
  - [External module: "findStructure"](#external-module-findstructure)
    - [Index](#index-20)
  - [External module: "GetMap"](#external-module-getmap)
    - [Index](#index-21)
  - [External module: "interfaces"](#external-module-interfaces)
    - [Index](#index-22)
  - [External module: "LagLngXY"](#external-module-laglngxy)
    - [Index](#index-23)
  - [External module: "SentinelHubURL"](#external-module-sentinelhuburl)
    - [Index](#index-24)
  - [External module: "SentinelHubWmsService"](#external-module-sentinelhubwmsservice)
    - [Index](#index-25)
    - [References](#references)
  - [Module: SentinelHubWms](#module-sentinelhubwms)
    - [Index](#index-26)
    - [Functions](#functions-1)
  - [External module: "WMSParameters"](#external-module-wmsparameters)
    - [Index](#index-27)
  - [Module: WMSParameters](#module-wmsparameters)
    - [Index](#index-28)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>


# @ciag/sentinel-hub-wms

# OpenCIAg | sentinel-hub-wms

## Install

```shell
npm install @ciag/sentinel-hub-wms
```

## API

### geoJsonToShapeImgs()

```ts
import { SentinelHubWms } from 'sentinel-hub-wms';
import { WMSParameters } from 'sentinel-hub-wms/lib/WMSParameters';

const uuid = "{{Seu UUID aqui}}"
const geoJson = { "type": "FeatureCollection", "features": [{ "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[-410.4850959777832, -21.969255615138092], [-410.4859972000122, -21.96740494795422], [-410.48625469207764, -21.96619105638408], [-410.48638343811035, -21.965215955642634], [-410.4894518852234, -21.966330355943608], [-410.48882961273193, -21.96822083645885], [-410.48788547515863, -21.96929541416751], [-410.4866409301758, -21.970210788766085], [-410.48625469207764, -21.970509279207434], [-410.4850959777832, -21.969255615138092]]] } }] }

SentinelHubWms.geoJsonToShapeImgs(geoJson, uuid, { date: new Date(), layers: [WMSParameters.Sentinel_2.NDVI] }).then((result) => {
    result.forEach((element: { img: string; LatLng: [number[], number[]] }) => {
        console.log(`lat:${element.LatLng[0][0]} Long:${element.LatLng[0][1]}, Base64Lenght: ${result[0].img.length}`)
    });

}).catch((e) => {
    console.log(e)
})
```

### getImage()

```ts
import {SentinelHubWms,WMSParameters} from "sentinel-hub-wms"
const uuid = "{{Seu UUID aqui}}"

SentinelHubWms.getImage(uuid,[[-410.4859972000122, -21.96740494795422],[-410.4850959777832, -21.969255615138092]],{date:new Date(),layers:[WMSParameters.Sentinel_2.NDVI]}).then(result =>{
    console.log(result.type)
})
```


<a name="globalsmd"></a>


# @ciag/sentinel-hub-wms

## Index

### External modules

* ["BoxCords"](#modules_boxcords_md)
* ["Cropper"](#modules_cropper_md)
* ["GetMap"](#modules_getmap_md)
* ["LagLngXY"](#modules_laglngxy_md)
* ["SentinelHubURL"](#modules_sentinelhuburl_md)
* ["SentinelHubWmsService"](#modules_sentinelhubwmsservice_md)
* ["WMSParameters"](#modules_wmsparameters_md)
* ["colorPiker"](#modules_colorpiker_md)
* ["findStructure"](#modules_findstructure_md)
* ["interfaces"](#modules_interfaces_md)

# Classes


<a name="classes_boxcords_boxcordsmd"></a>


## Class: BoxCords

### Hierarchy

* **BoxCords**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [bottonRight](#bottonright)
* [topLeft](#topleft)

#### Methods

* [toString](#tostring)

### Constructors

####  constructor

\+ **new BoxCords**(`param`: object): *[BoxCords](#classes_boxcords_boxcordsmd)*

**Parameters:**

▪ **param**: *object*

Name | Type |
------ | ------ |
`botton_right` | object |
`top_left` | object |

**Returns:** *[BoxCords](#classes_boxcords_boxcordsmd)*

### Properties

####  bottonRight

• **bottonRight**: *[latLong](#interfaces_interfaces_latlongmd)*

___

####  topLeft

• **topLeft**: *[latLong](#interfaces_interfaces_latlongmd)*

### Methods

####  toString

▸ **toString**(): *string*

**Returns:** *string*


<a name="classes_colorpiker_colorfindermd"></a>


## Class: ColorFinder

### Hierarchy

* **ColorFinder**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [canvas](#canvas)
* [canvas2](#canvas2)
* [canvasContext](#canvascontext)
* [height](#height)
* [img](#img)
* [width](#width)

#### Methods

* [getfindColor](#getfindcolor)
* [map](#map)

### Constructors

####  constructor

\+ **new ColorFinder**(`img`: HTMLImageElement): *[ColorFinder](#classes_colorpiker_colorfindermd)*

**Parameters:**

Name | Type |
------ | ------ |
`img` | HTMLImageElement |

**Returns:** *[ColorFinder](#classes_colorpiker_colorfindermd)*

### Properties

####  canvas

• **canvas**: *HTMLCanvasElement*

___

####  canvas2

• **canvas2**: *HTMLCanvasElement*

___

####  canvasContext

• **canvasContext**: *CanvasRenderingContext2D*

___

####  height

• **height**: *number* = 50

___

####  img

• **img**: *HTMLImageElement*

___

####  width

• **width**: *number* = 50

### Methods

####  getfindColor

▸ **getfindColor**(`geoJson`: [GeoJsonFeature](#interfaces_interfaces_geojsonfeaturemd)): *Promise‹[GeoJsonFeature](#interfaces_interfaces_geojsonfeaturemd)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`geoJson` | [GeoJsonFeature](#interfaces_interfaces_geojsonfeaturemd) |

**Returns:** *Promise‹[GeoJsonFeature](#interfaces_interfaces_geojsonfeaturemd)[]›*

___

####  map

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


<a name="classes_findstructure_findstructuremd"></a>


## Class: FindStructure

### Hierarchy

* **FindStructure**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [dateFromShape](#datefromshape)
* [shape](#shape)
* [uuid](#uuid)

#### Methods

* [getInvalidPixels](#getinvalidpixels)
* [getSixMonthsBebore](#getsixmonthsbebore)
* [getTowYearAgo](#gettowyearago)
* [getYearAfter](#getyearafter)
* [getYearBebore](#getyearbebore)
* [getmonthAfter](#getmonthafter)

### Constructors

####  constructor

\+ **new FindStructure**(`uuid`: string, `shape`: [GeoJsonFeature](#interfaces_interfaces_geojsonfeaturemd), `dateFromShape`: Date): *[FindStructure](#classes_findstructure_findstructuremd)*

**Parameters:**

Name | Type |
------ | ------ |
`uuid` | string |
`shape` | [GeoJsonFeature](#interfaces_interfaces_geojsonfeaturemd) |
`dateFromShape` | Date |

**Returns:** *[FindStructure](#classes_findstructure_findstructuremd)*

### Properties

####  dateFromShape

• **dateFromShape**: *Date*

___

####  shape

• **shape**: *[GeoJsonFeature](#interfaces_interfaces_geojsonfeaturemd)*

___

####  uuid

• **uuid**: *string*

### Methods

####  getInvalidPixels

▸ **getInvalidPixels**(): *Promise‹object›*

**Returns:** *Promise‹object›*

___

####  getSixMonthsBebore

▸ **getSixMonthsBebore**(): *Promise‹[GeoJson](#interfaces_interfaces_geojsonmd)›*

**Returns:** *Promise‹[GeoJson](#interfaces_interfaces_geojsonmd)›*

___

####  getTowYearAgo

▸ **getTowYearAgo**(): *Promise‹[GeoJson](#interfaces_interfaces_geojsonmd)›*

**Returns:** *Promise‹[GeoJson](#interfaces_interfaces_geojsonmd)›*

___

####  getYearAfter

▸ **getYearAfter**(): *Promise‹[GeoJson](#interfaces_interfaces_geojsonmd)›*

**Returns:** *Promise‹[GeoJson](#interfaces_interfaces_geojsonmd)›*

___

####  getYearBebore

▸ **getYearBebore**(): *Promise‹[GeoJson](#interfaces_interfaces_geojsonmd)›*

**Returns:** *Promise‹[GeoJson](#interfaces_interfaces_geojsonmd)›*

___

####  getmonthAfter

▸ **getmonthAfter**(): *Promise‹[GeoJson](#interfaces_interfaces_geojsonmd)›*

**Returns:** *Promise‹[GeoJson](#interfaces_interfaces_geojsonmd)›*


<a name="classes_getmap_getmapmd"></a>


## Class: GetMap

### Hierarchy

* **GetMap**

### Index

#### Constructors

* [constructor](#constructor)

#### Methods

* [measure](#measure)
* [request](#request)

### Constructors

####  constructor

\+ **new GetMap**(`UUID`: string, `params`: object): *[GetMap](#classes_getmap_getmapmd)*

**Parameters:**

▪ **UUID**: *string*

▪ **params**: *object*

Name | Type |
------ | ------ |
`BBOX` | [number[], number[]] |
`BGCOLOR?` | [BgColor](#enums_wmsparameters_wmsparametersbgcolormd) |
`CRS?` | string |
`DATE` | Date |
`EXCEPTIONS?` | [Exceptions](#enums_wmsparameters_wmsparametersexceptionsmd) |
`FORMAT` | [Format](#enums_wmsparameters_wmsparametersformatmd) |
`HEIGHT?` | string |
`LAYERS?` | [Sentinel_2](#enums_wmsparameters_wmsparameterssentinel_2md)[] |
`RESX?` | string |
`RESY?` | string |
`SRS?` | string |
`TRANSPARENT?` | boolean |
`WIDTH?` | string |

**Returns:** *[GetMap](#classes_getmap_getmapmd)*

### Methods

####  measure

▸ **measure**(`lat1`: any, `lon1`: any, `lat2`: any, `lon2`: any): *number*

**Parameters:**

Name | Type |
------ | ------ |
`lat1` | any |
`lon1` | any |
`lat2` | any |
`lon2` | any |

**Returns:** *number*

___

####  request

▸ **request**(): *Promise‹object›*

**Returns:** *Promise‹object›*


<a name="classes_laglngxy_laglngxymd"></a>


## Class: LagLngXY

### Hierarchy

* **LagLngXY**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [radius](#radius)

#### Methods

* [getBobxConnors](#getbobxconnors)
* [latlngToGlobalXY](#latlngtoglobalxy)
* [latlngToScreenXY](#latlngtoscreenxy)

#### Object literals

* [pMax](#pmax)
* [pMin](#pmin)

### Constructors

####  constructor

\+ **new LagLngXY**(`pMinLat`: any, `pMinLng`: any, `pMaxLat`: any, `pMaxLng`: any): *[LagLngXY](#classes_laglngxy_laglngxymd)*

**Parameters:**

Name | Type |
------ | ------ |
`pMinLat` | any |
`pMinLng` | any |
`pMaxLat` | any |
`pMaxLng` | any |

**Returns:** *[LagLngXY](#classes_laglngxy_laglngxymd)*

### Properties

####  radius

• **radius**: *number* = 6.371

### Methods

####  getBobxConnors

▸ **getBobxConnors**(): *[number[], number[]]*

**Returns:** *[number[], number[]]*

___

####  latlngToGlobalXY

▸ **latlngToGlobalXY**(`lat`: any, `lng`: any): *object*

**Parameters:**

Name | Type |
------ | ------ |
`lat` | any |
`lng` | any |

**Returns:** *object*

* **x**: *number* = x

* **y**: *number* = y

___

####  latlngToScreenXY

▸ **latlngToScreenXY**(`lat`: any, `lng`: any): *object*

**Parameters:**

Name | Type |
------ | ------ |
`lat` | any |
`lng` | any |

**Returns:** *object*

* **x**: *number* = ((this.pMin.scrX + (this.pMax.scrX - this.pMin.scrX) * pos["perX"]) - this.pMax.scrX) * -1

* **y**: *number* = this.pMin.scrY + (this.pMax.scrY - this.pMin.scrY) * pos["perY"]

### Object literals

####  pMax

#### ▪ **pMax**: *object*

####  lat

• **lat**: *null* = null

####  lng

• **lng**: *null* = null

####  perX

• **perX**: *null* = null

####  perY

• **perY**: *null* = null

####  pos

• **pos**: *null* = null

####  scrX

• **scrX**: *number* = 1024

####  scrY

• **scrY**: *number* = 780

___

####  pMin

#### ▪ **pMin**: *object*

####  lat

• **lat**: *null* = null

####  lng

• **lng**: *null* = null

####  perX

• **perX**: *null* = null

####  perY

• **perY**: *null* = null

####  pos

• **pos**: *null* = null

####  scrX

• **scrX**: *number* = 0

####  scrY

• **scrY**: *number* = 0


<a name="classes_sentinelhuburl_sentinelhuburlmd"></a>


## Class: SentinelHubURL

### Hierarchy

* **SentinelHubURL**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [UUID](#uuid)
* [link](#link)
* [parameters](#parameters)
* [preset](#preset)
* [request](#request)
* [timeFrom](#timefrom)
* [timeTo](#timeto)

#### Methods

* [addParameter](#addparameter)
* [addUUID](#adduuid)
* [clearTime](#cleartime)
* [setTimeFrom](#settimefrom)
* [setTimeTo](#settimeto)
* [toString](#tostring)

### Constructors

####  constructor

\+ **new SentinelHubURL**(): *[SentinelHubURL](#classes_sentinelhuburl_sentinelhuburlmd)*

**Returns:** *[SentinelHubURL](#classes_sentinelhuburl_sentinelhuburlmd)*

### Properties

####  UUID

• **UUID**: *string*

___

####  link

• **link**: *string*

___

####  parameters

• **parameters**: *any[]* = []

___

####  preset

• **preset**: *string* = "https://services.sentinel-hub.com/ogc/wms/"

___

####  request

• **request**: *string* = "REQUEST=GetMap"

___

####  timeFrom

• **timeFrom**: *any* = null

___

####  timeTo

• **timeTo**: *any* = null

### Methods

####  addParameter

▸ **addParameter**(`name`: string, `value`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | any |

**Returns:** *void*

___

####  addUUID

▸ **addUUID**(`uuid`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`uuid` | string |

**Returns:** *void*

___

####  clearTime

▸ **clearTime**(): *void*

**Returns:** *void*

___

####  setTimeFrom

▸ **setTimeFrom**(`date`: Date): *void*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |

**Returns:** *void*

___

####  setTimeTo

▸ **setTimeTo**(`date`: Date): *void*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |

**Returns:** *void*

___

####  toString

▸ **toString**(): *string*

**Returns:** *string*

# Enums


<a name="enums_wmsparameters_wmsparametersbgcolormd"></a>


## Enumeration: BgColor

### Index

#### Enumeration members

* [AARRGGBB](#aarrggbb)
* [FFFFFF](#ffffff)
* [RRGGBB](#rrggbb)
* [_AARRGGBB](#_aarrggbb)
* [_RRGGBB](#_rrggbb)
* [xAARRGGBB](#xaarrggbb)
* [xRRGGBB](#xrrggbb)

### Enumeration members

####  AARRGGBB

• **AARRGGBB**: = "AARRGGBB"

___

####  FFFFFF

• **FFFFFF**: = "FFFFFF"

___

####  RRGGBB

• **RRGGBB**: = "RRGGBB"

___

####  _AARRGGBB

• **_AARRGGBB**: = "#AARRGGBB"

___

####  _RRGGBB

• **_RRGGBB**: = "#RRGGBB"

___

####  xAARRGGBB

• **xAARRGGBB**: = "0xAARRGGBB"

___

####  xRRGGBB

• **xRRGGBB**: = "0xRRGGBB"


<a name="enums_wmsparameters_wmsparametersexceptionsmd"></a>


## Enumeration: Exceptions

### Index

#### Enumeration members

* [BLANK](#blank)
* [INIMAGE](#inimage)
* [XML](#xml)

### Enumeration members

####  BLANK

• **BLANK**: = "BLANK"

___

####  INIMAGE

• **INIMAGE**: = "INIMAGE"

___

####  XML

• **XML**: = "XML"


<a name="enums_wmsparameters_wmsparametersformatmd"></a>


## Enumeration: Format

### Index

#### Enumeration members

* [image_jpeg](#image_jpeg)
* [image_png](#image_png)
* [image_tiff_16](#image_tiff_16)
* [image_tiff_32f](#image_tiff_32f)
* [image_tiff_8](#image_tiff_8)

### Enumeration members

####  image_jpeg

• **image_jpeg**: = "image/jpeg"

___

####  image_png

• **image_png**: = "image/png"

___

####  image_tiff_16

• **image_tiff_16**: = "image/tiff;depth=16"

___

####  image_tiff_32f

• **image_tiff_32f**: = "image/tiff;depth=32f"

___

####  image_tiff_8

• **image_tiff_8**: = "image/tiff;depth=8"


<a name="enums_wmsparameters_wmsparameterssentinel_2md"></a>


## Enumeration: Sentinel_2

### Index

#### Enumeration members

* [False_color](#false_color)
* [False_color_urban](#false_color_urban)
* [Moisture_index](#moisture_index)
* [NDSI](#ndsi)
* [NDVI](#ndvi)
* [NDWI](#ndwi)
* [SWIR](#swir)
* [True_color](#true_color)

### Enumeration members

####  False_color

• **False_color**: = "FALSE_COLOR"

___

####  False_color_urban

• **False_color_urban**: = "FALSE_COLOR_URBAN"

___

####  Moisture_index

• **Moisture_index**: = "MOISTURE_INDEX"

___

####  NDSI

• **NDSI**: = "NDSI"

___

####  NDVI

• **NDVI**: = "NDVI"

___

####  NDWI

• **NDWI**: = "NDWI"

___

####  SWIR

• **SWIR**: = "SWIR"

___

####  True_color

• **True_color**: = "TRUE_COLOR"

# Interfaces


<a name="interfaces_interfaces_boxcordssimplemd"></a>


## Interface: BoxCordsSimple

### Hierarchy

* **BoxCordsSimple**

### Index

#### Properties

* [bottonRight](#bottonright)
* [topLeft](#topleft)

### Properties

####  bottonRight

• **bottonRight**: *number[]*

___

####  topLeft

• **topLeft**: *number[]*


<a name="interfaces_interfaces_geojsonmd"></a>


## Interface: GeoJson

### Hierarchy

* **GeoJson**

### Index

#### Properties

* [features](#features)
* [type](#type)

### Properties

####  features

• **features**: *[GeoJsonFeature](#interfaces_interfaces_geojsonfeaturemd)[]*

___

####  type

• **type**: *string*


<a name="interfaces_interfaces_geojsonfeaturemd"></a>


## Interface: GeoJsonFeature

### Hierarchy

* **GeoJsonFeature**

### Index

#### Properties

* [geometry](#geometry)
* [properties](#properties)
* [type](#type)

### Properties

####  geometry

• **geometry**: *[GeoJsonFeatureGeomety](#interfaces_interfaces_geojsonfeaturegeometymd)*

___

####  properties

• **properties**: *__type*

___

####  type

• **type**: *string*


<a name="interfaces_interfaces_geojsonfeaturegeometymd"></a>


## Interface: GeoJsonFeatureGeomety

### Hierarchy

* **GeoJsonFeatureGeomety**

### Index

#### Properties

* [coordinates](#coordinates)
* [type](#type)

### Properties

####  coordinates

• **coordinates**: *number[][][] | any*

___

####  type

• **type**: *string*


<a name="interfaces_interfaces_latlongmd"></a>


## Interface: latLong

### Hierarchy

* **latLong**

### Index

#### Properties

* [lat](#lat)
* [long](#long)

### Properties

####  lat

• **lat**: *string*

___

####  long

• **long**: *string*

# Modules


<a name="modules_boxcords_md"></a>


## External module: "BoxCords"

### Index

#### Classes

* [BoxCords](#classes_boxcords_boxcordsmd)


<a name="modules_colorpiker_md"></a>


## External module: "colorPiker"

### Index

#### Classes

* [ColorFinder](#classes_colorpiker_colorfindermd)


<a name="modules_cropper_croppermd"></a>


## Module: Cropper

### Index

#### Functions

* [cropImage](#cropimage)
* [getCrop](#getcrop)
* [getLagLngXY](#getlaglngxy)

### Functions

####  cropImage

▸ **cropImage**(`feature`: [GeoJsonFeature](#interfaces_interfaces_geojsonfeaturemd), `img`: string, `latLongXY`: [LagLngXY](#classes_laglngxy_laglngxymd)): *Promise‹object›*

**Parameters:**

Name | Type |
------ | ------ |
`feature` | [GeoJsonFeature](#interfaces_interfaces_geojsonfeaturemd) |
`img` | string |
`latLongXY` | [LagLngXY](#classes_laglngxy_laglngxymd) |

**Returns:** *Promise‹object›*

___

####  getCrop

▸ **getCrop**(`canvas`: any, `offsetX`: any, `offsetY`: any, `width`: any, `height`: any, `callback`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`canvas` | any |
`offsetX` | any |
`offsetY` | any |
`width` | any |
`height` | any |
`callback` | any |

**Returns:** *void*

___

####  getLagLngXY

▸ **getLagLngXY**(`geoJson`: [GeoJson](#interfaces_interfaces_geojsonmd)): *[LagLngXY](#classes_laglngxy_laglngxymd)‹›[]*

**Parameters:**

Name | Type |
------ | ------ |
`geoJson` | [GeoJson](#interfaces_interfaces_geojsonmd) |

**Returns:** *[LagLngXY](#classes_laglngxy_laglngxymd)‹›[]*


<a name="modules_cropper_md"></a>


## External module: "Cropper"

### Index

#### Modules

* [Cropper](#modules_cropper_croppermd)


<a name="modules_findstructure_md"></a>


## External module: "findStructure"

### Index

#### Classes

* [FindStructure](#classes_findstructure_findstructuremd)


<a name="modules_getmap_md"></a>


## External module: "GetMap"

### Index

#### Classes

* [GetMap](#classes_getmap_getmapmd)


<a name="modules_interfaces_md"></a>


## External module: "interfaces"

### Index

#### Interfaces

* [BoxCordsSimple](#interfaces_interfaces_boxcordssimplemd)
* [GeoJson](#interfaces_interfaces_geojsonmd)
* [GeoJsonFeature](#interfaces_interfaces_geojsonfeaturemd)
* [GeoJsonFeatureGeomety](#interfaces_interfaces_geojsonfeaturegeometymd)
* [latLong](#interfaces_interfaces_latlongmd)


<a name="modules_laglngxy_md"></a>


## External module: "LagLngXY"

### Index

#### Classes

* [LagLngXY](#classes_laglngxy_laglngxymd)


<a name="modules_sentinelhuburl_md"></a>


## External module: "SentinelHubURL"

### Index

#### Classes

* [SentinelHubURL](#classes_sentinelhuburl_sentinelhuburlmd)


<a name="modules_sentinelhubwmsservice_md"></a>


## External module: "SentinelHubWmsService"

### Index

#### References

* [WMSParameters](#wmsparameters)

#### Modules

* [SentinelHubWms](#modules_sentinelhubwmsservice_sentinelhubwmsmd)

### References

####  WMSParameters

• **WMSParameters**:


<a name="modules_sentinelhubwmsservice_sentinelhubwmsmd"></a>


## Module: SentinelHubWms

### Index

#### Functions

* [createShapeAsImage](#createshapeasimage)
* [getDangerZone](#getdangerzone)
* [getImage](#getimage)
* [getShapeFromImage](#getshapefromimage)
* [getShapeFromSentinel](#getshapefromsentinel)
* [getShapesFromImage](#getshapesfromimage)
* [getShapesFromSentinel](#getshapesfromsentinel)
* [latLngToXYTool](#latlngtoxytool)

### Functions

####  createShapeAsImage

▸ **createShapeAsImage**(`feature`: [GeoJsonFeature](#interfaces_interfaces_geojsonfeaturemd), `img`: string, `latLongXY`: [LagLngXY](#classes_laglngxy_laglngxymd)): *Promise‹object›*

**Parameters:**

Name | Type |
------ | ------ |
`feature` | [GeoJsonFeature](#interfaces_interfaces_geojsonfeaturemd) |
`img` | string |
`latLongXY` | [LagLngXY](#classes_laglngxy_laglngxymd) |

**Returns:** *Promise‹object›*

___

####  getDangerZone

▸ **getDangerZone**(`feature`: [GeoJsonFeature](#interfaces_interfaces_geojsonfeaturemd), `image`: string | HTMLImageElement): *Promise‹[GeoJson](#interfaces_interfaces_geojsonmd)›*

**Parameters:**

Name | Type |
------ | ------ |
`feature` | [GeoJsonFeature](#interfaces_interfaces_geojsonfeaturemd) |
`image` | string &#124; HTMLImageElement |

**Returns:** *Promise‹[GeoJson](#interfaces_interfaces_geojsonmd)›*

___

####  getImage

▸ **getImage**(`uuid`: string, `bbox`: [number[], number[]], `options`: object): *Promise‹object›*

**Parameters:**

▪ **uuid**: *string*

▪ **bbox**: *[number[], number[]]*

▪ **options**: *object*

Name | Type |
------ | ------ |
`date` | Date |
`layers` | [Sentinel_2](#enums_wmsparameters_wmsparameterssentinel_2md)[] |

**Returns:** *Promise‹object›*

___

####  getShapeFromImage

▸ **getShapeFromImage**(`img`: Blob, `feature`: [GeoJsonFeature](#interfaces_interfaces_geojsonfeaturemd)): *Promise‹object›*

**Parameters:**

Name | Type |
------ | ------ |
`img` | Blob |
`feature` | [GeoJsonFeature](#interfaces_interfaces_geojsonfeaturemd) |

**Returns:** *Promise‹object›*

___

####  getShapeFromSentinel

▸ **getShapeFromSentinel**(`feature`: [GeoJsonFeature](#interfaces_interfaces_geojsonfeaturemd), `uuid`: string, `options`: object): *Promise‹object›*

**Parameters:**

▪ **feature**: *[GeoJsonFeature](#interfaces_interfaces_geojsonfeaturemd)*

▪ **uuid**: *string*

▪ **options**: *object*

Name | Type |
------ | ------ |
`date` | Date |
`layers` | [Sentinel_2](#enums_wmsparameters_wmsparameterssentinel_2md)[] |
`removeRoof` | boolean |

**Returns:** *Promise‹object›*

___

####  getShapesFromImage

▸ **getShapesFromImage**(`img`: Blob, `geoJson`: [GeoJson](#interfaces_interfaces_geojsonmd)): *Promise‹Array‹object››*

**Parameters:**

Name | Type |
------ | ------ |
`img` | Blob |
`geoJson` | [GeoJson](#interfaces_interfaces_geojsonmd) |

**Returns:** *Promise‹Array‹object››*

___

####  getShapesFromSentinel

▸ **getShapesFromSentinel**(`geoJson`: [GeoJson](#interfaces_interfaces_geojsonmd), `uuid`: string, `options`: object): *Promise‹Array‹object››*

**Parameters:**

▪ **geoJson**: *[GeoJson](#interfaces_interfaces_geojsonmd)*

▪ **uuid**: *string*

▪ **options**: *object*

Name | Type |
------ | ------ |
`date` | Date |
`layers` | [Sentinel_2](#enums_wmsparameters_wmsparameterssentinel_2md)[] |

**Returns:** *Promise‹Array‹object››*

___

####  latLngToXYTool

▸ **latLngToXYTool**(`geoJson`: [GeoJson](#interfaces_interfaces_geojsonmd) | [GeoJsonFeature](#interfaces_interfaces_geojsonfeaturemd)): *[LagLngXY](#classes_laglngxy_laglngxymd)‹›[]*

Uses a GeoJSON to an array of objects that can make several transformation to use a GeoJSON features as shapes, just like a GIS system

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`geoJson` | [GeoJson](#interfaces_interfaces_geojsonmd) &#124; [GeoJsonFeature](#interfaces_interfaces_geojsonfeaturemd) | ;  |

**Returns:** *[LagLngXY](#classes_laglngxy_laglngxymd)‹›[]*


<a name="modules_wmsparameters_md"></a>


## External module: "WMSParameters"

### Index

#### Modules

* [WMSParameters](#modules_wmsparameters_wmsparametersmd)


<a name="modules_wmsparameters_wmsparametersmd"></a>


## Module: WMSParameters

### Index

#### Enumerations

* [BgColor](#enums_wmsparameters_wmsparametersbgcolormd)
* [Exceptions](#enums_wmsparameters_wmsparametersexceptionsmd)
* [Format](#enums_wmsparameters_wmsparametersformatmd)
* [Sentinel_2](#enums_wmsparameters_wmsparameterssentinel_2md)
