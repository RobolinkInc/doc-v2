---
custom_edit_url: null
title: eye_off()
menu: eye_off() / eyeOff()
tag: codrone-library
taxonomy:

	category: LED
---

##### Description

This function turns off the eye LEDs

##### Syntax
Python:<br />
```eye_off()```<br />

Arduino:<br />
```eyeOff()```<br />

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

# turn off the eyes
drone.eye_off()
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

    // turn off the eyes
    CoDrone.eyeOff();
}

void loop(){

}
```