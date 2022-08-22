---
custom_edit_url: null
id: 02-get_button_data
title: get_button_data()
---

##### Description

get_button_data is a function that will return a list of information about the most recent button pressed

##### Syntax
```get_button_data()```


##### Parameters

None


##### Returns

A list a of data that includes the time of the current program, the number associated with the most recent button pressed, and
finally the state of the most recent button pressed (Down, Pressed, Up)

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    print(drone.get_button_data())

```