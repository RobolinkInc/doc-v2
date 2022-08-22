---
custom_edit_url: null
id: 09-controller_draw_point
title: controller_draw_point()
---

##### Description

draws a single pixel at the point (x,y)

##### Syntax
```controller_draw_point(x, y, pixel)``` <br />

##### Parameters

**x**: x coordinate
**y**: y coordinate
**pixel**: optional parameter that changes the pixel color of the line. default value is Black

##### Returns

None

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.controller_clear_screen() # clear screen for drawing

drone.controller_draw_point(10, 10) # place a pixel at the (10,10) coordinate

drone.close()

```