---
title: go_reverse()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: go_reverse()
---

##### Description
Takes one drive "step" in reverse to correct for the set heading. This function only works when called inside of a loop.

##### Syntax
```go_reverse(speed, desired_angle)```<br />
```go_reverse(speed, desired_angle, max_speed=127)```<br />

##### Parameters
speed: Drive speed between 0 and 127; must be below the max_speed<br />
desired_angle: heading (0 degrees is defined when the Zumi object is created.)<br />
max_speed: Caps the max speed. Default to 127.

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

for i in range(0, 200):
    zumi.go_reverse(40,0)

zumi.stop()
```