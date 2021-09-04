---
title: turn()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: turn()
---

# turn()

##### Description
Zumi will turn to a desired angle.

##### Syntax
```turn(desired_angle)```<br />
```turn(desired_angle, duration=1.5, max_speed=25, accuracy=1):```<br />
 


##### Parameters
desired_angle: Angle to turn. Positive degrees to the left. Negative degrees to the right.<br />
duration: Number of seconds Zumi will perform the command.<br />
speed: The max motor speed for turning. A positive integer value between 0 and 80.<br />
accuracy: The tolerance of +- degrees.Ex: an accuracy = 1 will be +1 or -1 degree off from desired_angle.<br />


##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
# zumi will turn to the left
zumi.turn(90)

#zumi will turn to the right 90 degrees from the starting angle
zumi.turn(-90)

```