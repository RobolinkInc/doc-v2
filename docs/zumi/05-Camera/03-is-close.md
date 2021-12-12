---
title: is_closed()
menu: is_closed()
taxonomy:
    tag: zumi-library
    category: camera
---

##### Description
Checks if the camera stream is open

##### Syntax
```is_closed()```

##### Parameters
None

##### Returns
**Boolean** &nbsp;&nbsp;_(type: boolean)_

##### Example Code
###### Python
```python
#Python code
from zumi.util.camera import Camera

camera=Camera()
camera.start_camera()
camera.close()
print("Camera is closed?")
print(camera.is_closed())
if not camera.is_closed():
    camera.close()
```