---
custom_edit_url: null
id: 35-get_error_data()
title: get_error_data()
---

##### Description

This command requests if the drone is in an error state. One or more of the following error states can be printed to console.

**Motion_Calibrating**
* Drone is calibrating

**Motion_NoAnswer**
* Gyroscope Accelerometer is unresponsive and may be damaged.

**Motion_WrongValue**
* Gyroscope Accelerometer is giving erroneous data

**Motion_NotCalibrated**
* Gyroscope Accelerometer is not calibrated

**Pressure_NoAnswer**
* Barometer is unresponsive

**Pressure_WrongValue**
* Barometer is giving erroneous data

**RangeGround_NoAnswer**
* Bottom Range sensor is unresponsive

**RangeGround_WrongValue**
* Bottom range sensor has given an incorrect value

**Flow_NoAnswer**
* Optical flow sensor is unresponsive 

**Flow_CannotRecognizeGroundImage**
* Optical flow sensor is giving erroneous data due to the image.

##### Syntax
```get_error_data()```
```get_error_data(delay)```

##### Parameters

**delay:** The delay in seconds that the command will wait for a response. The default value is 0.1.

##### Returns

**error state:** String of one or more error messages

##### Example Code
###### Python
Turn the drone left and right on a flat surface while the program runs to see the angular speed change. Then, hold the drone as still as possible and watch angular speed drop.

```python
#Python code
from time import sleep
from codrone_edu.drone import *
from codrone_edu.protocol import *

drone = Drone()
drone.pair()

# For demonstration purposes, activate motion calibration
drone.sendCommand(CommandType.ClearBias)
sleep(0.1)
for i in range(10):
    drone.get_error_data() # see motion error state during calibration
    time.sleep(0.5)
drone.close()


```