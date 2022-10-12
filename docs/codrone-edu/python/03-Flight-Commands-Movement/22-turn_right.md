---
custom_edit_url: null
id: 22-turn_right
title: turn_right()

---

##### Description

Turns the drone right using the built in gyroscope. The default degree is 90


##### Syntax
```turn_right()```
```turn_right(degree)```
```turn_right(timeout)```
```turn_right(degree, timeout)```

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
drone.takeoff()
drone.turn_right() # make a 90 degree right turn.
drone.hover(1) # wait for 1 second in the air
drone.turn_right(30, 3) # make a 30 degree right turn with a 3 second timeout.
drone.land()
drone.close()
```