---
custom_edit_url: null
id: 05-take_off
title: takeoff()
---

##### Description

This function makes the drone takeoff and hover.<br />
The drone will always hover for 1 second in order to stabilize before it executes the next command.<br />

##### Syntax
```takeoff()```

##### Parameters

None

##### Returns

None

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone=Drone()
drone.pair()
try:
    drone.open()
    drone.takeoff()
    drone.hover(10)
    drone.land()

finally:
    drone.emergency_stop()
    drone.close()
```