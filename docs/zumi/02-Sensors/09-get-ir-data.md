---
custom_edit_url: null
title: get_IR_data()
taxonomy:
    category:
        - Sensors
        - sensors
    tag:
        - zumi-library
menu: get_IR_data()
---

##### Description
Get the reading from the IR sensors and the index specified. 

##### Syntax
```get_IR_data(ir_sensor_index)```<br />

##### Parameters
ir_sensor_index: Integer from 0 to 5.

*IR sensor indices:*
*  0  IR.FRONT_RIGHT = Front right sensor
*  1  IR.BOTTOM_RIGHT = Bottom right sensor
*  2  IR.BACK_RIGHT = Back right sensor
*  3  IR.BOTTOM_LEFT = Bottom left sensor
*  4  IR.BACK_LEFT = Back left sensor
*  5  IR.FRONT_LEFT = Front left sensor

##### Returns
Value between 0 and 255.

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

for i in range(0,100):
    FRONT_RIGHT = 0
    ir_reading = zumi.get_IR_data(FRONT_RIGHT)
    zumi.play_note(int(ir_reading/4),20) 
    # Divide by 4 because note is between 0 and 60
    
    time.sleep(0.05)
```