---
custom_edit_url: null
id: 15-get_x_angle
title: get_x_angle()
---

##### Description

This is a getter function which returns the current X angle from the gyroscope in the drone. This angle is on the "roll" axis <br />

##### Syntax
```get_x_angle()```


##### Parameters

None

##### Returns

The current angle in regards to the X direction.

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

print(drone.get_x_angle())

drone.close()
```