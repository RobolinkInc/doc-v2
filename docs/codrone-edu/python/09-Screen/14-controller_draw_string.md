---
custom_edit_url: null
id: 14-controller_draw_string
title: controller_draw_string()
---

##### Description

Draws a string from the given x_start, x_end and y positions. The string can be aligned along the x_start and x_end positions

##### Syntax
```controller_draw_string(x, y, string, string_font, pixel_color)``` <br />

##### Parameters

**x**: starting x position <br />
**y**: starting y position <br />
**string**: the string to write <br />
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

drone.sendDisplayDrawString(0, 0, "Hello, world!")

drone.close()

```