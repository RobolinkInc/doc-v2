---
title: close()
menu: close()
taxonomy:
    tag: zumi-library
    category: camera
---

##### Description
Releases camera's resources 

##### Syntax
```close()```

##### Parameters
None

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.util.camera import Camera


camera=Camera()
camera.start_camera()
camera.save_photo()
camera.close()
```