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
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
drone.flip("front")
drone.land()
drone.close()
```