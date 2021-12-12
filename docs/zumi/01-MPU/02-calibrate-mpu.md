---
title: calibrate_MPU()
published: true
taxonomy:
    category:
        - sensors
        - MPU
    tag:
        - zumi-library
menu: calibrate_MPU()
---

##### Description
Reads from the previous MPU offsets file unless the file does not exist. If an offsets file does not exist, then it will
create an offsets file by taking the average of multiple readings from the sensor. While running this function, make 
sure Zumi is not moving and is resting on a flat surface.

##### Syntax
```calibrate_MPU()```<br />
```calibrate_MPU(count=100)```<br />

##### Parameters
**count:** the number of samples you want Zumi to take. Increase to improve accuracy. 

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
zumi = Zumi()

#Zumi will take 500 samples/readings
zumi.mpu.calibrate_MPU(count=500)

#this is the order the offsets will be printed
print("angular speed rad/sec Gx,Gy,Gz")
print("linear acceleration   Ax,Ay,Az")

#print the offsets of each Axis
zumi.mpu.print_offsets()

```