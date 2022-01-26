---
custom_edit_url: null
title: update_angles()
published: true
taxonomy:
    category:
        - sensors
        - MPU
    tag:
        - zumi-library
menu: update_angles()
---

##### Description
Reads angular speeds and updates the list of angles:
The first 3 are angles produced from the gyroscope readings.<br />
X angle, Y angle and Z angle in degrees.<br />
The next 2 angles are produced by finding the tilt with respect to gravity.<br />
X and Y acceleration angles in degrees. Work well if Zumi's wheels point to the floor<br />
The next 2 angles are the complementary filtered angles are produced by combining both gyroscope and accelerometer angles for the x and y axis.<br />
The next 3 are the rotation angles which are produced using the accelerometer.<br />
rotation along X, Y and Z with respect to gravity.<br />
The last one is the tilt state.<br />
        
##### Syntax
```update_angles()```<br />

##### Parameters
None

##### Returns
List [Gyro x,Gyro y,Gyro z,Acc x,Acc y,Comp x,Comp y,Rot_x,Rot_y,Rot_z,tilt_state]

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()


for i in range(0,100):
    angles = zumi.update_angles()
    z_angle = angles[2]
    print(z_angle)
print(" done ")

```