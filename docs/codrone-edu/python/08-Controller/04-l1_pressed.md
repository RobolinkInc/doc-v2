---
custom_edit_url: null
id: 03-l1_pressed
title: l1_pressed()
---

##### Description

A function that determines if the controller's L1 button has been pressed

##### Syntax
```l1_pressed()```


##### Parameters

None

##### Returns

True if the L1 button is pressed or held. Otherwise the function will return false.

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
    if drone.l1_pressed():
        print("L1 button has been pressed!")

```