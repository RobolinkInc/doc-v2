---
custom_edit_url: null
id: 02-land
title: land()
---

##### Description

This function makes the drone stop all commands, hover, and make a soft landing where it is. The function will also reset the flight motion variables to 0. **NOTE:** If you want to take off and immediately land, it is recommended to run a ```hover()``` or ```time.sleep()``` in between the ```takeoff()``` and ```land()```, because the CoDrone EDU may miss the land command otherwise.


##### Syntax
```land()```

##### Parameters

None

##### Returns

None

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone=Drone()
drone.pair()
try:
    drone.takeoff()
    drone.hover(3)
    drone.land()

finally:
    drone.emergency_stop()
    drone.close()
```