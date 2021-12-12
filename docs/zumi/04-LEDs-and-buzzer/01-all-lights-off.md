---
title: all_lights_off()
menu: all_lights_off()
taxonomy:
    tag: zumi-library
    category: LEDs-and-Buzzer
---

##### Description
Turns all LEDs off

##### Syntax
```all_lights_off()```<br />

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
zumi.all_lights_on()
time.sleep(2)
zumi.all_lights_off()
```