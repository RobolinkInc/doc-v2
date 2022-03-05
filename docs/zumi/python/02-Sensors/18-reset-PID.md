---
custom_edit_url: null
title: reset_PID()
taxonomy:
    category:
        - Sensors
        - sensors
    tag:
        - zumi-library
menu: get_IR_data()
---

##### Description
Resets the sum of the gyro error to zero as well as the PID error sum.
Use for driving straight or turning accurately.
This does not reset the P, I, and D values of the Zumi PID control.

##### Syntax
```reset_PID()```<br />

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

for i in range(0,50):
    zumi.go_straight(50,0)
    #print the error of the z angle along with some of the PID accumulators
    print(zumi.PID_time_past,", ", zumi.error_past,", ", zumi.error_sum," , ", zumi.angle_list[2])

zumi.stop()

#this will reset those values
zumi.reset_PID()
print(" Now ")
print(zumi.PID_time_past,", ", zumi.error_past,", ", zumi.error_sum, " , ", zumi.angle_list[2])

```