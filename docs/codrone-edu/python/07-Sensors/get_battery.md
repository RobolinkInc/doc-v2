---
custom_edit_url: null
title: get_battery()
taxonomy:
    tag: CDE-library
    category: sensors
menu: get_battery()
---

##### Description

This function returns the current battery level percentage of the drone. <br />

##### Syntax
```get_battery()```<br />

##### Parameters

NONE


##### Returns

The current battery percentage of the drone's battery.

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
battery = drone.get_battery()
print(battery)
drone.close()

```