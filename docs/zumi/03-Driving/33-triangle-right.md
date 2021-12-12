---
title: triangle_right()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: triangle_right()
---

##### Description
Drives Zumi in a clockwise triangle.

##### Syntax
```triangle_right()```<br />
```triangle_right(speed=40, seconds=1.5)```<br />

##### Parameters
speed: Drive speed between 0-80<br />
seconds: Duration in seconds Zumi drives for each side<br />

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.triangle_right(speed=30)
```