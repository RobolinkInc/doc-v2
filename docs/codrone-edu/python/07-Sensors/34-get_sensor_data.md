---
custom_edit_url: null
id: 24-get_sensor_data
title: get_sensor_data()
---

##### Description

This functions returns a list of 31 values including time stamps and sensor values. It requests 5 distinct lists of data and compiles them into one list. This function returns data more quickly than individual sensor requests. The default

##### Syntax

```get_sensor_data()```
```get_sensor_data(delay)```

##### Parameters

**delay:** The delay in seconds for each sensor request (out of 5). The total delay will be 5x this delay value. The default value is 0.1 seconds.

##### Returns
A list of length 31.
<details>
  <summary>See a description of each index</summary>
    data[0] Altitude time stamp
    data[1] Temperature	in Celsius
    data[2] Pressure (Pascals)
    data[3] Elevation output from barometer (meters)
    data[4] Height value output from bottom range sensor (meters)
    data[5] Motion data time stamp 
    data[6] acceleration X            Int16	2 Byte	-1568 ~ 1568 (-156.8 ~ 156.8) m/s2 x 10 X
    data[7] acceleration Y            Int16	2 Byte	-1568 ~ 1568 (-156.8 ~ 156.8) m/s2 x 10 Y
    data[8] acceleration Z            Int16   2 Byte	-1568 ~ 1568 (-156.8 ~ 156.8) m/s2 x 10 Z
    data[9] gyroRoll:	Int16	2 Byte	-2000 ~ 2000	degree/second Roll
    data[10] gyroPitch	Int16	2 Byte	-2000 ~ 2000	degree/second Pitch
    data[11] gyroYaw  	Int16	2 Byte	-2000 ~ 2000	degree/second Yaw
    data[12] angleRoll	Int16	2 Byte	-180 ~ 180	degree Roll
    data[13] anglePitch	Int16	2 Byte	-180 ~ 180	degree Pitch
    data[14] angleYaw	Int16	2 Byte	-180 ~ 180	degree Yaw
    data[15] Position data time stamp
    data[16] x	Float32	4 Byte	-	X axis in meters
    data[17] y	Float32	4 Byte	-	Y axis in meters
    data[18] z	Float32	4 Byte	-	z axis in meters
    data[19] Range sensor data time stamp 
    data[20] Front range sensor (millimeters)
    data[21] Bottom range sensor (millimeters)
    data[22] Drone state time stamp 
    data[23] modeSystem	 (system operating mode)
    data[24] modeFlight  (flight controller operating mode)
    data[25] modeControlFlight  (flight control mode)
    data[26] modeMovement  (moving state)
    data[27] headless  (headless setting status)
    data[28] sensorOrientation  (sensor orientation)
    data[29] battery parcentage level
    data[30] current speed setting
</details>
<br>

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

# collect multiple data points
data = drone.get_sensor_data()
for i in range(len(data)):

    print(i, data[i])  # print out each data point

drone.close()

```