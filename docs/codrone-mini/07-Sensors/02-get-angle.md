---
title: get_angle()
taxonomy:
    category:
        - sensors
    tag:
        - CDM-library
menu: get_angle()
---

##### Description

This function gets the **roll, pitch, and yaw angles** from the gyrometer sensor.

##### Syntax
```get_angle()```

##### Parameters

None

##### Returns

It returns an Angle class in Python.

##### Example Code
###### Python
```python
#Python code
import CoDrone_mini


drone = CoDrone_mini.CoDrone()
drone.pair()

# print the angle values
angle  = drone.get_angle()
print(angle)
print(angle.ROLL, angle.PITCH, angle.YAW)
```
