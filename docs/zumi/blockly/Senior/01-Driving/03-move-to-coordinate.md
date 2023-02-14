---
custom_edit_url: null
id: 03-move-to-coordinate
title: move to coordinate
---

##### Block

![move to coordinates block image](move_to_coordinate.png)

##### Description

Drives Zumi to an (x,y) position from the origin. The origin (0,0) is defined at Zumi object creation. To reset the origin, use the ```reset_coordinate()``` block. This method uses a best fit linear approximation of the distance traveled over time. Zumi will only keep update her coordinates when driving with this block. Using any other drive command will not keep track of her location.

##### Parameters

![move to coordinate parameters](move_to_coordinate_params.png)
**x**: A float value for the x coordinate <br /> 
**y**: A float value for the y coordinate <br /> 
**unit**: Units of the coordinates, centimeters or inches

##### Returns

None

##### Example

![move to coordinate example](move_to_coordinate_example.png)
