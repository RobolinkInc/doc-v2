---
custom_edit_url: null
id: 01-pair
title: pair()
---

##### Description
This function connects your controller with the program. You can also set the specific USB port name.

##### Syntax
```pair()```

##### Parameters
**port_name:** A string containing the port name or number.

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
	
drone.hover(3)
drone.land()
drone.close()
```