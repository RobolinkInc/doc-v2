---
custom_edit_url: null
title: turn_left()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: turn_left()
---

##### Description
Causes Zumi to turn left the specified number of degrees. Default to 90 degrees.

##### Syntax
```turn_left()```<br />
```turn_left(desired_angle=90, duration=1.0)```<br />

##### Parameters
desired_angle: Degrees you want to turn to the left from your starting position. Default to 90. Only positive values.<br />
duration: The amount of time in seconds Zumi will try and complete the turn. Increase for turns greater than 90 degrees.<br />


##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()

zumi.turn_left()
time.sleep(1)
zumi.turn_left(130,1.5)

```