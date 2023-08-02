---
custom_edit_url: null
id: 05-hover
title: hover()
---

##### Description

This function makes the drone hover for a given amount of time. If given no parameters, it will hover indefinitely until given a another command.


##### Syntax
```hover(duration)```

##### Parameters

**duration**: Duration of the hovering in seconds

##### Returns

None

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    drone.hover(3)
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()
```