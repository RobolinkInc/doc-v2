---
custom_edit_url: null
id: 22-get_color_data
title: get_color_data()
---

##### Description

Getter function that gets a list of color data from the drone. <br />

##### Syntax
```get_color_data()```<br />


##### Parameters
None


##### Returns

Returns a list of color data.

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
color_data = drone.get_color_data()
drone.close()
```