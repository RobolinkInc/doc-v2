---
custom_edit_url: null
title: get_pitch()
menu: get_pitch() / getPitch()
taxonomy:

	category: flight-variables
---

##### Description

This is a getter function that gets the value of the pitch variable.

##### Syntax
Python: ```get_pitch()```<br />
Arduino: ```getPitch()```

##### Parameters

None

##### Returns

The power of the pitch variable (int)

##### Example Code
###### Python
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

# Print current pitch with getter function
print(“Current pitch : ”, drone.get_pitch())
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

    // save current pitch value in variable “current_pitch”
    int current_pitch = CoDrone.getPitch(); 
}
void loop(){

}
```