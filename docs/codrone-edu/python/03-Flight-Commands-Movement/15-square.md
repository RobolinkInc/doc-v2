---
custom_edit_url: null
id: 15-square
title: square()

---

##### Description

Flies the drone in the shape of a square.


##### Syntax
```square()```
```square(speed, seconds, direction)```


##### Parameters
**speed**: optional parameter that is the speed the drone will move. integer from 0 - 100. default value is 60. <br /> 
**seconds**: optional parameter that is the duration in seconds the drone flies for each side of the square. default value is 1. <br /> 
**direction**: optional parameter that determines the direction of the square. 1 is right, -1 is left. default value is 1. <br /> 


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
    # default square parameters (60, 1, 1) )    (speed, secondsInEachDirection,direction(1=right,-1=left))
    drone.square(60,1,-1)
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()
```