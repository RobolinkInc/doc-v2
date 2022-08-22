---
custom_edit_url: null
id: 11-controller_draw_rectangle
title: controller_draw_rectangle()
---

##### Description

            width
        (x,y)|---------------|
             |               | height
             |_______________|

        draws a rectangle onto the controller screen starting from point (x,y) and extends to given height and width

##### Syntax
```controller_draw_rectangle(x, y, width, height, pixel, fill, line_type)``` <br />

##### Parameters

**x**: top left corner x coordinate
**y**: top left corner y coordinate
**width**: width of rectangle
**height**: height of rectangle
**pixel**: optional parameter that changes the pixel color of the line. default value is Black
**fill**: optional parameter to fill in the rectangle or not. default value is False
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

drone.controller_clear_screen()

drone.controller_draw_rectangle(30, 15, 50, 30)

drone.close()

```