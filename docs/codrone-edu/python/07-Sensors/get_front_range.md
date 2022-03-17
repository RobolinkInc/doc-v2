---
custom_edit_url: null
title: get_front_range()
taxonomy:
    tag: CDE-library
    category: sensors
menu: get_front_range()
---

##### Description

This is a getter function which returns the current **Range** from the front range sensor. The default unit of measurement is centimeters. <br />
This function uses the front range sensor to measure distance from the drone to the surface in front of the drone. <br />

##### Syntax
```get_front_range()```<br />
```get_front_range(unit="<cm, in, mm, m>)"```<br />

##### Parameters
**unit**: The unit of measurement that is chosen for the range distance. Available units are "m" (meter), "cm" (centimeter), "mm" (millimeter), or "in" (inch). If a parameter is not specified "cm" is chosen by default.


##### Returns

The current range calculated by the front range sensor (cm default).

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.takeoff()
drone.hover(3)
distance = drone.get_front_range()
print(distance)
drone.land()
drone.close()
```