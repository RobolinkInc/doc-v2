---
custom_edit_url: null
id: 08-get_pos_x
title: get_pos_x()
---

##### Description

Getter function that gets the x position of the drone. (x is forwards and backwards) <br />
![xy position image](topdown_xy.png)

##### Syntax
```get_pos_x()```<br />
```get_pos_x(unit="<cm, in, mm, m>)```<br />


##### Parameters
**unit**: The unit of measurement that is chosen for the position distance. Available units are "m" (meter), "cm" (centimeter), "mm" (millimeter), or "in" (inch). If a parameter is not specified cm is chosen by default.


##### Returns

The current x position of the drone.

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    print(drone.get_pos_x())
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()
```