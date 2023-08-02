---
custom_edit_url: null
id: 02-get_bottom_range
title: get_bottom_range()
---

##### Description

This is a getter function which returns the current bottom range of the drone. The default unit of measurement is centimeters. <br />
This function uses the bottom range sensor to measure distance from the drone to the surface below the drone. <br />

##### Syntax
```get_bottom_range()```<br />
```get_bottom_range(unit="<cm, in, mm, m>)"```<br />

##### Parameters
**unit**: The unit of measurement that is chosen for the height distance. Available units are "m" (meter), "cm" (centimeter), "mm" (millimeter), or "in" (inch). If a parameter is not specified cm is chosen by default.


##### Returns

The current bottom range calculated by the bottom range sensor (cm default).

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    drone.hover(3)
    bottom_range = drone.get_bottom_range()
    print(bottom_range)
finally:
    drone.land()
    drone.close()
```