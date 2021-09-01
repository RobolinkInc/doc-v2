---
title: get_roll()
taxonomy:
    category:
        - flight-variables
    tag:
        - CDM-library
menu: get_roll()
---

# get_roll()

##### Description

This is a getter function that gets the value of the **roll** variable.

##### Syntax
Python: ```get_roll()```

##### Parameters

None

##### Returns

The power of the roll variable (int)

##### Example Code
###### Python
```python
#Python code
import CoDrone_mini


drone = CoDrone_mini.CoDrone()
drone.pair()

# Print current roll with getter function
print("Current Roll : ", drone.get_roll())
```