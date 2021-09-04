---
title: back_right_detect()
taxonomy:
    category:
        - Sensors
        - sensors
    tag:
        - zumi-library
menu: back_right_detect()
---

# back_right_detect()

##### Description
Returns True if the back right IR sensor detects a value below a threshold. The value decreases as the light reflected back to the receiver increases.

##### Syntax
```back_right_detect()```<br />
```back_right_detect(threshold=100)```

##### Parameters
threshold: Integer between 0-255

##### Returns
Boolean that returns True if sensor is triggered. <br />

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

for i in range(0,100):
    if zumi.back_right_detect():
        print("Detected!)
    time.sleep(0.1) # Delay for I2C

```