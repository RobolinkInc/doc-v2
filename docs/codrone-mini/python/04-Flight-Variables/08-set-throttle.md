---
custom_edit_url: null
title: set_throttle()
taxonomy:
    category:
        - flight-variables
    tag:
        - CDM-library
menu: set_throttle()
---

##### Description

This is a setter function that allows you to set the **throttle** variable. Once you set throttle, you have to use ```move()``` to actually execute the movement. The throttle variable will remain what you last set it until the end of the flight sequence, so you will have to set it back to 0 if you don't want the drone to throttle again.

##### Syntax
Python: ```set_throttle(power)```

##### Parameters

**power**: An int from -100 to 100 that sets the throttle variable.  The number represents the direction and power of the output for that flight motion variable. Negative throttle descends, positive throttle ascends.

##### Returns

None

##### Example Code
###### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()
drone.takeoff()

# Drone goes up for 1 second with 50% power
drone.set_throttle(50)
drone.move(1)               #use move() to execute the movement for 1 second
drone.land()
drone.close()
```