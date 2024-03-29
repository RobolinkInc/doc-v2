---
custom_edit_url: null
id: 07-get_front_range
title: get_front_range()
---

##### Description

This is a getter function which returns the current **Range** from the front range sensor. The default unit of measurement is centimeters. <br />
This function uses the front range sensor to measure distance from the drone to the surface in front of the drone. <br />


##### Syntax
```get_front_range()```<br />
```get_front_range(unit="<cm, in, mm, m>")```<br />

##### Parameters
**unit**: A string for the unit of measurement that is chosen for the range distance. Available units are "m" (meter), "cm" (centimeter), "mm" (millimeter), or "in" (inch). If a parameter is not specified "cm" is chosen by default.


##### Returns

The current range calculated by the front range sensor (cm by default).<br />
-10 or 0 when the sensor returns an error value.<br />
999 when the detected object is out of range (1.5 meters) or the sensor timed out.

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