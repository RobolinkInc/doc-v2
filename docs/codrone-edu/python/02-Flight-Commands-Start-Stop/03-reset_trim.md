---
custom_edit_url: null
id: 03-reset_trim
title: reset_trim()
---

##### Description

You can reset the roll and pitch trim of the drone in case your drone is drifting. This function will reset the roll and pitch trim values back to zero.

##### Syntax

```reset_trim()```


##### Parameters
None

##### Returns

None

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone=Drone()
drone.pair()
drone.open()

try:
    drone.set_trim(5, 0)
    print(drone.get_trim())
    drone.takeoff()
    drone.hover(3)


finally:
    drone.land()
    drone.emergency_stop()
    drone.reset_trim()
    print(drone.get_trim())
    drone.close()

```