---
custom_edit_url: null
id: 05-start_controller_buzzer
title: start_controller_buzzer()
---

##### Description

This function allows the controller buzzer to be played in the background while other commands are given to the drone.

##### Syntax
```start_controller_buzzer(note)```

##### Parameters

**note**: Integer frequency in Hz or a Note object <br /> 


##### Returns

None

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.start_controller_buzzer(Note.A4) # starting the buzzer

# these commands run while the buzzer runs in the background
for i in range(3):
    drone.set_controller_LED(255, 0, 0, 100)
    time.sleep(0.5)
    drone.set_controller_LED(0, 255, 0, 100)
    time.sleep(0.5)

drone.stop_controller_buzzer() # stops the buzzer
drone.close()
```