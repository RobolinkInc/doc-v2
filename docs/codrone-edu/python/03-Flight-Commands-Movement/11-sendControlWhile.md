---
custom_edit_url: null
id: 11-sendControlWhile
title: sendControlWhile()
---

##### Description

Send roll, pitch, yaw, and throttle values to the drone continously for the given duration in milliseconds

##### Syntax
```sendControlWhile(roll, pitch, yaw, throttle, duration)```

##### Parameters

**roll**: An int from -100 to 100 that sets the roll variable. negative is left, positive is right <br />
**pitch**: An int from -100 to 100 that sets the pitch variable. negative is backwards, positive is forwards <br />
**yaw**: An int from -100 to 100 that sets the yaw variable. negative is left, positive is right <br />
**throttle**: An int from -100 to 100 that sets the throttle variable. negative is down, positive is up <br />
**duration**: A duration in milliseconds <br />

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
drone.sendControlWhile(0, 30, 0, 0,1000)  # set pitch to 30 and move for 1000 ms (1 second)
drone.land()
drone.close()
```