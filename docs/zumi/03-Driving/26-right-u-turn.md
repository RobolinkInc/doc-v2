---
title: right_u_turn()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: right_u_turn()
---

# right_u_turn()

##### Description
Drives Zumi in a right u-turn.

##### Syntax
```right_u_turn()```<br />
```right_u_turn(speed=30, step=4, delay=0.02)```<br />

##### Parameters
speed: Positive value for forward speed between 0 and 80<br />
step: The angle step size (decrease for wider turns, increase for tighter turns)<br />
delay: The time delay between each angle step.<br />

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.right_u_turn(speed=20)
time.sleep(1)
zumi.right_u_turn(delay=0.04)

```