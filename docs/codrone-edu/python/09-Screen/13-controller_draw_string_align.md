---
custom_edit_url: null
id: 13-controller_draw_string_align
title: controller_draw_string_align()
---

##### Description

Draws a string from the given x_start, x_end and y positions. The string can be aligned along the x_start and x_end positions

##### Syntax
```controller_draw_string_align(x_start, x_end, y, string, alignment, string_font, pixel_color)``` <br />

##### Parameters

**x_start**: starting x position <br />
**x_end**: ending x position <br />
**y**: y position <br />
**string**: the string to write <br />
**alignment**: optional parameter that is the alignment between x_start and x_end. can align Left, Right, or Center. default value is Center <br />
**string_font**: optional parameter that is the font of the string to be written. default value is LiberationMono5x8 <br />
**pixel_color**: optional parameter that is the pixel color of the written string. default value is Black <br />

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

drone.controller_draw_string_align(0, 70, 0, "Hello, world!")

drone.close()

```
