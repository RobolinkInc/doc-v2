---
title: rectangle_right()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: rectangle_right()
---

# rectangle_right()

##### Description
Drives Zumi in a clockwise rectangle.

##### Syntax
```rectangle_right()```<br />
```rectangle_right(speed=40, seconds=1.0, ratio=2)```<br />

##### Parameters
speed: Drive speed between 0-80<br />
seconds: Duration in seconds for shorter side<br />
ratio: Ratio of longer side to shorter side (Multiply ```ratio``` by ```seconds``` to get the duration of the longer side) <br />


##### Returns
None


##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.rectangle_right(ratio=3)
```