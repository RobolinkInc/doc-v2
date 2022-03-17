---
custom_edit_url: null
id: get_flight_state
title: get_flight_state()

---

##### Description

get_flight_state() is a getter function that gets the current flight state of the drone.


##### Syntax
```get_flight_state()```


##### Parameters

None

##### Returns

The current flight state of the drone.

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.get_flight_state()
drone.close()
```