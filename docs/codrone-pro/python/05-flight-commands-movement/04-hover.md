---
custom_edit_url: null
title: hover()
menu: hover()
tag: codrone-library
taxonomy:

	category: flight-command-movement
---

##### Description

This function makes the drone hover for a given amount of time. <br />
If you enter a 0 or None, it will hover indefinitely until given a another command.

##### Syntax
```hover(duration)```

##### Parameters

**duration** : the duration of the hovering in seconds.<br />

##### Returns

None

##### Example Code
###### Python
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()
drone.takeoff()

drone.hover(3)
drone.land()
drone.close()
```

###### Arduino
```c
//Arduino code
#include<CoDrone.h>

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.takeoff();      // take off and hover for 3 second
    CoDrone.hover(3);       // hover for 3 second
    CoDrone.land();         //landing   
}

void loop(){

}
```