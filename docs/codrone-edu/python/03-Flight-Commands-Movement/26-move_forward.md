---
custom_edit_url: null
id: 25-move_forward
title: move_forward()
---

##### Description

Moves the drone forward for the given distance and unit for that distance.

##### Syntax
```move_forward(distance)```
```move_forward(distance, unit, speed)```

##### Parameters

**distance**: the numerical value of the value to move <br /> 
**unit**: can either be in inches (in), centimeters (cm), meters (m), feet (ft). Default value is centimeters <br /> 
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