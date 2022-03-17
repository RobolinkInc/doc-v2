---
custom_edit_url: null
id: 03-get_drone_temp
title: get_drone_temp()
---

##### Description

This is a getter function gets the drone's **temperature** from the barometer.<br />
The sensor reads the drone’s temperature, not the air around it.

##### Syntax
```get_drone_temp()```

##### Parameters

None

##### Returns

The temperature in Celsius as a float.

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
temperature = drone.get_drone_temp()
print(temperature)
drone.close()
```