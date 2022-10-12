---
custom_edit_url: null
id: 24-load_classifier
title: load_classifier()
---

##### Description

load_classifier is a function that can load a custom color set onto the CoDrone EDU. If no custom color set is given then the default color set is loaded.
There is also an option to show the color set as a graph.

##### Syntax
```load_classifier()```<br />
```load_classifier(dataset, show_graph)```


##### Parameters
**dataset**: An optional parameter to load a custom color set. If no color set is given then the default color set will be used. <br /> 
**show_graph**: An optional boolean parameter that will show a graph of the color set data. The default value is False. <br />


##### Returns

None

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
# This example assumes the "custom_color_data" directory exists
drone.load_classifier("custom_color_data")

color_data = drone.get_color_data()
color = drone.predict_colors(color_data)
print(color)
drone.close()
```