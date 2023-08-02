---
custom_edit_url: null
id: 27-move_backward
title: move_backward()
---

##### Description

Moves the drone backward for the given distance and unit for that distance.

##### Syntax
```move_backward(distance)```
```move_backward(distance, unit, speed)```

##### Parameters

**distance**: the numerical value of the value to move <br /> 
**unit**: The unit of measurement for the distance flown. Available units are "cm" (centimeter), "ft" (feet), "in" (inches), "m" (meter). <br /> 
**speed**: default 1 meter per second. Max is 2 meters/second <br /> 

##### Returns

None

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    drone.move_backward(distance=50, units="cm", speed=1)
    time.sleep(3) # make sure to add a delay so the drone has enough time to fly
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()
```