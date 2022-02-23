---
custom_edit_url: null
title: land()
menu: land()
taxonomy:

	category: flight-command-startstop
---

##### Description

This function makes the drone stop all commands, hovers, and makes a soft landing where it is. <br />
The function will also zero-out all of the flight motion variables to 0.


##### Syntax
```land()```

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
drone.takeoff()

drone.hover(3)
drone.land()
drone.close()
```

###### Arduino
```c
//Arduino code
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //below this have to code in setup
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.takeoff();      // take off and hover for 3 second
    CoDrone.hover(3);       // hover for 3 second
    CoDrone.land();     //landing   
}

void loop(){

}
```