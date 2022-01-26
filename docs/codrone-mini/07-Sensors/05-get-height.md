---
custom_edit_url: null
title: get_height()
taxonomy:
    tag: CDM-library
    category: sensors
menu: get_height()
---

##### Description

This is a getter function which returns the current **height** of the drone. <br />
It checks sea level from the barometer sensor first and then the altitude from the floor right after it is paired. This function returns the distance between the drone's current position and the floor or any surface below from where it took off from. <br />

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

drone.takeoff()
drone.hover(3)
height = drone.get_height()
print(height)
drone.land()
```
