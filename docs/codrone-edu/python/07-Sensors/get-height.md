---
custom_edit_url: null
title: get_height()
taxonomy:
    tag: CDE-library
    category: sensors
menu: get_height()
---

##### Description

This is a getter function which returns the current **height** of the drone. The default unit of measurement is centimeters. <br />
This function uses the bottom range sensor to measure distance from the drone to the surface below the drone. <br />

##### Syntax
```get_height()```<br />
```get_height(unit="<cm, in, mm, m>)"```<br />

##### Parameters
**unit**: The unit of measurement that is chosen for the height distance. Available units are "m" (meter), "cm" (centimeter), "mm" (millimeter), or "in" (inch). If a parameter is not specified cm is chosen by default.


##### Returns

The current height calculated by the bottom range sensor (cm default).

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.takeoff()
drone.hover(3)
height = drone.get_height()
print(height)
drone.land()
drone.close()
```