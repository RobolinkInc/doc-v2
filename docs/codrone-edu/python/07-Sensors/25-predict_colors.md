---
custom_edit_url: null
id: 25-predict_colors
title: predict_colors()
---

##### Description

Predicts what color the color sensors are currently seeing. <br />

##### Syntax
```predict_colors(color_data)```<br />


##### Parameters
**color_data**: loaded from drone.get_color_data()


##### Returns

A prediction of which color the color sensors are currently seeing

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.load_classifier("color_data_file")
color_data = drone.get_color_data()
color = drone.predict_colors(color_data)
print(color)
drone.close()
```