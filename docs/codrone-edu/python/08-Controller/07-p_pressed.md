---
custom_edit_url: null
id: 07-p_pressed
title: p_pressed()
---

##### Description

A function that determines if the controller's P button has been pressed

##### Syntax
```p_pressed()```


##### Parameters

None

##### Returns

True if the P button is pressed or held. Otherwise the function will return false.

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
    if drone.p_pressed():
        print("P button has been pressed!")

```