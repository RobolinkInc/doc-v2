---
custom_edit_url: null
id: 22-set_waypoint
title: set_waypoint()
---

##### Description

set_waypoint is a function that will store the drones current position data to create a waypoint.
The saved waypoint will be stored into the drone.waypoint_data list in the order that they were set.

##### Syntax
```set_waypoint()```


##### Parameters

None

##### Returns

The current position data of the drone.

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()
drone.open()

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