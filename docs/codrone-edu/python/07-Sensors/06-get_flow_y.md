---
custom_edit_url: null
id: 06-get_flow_y
title: get_flow_y()
---

##### Description

This getter function gets the relative position value calculated by the optical flow sensor from the y direction (left and right). <br />

##### Syntax
```get_flow_y()```<br />
```get_flow_y(unit="<cm, in, mm, m>)"```<br />

##### Parameters
**unit**: The unit of measurement that is chosen for the distance. Available units are "m" (meter), "cm" (centimeter), "mm" (millimeter), or "in" (inch). If a parameter is not specified "cm" is chosen by default.


##### Returns

The relative position value calculated by the optical flow sensor from the x direction. (cm default).

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
drone.set_roll(50)
drone.move(1)
print(drone.get_flow_y())
drone.land()
drone.close()

```