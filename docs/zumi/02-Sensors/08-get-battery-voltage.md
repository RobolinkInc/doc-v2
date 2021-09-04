---
title: get_battery_voltage()
taxonomy:
    category:
        - Sensors
        - sensors
    tag:
        - zumi-library
menu: get_battery_voltage()
---

# get_battery_voltage()

##### Description
Get the reading from battery level.

If you are charging Zumi RED LED ON you will 
see roughly 1.1-1.20 volts. 

The battery should reach a max of 4.20 volts 
and the lowest it should ever reach is 3.0 volts. 
These values will only show up if the switch
is in the on position and the RED led is not visible.

##### Syntax
```get_battery_voltage()```<br />

##### Parameters
None

##### Returns
Voltage reading

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

for i in range(0,10):
    # battery level is updated every 500ms or half a second
    time.sleep(0.5)
    battery = zumi.get_battery_voltage()
    print(battery)
```