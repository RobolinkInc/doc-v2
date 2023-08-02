---
custom_edit_url: null
id: 08-print_move_values
title: print_move_values()
---

##### Description

Prints the current values of roll, pitch, yaw, and throttle flight variables.

##### Syntax
```print_move_values()```

##### Parameters

None

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
    drone.set_pitch(50)
    drone.set_roll(50)

    drone.print_move_values() # will print pitch and roll at 50 and throttle and yaw at 0
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()
```