---
title: headlights_on()
menu: headlights_on()
taxonomy:
    tag: zumi-library
    category: LEDs-and-Buzzer
---

# headlights_on()

##### Description
Turns on front LEDs only

##### Syntax
```headlights_on()```<br />

##### Parameters
None

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi 
import time
zumi = Zumi()
zumi.headlights_on()
time.sleep(2)
zumi.all_lights_off()
```