---
custom_edit_url: null
id: 26-move_left
title: move_left()
---

##### Description

Moves the drone left for the given distance and unit for that distance.

##### Syntax
```move_left(distance)```
```move_left(distance, unit, speed)```

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
drone.takeoff()
drone.move_left(distance=50, units="cm", speed=1)
time.sleep(3) # make sure to add a delay so the drone has enough time to fly
drone.land()
drone.close()
```