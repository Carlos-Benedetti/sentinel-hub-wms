
# Class: LagLngXY

## Hierarchy

* **LagLngXY**

## Index

### Constructors

* [constructor](_laglngxy_.laglngxy.md#constructor)

### Properties

* [radius](_laglngxy_.laglngxy.md#radius)

### Methods

* [getBobxConnors](_laglngxy_.laglngxy.md#getbobxconnors)
* [latlngToGlobalXY](_laglngxy_.laglngxy.md#latlngtoglobalxy)
* [latlngToScreenXY](_laglngxy_.laglngxy.md#latlngtoscreenxy)

### Object literals

* [pMax](_laglngxy_.laglngxy.md#pmax)
* [pMin](_laglngxy_.laglngxy.md#pmin)

## Constructors

###  constructor

\+ **new LagLngXY**(`pMinLat`: any, `pMinLng`: any, `pMaxLat`: any, `pMaxLng`: any): *[LagLngXY](_laglngxy_.laglngxy.md)*

**Parameters:**

Name | Type |
------ | ------ |
`pMinLat` | any |
`pMinLng` | any |
`pMaxLat` | any |
`pMaxLng` | any |

**Returns:** *[LagLngXY](_laglngxy_.laglngxy.md)*

## Properties

###  radius

• **radius**: *number* = 6.371

## Methods

###  getBobxConnors

▸ **getBobxConnors**(): *[number[], number[]]*

**Returns:** *[number[], number[]]*

___

###  latlngToGlobalXY

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

###  latlngToScreenXY

▸ **latlngToScreenXY**(`lat`: any, `lng`: any): *object*

**Parameters:**

Name | Type |
------ | ------ |
`lat` | any |
`lng` | any |

**Returns:** *object*

* **x**: *number* = ((this.pMin.scrX + (this.pMax.scrX - this.pMin.scrX) * pos["perX"]) - this.pMax.scrX) * -1

* **y**: *number* = this.pMin.scrY + (this.pMax.scrY - this.pMin.scrY) * pos["perY"]

## Object literals

###  pMax

### ▪ **pMax**: *object*

###  lat

• **lat**: *null* = null

###  lng

• **lng**: *null* = null

###  perX

• **perX**: *null* = null

###  perY

• **perY**: *null* = null

###  pos

• **pos**: *null* = null

###  scrX

• **scrX**: *number* = 1024

###  scrY

• **scrY**: *number* = 780

___

###  pMin

### ▪ **pMin**: *object*

###  lat

• **lat**: *null* = null

###  lng

• **lng**: *null* = null

###  perX

• **perX**: *null* = null

###  perY

• **perY**: *null* = null

###  pos

• **pos**: *null* = null

###  scrX

• **scrX**: *number* = 0

###  scrY

• **scrY**: *number* = 0
