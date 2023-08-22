---
custom_edit_url: null
id: 16-sway
title: sway()

---

##### Description

Flies the drone in a swaying motion.


##### Syntax
```sway()```
```sway(speed, seconds, direction)```


##### Parameters
**speed**: optional parameter that is the speed the drone will move. integer from 0 - 100. default value is 30. <br /> 
**seconds**: optional parameter that is the duration in seconds the drone will fly in each "sway" motion. default value is 2 <br /> 
**direction**: optional parameter that determines the direction of the sway. 1 is right, -1 is left. default value is 1. <br /> 


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
# default sway parameters (30, 2, 1)
    drone.sway()
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()
```