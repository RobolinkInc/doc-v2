---
custom_edit_url: null
id: reset-sensor
title: reset_sensor()
---

##### Description

This function will reset the roll and pitch trim values back to zero and set all the gyro angles back to zero for roll, pitch, and yaw. NOTE: If you're resetting right before a takeoff, make sure to add a ```time.sleep(1)``` before the ```takeoff()```,  otherwise the take off might be skipped.


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
import CoDrone_mini
import time

drone = CoDrone_mini.CoDrone()
drone.pair()
print("Before ", drone.get_angle())
drone.takeoff()
drone.set_yaw(50)
drone.move(1)
drone.land()
print("After ",drone.get_angle())
drone.reset_sensor() 
print("Reset ", drone.get_angle())
drone.close()
```