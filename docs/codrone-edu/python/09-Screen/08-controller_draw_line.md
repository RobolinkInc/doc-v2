---
custom_edit_url: null
id: 08-controller_draw_line
title: controller_draw_line()
---

##### Description

        (x1,y1) \
                 \
                  \
                   \ (x2,y2)
        draws a line between points (x1, y1) and (x2, y2)

##### Syntax
```controller_draw_line(x1, y1, x2, y2, pixel, line_type)``` <br />

##### Parameters

**x1**: point 1 x coordinate
**y1**: point 1 y coordinate
**x2**: point 2 x coordinate
**y2**: point 2 y coordinate
**pixel**: optional parameter that changes the pixel color of the line. default value is Black
**line_type**: optional parameter that is the type of line drawn. default is Solid

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

drone.controller_draw_line(0,0, 60, 60)

drone.close()

```