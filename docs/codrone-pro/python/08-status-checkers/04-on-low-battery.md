---
custom_edit_url: null
title: on_low_battery()
menu: on_low_battery() / onLowBattery()
taxonomy:

	category: status-checkers
---

##### Description

Add callback function when CoDrone battery percentage is lower than 50%

##### Syntax
Python: ```on_low_battery(function)```<br />
Arduino: ```onLowBattery(function)```

##### Parameters

call back function 

##### Returns

None

##### Example Code
###### Python
```python
#Python code
import CoDrone
from CoDrone import Mode

# define function for change drone's arm LED green
def set_arm_green():
    drone.set_arm_LED(0,255,0, Mode.SOLID)

drone = CoDrone.CoDrone()
drone.pair()

#set eventhandler to run self-defined "set_arm_green" function
drone.on_low_battery(set_arm_green)
drone.close()
```

###### Arduino
```c
//Arduino code
//Not support
```