---
custom_edit_url: null
title: eye_strobe()
menu: eye_strobe() / eyeStrobe()
tag: codrone-library
taxonomy:

	category: LED
---

##### Description

This function makes the arms to strobe in various colors

##### Syntax
Python:<br />
```eye_strobe()```<br />

Arduino:<br />
```eyeStrobe()```<br />

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

# strobe the eyes
drone.eye_strobe()
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

    // strobe the eyes
    CoDrone.eyeStrobe();
}

void loop(){

}
```