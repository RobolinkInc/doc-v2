---
title: turn_off_LED()
taxonomy:
    category:
        - LED
    tag:
        - CDM-library
menu: turn_off_LED()
---

##### Description

This function turns off the LED.

##### Syntax
```turn_off_LED()```<br/>


##### Parameters

None

##### Returns

None

##### Example Code
###### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()

drone.turn_off_LED()
```