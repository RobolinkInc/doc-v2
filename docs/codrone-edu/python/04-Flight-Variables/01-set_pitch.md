---
custom_edit_url: null
id: 12-set_pitch
title: set_pitch()
---

##### Description

This is a setter function that allows you to set the pitch variable. Once you set pitch, you have to use move() to actually execute the movement. 
The pitch variable will remain what you last set it until the end of the flight sequence, so you will have to set it back to 0 if you don't want the drone to pitch again.

##### Syntax
```set_pitch(power)```

##### Parameters

**power**: An int from -100 to 100 that sets the pitch variable. The number represents the direction and power of the output for that flight motion variable. 
Negative pitch is backwards, positive pitch is forwards.

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
# Drone goes forward for 1 second with 50 power
drone.set_pitch(50)
drone.move(1) # move command executes the movement for 1 second
drone.land()
drone.close()
```