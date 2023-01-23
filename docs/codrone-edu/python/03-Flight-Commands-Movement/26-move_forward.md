---
custom_edit_url: null
id: 26-move_forward
title: move_forward()
---

##### Description

Moves the drone forward for the given distance and unit for that distance.

##### Syntax
```move_forward(distance)```
```move_forward(distance, unit, speed)```

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

distance = 50

drone = Drone()
drone.pair()
drone.takeoff()
drone.move_forward(distance, speed=0.5)
drone.land()
drone.close()
```