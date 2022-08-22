---
custom_edit_url: null
id: 05-controller_draw_chord
title: controller_draw_chord()
---

##### Description

Same as controller_draw_arc(), but connects the end points with a straight line.

##### Syntax
```controller_draw_chord(arc_list, start_angle, end_angle, image, pixel_width)``` <br />

##### Parameters

**chord_list**: Two points to define the bounding box. Sequence of [(x0, y0), (x1, y1)], where x1 >= x0 and y1 >= y0.
**start_angle**: Starting angle, in degrees. Angles are measured from 3 o’clock, increasing clockwise.
**end_angle**: Ending angle, in degrees.
**image**: image object created from create_image_canvas()
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

chord_list = [(20, 40), (50, 50)]
drone.controller_draw_chord(chord_list, 0, 180, image) # set chord onto image object

drone.controller_draw_canvas(image)  # draw image onto controller screen

drone.close()

```