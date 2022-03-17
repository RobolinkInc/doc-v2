---
custom_edit_url: null
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

drone = Drone()
drone.pair() # pair automatically, may not always work
# drone.pair(port_name = 'COM3')    # pair with a specific port

drone.takeoff()
drone.hover(1)
drone.land()
drone.close()
```