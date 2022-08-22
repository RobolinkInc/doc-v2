---
custom_edit_url: null
id: 07-controller_draw_image
title: controller_draw_image()
---

##### Description

draws image when given a pixel_list of image data

##### Syntax
```controller_draw_image(pixel_list)``` <br />

##### Parameters

**pixel_list**: the list of image data. can be obtained using get_image_data() function.

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

image = get_image_data("example.png") # where example.png is an image in the same directory as the program

drone.controller_draw_image(image) # draws the image onto the controller's screen

drone.close()

```