---
custom_edit_url: null
id: 26-get_colors
title: get_colors()
---

##### Description

get_colors() is a getter function that accesses color data by using the default ByRobot color prediction

##### Syntax
```get_colors()```<br />


##### Parameters

None

##### Returns

A list containing the front and back color sensor prediction.

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
colors = drone.get_colors()
print(colors)
drone.close
```