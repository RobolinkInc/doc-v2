---
custom_edit_url: null
title: smooth_reverse()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: smooth_reverse()
---


##### Description
Causes Zumi to gradually accelerate in reverse to max speed during a given duration before decelerating back to zero.

##### Syntax
```smooth_reverse(duration)```<br />
```smooth_reverse(duration, rate=1)```<br />

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

zumi.smooth_reverse(3)
time.sleep(1)
zumi.smooth_reverse(duration=3,rate=2)

```