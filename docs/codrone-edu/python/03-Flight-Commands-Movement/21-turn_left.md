---
custom_edit_url: null
id: 21-turn_left
title: turn_left()

---

##### Description

Turns the drone left using the built in gyroscope. The default degree is 90


##### Syntax
```turn_left()```
```turn_left(degree)```
```turn_left(timeout)```
```turn_left(degree, timeout)```

##### Parameters
**degree**: optional parameter that turns the drone in the given degree. default value is 90. <br /> 
**timeout**: optional parameter that is duration in seconds that drone will try to turn. default value is 3 <br /> 

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
    drone.turn_left() # make a 90 degree left turn.
    drone.hover(1) # wait for 1 second in the air
    drone.turn_left(30, 3) # make a 30 degree left turn with a 3 second timeout.
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()
```