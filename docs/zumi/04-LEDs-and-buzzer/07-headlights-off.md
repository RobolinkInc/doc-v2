---
title: headlights_off()
menu: headlights_off()
taxonomy:
    tag: zumi-library
    category: LEDs-and-Buzzer
---

# headlights_off()

##### Description
Turns off front LEDs only

##### Syntax
```headlights_off()```<br />

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
zumi.headlights_off()
```