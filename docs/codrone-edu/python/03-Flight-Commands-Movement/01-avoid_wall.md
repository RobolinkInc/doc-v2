---
custom_edit_url: null
id: 01-avoid_wall
title: avoid_wall()

---

##### Description

A looped method that makes the drone fly forward until it reaches a desired distance based on the front range sensor. The range of front sensor is from 0cm-100cm


##### Syntax
```avoid_wall()```
```avoid_wall(timeout)```
```avoid_wall(distance)```
```avoid_wall(timeout, distance)```

##### Parameters
**timeout**: timeout is an optional paramaeter that is the duration in seconds that the function will run. the default value is 2 <br />
**distance**: distance is an optional parameter that is the distance in centimeters the drone will stop at in front of an object. the default value is 70

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
    drone.hover(1)
    # fly forward until a wall is found 600 mm away. run this loop for 10 seconds.
    drone.avoid_wall(10, 600)
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()
```