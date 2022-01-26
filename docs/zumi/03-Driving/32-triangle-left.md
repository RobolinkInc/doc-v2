---
custom_edit_url: null
title: triangle_left()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: triangle_left()
---

##### Description
Drives Zumi in a counterclockwise triangle.

##### Syntax
```triangle_left()```<br />
```triangle_left(speed=40, seconds=1.5)```<br />

##### Parameters
speed: Drive speed between 0-80<br />
seconds: Duration in seconds Zumi drives for each side<br />

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.triangle_left(speed=30)
```