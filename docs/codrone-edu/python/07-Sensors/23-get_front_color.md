---
custom_edit_url: null
id: 23-get_front_color
title: get_front_color()
---

##### Description

get_front_color() is a getter function that calls get_color_data() but only returns the data for the front color sensor.

##### Syntax
```get_front_color()```<br />


##### Parameters

None

##### Returns

Returns the front color sensor data.

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
color_data = drone.get_front_color()
print(color_data)
drone.close()
```