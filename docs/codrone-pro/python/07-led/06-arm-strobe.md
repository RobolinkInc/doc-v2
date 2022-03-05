---
custom_edit_url: null
title: arm_strobe()
menu: arm_strobe() / armStrobe()
tag: codrone-library
taxonomy:

	category: LED
---

##### Description

This function makes the arms to strobe in various colors

##### Syntax
Python:<br />
```arm_strobe()```<br />

Arduino:<br />
```armStrobe()```<br />

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

# strobe the arms
drone.arm_strobe()
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

    // strobe the arms
    CoDrone.armStrobe();
}

void loop(){

}
```