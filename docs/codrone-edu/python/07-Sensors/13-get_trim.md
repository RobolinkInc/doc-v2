---
custom_edit_url: null
id: 13-get_trim
title: get_trim()
---

##### Description

This function gets the current trim values of the drone.

##### Syntax
```get_trim()```

##### Parameters

None

##### Returns

A list of trim data

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

# print the pressure
trim  = drone.get_trim()
print(trim)
print(trim[0])
print(trim[1])
drone.close()
```