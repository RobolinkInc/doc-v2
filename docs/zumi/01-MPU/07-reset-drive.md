---
title: reset_drive()
published: true
taxonomy:
    category:
        - sensors
        - MPU
    tag:
        - zumi-library
menu: reset_drive()
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