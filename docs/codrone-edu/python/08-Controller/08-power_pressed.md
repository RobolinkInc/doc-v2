---
custom_edit_url: null
id: 08-power_pressed
title: power_pressed()
---

##### Description

A function that determines if the controller's power button has been pressed

##### Syntax
```power_pressed()```


##### Parameters

None

##### Returns

True if the power button is pressed or held. Otherwise the function will return false.

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
    if drone.power_pressed():
        print("power button has been pressed!")

```