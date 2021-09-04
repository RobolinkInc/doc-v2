---
title: go_straight()
published: true
taxonomy:
    category:
        - Driving
        - driving
    tag:
        - zumi-library
menu: go_straight()
---

# go_straight()

##### Description
Takes one drive "step" to correct for the set heading. This function only works when called inside of a loop.

##### Syntax
```go_straight(speed, desired_angle)```<br />
```go_straight(speed, desired_angle, max_speed=127)```<br />

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
    zumi.go_straight(40,0)

zumi.stop()
```