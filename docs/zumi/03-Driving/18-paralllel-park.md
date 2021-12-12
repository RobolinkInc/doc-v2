---
title: parallel_park()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: parallel_park()
---

##### Description
Drives Zumi in a parallel park maneuver.

##### Syntax
```parallel_park()```<br />
```parallel_park(speed=15, step=1, delay=0.01)```<br />

##### Parameters
speed: Drive speed between 0 and 80<br />
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
zumi.parallel_park(speed=20, step=2)

```