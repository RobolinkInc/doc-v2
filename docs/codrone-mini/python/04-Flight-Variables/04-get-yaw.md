---
custom_edit_url: null
title: get_yaw()
taxonomy:
    category:
        - flight-variables
    tag:
        - CDM-library
menu: get_yaw()
---

##### Description

This is a getter function that gets the value of the **yaw** variable.

##### Syntax
Python: ```get_yaw()```

##### Parameters

None

##### Returns

The power of the yaw variable (int)

##### Example Code
###### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()

# Print current yaw with getter function
print("Current yaw : ", drone.get_yaw())
drone.close()
```