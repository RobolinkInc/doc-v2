---
custom_edit_url: null
title: drive_over_markers()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: drive_over_markers()
---

##### Description
Zumi will drive over the specified number of alternating black and white horizontal lines at least 2 centimeters wide. Zumi will stop when the number of markers have been crossed or if the timeout ends, whichever is first. (Avoid making the speed very high, zumi will most likely overshoot since it has a lot of speed)

##### Syntax
```zumi.drive_over_markers(5)```<br />
```zumi.drive_over_markers(road_markers=3,speed=10,ir_threshold=120,time_out=3)
```<br />

##### Parameters
road_markers: The number of road markers to drive over<br />
speed: Positive integer value for speed between 0 and 80<br />
ir_threshold: The IR threshold value for the bottom left IR sensors to detect black or white.<br />
time_out: Number of seconds before the timeout ends and Zumi stops driving.<br />

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
zumi = Zumi()

#must start off in a black area.
zumi.drive_over_markers(5)

#Drive over 10 road marker with a timeout of 6 seconds
zumi.drive_over_markers(road_markers=10,speed=30,time_out=6)

```
