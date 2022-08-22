---
custom_edit_url: null
id: 01-controller_clear_screen
title: controller_clear_screen()
---

##### Description

clears all drawings from the controller screen <br />

##### Syntax
```controller_clear_screen()``` <br />
```controller_clear_screen(pixel)```

##### Parameters

**pixel**: optional parameter that assigns all pixels to either white or black. white is the default value.


##### Returns

NONE

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.controller_clear_screen()
drone.close()

```