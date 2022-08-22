---
custom_edit_url: null
id: 03-l2_pressed
title: l2_pressed()
---

##### Description

A function that determines if the controller's L2 button has been pressed

##### Syntax
```l2_pressed()```


##### Parameters

None

##### Returns

True if the L2 button is pressed or held. Otherwise the function will return false.

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
    if drone.l2_pressed():
        print("L2 button has been pressed!")

```