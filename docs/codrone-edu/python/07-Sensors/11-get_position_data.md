---
custom_edit_url: null
id: 11-get_position_data
title: get_position_data()

---

##### Description

get_position_data is a getter function that retuns a list of position data for the drone.


##### Syntax
```get_position_data()```
```get_position_data(delay)```


##### Parameters
**delay**: the delay in seconds before the position data is returned. default value is 0.01

##### Returns

A list of position data for the drone. The list contains the current time of the running program [0], x position data [1], y position data [2], z position data [3].

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
data = drone.get_position_data()
print(data)
drone.land()
drone.close()
```