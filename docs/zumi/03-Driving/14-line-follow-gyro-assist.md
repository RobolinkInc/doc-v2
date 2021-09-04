---
title: line_follow_gyro_assist()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: line_follow_gyro_assist()
---

# line_follow_gyro_assist()

##### Description
Drives Zumi forward at a default speed of 20 for 1 second in the direction Zumi is currently facing. Zumi will stop when the duration or timeout is over.
If the bottom IR sensors detect a black line, Zumi will continue to drive. If one or the other sensor detects white, Zumi will auto-adjust to stay on the line.
If both sensors detect white, Zumi will stop even if the duration has not been met.

##### Syntax
```line_follow_gyro_assist(speed=20, duration=1.0)```<br />
```line_follow_gyro_assist(speed=20, duration=1, angle=None, angle_adj=2, l_th=100, r_th=100)```<br />

##### Parameters
speed: Positive integer value for speed between 0 and 80<br />
duration: Number of seconds Zumi will drive on the line<br />
angle: Heading or desired angle (default is None which is Zumi's current heading)<br />
angle_adj: The number of degrees Zumi will turn if one IR sensor detects white. <br />
l_th: threshold of the bottom left IR sensor.<br />
r_th: threshold of the bottom right IR sensor.<br />

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

zumi.line_follow_gyro_assist(speed=10,duration=3,angle_adj=1.1)

```