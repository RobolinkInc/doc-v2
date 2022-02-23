---
custom_edit_url: null
title: control_motors()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: circle()
---
##### Description
Sets the speed of each individual motor. The changes take place immediately. This function does not include a stop command or any sensor feedback.

##### Syntax
```control_motors(right,left)```<br />

##### Parameters
right: Integer between -126 and 127. Positive values for forward, negative values for reverse.<br />
left: Integer between -126 and 127. Positive values for forward, negative values for reverse.<br />

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()

zumi.control_motors(30,30)
time.sleep(2)
zumi.stop()
```