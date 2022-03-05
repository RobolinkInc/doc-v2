---
custom_edit_url: null
title: is_upside_down()
menu: is_upside_down() / isUpsideDown()
taxonomy:

	category: status-checkers
---

##### Description

This function checks whether the drone is upside-down and returns a boolean

##### Syntax
Python: ```is_upside_down()```<br />
Arduino: ```isUpsideDown()```

##### Parameters

None

##### Returns

Boolean of whether the drone is upside-down

##### Example Code
###### Python
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

# takeoff when drone isn’t upside down
if not drone.is_upside_down():
    drone.takeoff()
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

    if(CoDrone.isUpsideDown()==false)   // if drone is not upside down take off the drone
        CoDrone.takeoff();  
}

void loop(){

}
```