---
custom_edit_url: null
id: 12-controller_draw_square
title: controller_draw_square()
---

##### Description

       width
        (x,y)|------|
             |      | width
             |______|
        
        draws a square on the controller screen starting from point (x,y) and will extend to the given width

##### Syntax
```controller_draw_square(x, y, width, pixel, fill, line_type)``` <br />

##### Parameters

**x**: top left corner x coordinate <br /> 
**y**: top left corner y coordinate <br />
**width**: width of square <br />
**pixel**: optional parameter that changes the pixel color of the line. default value is Black <br />
**fill**: optional parameter to fill in the square or not. default value is False <br />
**line_type**: optional parameter that is the type of line drawn. default is Solid <br />

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

drone.controller_draw_square(10, 10, 25)

drone.close()

```