---
custom_edit_url: null
id: 01-pair
title: pair()
taxonomy:
    tag: CDE-library
    category: other
menu: pair()
---

##### Description

This function connects your controller with the program. You can also set the specific USB port name.

##### Syntax
```pair()```<br />
```pair(portname)```<br />


##### Parameters
**portname**: A string containing the port name or number.


##### Returns
None

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone=Drone()
drone.pair()
try:
    drone.open()
    drone.takeoff()
    drone.hover(1)
    drone.land()

finally:
    drone.emergency_stop()
    drone.close()
```