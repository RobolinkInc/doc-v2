---
custom_edit_url: null
id: 21-get_back_color
title: get_back_color()
---

##### Description

get_back_color() is a getter function that calls get_color_data() but only returns the data for the back color sensor.

##### Syntax
```get_back_color()```<br />


##### Parameters

None

##### Returns

Returns the back color sensor data.

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
color_data = drone.get_back_color()
print(color_data)
drone.close()
```