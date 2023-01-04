---
custom_edit_url: null
id: 03-start_drone_buzzer
title: start_drone_buzzer()
---

##### Description

This function allows the drone buzzer to be played in the background while other commands are given to the drone.

##### Syntax
```start_drone_buzzer(note)```

##### Parameters

**note**: Integer frequency in Hz or a Note object <br /> 


##### Returns

None

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

distance = 50

drone = Drone()
drone.pair()

drone.start_drone_buzzer(500) # starting the buzzer

# these commands run while the buzzer runs in the background
for i in range(5):
    drone.set_drone_LED(255, 0, 0, 100)
    time.sleep(0.5)
    drone.set_drone_LED(0, 255, 0, 100)
    time.sleep(0.5)

drone.stop_drone_buzzer() # stops the buzzer
drone.close()
```