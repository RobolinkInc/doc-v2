---
custom_edit_url: null
id: 05-get_right_joystick_y
title: get_right_joystick_y()
---

##### Description

get_right_joystick_y is a getter function that gets the position of the right joystick's y position

##### Syntax
```get_right_joystick_y()```


##### Parameters

None

##### Returns

A value between -100 and 100 depending on the y position of the right joystick.

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
    print(drone.get_right_joystick_y())

```