---
custom_edit_url: null
title: get_orientation_message()
taxonomy:
    category:
        - Sensors
        - sensors
    tag:
        - zumi-library
menu: get_IR_data()
---

##### Description
Uses the acceleration values to find Zumi's orientation with respect to the strongest force being applied to Zumi (gravity).
This function returns the orientation as a String.

##### Syntax
```get_orientation_message()```<br />

##### Parameters
None

##### Returns
String: a description of the orientation state<br />

*Orientation state*<br />
"unknown"<br />
"face up"<br />
"face down"<br />
"right side down"<br />
"left side down"<br />
"upright"<br />
"upside down"<br />
"accelerating"<br />

##### Example Code
###### Python
```
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

#grab zumi and place it on any side 
#example: upside down, on its nose etc.
for i in range(20):
    orientation = zumi.get_orientation_message()
    print(orientation)
    time.sleep(0.5)
print(" done ")

```