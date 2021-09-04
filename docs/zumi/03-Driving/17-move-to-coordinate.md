---
title: move_to_coordinate()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: move_to_coordinate()
---

# move_to_coordinate()

##### Description
This method drives Zumi from an origin to an x,y position in inches. Using this function will keep track of Zumi's coordinates. To reset the origin, use the reset_coordinate() function. This method uses a best fit linear approximation of the distance traveled over time.
It uses the equation y = mx + b, where:
* y is the distance traveled
* m is the predicted speed in centimeters per second
* x is the time elapsed
* b is the slope intercept


##### Syntax
```move_to_coordinate(desired_x, desired_y)```<br />
```move_to_coordinate(desired_x, desired_y, k_p=None, k_i=None, k_d=None, units="in"):
```<br />

##### Parameters
desired_x: The x-coordinate of the destination<br />
desired_y: The y-coordinate of the destination<br />
k_p: P-gain. Default to None.<br />
k_i: I-gain. Default to None.<br />
k_d: D-gain. Default to None.<br />
units: Defaults to "in" or inches. Set it to "cm" for centimeters.<br />

##### Returns
None

##### Example Code
###### Python Sample 1
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

# a square
zumi.move_to_coordinate(6,0)
zumi.move_to_coordinate(6,6)
zumi.move_to_coordinate(0,6)
zumi.move_to_coordinate(0,0)
```

###### Python Sample 2
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()

# Avoid this
zumi.move_to_coordinate(10,0)
time.sleep(1)
# zumi wont drive the second time since its already at (10, 0)
zumi.move_to_coordinate(10,0)
```

###### Python Sample 3
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()

# Avoid this
zumi.move_to_coordinate(10,0)
time.sleep(1)

zumi.reset_coordinate()
# zumi will drive the second time since its position will be reset, and will move a total of 20 inches from the start
zumi.move_to_coordinate(10,0)
```