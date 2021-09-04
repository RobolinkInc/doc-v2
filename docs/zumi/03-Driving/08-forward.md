---
title: forward()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: forward()
---

# forward()

##### Description
Drives Zumi forward at a default speed of 40 for 1 second in the direction Zumi is currently facing.

##### Syntax
```forward()```<br />
```forward(speed=40, duration=1.0, desired_angle=None)```<br />

##### Parameters
speed: Positive integer value for speed between 0 and 80<br />
duration: Number of seconds Zumi will drive forward<br />
desired_angle: Heading or desired angle to drive in (When None is selected Zumi drives wherever she is facing)

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()

zumi.forward()
time.sleep(1)
zumi.forward(speed=50)
time.sleep(1)
zumi.forward(duration=2.1)
time.sleep(1)

```