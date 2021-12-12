---
title: read_x_angle()
published: true
taxonomy:
    category:
        - MPU
        - sensors
    tag:
        - zumi-library
menu: read_x_angle()
---

##### Description
Calls ```update_angles()``` and returns only the x-angle.

##### Syntax
```read_x_angle()```<br />

##### Parameters
None

##### Returns
float: current x-angle

##### Example Code
###### Python
```
#Python code
from zumi.zumi import Zumi
import IPython.display

zumi = Zumi()

for i in range(100):
    print(zumi.read_x_angle())
    IPython.display.clear_output(wait=True) 
print("done")

```