---
title: move_centimeters()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: move_centimeters()
---

# move_centimeters()

##### Description
This method uses a best fit linear approximation of the distance traveled over time.
It uses the equation y = mx + b, where:
* y is the distance traveled
* m is the predicted speed in centimeters per second
* x is the time elapsed
* b is the slope intercept

If the PID values are not set the internal default values will be set.

If the angle is not input Zumi will drive to whatever angle it is currently facing. 

##### Syntax
```move_centimeters(distance, angle)```<br />
```move_centimeters(distance, angle=None, k_p=None, k_i=None, k_d=None)```<br />

##### Parameters
distance: the distance in centimeters you want to travel<br />
angle: heading (0 degrees is defined when the Zumi object is created.) Default to None<br />
k_p: P-gain. Default to None.<br />
k_i: I-gain. Default to None.<br />
k_d: D-gain. Default to None.<br />

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

zumi.move_centimeters(10)
zumi.move_centimeters(10,90)
zumi.move_centimeters(15,0)
```