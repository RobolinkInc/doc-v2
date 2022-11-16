---
custom_edit_url: null
id: 07-stop_motors
title: stop_motors()

---

##### Description

This function immediately stops all commands and motors, so the drone will stop flying immediately. The function will also reset the flight motion variables to 0. **NOTE:** If you want to take off and stop_motors, it is recommended to run a ```hover()``` or ```time.sleep()``` in between the ```takeoff()``` and ```stop_motors()```, because the CoDrone EDU might miss the stop_motors() command.


##### Syntax
Python: ```stop_motors()```

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
drone.takeoff()
drone.hover(3) #Recommended to have a hover() or time.sleep(1) before landing
drone.stop_motors()
drone.close()
```