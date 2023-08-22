---
custom_edit_url: null
id: 11-set_roll
title: set_roll()
---

##### Description

This is a setter function that allows you to set the roll variable. Once you set roll, you have to use move() to actually execute the movement. 
The roll variable will remain what you last set it until the end of the flight sequence, so you will have to set it back to 0 if you don't want the drone to roll again.

##### Syntax
```set_roll(power)```

##### Parameters

**power**: An int from -100 to 100 that sets the roll variable. The number represents the direction and power of the output for that flight motion variable. 
Negative roll is left, positive roll is right.

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
    # Drone goes right for 1 second with 50 power
    drone.set_roll(50)
    drone.move(1) # move command executes the movement for 1 second
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()
```