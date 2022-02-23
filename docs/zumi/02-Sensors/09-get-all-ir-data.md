---
custom_edit_url: null
title: get_all_IR_data()
published: true
taxonomy:
    category:
        - Sensors
        - sensors
    tag:
        - zumi-library
menu: get_all_IR_data()
---

##### Description
Returns the readings from all 6 IR sensors. 

##### Syntax
```get_all_IR_data()```<br />

##### Parameters
None

##### Returns
List with 6 values between 0 and 255. <br />

*IR sensor indices:* <br />
 0 Front right sensor <br />
 1 Bottom right sensor <br />
 2 Back right sensor <br />
 3 Bottom left sensor <br />
 4 Back left sensor <br />
 5 Front left sensor <br />


##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

for i in range(0,100):
    ir_readings = zumi.get_all_IR_data()
    print(ir_readings)
    time.sleep(0.1) # Delay for I2C

```