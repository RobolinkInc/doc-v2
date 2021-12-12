---
title: set_yaw()
taxonomy:
    category:
        - flight-variables
    tag:
        - CDM-library
menu: set_yaw()
---

##### Description

This is a setter function that allows you to set the **yaw** variable. Once you set yaw, you have to use ```move()``` to actually execute the movement. The yaw variable will remain what you last set it until the end of the flight sequence, so you will have to set it back to 0 if you don't want the drone to yaw again.

##### Syntax
Python: ```set_yaw(power)```

##### Parameters

**power**: An int from -100 to 100 that sets the yaw variable.  The number represents the direction and power of the output for that flight motion variable. Negative yaw turns left, positive yaw turns right.

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
	
# Drone turns right for 1 second with 50% power
drone.set_yaw(50)
drone.move(1)			#use move() to execute the movement for 1 second
drone.land()
```