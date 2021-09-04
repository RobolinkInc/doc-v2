---
title: j_turn()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: j_turn()
---

# j_turn()

##### Description
Drives Zumi in a j-turn.

##### Syntax
```j_turn()```<br />
```j_turn(speed=80, step=4, delay=0.005)```<br />

##### Parameters
speed: Positive value for forward speed between 0 and 80<br />
step: The angle step size (decrease for wider turns, increase for tighter turns)<br />
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
zumi.j_turn(speed=60, delay=0.003)


```