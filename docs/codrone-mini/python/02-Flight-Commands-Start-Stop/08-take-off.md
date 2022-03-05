---
custom_edit_url: null
id: take-off
title: takeoff()
---

##### Description

This function makes the drone takeoff and hover.<br />
The drone will always hover for 3 seconds in order to stabilize before it executes the next command.<br />
If it receives no command for 8 seconds, it will automatically land.

##### Syntax
```takeoff()```

##### Parameters

None

##### Returns

None

##### Example Code
###### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()
drone.takeoff()
	
drone.hover(3)
drone.land()
drone.close()
```
