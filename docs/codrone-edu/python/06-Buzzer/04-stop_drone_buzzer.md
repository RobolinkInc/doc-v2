---
custom_edit_url: null
id: 04-stop_drone_buzzer
title: stop_drone_buzzer()
---

##### Description

Stops the drone buzzer if started in the background.

##### Syntax
```start_drone_buzzer()```

##### Parameters

None

##### Returns

None

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

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