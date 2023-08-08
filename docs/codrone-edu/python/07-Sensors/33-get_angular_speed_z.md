---
custom_edit_url: null
id: 33-get_angular_speed_z
title: get_angular_speed_z()
---

##### Description

This function returns the current angular speed in degrees per second around the z-axis ("yaw" axis). <br />

##### Syntax
```get_angular_speed_z()```

##### Parameters

None

##### Returns

**angular speed:** positive or negative integer in degrees per second

##### Example Code
###### Python
Turn the drone left and right on a flat surface while the program runs to see the angular speed change. Then, hold the drone as still as possible and watch angular speed drop.

```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()

for i in range(100):
    print(drone.get_angular_speed_z())
    time.sleep(0.05)
drone.close()
```