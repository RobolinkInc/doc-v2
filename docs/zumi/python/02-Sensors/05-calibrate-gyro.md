---
custom_edit_url: null
title: calibrate_gyro()
taxonomy:
    category:
        - Sensors
        - sensors
    tag:
        - zumi-library
menu: get_IR_data()
---

##### Description
Reads from the previous MPU offsets file unless the file does not exist. If an offsets file does not exist, then it will
create an offsets file by taking the average of multiple readings from the sensor. While running this function, make 
sure Zumi is not moving and is resting on a flat surface. This function calls ```zumi.mpu.calibrate_MPU()```.

##### Syntax
```calibrate_gyro()```<br />

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
zumi.calibrate_gyro()
print("Done")
```