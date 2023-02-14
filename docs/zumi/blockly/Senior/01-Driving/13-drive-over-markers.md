---
custom_edit_url: null
id: 13-drive-over-markers
title: drive over markers
---

##### Block

![drive over markers block image](drive_over_markers.png)

##### Description

This function was designed for the [Zumitown Mat](https://www.robolink.com/products/zumitown-mat). Zumi will drive over the specified number of alternating black and white horizontal lines at least 2 centimeters wide. Zumi will stop when the number of markers have been crossed or if the timeout ends, whichever is first. (Avoid making the speed very high, zumi will most likely overshoot since it has a lot of speed)

##### Parameters

**markers**: An integer number of road markers to drive over<br />
**speed**: Positive integer value between 0 and 80<br />
**IR_threshold**: An integer IR threshold value 0-255 for the bottom left IR sensors to detect black or white.<br />
**time_out**: A float value for the timeout in seconds<br />

##### Returns

None

##### Example

Drive over 5 markers with a timeout of 3 seconds.
![drive over markers example](drive_over_markers.png)
