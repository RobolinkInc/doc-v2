---
title: forward_step()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: forward_step()
---

##### Description
Takes one drive "step" to correct for the set heading. This function only works when called inside of a loop.

##### Syntax
```forward_step(speed, desired_angle)```<br />
```forward_step(speed, desired_angle, max_speed=127)```<br />

##### Parameters
speed: Drive speed between 0 and 127; must be below the max_speed<br />
desired_angle: heading (0 degrees is defined when the Zumi object is created.)<br />
max_speed: Caps the max speed. Default to 127.<br />

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

for i in range(0, 200):
    zumi.forward_step(80,0)

zumi.stop()
```