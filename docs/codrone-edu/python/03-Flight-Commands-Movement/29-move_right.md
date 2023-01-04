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
drone.move_right(distance, speed=0.5)
drone.land()
drone.close()
```