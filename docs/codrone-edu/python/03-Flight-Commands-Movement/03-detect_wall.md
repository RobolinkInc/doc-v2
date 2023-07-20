---
custom_edit_url: null
id: 03-detect_wall
title: detect_wall()

---

##### Description

Returns True when a distance below the threshold is reached. The sensor range is up to 1.5 meters (150cm)


##### Syntax
```detect_wall()```
```detect_wall(distance)```

##### Parameters
**distance**: An optional parameter that is the threshold in centimeters that will return True. The default value is 50

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
# if a wall is detected in less than 500mm true will be returned.
if drone.detect_wall():
    print("wall detected!")
else:
    print("no wall detected!")

drone.land()
drone.close()
```