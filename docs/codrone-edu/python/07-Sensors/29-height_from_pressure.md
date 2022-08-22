---
custom_edit_url: null
id: 29-height_from_pressure
title: height_from_pressure()
---

##### Description

This function gets the drone's current height based on its pressure sensor reading. The height is returned in centimeters.

##### Syntax
```height_from_pressure()```
```height_from_pressure(b, m)```

##### Parameters

**b**: slope intercept in PASCALS
**m**: slope in millimeters/pascals

##### Returns

Height in centimeters

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.set_initial_pressure()

# The drone will not take off in this example but by moving it up and down manually the resulting height will print
for i in range(300):
    print(drone.height_from_pressure(), " millimeters")
    time.sleep(0.2)
```