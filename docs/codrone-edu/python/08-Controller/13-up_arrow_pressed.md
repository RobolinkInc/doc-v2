---
custom_edit_url: null
id: 13-up_arrow_pressed
title: up_arrow_pressed()
---

##### Description

A function that determines if the controller's up arrow button has been pressed

##### Syntax
```up_arrow_pressed()```


##### Parameters

None

##### Returns

True if the up arrow button is pressed or held. Otherwise the function will return false.

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
    if drone.up_arrow_pressed():
        print("up arrow button has been pressed!")

```