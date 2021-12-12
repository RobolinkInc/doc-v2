---
title: triangle()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: triangle()
---

##### Description
Drives Zumi in a triangle. Default is counterclockwise.

##### Syntax
```triangle()```<br />
```triangle(speed=40, seconds=1.5, direction=1)```<br />

##### Parameters
speed: Drive speed between 0-80<br />
seconds: Duration in seconds Zumi drives for each side<br />
direction: -1 for clockwise and +1 for counterclockwise

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.triangle(speed=30, direction=-1)
```