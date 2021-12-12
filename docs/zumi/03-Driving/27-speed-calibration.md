---
title: speed_calibration()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: speed_calibration
---

##### Description
In order to use this method you will need a speed calibration sheet (Click [here](https://learn.robolink.com/wp-content/uploads/2021/06/calibration.pdf) for a PDF version).
Zumi will drive over 5 horizontal white lines that are 2 centimeters wide.
The slope and y_intercept will be generated for the best fit line of the speed prediction.
These values will be saved to the Zumi as a text file.

This function is necessary for move_to_coordinate(), move_inches(), and move_centimeters().

##### Syntax
```speed_calibration()```<br />
```speed_calibration(speed=40, ir_threshold=100, time_out=3, cm_per_brick=2, show_graphs=False)```<br />


##### Parameters
speed: Integer value that goes from (0 - 80). The lower the more accurate the speed prediction.<br />
ir_threshold: Integer value for the bottom left IR threshold (0-255).<br />
time_out: The number of seconds before the timeout.<br />
cm_per_brick: The width of each road marker in centimeters.<br />
show_graphs: Boolean default to False. If set to True, a graph will be displayed with the best fit line prediction. *Note: You may need to run this function twice to see the graph.<br />


##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
zumi = Zumi()

# Place Zumi on the black portion of the speed calibration sheet 
zumi.speed_calibration()

# To show the graphs, replace the original "zumi.speed_calibration" with the following line  
# zumi.speed_calibration(show_graphs = True) 


```

