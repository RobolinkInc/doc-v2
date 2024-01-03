---
custom_edit_url: null
id: 20-turn_degree
title: turn_degree()

---

##### Description

Turns right or left with absolute reference frame to drone's initial heading. Positive degrees turn to right and negative degrees turn to the left.


##### Syntax
```turn_degree(degree, timeout, p_value)```

##### Parameters
**degree**: integer from -180->180 degrees <br /> 
**timeout**: optional parameter that is duration in seconds that drone will try to turn. default value is 3 <br /> 
**p_value**: optional parameter that is the gain of the proportional controller, if this increased CDE will turn quicker, the smaller the slower. default value is 10 <br /> 

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
drone.turn_degree(90) # drone will turn left 90 degrees
drone.land()
drone.close()
```