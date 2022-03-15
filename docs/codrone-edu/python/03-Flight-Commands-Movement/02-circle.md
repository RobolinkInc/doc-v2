---
custom_edit_url: null
id: 02-circle
title: circle()

---

##### Description

Flies the drone in the shape of a circle.


##### Syntax
```circle()```
```circle(speed, direction)```


##### Parameters
**speed**: optional parameter that is the speed the drone will move. integer from 0 - 100. default value is 75.
**direction**: optional parameter that determines the direction of the circle. 1 is right, -1 is left. default value is 1.


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
# default circle parameters (75, 1)
drone.circle()
drone.land()
drone.close()
```