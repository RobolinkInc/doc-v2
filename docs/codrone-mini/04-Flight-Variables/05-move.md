---
custom_edit_url: null
title: move()
taxonomy:
    category:
        - flight-variables
    tag:
        - CDM-library
menu: move()
---

##### Description

You can use this function to create more complex flight movements. With no parameters, ```move()``` will just run based on whatever the flight variables have been set to with functions like ```setPitch()``` and ```setThrottle()``` indefinitely.  You can also run it for a certain duration.  The function also takes multiple parameters, where you can set roll, pitch, yaw, and throttle all at once.  You can run it infinitely with 4 parameters, or you can run it for a given duration with 5 parameters. If the drone is not flying, nothing will happen. You must takeoff() first to use a move() function.


##### Syntax

```move()```: runs indefinitely<br />
```move(duration)```: runs the given number of seconds<br />
```move(roll, pitch, yaw, throttle)```: runs indefinitely<br />
```move(duration, roll, pitch, yaw, throttle)```


##### Parameters

**duration**: the duration of the flight motion in seconds.<br />
**roll**: the power of the roll, which is an int from -100 to 100<br />
**pitch**: the power of the pitch, which is an int from -100 to 100<br />
**yaw**: the power of the yaw, which is an int from -100 to 100<br />
**throttle**: the power of the throttle, which is an int from -100 to 100

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
drone.set_pitch(20)
drone.move(5) 					# Move 5 seconds based on the current value of flight variables
drone.move() 					# Move indefinitely based on the current value of flight variables
	
drone.set_pitch(0)				# Set pitch back to 0 for the remaining examples
drone.move(5, 0, 0, 80, 80)		# Move up(throttle) and turn left(yaw) for 5 seconds
drone.land()
```