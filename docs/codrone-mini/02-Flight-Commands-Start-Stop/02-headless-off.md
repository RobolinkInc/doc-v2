---
id: headless-off
title: headless_off()

---

##### Description
This function turns off headless mode. In this mode, the drone is keeping track of which direction it's facing and will fly relative to which direction it is facing. Remember that the "front" is denoted by the red line on the shell.
##### Syntax
```headless_off()```

##### Parameters

None

##### Returns

None

##### Example Code
###### Python
```python
#Python code
import CoDrone_mini
import time

drone = CoDrone_mini.CoDrone()
drone.pair()

drone.headless_on() # Run the code once, then switch to headless_off() and run again to see the difference.

drone.takeoff()
drone.set_yaw(20)
drone.move(1)
drone.set_yaw(0)
drone.set_pitch(40)
drone.move(1)

drone.land()
```
