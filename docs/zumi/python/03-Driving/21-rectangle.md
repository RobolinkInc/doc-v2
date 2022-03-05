---
custom_edit_url: null
title: rectangle()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: rectangle()
---

##### Description
Drives Zumi in a rectangle.

##### Syntax
```rectangle()```<br />
```rectangle(speed=40, seconds=1.0, direction=1, ratio=2)```<br />

##### Parameters
speed: Drive speed between 0-80<br />
seconds: Duration in seconds for shorter side<br />
direction: 1 for counterclockwise and -1 for clockwise<br />
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
zumi.rectangle(ratio=3)
```