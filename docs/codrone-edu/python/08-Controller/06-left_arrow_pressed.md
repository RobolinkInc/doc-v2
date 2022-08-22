---
custom_edit_url: null
id: 03-left_arrow_pressed
title: left_arrow_pressed()
---

##### Description

A function that determines if the controller's left arrow button has been pressed

##### Syntax
```left_arrow_pressed()```


##### Parameters

None

##### Returns

True if the left arrow button is pressed or held. Otherwise the function will return false.

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
    if drone.left_arrow_pressed():
        print("left arrow button has been pressed!")

```