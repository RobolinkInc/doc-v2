---
title: circle_left()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: circle_left()
---

# circle_left()

##### Description
Drives Zumi in a counterclockwise circle.

##### Syntax
```circle_left()```<br />
```circle_left(speed=30, step=2)```<br />

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
zumi.circle_left(step=3)

```