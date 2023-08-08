---
custom_edit_url: null
id: 32-get_angular_speed_y
title: get_angular_speed_y()
---

##### Description

This function returns the current angular speed in degrees per second around the y-axis ("pitch" axis). <br />

##### Syntax
```get_angular_speed_y()```

##### Parameters

None

##### Returns

**angular speed:** positive or negative integer in degrees per second

##### Example Code
###### Python
Tilt the drone forward and backward while the program runs to see the angular speed change. Then, hold the drone as still as possible and watch angular speed drop.

```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()

for i in range(100):
    print(drone.get_angular_speed_y())
    time.sleep(0.05)
drone.close()
```