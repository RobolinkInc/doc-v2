---
custom_edit_url: null
title: set_plot_sensor()/draw_plot_sensor()
menu: set_plot_sensor()/draw_plot_sensor()
taxonomy:
    tag: codrone-library
    category: sensors
---

##### Description

This function is used for drawing sensor data.  The function should be used in pairs, with set_plot_sensor() starting the recording process, and draw_plot_sensor() doing the actual drawing process.  You can plot the height sensor, the temperature sensor, the gyro angles, gyro raw sensor values, the image flow sensor, and the accelerometer sensor.

##### Syntax
Python: ```set_plot_sensor(sensor)/draw_plot_sensor()```<br />


##### Parameters

sensor: PlotType.height, PlotType.angle, PlotType.temperature, PlotType.gyro, PlotType.image_flow, PlotType.accel

##### Returns

The voltage of the battery as an a float

##### Example Code
###### Python
```python
#Python code
import CoDrone
from CoDrone.protocol import PlotType
import time

drone= CoDrone.CoDrone()
drone.pair(drone.Nearest)

# set up sensor for ploting. It will grab sensor data every second
drone.set_plot_sensor(PlotType.height)
# drone.set_plot_sensor(PlotType.height, PlotType.angle, PlotType.temperature, PlotType.gyro, PlotType.image_flow, PlotType.accel)
#PlotType.angle, PlotType.temperature, PlotType.gyro, PlotType.image_flow, PlotType.accel
drone.takeoff()
time.sleep(5)
drone.land()
drone.draw_plot_sensor()
drone.close()
```