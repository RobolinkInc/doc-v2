---
custom_edit_url: null
id: headless-on
title: headless_on()

---

##### Description
This function turns on headless mode, meaning that no matter in which direction the drone is facing, it will fly in the directions relative to you. This is ideal for long range drones.

##### Syntax
```headless_on()```

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
