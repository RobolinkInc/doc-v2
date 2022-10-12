---
custom_edit_url: null
id: 02-drone_buzzer
title: drone_buzzer()
---

##### Description

Plays a note using the drone's buzzer. <br />

##### Syntax
```drone_buzzer(note, duration)```<br />


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
drone.drone_buzzer(400, 300)
drone.drone_buzzer(600, 300)
drone.close()
```