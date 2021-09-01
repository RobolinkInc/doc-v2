---
id: turn
title: turn()
---

# turn()

##### Description

A function that represents yaw, but with more natural language. It turns CoDrone Mini in the given direction, with the given duration and power.

##### Syntax
```turn(direction)```<br />
```turn(direction, duration)```<br />
```turn(direction, duration, power)```

##### Parameters

**direction**	: an enum in Python. It’s the direction of the turn, which can either ```LEFT``` or ```RIGHT```.<br />
**duration**	: the duration of the turn in seconds. If 0, it will turn default to turn indefinitely.<br />
**power**		: the power at which the drone turns right. Takes a value from 0 to 100. Defaults to 50 if not defined.

##### Returns

None

##### Example Code
###### Python
```python
#Python code
import CoDrone_mini
from CoDrone_mini import Direction

drone = CoDrone_mini.CoDrone()
drone.pair()
drone.takeoff()
	
drone.turn(Direction.LEFT)  		# Turn left indefinitely at 50 power
drone.turn(Direction.RIGHT, 3, 100) # Turn right for 3 seconds at 100 power
drone.land()
```