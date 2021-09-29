---
id: flip
title: flip()
---

# flip()

##### Description

This function makes the drone do a flip in one of four directions: **forward**, **backward**, **left**, or **right**. It's recommended that you wait a few seconds in between successive flips, otherwise the sequence may not appear as expected.

##### Syntax
Python: ```flip(direction)```

##### Parameters

**direction**: Direction.FORWARD, Direction.BACKWARD, Direction.LEFT, Direction.RIGHT

##### Returns

None

##### Example Code
###### Python
```python
#Python code
import CoDrone_mini
import time
from CoDrone_mini import Direction

drone = CoDrone_mini.CoDrone()
drone.pair()

drone.takeoff()
drone.flip(Direction.FORWARD)	
time.sleep(3) # recommended wait time between flips
drone.flip(Direction.LEFT)	
drone.land()
```