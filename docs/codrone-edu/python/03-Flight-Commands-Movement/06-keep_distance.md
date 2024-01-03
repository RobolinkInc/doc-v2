---
custom_edit_url: null
id: 06-keep_distance
title: keep_distance()

---

##### Description

A looped method that makes the drone fly forward until it reaches a desired distance. Once the desired distance in reached the drone will maintain that distance. The sensor range is up to 150 cm.


##### Syntax
```keep_distance()```
```keep_distance(timeout)```
```keep_distance(distance)```
```keep_distance(timeout, distance)```

##### Parameters
**timeout**: the duration in seconds that the function will execute. The default value is 2 seconds. <br />
**distance**: the distance in centimeters the drone will stop and maintain distance in front of an object. The default value is 50 centimeters.

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
# maintain a distance of 60cm from an object once detected for 10 seconds
drone.keep_distance(10, 60)
drone.land()
drone.close()
```