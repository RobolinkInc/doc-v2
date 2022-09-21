---
custom_edit_url: null
title: load_model()
menu: load_model()
taxonomy:
    tag: zumi-library
    category: camera
---

##### Description


##### Syntax
```load_model(name)```<br />

##### Parameters
**name**: The project name. This will depend on what you chose to name your project
 
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
train = knn.load_model("project_name") # Loads the model based on your project name. Make sure to use the project name you chose!
knn.fit("hsv")

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