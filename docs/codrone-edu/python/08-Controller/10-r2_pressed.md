---
custom_edit_url: null
id: 10-r2_pressed
title: r2_pressed()
---

##### Description

A function that determines if the controller's R2 button has been pressed

##### Syntax
```r2_pressed()```


##### Parameters

None

##### Returns

True if the R2 button is pressed or held. Otherwise the function will return false.

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
    if drone.r2_pressed():
        print("R2 button has been pressed!")

```