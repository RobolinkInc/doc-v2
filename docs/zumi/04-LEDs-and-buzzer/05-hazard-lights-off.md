---
title: hazard_lights_off()
menu: hazard_lights_off()
taxonomy:
    tag: zumi-library
    category: LEDs-and-Buzzer
---

# hazard_lights_off()

##### Description
Turns off flashing front and back LEDs

##### Syntax
```hazard_lights_off()```<br />

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
zumi.hazard_lights_on()
time.sleep(2)
zumi.hazard_lights_off()
```