---
custom_edit_url: null
id: reset-trim
title: reset_trim()
---

##### Description

You can reset the roll and pitch trim of the drone in case your drone is drifting. This function will reset the roll and pitch trim values back to zero. NOTE: If you're resetting the trim right before a takeoff, make sure to add a ```time.sleep(1)``` before the ```takeoff()```, otherwise the take off might be skipped.


##### Syntax

```reset_trim()```


##### Parameters
None

##### Returns

None

##### Example Code
###### Python
```python
#Python code
import CoDrone_mini
import time

drone = CoDrone_mini.CoDrone()
drone.pair()
drone.set_trim(5,0)
print(drone.get_trim())
drone.takeoff()
drone.hover(3)
drone.land()
drone.reset_trim() 
print(drone.get_trim())
drone.close()
```