---
custom_edit_url: null
id: 17-square
title: square()

---

##### Description

Flies the drone in the shape of a square.


##### Syntax
```square()```
```square(speed, seconds, direction)```


##### Parameters
**speed**: optional parameter that is the speed the drone will move. integer from 0 - 100. default value is 60.
**seconds**: optional parameter that is the duration in seconds the drone flies for each side of the square. default value is 1.
**direction**: optional parameter that determines the direction of the square. 1 is right, -1 is left. default value is 1.


##### Returns

None

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
# default square parameters (60, 1, 1)
drone.square()
drone.land()
drone.close()
```