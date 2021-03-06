---
custom_edit_url: null
id: land
title: land()
---

##### Description

This function makes the drone stop all commands, hover, and make a soft landing where it is. The function will also reset the flight motion variables to 0. **NOTE:** If you want to take off and immediately land, it is recommended to run a ```hover()``` or ```time.sleep()``` in between the ```takeoff()``` and ```land()```, because the CoDrone Mini will often miss the land command otherwise.


##### Syntax
```land()```

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
drone.takeoff()
drone.hover(3) # include a hover() or time.sleep() to prevent land() from skipping
drone.land()
drone.close()
```