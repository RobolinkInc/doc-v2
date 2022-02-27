---
custom_edit_url: null
id: hover
title: hover()
---

##### Description

This function makes the drone hover for a given amount of time. <br />
If given no parameters, it will hover indefinitely until given a another command.

##### Syntax
```hover(duration)```

##### Parameters

**duration**: the duration of the hovering in seconds.<br />

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
	
drone.hover(3)   # hover for 3 seconds
#drone.hover()   # hover indefinitely 
drone.land()
drone.close()
```