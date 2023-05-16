---
custom_edit_url: null
id: 26-get_colors
title: get_colors()
---

##### Description

get_colors() is a getter function that returns one of the 8 pre-calibrated colors (provided in the color cards). 

##### Syntax
```get_colors()```<br />


##### Parameters

None

##### Returns

A list containing the front and back color sensor predictions as strings (Red, Green, Yellow, Blue, Cyan, Magenta, Black, White, Unknown)

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