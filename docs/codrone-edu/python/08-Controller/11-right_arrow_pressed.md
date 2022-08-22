---
custom_edit_url: null
id: 11-right_arrow_pressed
title: right_arrow_pressed()
---

##### Description

A function that determines if the controller's right arrow button has been pressed

##### Syntax
```right_arrow_pressed()```


##### Parameters

None

##### Returns

True if the right arrow button is pressed or held. Otherwise the function will return false.

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
    if drone.right_arrow_pressed():
        print("right arrow button has been pressed!")

```