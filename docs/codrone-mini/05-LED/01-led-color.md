---
title: LED_color()
taxonomy:
    category:
        - LED
    tag:
        - CDM-library
menu: LED_color()
---

## LED_color()

##### Description

This function sets the LED color of the CoDrone Mini's LED using RGB values and their brightness with a value from 1 - 100. **NOTE:** If you're setting the LED right before a takeoff, make sure to add a ```time.sleep(1)``` before the ```takeoff()```, otherwise the take off might be skipped.

##### Syntax
Python:<br />
```LED_color(red, green, blue, brightness)```<br />


##### Parameters
**red:** int value from 0 to 255<br/>
**green**: int value from 0 to 255<br/>
**blue**: int value from 0 to 255<br/>
**brightness**: int value from 0 to 100, which represents the brightness of the light<br />


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

drone.LED_color(255, 0, 0, 100)        # set LED color to red using RGB

time.sleep(1)		# Add a time.sleep(1) before takeoff if you're planning to set the LED cover before takeoff, otherwise the takeoff might get missed
drone.takeoff()
drone.land()
````