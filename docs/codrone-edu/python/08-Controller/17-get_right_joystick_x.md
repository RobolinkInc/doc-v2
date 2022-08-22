---
custom_edit_url: null
id: 04-get_right_joystick_x
title: get_right_joystick_x()
---

##### Description

get_right_joystick_x is a getter function that gets the position of the right joystick's x position

##### Syntax
```get_right_joystick_x()```


##### Parameters

None

##### Returns

A value between -100 and 100 depending on the x position of the right joystick.

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    print(drone.get_right_joystick_x())

```