---
title: read_z_angle()
published: true
taxonomy:
    category:
        - MPU
        - sensors
    tag:
        - zumi-library
menu: read_z_angle()
---

##### Description
Calls ```update_angles()``` and returns only the z-angle.

##### Syntax
```read_z_angle()```<br />

##### Parameters
None

##### Returns
float: current z-angle

##### Example Code
###### Python
```
#Python code
from zumi.zumi import Zumi
import IPython.display

zumi = Zumi()

for i in range(100):
    print(zumi.read_z_angle())
    IPython.display.clear_output(wait=True) 
print("done")

```