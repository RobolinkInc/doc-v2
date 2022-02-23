---
custom_edit_url: null
title: read_x_angle()
taxonomy:
    category:
        - Sensors
        - sensors
    tag:
        - zumi-library
menu: get_IR_data()
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