---
custom_edit_url: null
id: 03-get_temperature
title: get_temperature()
---

##### Description

This is a getter function gets the drone's **temperature** from the barometer.<br />
The sensor reads the drone’s temperature, not the air around it. Default unit is Celcius.

##### Syntax
```get_temperature()```<br />
```get_temperature(unit)```

##### Parameters

**unit**: The unit of temperature of the drone. Available units are "C" (Celcius), "F" (Fahrenheit), and "K" (Kelvin).

##### Returns

The temperature of the drone in the given unit as a float. Default unit is Celcius.

##### Example Code
###### Python
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
temperature = drone.get_temperature()
print(temperature)
drone.close()
```