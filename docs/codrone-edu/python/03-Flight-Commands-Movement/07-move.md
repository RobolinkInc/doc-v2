---
custom_edit_url: null
id: 07-move
title: move()
---

##### Description

The move command will move the drone based on the set flight variables (set_pitch, set_roll, etc). If given a parameter the move command will execute the movement for the given amount of seconds.
If given no parameter then the drone will execute the move command indefinitley. You must takeoff() first to use a move() function.

##### Syntax
```move(duration)```

##### Parameters

**duration**: Duration of the movement

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
    # Drone goes up for 1 second with 50 power
    drone.set_pitch(50)
    drone.move(1) # move command executes the movement for 1 second
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()
```