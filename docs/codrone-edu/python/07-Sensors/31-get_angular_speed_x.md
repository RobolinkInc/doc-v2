---
custom_edit_url: null
id: 31-get_angular_speed_x
title: get_angular_speed_x()
---

##### Description

This function returns the current angular speed in degrees per second around the x-axis ("roll" axis). <br />

##### Syntax
```get_angular_speed_x()```

##### Parameters

None

##### Returns

**angular speed:** positive or negative integer in degrees per second

##### Example Code
###### Python
Tilt the drone left and right while the program runs to see the angular speed change. Then, hold the drone as still as possible and watch angular speed drop.

```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()

for i in range(100):
    print(drone.get_angular_speed_x())
    time.sleep(0.05)
drone.close()
```