---
custom_edit_url: null
title: reset_drive()
taxonomy:
    category:
        - Sensors
        - sensors
    tag:
        - zumi-library
menu: get_IR_data()
---

##### Description
Calls both ```reset_PID()``` and ```reset_gyro()```.
Use for driving straight or turning accurately.

##### Syntax
```reset_drive()```<br />

##### Parameters
None

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

for i in range(0,50):
    zumi.forward_step(0,50)
    
print(zumi.angle_list[2],", ", zumi.error_past)
    
zumi.stop()
zumi.reset_drive()

print(" Now ")
print(zumi.angle_list[2],", ", zumi.error_past)
    

```