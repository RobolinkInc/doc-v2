---
title: start_camera()
menu: start_camera()
taxonomy:
    tag: zumi-library
    category: camera
---

##### Description
Turns on the camera

##### Syntax
```start_camera()```<br />

##### Parameters
None

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.util.camera import Camera
import cv2
import IPython.display
import PIL.Image
from io import BytesIO
import time

# you can change the resolution of the camera
# using the image_w = image width 
# and the   image_h = image heigth 
#camera = Camera(image_w=1280,image_h=960)
#camera = Camera(image_w=1024,image_h=768)
#camera = Camera(image_w=128,image_h=64)
camera = Camera(image_w=60,image_h=32)

camera.start_camera()

time_start = time.time()
try: 
    for i in range(30):
        frame = camera.capture()

        img = PIL.Image.fromarray(frame, "RGB")
        buffer = BytesIO()
        img.save(buffer,format="JPEG") 
        
        IPython.display.display(IPython.display.Image(data=buffer.getvalue()))

        IPython.display.clear_output(wait=True) 
        
finally:
    print(30/(time.time()-time_start))
```