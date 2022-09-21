---
custom_edit_url: null
title: predict()
menu: predict()
taxonomy:
    tag: zumi-library
    category: camera
---

##### Description
Predicts a color captured from the Zumi camera.

##### Syntax
```predict(pred_features)```<br />

##### Parameters
**pred_features**: The image to draw the prediction from
 
##### Returns
**predicts**: The prediction made by the knn color classifier

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
knn.fit("hsv")

camera.start_camera()
while True:
    user_input = input("Press 'enter' to predict or 'q to quit:  ") 
    if user_input == "q":
        break
    image = camera.capture()
    predict = knn.predict(image) # Based on the image taken, the knn color classifier will predict a color
    screen.draw_text_center(predict) # This prediction gets written to the Zumi screen
camera.close()
```