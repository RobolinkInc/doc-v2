---
custom_edit_url: null
id: 03-h_pressed
title: h_pressed()
---

##### Description

A function that determines if the controller's H button has been pressed

##### Syntax
```h_pressed()```


##### Parameters

None

##### Returns

True if the H button is pressed or held. Otherwise the function will return false.

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
    if drone.h_pressed():
        print("H button has been pressed!")

```