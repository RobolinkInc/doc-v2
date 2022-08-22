---
custom_edit_url: null
id: 06-controller_draw_ellipse
title: controller_draw_ellipse()
---

##### Description

Draws an ellipse inside the given bounding box.

##### Syntax
```controller_draw_ellipse(ellipse_list, image, fill_in, pixel_width)``` <br />

##### Parameters

**ellipse_list**: Two points to define the bounding box. Sequence of [(x0, y0), (x1, y1)] where x1 >= x0 and y1 >= y0.
**image**: image object created from create_image_canvas()
**fill_in**: optional parameter. None by default. 0 will fill with black
**pixel_width**: optional parameter that is the line width, in pixels. default value is 1

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
image = drone.controller_create_canvas()  # create image object

ellipse_list = [(10, 10), (40, 40)]
drone.controller_draw_ellipse(ellipse_list, image) # set ellipse onto image object

drone.controller_draw_canvas(image)  # draw image onto controller screen

drone.close()

```