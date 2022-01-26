---
custom_edit_url: null
title: reset_LED()
taxonomy:
    category:
        - LED
    tag:
        - CDM-library
menu: reset_LED()
---

##### Description

This function sets the LED color back to red and sets the mode to SOLID, which is the original default color and pattern.

##### Syntax
```reset_LED()```

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

drone.reset_LED()
```