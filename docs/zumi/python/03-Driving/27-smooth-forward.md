---
custom_edit_url: null
title: smooth_forward()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: smooth_forward()
---

##### Description
Causes Zumi to gradually accelerate forward to max speed during a given duration before decelerating back to zero.

##### Syntax
```smooth_forward(duration)```<br />
```smooth_forward(duration, rate=1)```<br />

##### Parameters
duration: Total duration of drive command including acceleration and deceleration<br />
rate: rate at which speed changes. Default to 1<br />


##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()

zumi.smooth_forward(3)
time.sleep(1)
zumi.smooth_forward(duration=3,rate=2)

```