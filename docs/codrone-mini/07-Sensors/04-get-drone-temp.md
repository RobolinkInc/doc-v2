---
title: get_drone_temp()
taxonomy:
    category:
        - sensors
    tag:
        - CDM-library
menu: get_drone_temp()
---

# get_drone_temp()

##### Description

This is a getter function gets the drone's **temperature** from the barometer.<br />
The sensor reads the drone’s temperature, not the air around it.

##### Syntax
```get_drone_temp()```

##### Parameters

None

##### Returns

The temperature in Celsius as an integer.

##### Example Code
###### Python
```python
#Python code
import CoDrone_mini
import time

drone = CoDrone_mini.CoDrone()
drone.pair()

# print the temperature
time.sleep(1) # to prevent skipping for an accurate reading
temperature  = drone.get_drone_temp()
print(temperature)
```
