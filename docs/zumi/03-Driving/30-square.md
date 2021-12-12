---
title: square()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: square()
---

##### Description
Drives Zumi in a square. Default to counterclockwise.

##### Syntax
```square()```<br />
```square(speed=40, seconds=1, direction=1)```<br />

##### Parameters
speed: Drive speed between 0-80<br />
seconds: Duration in seconds Zumi drives for each side<br />
direction: -1 for clockwise and +1 for counterclockwise<br />

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.square(seconds=1.0)
time.sleep(1)
zumi.square(speed=60,seconds=1.2)
```