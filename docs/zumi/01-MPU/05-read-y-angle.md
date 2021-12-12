---
title: read_y_angle()
published: true
taxonomy:
    category:
        - MPU
        - sensors
    tag:
        - zumi-library
menu: read_y_angle()
---

##### Description
Calls ```update_angles()``` and returns only the y-angle.

##### Syntax
```read_y_angle()```<br />

##### Parameters
None

##### Returns
float: current y-angle

##### Example Code
###### Python
```
#Python code
from zumi.zumi import Zumi
import IPython.display

zumi = Zumi()

for i in range(100):
    print(zumi.read_y_angle())
    IPython.display.clear_output(wait=True) 
print("done")

```