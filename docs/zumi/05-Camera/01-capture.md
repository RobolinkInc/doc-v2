---
title: capture()
taxonomy:
    category:
        - camera
    tag:
        - zumi-library
menu: capture()
---

# capture()

##### Description
Takes a picture using the PiCamera and saves it in an array. 

##### Syntax
```capture()```

##### Parameters
None

##### Returns
**Numpy array representing captured image** &nbsp;&nbsp;_(type: ndarray)_

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
time.sleep(5)   
camera.close()
```