---
custom_edit_url: null
id: 04-controller_draw_canvas
title: controller_draw_canvas()
---

##### Description

Draws custom image canvas onto the controller screen

##### Syntax
```controller_draw_canvas(image)``` <br />

##### Parameters

**image**: image object to be drawn onto the controller screen


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

arc_list = [(20, 40), (50, 50)]
ellipse_list = [(10, 10), (40, 40)]
chord_list = [(60, 20), (100, 50)]

drone.controller_draw_ellipse(ellipse_list, image) # draw onto image object
drone.controller_draw_arc(arc_list, 0, 180, image)
drone.controller_draw_chord(chord_list, 0, 180, image)

drone.controller_draw_canvas(image)  # draw image onto controller screen

drone.close()

```