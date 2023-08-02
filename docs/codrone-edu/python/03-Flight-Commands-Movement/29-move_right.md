---
custom_edit_url: null
id: 29-move_right
title: move_right()
---

##### Description

Moves the drone right for the given distance and unit for that distance.

##### Syntax
```move_right(distance)```
```move_right(distance, unit, speed)```

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
    drone.move_right(distance=50, units="cm", speed=1)
    time.sleep(3) # make sure to add a delay so the drone has enough time to fly
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()
```