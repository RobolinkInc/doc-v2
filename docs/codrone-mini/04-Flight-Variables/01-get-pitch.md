---
custom_edit_url: null
title: get_pitch()
taxonomy:
    category:
        - flight-variables
    tag:
        - CDM-library
menu: get_pitch()
---

##### Description

This is a getter function that gets the value of the **pitch** variable.

##### Syntax
Python: ```get_pitch()```

##### Parameters

None

##### Returns

The power of the pitch variable (int)

##### Example Code
###### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()

# Print current pitch with getter function
print("Current pitch : ", drone.get_pitch())
```
