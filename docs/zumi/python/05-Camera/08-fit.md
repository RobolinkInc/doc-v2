---
custom_edit_url: null
title: fit()
menu: fit()
taxonomy:
    tag: zumi-library
    category: camera
---

##### Description
Fits values for prediction. By default HSV is fitted.

##### Syntax
```fit(values)```<br />

##### Parameters
**values**: values to be fitted for prediction. by default hsv is fitted.
 
##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
from zumi.util.camera import Camera
from zumi.util.screen import Screen
from zumi.util.color_classifier import ColorClassifier
import time
camera = Camera()
screen = Screen()
zumi = Zumi()

knn = ColorClassifier()
train = knn.load_model("project_name")
knn.fit("hsv") # Fitting to HSV

camera.start_camera()
while True:
    user_input = input("Press 'enter' to predict or 'q to quit:  ") 
    if user_input == "q":
        break
    image = camera.capture()
    predict = knn.predict(image)
    screen.draw_text_center(predict)
camera.close()
```