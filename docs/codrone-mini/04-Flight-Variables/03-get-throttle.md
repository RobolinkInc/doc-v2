---
title: get_throttle()
taxonomy:
    category:
        - flight-variables
    tag:
        - CDM-library
menu: get_throttle()
---

##### Description

This is a getter function that gets the value of the **throttle** variable.

##### Syntax
Python: ```get_throttle()```

##### Parameters

None

##### Returns

The power of the throttle variable (int)

##### Example Code
###### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()

# Print current throttle with getter function
print("Current throttle : ", drone.get_throttle())
```