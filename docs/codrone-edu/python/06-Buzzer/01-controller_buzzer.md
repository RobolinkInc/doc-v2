---
custom_edit_url: null
id: 01-controller_buzzer
title: controller_buzzer()
---

##### Description

Plays a note using the controller's buzzer. <br />

##### Syntax
```controller_buzzer(note, duration)```<br />


##### Parameters

**note**: Integer frequency in Hz or a Note object.<br />
**duration**: Duration of the note in milliseconds<br />


##### Returns
None

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.controller_buzzer(400, 300)
drone.controller_buzzer(600, 300)
drone.close()
```