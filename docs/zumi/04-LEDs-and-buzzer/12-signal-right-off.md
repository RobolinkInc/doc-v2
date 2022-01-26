---
custom_edit_url: null
title: signal_right_off()
menu: signal_right_off()
taxonomy:
    tag: zumi-library
    category: LEDs-and-Buzzer
---

##### Description
Turns off flashing both right front and right back LEDs

##### Syntax
```signal_right_off()```<br />

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
zumi.signal_right_on()
time.sleep(2)
zumi.signal_right_off()
```