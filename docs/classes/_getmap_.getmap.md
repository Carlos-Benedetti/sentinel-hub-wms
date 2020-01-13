
# Class: GetMap

## Hierarchy

* **GetMap**

## Index

### Constructors

* [constructor](_getmap_.getmap.md#constructor)

### Methods

* [measure](_getmap_.getmap.md#measure)
* [request](_getmap_.getmap.md#request)

## Constructors

###  constructor

\+ **new GetMap**(`UUID`: string, `params`: object): *[GetMap](_getmap_.getmap.md)*

**Parameters:**

▪ **UUID**: *string*

▪ **params**: *object*

Name | Type |
------ | ------ |
`BBOX` | [number[], number[]] |
`BGCOLOR?` | [BgColor](../enums/_wmsparameters_.wmsparameters.bgcolor.md) |
`CRS?` | string |
`DATE` | Date |
`EXCEPTIONS?` | [Exceptions](../enums/_wmsparameters_.wmsparameters.exceptions.md) |
`FORMAT` | [Format](../enums/_wmsparameters_.wmsparameters.format.md) |
`HEIGHT?` | string |
`LAYERS?` | [Sentinel_2](../enums/_wmsparameters_.wmsparameters.sentinel_2.md)[] |
`RESX?` | string |
`RESY?` | string |
`SRS?` | string |
`TRANSPARENT?` | boolean |
`WIDTH?` | string |

**Returns:** *[GetMap](_getmap_.getmap.md)*

## Methods

###  measure

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

###  request

▸ **request**(): *Promise‹object›*

**Returns:** *Promise‹object›*
