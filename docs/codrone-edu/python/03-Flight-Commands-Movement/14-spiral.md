---
custom_edit_url: null
id: 14-spiral
title: spiral()

---

##### Description

Flies the drone in the shape of a downward spiral.


##### Syntax
```spiral()```
```spiral(speed, seconds, direction)```


##### Parameters
**speed**: optional parameter that is the speed the drone will move. integer from 0 - 100. default value is 50. <br /> 
**seconds**: optional parameter that is the duration in seconds the drone flies in a downward spiral. default value is 5. <br /> 
**direction**: optional parameter that determines the direction of the spiral. 1 is right, -1 is left. default value is 1. <br />


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
    drone.set_throttle(50)
    drone.move(3)
    # default spiral parameters (50, 5, 1)
    drone.spiral()

finally:
    drone.land()
    drone.emergency_stop()
    drone.close()
```