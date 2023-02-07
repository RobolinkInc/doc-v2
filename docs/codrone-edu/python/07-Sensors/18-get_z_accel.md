---
custom_edit_url: null
id: 18-get_z_accel
title: get_z_accel()
---

##### Description

Getter function that gets the z acceleration of the drone. (z is up and down)<br />
![z position image](xyz.jpg)

##### Syntax
```get_z_accel()```<br />


##### Parameters

None

##### Returns

The current z acceleration of the drone.

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
print(drone.get_z_accel())
drone.land()
drone.close()
```