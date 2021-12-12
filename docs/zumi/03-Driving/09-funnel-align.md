---
title: funnel_align()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: funnel_align()
---

##### Description
Zumi will try to align to the funnel piece on the competition field (Click [here](https://learn.robolink.com/wp-content/uploads/2021/06/current_funnel.pdf) for a PDF version).

##### Syntax
```funnel_align(speed=20, duration=1.0)```<br />
```funnel_align(speed=20, duration=1, angle=None, angle_adj=2, l_th=100, r_th=100)```<br />

##### Parameters
speed: Positive integer value for speed between 0 and 80<br />
duration: Number of seconds Zumi will try to align to the funnel piece<br />
angle: Heading or desired angle (Default to None which is Zumi's current heading)<br />
angle_adj: The number of degrees Zumi will turn if one IR sensor detects white<br />
l_th: threshold of the bottom left IR sensor<br />
r_th: threshold of the bottom right IR sensor<br />

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

zumi.funnel_align(speed=10,duration=3,angle_adj=1.1)

```