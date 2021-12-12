---
title: LED_pattern()
taxonomy:
    category:
        - LED
    tag:
        - CDM-library
menu: LED_pattern()
---

##### Description

This function sets the color of the arm LED lights to flash in a particular pre-set pattern at a given speed.

##### Syntax
Python:<br/>
```LED_pattern(red, green, blue, mode)```<br/>
```LED_pattern(red, green, blue, mode, speed)```<br/>


##### Parameters
**red:** int value from 0 to 255<br/>
**green**: int value from 0 to 255<br/>
**blue**: int value from 0 to 255<br/>
**mode**: an enum, which can be selected from the following predefined list: BLINK, DOUBLE_BLINK, PULSE, FADE_IN, FADE_OUT<br/>
**speed**: int value from 1-10, which represents the speed of the pattern. 1 is slowest, 10 is fastest. Default value is 5.<br/>

##### Returns

None

##### Example Code
###### Python
```python
#Python code
import CoDrone_mini
from CoDrone_mini import Mode

drone = CoDrone_mini.CoDrone()
drone.pair()
time.sleep(1) # to prevent skipping the LED command
drone.LED_pattern(0, 100, 0, Mode.PULSE, 5)  
```