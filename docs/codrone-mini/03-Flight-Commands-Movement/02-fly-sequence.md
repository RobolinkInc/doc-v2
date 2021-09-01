---
title: fly_sequence()
taxonomy:
    category:
        - flight-command-movement
    tag:
        - CDM-library
menu: fly_sequence()
---

# fly_sequence()

##### Description

This function makes the drone fly in a pre-determined shape. The options are **square**, **spiral**, **triangle**, **hop**, **sway**, and **zigzag**. It's recommended that you **make sure the drone is trimmed and hovering stably** before running a sequence, otherwise the sequence may not appear as expected.

##### Syntax
Python: ```fly_sequence(sequence)```

##### Parameters

**sequence**: SQUARE, SPIRAL, TRIANGLE, HOP, SWAY, ZIGZAG

##### Returns

None

##### Example Code
###### Python
```python
#Python code
import CoDrone_mini
from CoDrone_mini import Sequence

drone = CoDrone_mini.CoDrone()
drone.pair()

drone.takeoff()
drone.fly_sequence(Sequence.ZIGZAG)	# Fly zigzag (move left and right 2 times each while move forward)
drone.fly_sequence(Sequence.SPIRAL)		# Fly Spiral shape
drone.fly_sequence(Sequence.SQUARE)		# Fly square shape

drone.land()
```