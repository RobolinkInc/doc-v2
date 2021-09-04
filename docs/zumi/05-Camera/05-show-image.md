---
title: show_image()
published: true
taxonomy:
    category:
        - camera
    tag:
        - zumi-library
menu: show_image()
---

# show_image()

##### Description
Displays an image taken from Zumi's camera.

##### Syntax
```show_image(frame)```<br />

##### Parameters
frame: An image array 

##### Returns
None

##### Example Code
###### Python
```python
#Python code

from zumi.util.camera import Camera
import time

camera=Camera()
camera.start_camera()

frame = camera.capture()
camera.show_image(frame)
camera.close()
```