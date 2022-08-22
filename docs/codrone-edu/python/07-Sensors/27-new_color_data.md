---
custom_edit_url: null
id: 27-new_color_data
title: new_color_data()
---

##### Description

new_color_data() is a function that creates a new dataset of custom color prediction data.

##### Syntax
```new_color_data(label, data, dataset)```<br />


##### Parameters

**label**: String label name that will be used for the filename.<br />
**data**: List of HSV data samples<br />
**dataset**: String folder name where the text file will be stored.<br />

##### Returns

None

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *
import time
drone = Drone()
drone.pair()
dataset = "color_data"
colors = ["green", "purple", "red", "lightblue", "blue", "yellow", "black", "white"]
for color in colors:
    data = []
    samples = 500
    for i in range(1):
        print("Sample: ", i+1)
        next = input("Press enter to calibrate " + color)
        print("0% ", end="")
        for j in range(samples):
            color_data = drone.get_color_data()[0:9]
            data.append(color_data)
            time.sleep(0.005)
            if j % 10 == 0:
                print("-", end="")
        print(" 100%")
    drone.new_color_data(color, data, dataset)
print("Done calibrating.")
```