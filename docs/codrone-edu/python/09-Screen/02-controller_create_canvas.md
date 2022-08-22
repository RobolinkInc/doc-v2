---
custom_edit_url: null
id: 02-controller_create_canvas
title: controller_create_canvas()
---

##### Description

Creates a new image object for drawing <br />

##### Syntax
```controller_create_canvas()``` <br />

##### Parameters

None

##### Returns

Returns a new image object that is 127 x 63 pixels

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
image = drone.controller_create_canvas() # see controller_draw_canvas for how to draw on this new image object
drone.close()

```