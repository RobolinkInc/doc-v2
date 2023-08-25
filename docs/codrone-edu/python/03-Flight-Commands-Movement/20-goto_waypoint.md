---
custom_edit_url: null
id: 20-goto_waypoint
title: goto_waypoint()
---

##### Description



##### Syntax
```goto_waypoint(waypoint, velocity)```


##### Parameters

**waypoint**: The waypoint to go to selected from the drone.waypoint_data list <br /> 
**velocity**: The velocity in m/s. 0.5 ~ 2.0 m/s should be used <br /> 

##### Returns

None

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()

try:
    drone.takeoff()
    drone.hover(1) # hovering before setting waypoint
    drone.set_waypoint()
    drone.set_pitch(30)
    drone.move(1) # moving forward!
    drone.hover(1) # hovering before setting waypoint
    drone.set_waypoint()

    drone.goto_waypoint(drone.waypoint_data[0], 0.5) # go to waypoint 1 (the one set after takeoff)
    drone.goto_waypoint(drone.waypoint_data[1], 0.5) # go to waypoint 2 (the one set after flying forward)
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()

```