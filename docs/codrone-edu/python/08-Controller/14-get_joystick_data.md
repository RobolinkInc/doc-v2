---
custom_edit_url: null
id: 01-get_joystick_data
title: get_joystick_data()
---

##### Description

get_joystick_data is a getter function that gets a list of data about the state of both joysticks on the controller.

##### Syntax
```get_joystick_data()```


##### Parameters

None

##### Returns

A list of data that includes the time of the current program, and information about the left and right joysticks. 

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
    print(drone.get_joystick_data())

```