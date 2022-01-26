---
custom_edit_url: null
title: circle_right()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: circle_right()
---

##### Description
Drives Zumi in a clockwise circle.

##### Syntax
```circle_right()```<br />
```circle_right(speed=30, step=2)```<br />

##### Parameters
speed: Drive speed between 0-80<br />
step: The angle step size (decrease for wider turns, increase for tighter turns)

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.circle_right(step=3)

```