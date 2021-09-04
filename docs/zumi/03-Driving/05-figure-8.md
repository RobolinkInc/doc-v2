---
title: figure_8()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: figure_8()
---

# figure_8()

##### Description
Drives Zumi in a figure 8.

##### Syntax
```figure_8()```<br />
```figure_8(speed=30, step=3, delay=0.02)```<br />

##### Parameters
speed: Drive speed between 0-80<br />
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
zumi.figure_8(step=5)

```