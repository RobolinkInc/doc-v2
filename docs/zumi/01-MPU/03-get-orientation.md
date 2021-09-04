---
title: get_orientation()
published: true
taxonomy:
    category:
        - sensors
        - MPU
    tag:
        - zumi-library
menu: get_orientation()
---

# get_orientation()

##### Description
Uses the acceleration values to find Zumi's orientation with respect to the strongest force being applied to Zumi (gravity).

##### Syntax
```get_orientation()```<br />

##### Parameters
None

##### Returns
Integer denoting orientation state.<br />

*Orientation state* <br />
-1 = unknown<br />
 0 = probably falling or moving between states<br />
 1 = camera straight up<br />
 2 = camera facing down<br />
 3 = on right side<br />
 4 = on left side<br />
 5 = wheels on floor<br />
 6 = wheels facing up (upside down)<br />
 7 = accelerating faster than 1g<br />

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

#grab zumi and place it on any side 
#example: upside down, on its nose etc.
for i in range(20):
    orientation = zumi.get_orientation()
    print(orientation)
    time.sleep(0.5)
print(" done ")

```