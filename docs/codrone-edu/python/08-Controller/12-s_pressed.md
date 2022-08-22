---
custom_edit_url: null
id: 03-s_pressed
title: s_pressed()
---

##### Description

A function that determines if the controller's S button has been pressed

##### Syntax
```s_pressed()```


##### Parameters

None

##### Returns

True if the S button is pressed or held. Otherwise the function will return false.

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
    if drone.s_pressed():
        print("S button has been pressed!")

```