---
custom_edit_url: null
id: 09-reset_move
title: reset_move()
---

##### Description

The reset_move command will reset the values of roll, pitch, yaw, and throttle to 0.

##### Syntax
```reset_move()```
```reset_move(attempts)```

##### Parameters

**attempts**: Optional parameter that sends the reset_move command multiple times.

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
    drone.move(1)
    drone.reset_move() # reset the pitch and roll to 0.
    drone.move(1)
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()
```