---
custom_edit_url: null
id: 16-get_y_accel
title: get_y_accel()
---

##### Description

Getter function that gets the y acceleration of the drone. (y is left and right) <br />
![y position image](topdown_xy.png)

##### Syntax
```get_y_accel()```<br />


##### Parameters

None

##### Returns

The current y acceleration of the drone.

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
print(drone.get_y_accel())
drone.land()
drone.close()
```