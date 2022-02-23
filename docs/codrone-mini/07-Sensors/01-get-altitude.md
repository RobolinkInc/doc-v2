---
custom_edit_url: null
title: get_altitude()
taxonomy:
    tag: CDM-library
    category: sensors
menu: get_altitude()
---

##### Description

This is a getter function which returns the current **altitude** of the drone. <br />
It uses air pressure from the barometer sensor to estimate the altitude. This function returns the absolute altitude between the drone's current position and "sea level", not the floor. <br />

##### Syntax
```get_height()```

##### Parameters

None

##### Returns

The current height calculated by the difference between the current and the floor altitude(cm).

##### Example Code
###### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()

altitude = drone.get_altitude()
print(altitude)
drone.close()
```
