---
custom_edit_url: null
id: 19-get_z_angle
title: get_z_angle()
---

##### Description

This is a getter function which returns the current Z angle from the drone. This is angle is the "yaw" direction <br />

##### Syntax
```get_z_angle()```


##### Parameters

None

##### Returns

The current angle in regards to the Z direction.

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

print(drone.get_z_angle())

drone.close()
```