---
custom_edit_url: null
title: set_pitch()
menu: set_pitch() / setPitch()
taxonomy:

	category: flight-variables
---

##### Description
This is a setter function that allows you to set the pitch variable.

##### Syntax
Python: ```set_pitch(power)```<br />
Arduino: ```setPitch(power)```

##### Parameters

**power**: An int from -100 to 100 that sets the pitch variable.  The number represents the direction and power of the output for that flight motion variable. Negative pitch is backwards, positive pitch is forwards.

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

# Drone goes right for 1 second with 50 power
drone.set_pitch(50)
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
    CoDrone.setPitch(60);       // set pitch power for 60%
    CoDrone.move(5);        // move drone for 5 seconds
    CoDrone.land();
}

void loop(){

}	
```