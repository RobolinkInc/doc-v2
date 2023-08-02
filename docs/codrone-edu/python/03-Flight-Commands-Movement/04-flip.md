---
custom_edit_url: null
id: 04-flip
title: flip()

---

##### Description

Calls sendFlip() command to flip the drone in desired direction.
Options are: "front", "back", "left", and "right"


##### Syntax
```flip()```
```flip(direction)```


##### Parameters
**direction**: optional parameter that is the direction the drone will flip. default is "back"


##### Returns

None

##### Example Code
###### Python
```python
#Python code
import time
from codrone_edu.drone import *

drone = Drone()
drone.pair()

try:
    drone.takeoff()

    drone.hover(3)
    drone.flip("front")  # send flip command
    time.sleep(4)  # wait for flip to complete


finally:
    drone.land()
    drone.emergency_stop()
    drone.close()
```