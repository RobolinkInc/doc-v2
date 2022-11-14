---
custom_edit_url: null
id: 06-reset-sensor
title: reset_sensor()
---

##### Description

This function will reset the gyro angles back to zero for roll, pitch, and yaw. NOTE: If you're resetting right before a takeoff, make sure to add a ```time.sleep(1)``` before the ```takeoff()```,  otherwise the take off might be skipped.


##### Syntax

```reset_sensor()```


##### Parameters
None

##### Returns

None

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()
print("Before")
print("X angle:", drone.get_x_gyro())
print("Y angle:", drone.get_y_angle())
print("Z angle:", drone.get_z_gyro())
drone.takeoff()
drone.set_yaw(50)
drone.move(1)
drone.land()
print("After")
print("X angle:", drone.get_x_gyro())
print("Y angle:", drone.get_y_angle())
print("Z angle:", drone.get_z_gyro())
drone.reset_sensor() 
print("Reset")
print("X angle:", drone.get_x_gyro())
print("Y angle:", drone.get_y_angle())
print("Z angle:", drone.get_z_gyro())
drone.close()
```