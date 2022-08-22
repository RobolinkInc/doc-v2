---
custom_edit_url: null
id: 30-set_initial_pressure
title: set_initial_pressure()
---

##### Description

This function saves an initial pressure reading to the drone. This function is used in combination with other functions such as height_from_pressure()

##### Syntax
```set_initial_pressure()```

##### Parameters

None

##### Returns

None

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

# Here is where we save our initial pressure. Now the 'height_from_pressure()' function has a reference for height
drone.set_initial_pressure()

# The drone will not take off in this example but by moving it up and down manually the resulting height will print
for i in range(300):
    print(drone.height_from_pressure(), " millimeters")
    time.sleep(0.2)
```