---
custom_edit_url: null
title: left_u_turn()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: left_u_turn()
---

##### Description
Drives Zumi in a left u-turn.

##### Syntax
```left_u_turn()```<br />
```left_u_turn(speed=30, step=4, delay=0.02)```<br />

##### Parameters
speed: Positive value for forward speed between 0 and 80<br />
step: The angle step size (decrease for wider turns, increase for tighter turns)<br />
delay: The time delay between each angle step<br />

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.left_u_turn()
time.sleep(1)
zumi.left_u_turn(step=3)

```