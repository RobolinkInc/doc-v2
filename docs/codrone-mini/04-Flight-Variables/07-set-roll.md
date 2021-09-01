---
title: set_roll()
taxonomy:
    category:
        - flight-variables
    tag:
        - CDM-library
menu: set_roll()
---

# set_roll()

##### Description

This is a setter function that allows you to set the **roll** variable. Once you set roll, you have to use ```move()``` to actually execute the movement. The roll variable will remain what you last set it until the end of the flight sequence, so you will have to set it back to 0 if you don't want the drone to roll again.

##### Syntax
Python: ```set_roll(power)```

##### Parameters

**power**: An int from -100 to 100 that sets the roll variable.  The number represents the direction and power of the output for that flight motion variable. Negative roll is left, positive roll is right.

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
	
# Drone goes right for 1 second with 50 power
drone.set_roll(50)
drone.move(1)			#use move() to execute the movement for 1 second
drone.land()
```