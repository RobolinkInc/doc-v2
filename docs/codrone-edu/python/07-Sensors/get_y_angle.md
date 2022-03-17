---
custom_edit_url: null
title: get_y_angle()
taxonomy:
    tag: CDE-library
    category: sensors
menu: get_y_angle()
---

##### Description

This is a getter function which returns the current Y angle from the gyroscope in the drone. This angle is on the "pitch" axis <br />

##### Syntax
```get_y_angle()```


##### Parameters

None

##### Returns

The current angle in regards to the Y direction.

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

print(drone.get_y_angle())

drone.close()
```