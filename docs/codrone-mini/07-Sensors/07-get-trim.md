---
title: get_trim()
taxonomy:
    category:
        - sensors
    tag:
        - CDM-library
menu: get_trim()
---

##### Description

This function gets the current trim values of the drone.

##### Syntax
```get_trim()```

##### Parameters

None

##### Returns

It returns a Trim class in Python

##### Example Code
###### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()

# print the pressure
trim  = drone.get_trim()
print(trim)
print(trim.ROLL, trim.PITCH, trim.YAW, trim.THROTTLE)
```
