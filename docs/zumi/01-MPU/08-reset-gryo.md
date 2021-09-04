---
title: reset_gyro()
published: true
taxonomy:
    category:
        - sensors
        - MPU
    tag:
        - zumi-library
menu: reset_gyro()
---

# reset_gyro()

##### Description
Resets all values in the angle list to 0.
Use for driving straight or turning accurately.

##### Syntax
```reset_gyro()```<br />

##### Parameters
None

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
zumi = Zumi()

print("z angle " , zumi.angle_list[2])

zumi.turn_left(90,1.2)

print("z angle " , zumi.angle_list[2])

zumi.reset_gyro()

print("z angle " , zumi.angle_list[2])
```