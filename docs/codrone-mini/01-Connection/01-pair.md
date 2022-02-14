---
custom_edit_url: null
id: 01-pair
title: pair()
---

##### Description
This function connects your controller with the program. You can set debug equal to True if you want to see helpful print statements that can help you debug your code. We recommend setting this to True to check if commands are being skipped. You can also set the specific USB port name.

##### Syntax
**pair()**  <br/>
**pair(port_name)** <br/>
**pair(debug=False)** <br/>
**pair(debug=False, port_name)**

##### Parameters
**port_name:** A string containing the port name or number.
**debug:** Boolean that is default to False. 

##### Returns

None

##### Example Code
###### Python
```python
#Python code
import CoDrone_mini


drone = CoDrone_mini.CoDrone()
drone.pair()   # pair automatically, may not always work
# drone.pair(debug=True) # sets the debug statements to True
# drone.pair(port_name = 'COM3')    # pair with a specific port

drone.takeoff()
drone.hover(3)
drone.land()


```