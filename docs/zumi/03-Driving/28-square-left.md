---
title: square_left()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: square_left()
---

# square_left()

##### Description
Drives Zumi in a counterclockwise square.

##### Syntax
```square_left()```<br />
```square_left(speed=40, seconds=1.0)```<br />

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
zumi.square_left(seconds=1.5)
```