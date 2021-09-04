---
title: circle()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: circle()
---

# circle()

##### Description
Drives Zumi in a circle (counterclockwise by default).

##### Syntax
```circle()```<br />
```circle(speed=30, step=2, direction=1, delay=0.02)```<br />

##### Parameters
speed: Drive speed between 0-80<br />
step: The angle step size (decrease for wider turns, increase for tighter turns)<br />
direction: -1 for clockwise and +1 for counterclockwise<br />
delay: The time delay between each angle step

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()
zumi.circle(speed=60, step=4, direction=-1)

```