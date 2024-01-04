---
custom_edit_url: null
id: 29-height_from_pressure
title: height_from_pressure()
---

##### Description

This function gets the drone's current height in centimeters based on the initial pressure sensor reading. You must call set_initial_pressure() to establish a reference point.

##### Syntax
```height_from_pressure()```
```height_from_pressure(b, m)```

##### Parameters

**b**: slope intercept in pascals (default is set to 0)
**m**: slope in centimeters/pascals (default is set to 9.34)

##### Returns
Estimated height in centimeters relative to starting position.

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.set_initial_pressure() # Take an initial pressure reading as a reference 

for i in range(300):
    print(drone.height_from_pressure(), " centimeters")
    time.sleep(0.2)
```