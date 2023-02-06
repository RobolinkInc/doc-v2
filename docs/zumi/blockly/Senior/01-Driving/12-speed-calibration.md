---
custom_edit_url: null
id: 12-speed-calibration
title: speed calibration
---

##### Block

![speed calibration block image](speed_calibration.png)

##### Description

In order to use this method you will need a speed calibration sheet (Click [here](https://learn.robolink.com/wp-content/uploads/2021/06/calibration.pdf) for a PDF version). Zumi will drive over 5 horizontal white lines that are 2 centimeters wide. The slope and y_intercept will be generated for the best fit line of the speed prediction. These values will be saved to the Zumi as a text file.

This function is necessary for move_to_coordinate(), move_inches(), and move_centimeters().

##### Parameters

None <!-- image -->

##### Returns

None

##### Example

Place Zumi on the black portion of the speed calibration sheet
![speed calibration example](speed_calibration.png)
