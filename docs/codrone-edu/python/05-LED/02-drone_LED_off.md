---
custom_edit_url: null
id: 02-drone_LED_off
title: drone_LED_off()
---

##### Description

Turns off the drone LED.

##### Syntax
```drone_LED_off()```<br />


##### Parameters

None


##### Returns

None

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.drone_LED_off()
drone.close()
```
