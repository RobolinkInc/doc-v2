---
custom_edit_url: null
title: set_yaw()
menu: set_yaw() / setYaw()
taxonomy:

	category: flight-variables
---

##### Description

This is a setter function that allows you to set the yaw variable.

##### Syntax
Python: ```set_yaw(power)```<br />
Arduino: ```setYaw(power)```

##### Parameters

**power**: An int from -100 to 100 that sets the yaw variable.  The number represents the direction and power of the output for that flight motion variable. Negative yaw turns left, positive yaw turns right.

##### Returns

Boolean

##### Example Code
###### Python
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

drone.takeoff()

# Drone turns right for 1 second with 50 power
drone.set_yaw(50)
drone.move(1)

drone.land()
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

    CoDrone.takeoff();
    CoDrone.setYaw(60);     // set yaw power for 60%
    CoDrone.move(5);        // move drone for 5 seconds
    CoDrone.land();
}

void loop(){

}	
```