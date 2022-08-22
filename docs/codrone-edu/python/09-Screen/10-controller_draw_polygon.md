---
custom_edit_url: null
id: 10-controller_draw_polygon
title: controller_draw_polygon()
---

##### Description

The polygon outline consists of straight lines between the given coordinates, plus a straight line between the last and the first coordinate.

##### Syntax
```controller_draw_polygon(point_list)``` <br />

##### Parameters

**point_list**: the list of coordinates

##### Returns

None

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.controller_clear_screen()

point_list_square = ((10, 10), (30, 10), (30, 30), (10, 30)) # creating a list of coordinates

drone.controller_draw_polygon(point_list_square)

drone.close()

```