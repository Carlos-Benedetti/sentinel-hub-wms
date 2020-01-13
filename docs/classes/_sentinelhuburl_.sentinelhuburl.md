
# Class: SentinelHubURL

## Hierarchy

* **SentinelHubURL**

## Index

### Constructors

* [constructor](_sentinelhuburl_.sentinelhuburl.md#constructor)

### Properties

* [UUID](_sentinelhuburl_.sentinelhuburl.md#uuid)
* [link](_sentinelhuburl_.sentinelhuburl.md#link)
* [parameters](_sentinelhuburl_.sentinelhuburl.md#parameters)
* [preset](_sentinelhuburl_.sentinelhuburl.md#preset)
* [request](_sentinelhuburl_.sentinelhuburl.md#request)
* [timeFrom](_sentinelhuburl_.sentinelhuburl.md#timefrom)
* [timeTo](_sentinelhuburl_.sentinelhuburl.md#timeto)

### Methods

* [addParameter](_sentinelhuburl_.sentinelhuburl.md#addparameter)
* [addUUID](_sentinelhuburl_.sentinelhuburl.md#adduuid)
* [clearTime](_sentinelhuburl_.sentinelhuburl.md#cleartime)
* [setTimeFrom](_sentinelhuburl_.sentinelhuburl.md#settimefrom)
* [setTimeTo](_sentinelhuburl_.sentinelhuburl.md#settimeto)
* [toString](_sentinelhuburl_.sentinelhuburl.md#tostring)

## Constructors

###  constructor

\+ **new SentinelHubURL**(): *[SentinelHubURL](_sentinelhuburl_.sentinelhuburl.md)*

**Returns:** *[SentinelHubURL](_sentinelhuburl_.sentinelhuburl.md)*

## Properties

###  UUID

• **UUID**: *string*

___

###  link

• **link**: *string*

___

###  parameters

• **parameters**: *any[]* = []

___

###  preset

• **preset**: *string* = "https://services.sentinel-hub.com/ogc/wms/"

___

###  request

• **request**: *string* = "REQUEST=GetMap"

___

###  timeFrom

• **timeFrom**: *any* = null

___

###  timeTo

• **timeTo**: *any* = null

## Methods

###  addParameter

▸ **addParameter**(`name`: string, `value`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | any |

**Returns:** *void*

___

###  addUUID

▸ **addUUID**(`uuid`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`uuid` | string |

**Returns:** *void*

___

###  clearTime

▸ **clearTime**(): *void*

**Returns:** *void*

___

###  setTimeFrom

▸ **setTimeFrom**(`date`: Date): *void*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |

**Returns:** *void*

___

###  setTimeTo

▸ **setTimeTo**(`date`: Date): *void*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |

**Returns:** *void*

___

###  toString

▸ **toString**(): *string*

**Returns:** *string*
