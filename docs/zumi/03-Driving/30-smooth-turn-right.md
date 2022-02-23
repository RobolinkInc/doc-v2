---
custom_edit_url: null
title: smooth_turn_right()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: smooth_turn_right()
---

##### Description
Turns right gradually to reach the desired angle while also going forward. Default to 90 degrees.
##### Syntax
```smooth_turn_right()```<br />
```smooth_turn_right(desired_angle=90,speed=20,step=2)```<br />

##### Parameters
desired_angle: Degrees you want to turn from your starting position <br />
speed: Positive integer value for speed between 0 and 80. Default to 20.<br />
step: The angle step size (decrease for wider turns, increase for tighter turns)<br />

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()

zumi.smooth_turn_right()
time.sleep(1)
zumi.smooth_turn_right(speed=30)

```