---
custom_edit_url: null
id: 01-down_arrow_pressed
title: down_arrow_pressed()
---

##### Description

A function that determines if the controller's down arrow button has been pressed

##### Syntax
```down_arrow_pressed()```


##### Parameters

None

##### Returns

True if the down arrow button is pressed or held. Otherwise the function will return false.

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
    if drone.down_arrow_pressed():
        print("down arrow button has been pressed!")

```