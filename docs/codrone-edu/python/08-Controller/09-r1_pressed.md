---
custom_edit_url: null
id: 03-r1_pressed
title: r1_pressed()
---

##### Description

A function that determines if the controller's R1 button has been pressed

##### Syntax
```r1_pressed()```


##### Parameters

None

##### Returns

True if the R1 button is pressed or held. Otherwise the function will return false.

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
    if drone.r1_pressed():
        print("R1 button has been pressed!")

```