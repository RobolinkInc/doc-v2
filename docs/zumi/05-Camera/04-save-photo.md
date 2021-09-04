---
title: save_photo()
menu: save_photo()
taxonomy:
    tag: zumi-library
    category: camera
---

# save_photo()

##### Description
Captures an image and saves it in the working directory.

##### Syntax
```save_photo()```<br />
```save_photo(file_name)```

##### Parameters
**file_name** &nbsp;&nbsp;_(type: string, defalt: current_time)_<br />
: The name of the image file that will be saved

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
#"<current_time>.jpg" file will be saved in the current working directory
camera.save_photo("Cheese") 
#"Cheese.jpg" file will be saved in the current working directory
camera.close()

    
```