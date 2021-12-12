---
title: square_right()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: square_right()
---

##### Description
Drives Zumi in a clockwise square.

##### Syntax
```square_right()```<br />
```square_right(speed=40, seconds=1.0)```<br />

##### Parameters
speed: Drive speed between 0-80<br />
seconds: Duration in seconds Zumi drives for each side

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.square_right(seconds=1.5)
```