---
custom_edit_url: null
title: front_right_detect()
taxonomy:
    category:
        - Sensors
        - sensors
    tag:
        - zumi-library
menu: front_right_detect()
---

##### Description
Returns True if the front right IR sensor detects a value below a threshold. The value decreases as the light reflected back to the receiver increases.

##### Syntax
```front_left_detect()```<br />
```front_left_detect(threshold=100)```

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
    if zumi.front_right_detect():
        print("Detected!)
    time.sleep(0.1) # Delay for I2C

```