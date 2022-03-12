---
custom_edit_url: null
id: 03-detect_wall
title: detect_wall()

---

##### Description

Returns True when a distance below the threshold is reached. The range of front sensor is from 0mm-1000mm (0cm-100cm)


##### Syntax
```detect_wall()```
```detect_wall(distance)```

##### Parameters
**distance**: An optional parameter that is the threshold in millimeters that will return True. The default value is 500

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