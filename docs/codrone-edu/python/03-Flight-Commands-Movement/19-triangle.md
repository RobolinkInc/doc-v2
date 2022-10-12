---
custom_edit_url: null
id: 19-triangle
title: triangle()

---

##### Description

Flies the drone in the shape of a triangle.


##### Syntax
```triangle()```
```triangle(speed, seconds, direction)```


##### Parameters
**speed**: optional parameter that is the speed the drone will move. integer from 0 - 100. default value is 60. <br /> 
**seconds**: optional parameter that is the duration in seconds the drone flies for each side of the triangle. default value is 1. <br /> 
**direction**: optional parameter that determines the direction of the triangle. 1 is right, -1 is left. default value is 1. <br /> 


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
# default triangle parameters (60, 1, 1)
drone.triangle()
drone.land()
drone.close()
```