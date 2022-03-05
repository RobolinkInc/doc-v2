---
custom_edit_url: null
title: reset_default_led()
menu: reset_default_led() / resetDefaultLED()
tag: codrone-library
taxonomy:

	category: LED
---

##### Description

This function sets the LED color of the eyes and arms back to red and sets the mode to SOLID, which is the original default color.

##### Syntax
Python: ```reset_default_led()```<br />
Arduino: ```resetDefaultLED()```

##### Parameters

None

##### Returns

None

##### Example Code
###### Python
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

drone.reset_default_led()
drone.close()
```

###### Arduino
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    // Reset Drone’s LED to holding the Red color 
    CoDrone.resetDefaultLED();  
}

void loop(){

}
```