
# Class: FindStructure

## Hierarchy

* **FindStructure**

## Index

### Constructors

* [constructor](_findstructure_.findstructure.md#constructor)

### Properties

* [dateFromShape](_findstructure_.findstructure.md#datefromshape)
* [shape](_findstructure_.findstructure.md#shape)
* [uuid](_findstructure_.findstructure.md#uuid)

### Methods

* [getInvalidPixels](_findstructure_.findstructure.md#getinvalidpixels)
* [getSixMonthsBebore](_findstructure_.findstructure.md#getsixmonthsbebore)
* [getTowYearAgo](_findstructure_.findstructure.md#gettowyearago)
* [getYearAfter](_findstructure_.findstructure.md#getyearafter)
* [getYearBebore](_findstructure_.findstructure.md#getyearbebore)
* [getmonthAfter](_findstructure_.findstructure.md#getmonthafter)

## Constructors

###  constructor

\+ **new FindStructure**(`uuid`: string, `shape`: [GeoJsonFeature](../interfaces/_interfaces_.geojsonfeature.md), `dateFromShape`: Date): *[FindStructure](_findstructure_.findstructure.md)*

**Parameters:**

Name | Type |
------ | ------ |
`uuid` | string |
`shape` | [GeoJsonFeature](../interfaces/_interfaces_.geojsonfeature.md) |
`dateFromShape` | Date |

**Returns:** *[FindStructure](_findstructure_.findstructure.md)*

## Properties

###  dateFromShape

• **dateFromShape**: *Date*

___

###  shape

• **shape**: *[GeoJsonFeature](../interfaces/_interfaces_.geojsonfeature.md)*

___

###  uuid

• **uuid**: *string*

## Methods

###  getInvalidPixels

▸ **getInvalidPixels**(): *Promise‹object›*

**Returns:** *Promise‹object›*

___

###  getSixMonthsBebore

▸ **getSixMonthsBebore**(): *Promise‹[GeoJson](../interfaces/_interfaces_.geojson.md)›*

**Returns:** *Promise‹[GeoJson](../interfaces/_interfaces_.geojson.md)›*

___

###  getTowYearAgo

▸ **getTowYearAgo**(): *Promise‹[GeoJson](../interfaces/_interfaces_.geojson.md)›*

**Returns:** *Promise‹[GeoJson](../interfaces/_interfaces_.geojson.md)›*

___

###  getYearAfter

▸ **getYearAfter**(): *Promise‹[GeoJson](../interfaces/_interfaces_.geojson.md)›*

**Returns:** *Promise‹[GeoJson](../interfaces/_interfaces_.geojson.md)›*

___

###  getYearBebore

▸ **getYearBebore**(): *Promise‹[GeoJson](../interfaces/_interfaces_.geojson.md)›*

**Returns:** *Promise‹[GeoJson](../interfaces/_interfaces_.geojson.md)›*

___

###  getmonthAfter

▸ **getmonthAfter**(): *Promise‹[GeoJson](../interfaces/_interfaces_.geojson.md)›*

**Returns:** *Promise‹[GeoJson](../interfaces/_interfaces_.geojson.md)›*
