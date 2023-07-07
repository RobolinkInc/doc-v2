---
custom_edit_url: null
id: 04-flip
title: flip()

---

##### Description

This functions makes the drone flip backward, forward, right, or left. Make sure your battery percentage is over 50% for the flip to execute.


##### Syntax
```flip()```
```flip(direction)```


##### Parameters
**direction**: optional parameter that is the direction the drone will flip. default is "back"


##### Returns

None

##### Example Code

Add a hover or delay after the flip if you need to stabilize before your next command. The drone takes 3-4 seconds after a flip before it can do another flight command.

###### Python
```python
#Python code
import time
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.takeoff()

drone.hover(3)
drone.flip("back")  # send flip command
time.sleep(4)  # wait for flip to complete

drone.set_pitch(30) # move forward for 1 second
drone.move(1)

drone.set_pitch(-30) # move backward for 1 second
drone.move(1)

drone.land()

drone.close()
```