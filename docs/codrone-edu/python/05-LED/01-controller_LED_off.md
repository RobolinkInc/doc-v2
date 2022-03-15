---
custom_edit_url: null
id: 01-controller_LED_off
title: controller_LED_off()
---

##### Description

Turns off the controller LEDs.

##### Syntax
```controller_LED_off()```<br />


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
drone.controller_LED_off()
drone.close()
```
