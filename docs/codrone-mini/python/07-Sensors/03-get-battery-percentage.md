---
custom_edit_url: null
title: get_battery_percentage()
taxonomy:
    tag: CDM-library
    category: sensors
menu: get_battery_percentage()
---

##### Description

This function gets the battery percentage of the drone, returning a value from 0 to 100.

##### Syntax
```get_battery_percentage()```

##### Parameters

None

##### Returns

The battery’s percentage as an integer from 0 - 100.

##### Example Code
###### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()

battery = drone.get_battery_percentage()
print(battery)
drone.close()
```
