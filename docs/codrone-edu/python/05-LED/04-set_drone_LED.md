---
custom_edit_url: null
id: 04-set_drone_LED
title: set_drone_LED()
---

##### Description

This function sets the LED color and brightness of the CoDrone EDU's LED. This is done by setting RGB values (0 - 255) and brightness level (0 - 100)

##### Syntax
```set_drone_LED(red, green, blue, brightness)```<br />


##### Parameters
**red**: int value from 0 -255
**green**: int value from 0 -255
**blue**: int value from 0 -255
**brightness**: int value from 0 - 100



##### Returns

None

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.set_drone_LED(0, 0, 255, 100)
drone.close()
```
