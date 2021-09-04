---
title: brake_lights_off()
menu: brake_lights_off()
taxonomy:
    tag: zumi-library
    category: LEDs-and-Buzzer
---

# brake_lights_off()

##### Description
Turns off front LEDs only

##### Syntax
```brake_lights_off()```<br />

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

zumi.brake_lights_on()
time.sleep(2)
zumi.brake_lights_off()
```