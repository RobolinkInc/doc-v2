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

**roll**: An int from -100 to 100 that sets the roll variable. negative is left, positive is right
**pitch**: An int from -100 to 100 that sets the pitch variable. negative is backwards, positive is forwards
**yaw**: An int from -100 to 100 that sets the yaw variable. negative is left, positive is right
**throttle**: An int from -100 to 100 that sets the throttle variable. negative is down, positive is up
**duration**: A duration in milliseconds

##### Returns

#TODO

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
drone.sendControl(0, 30, 0, 0) # setting pitch to 30
time.sleep(1) # wait for 1 second while the drone is moving forward
drone.land()
drone.close()
```