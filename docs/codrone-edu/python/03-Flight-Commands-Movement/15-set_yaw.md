---
custom_edit_url: null
id: 15-set_yaw
title: set_yaw()
---

##### Description

This is a setter function that allows you to set the yaw variable. Once you set yaw, you have to use move() to actually execute the movement. 
The yaw variable will remain what you last set it until the end of the flight sequence, so you will have to set it back to 0 if you don't want the drone to yaw again.

##### Syntax
```set_yaw(power)```

##### Parameters

**power**: An int from -100 to 100 that sets the yaw variable. The number represents the direction and power of the output for that flight motion variable. 
Negative yaw is left, positive yaw is right.

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
# Drone turns right for 1 second with 50 power
drone.set_yaw(50)
drone.move(1) # move command executes the movement for 1 second
drone.land()
drone.close()
```