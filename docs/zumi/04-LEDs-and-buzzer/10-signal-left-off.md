---
title: signal_left_off()
menu: signal_left_off()
taxonomy:
    tag: zumi-library
    category: LEDs-and-Buzzer
---

##### Description
Turns off flashing both left front and left back LEDs

##### Syntax
```signal_left_off()```<br />

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
zumi.signal_left_on()
time.sleep(2)
zumi.signal_left_off()
```