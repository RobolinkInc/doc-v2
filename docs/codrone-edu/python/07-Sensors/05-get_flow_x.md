---
custom_edit_url: null
id: 05-get_flow_x
title: get_flow_x()
---

##### Description

This getter function gets the relative position value calculated by the optical flow sensor from the x direction (forward and reverse). <br />
![x position image](topdown_xy.png)

##### Syntax
```get_flow_x()```<br />
```get_flow_x(unit="<cm, in, mm, m>)"```<br />

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
try:
    drone.takeoff()
    drone.set_pitch(50)
    drone.move(1)
    print(drone.get_flow_x())
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()
    
```