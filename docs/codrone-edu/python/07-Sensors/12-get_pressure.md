---
custom_edit_url: null
id: 12-get_pressure
title: get_pressure()
---

##### Description

This is a getter function that returns the data from the barometer. The function returns a value in the unit Pascals. **Note:** 1atm = 101325 Pa

##### Syntax
```get_pressure()```

##### Parameters

None

##### Returns

Float that represents air pressure in Pascals.

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

# print the pressure
pressure = drone.get_pressure()
print(pressure)
drone.close()
```