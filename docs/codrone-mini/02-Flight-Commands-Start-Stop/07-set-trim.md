---
custom_edit_url: null
id: set-trim
title: set_trim()
---

##### Description

You can set the **roll** and **pitch** trim of the drone in case your drone is drifting. For example, if the drone is drifting to its right, you may want to set the roll to a small negative value. This trim will remain saved, even after powering off until you've changed the trim either programmatically, or done a reset with the remote. **NOTE:** If you're setting the trim right before a takeoff, make sure to add a ```time.sleep(1)``` before the ```takeoff()```, otherwise the takeoff commmand might be skipped.


##### Syntax

```set_trim(roll, pitch)```


##### Parameters

**roll**: the power of the roll, which is an int from -100 to 100<br />
**pitch**: the power of the pitch, which is an int from -100 to 100<br />

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

drone.set_trim(-1, 0) # example: drone is drifting right, so trim to roll left a little bit

time.sleep(1)		# Add a time.sleep(1) before takeoff if you're planning to set the trim before takeoff
drone.takeoff()
drone.hover(3)
drone.land()
```