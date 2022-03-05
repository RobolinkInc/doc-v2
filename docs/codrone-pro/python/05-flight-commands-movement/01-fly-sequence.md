---
custom_edit_url: null
title: fly_sequence()
menu: fly_sequence() / flySequence()
taxonomy:

	category: flight-command-movement
---

##### Description

This function make drone fly specific shape and hover after finish. The options are square, circle, spiral, triangle, hop, sway, zigzag

##### Syntax
Python: ```fly_sequence(sequence)```<br />
Arduino: ```flySequence(sequence)```

##### Parameters

**sequence**: SQUARE, CIRCLE, SPIRAL, TRIANGLE, HOP, SWAY, ZIGZAG

##### Returns

None

##### Example Code
###### Python
```python
#Python code
import CoDrone
from CoDrone import Sequence

drone = CoDrone.CoDrone()
drone.pair()

drone.takeoff()
drone.fly_sequence(Sequence.TRIANGLE)   # Fly triangle shape
drone.fly_sequence(Sequence.SPIRAL)     # Fly spiral shape
drone.fly_sequence(Sequence.SQUARE)     # Fly square shape
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
    CoDrone.flySequence(TRIANGLE);  // Fly triangle shape
    CoDrone.flySequence(SPIRAL);    // Fly spiral shape
    CoDrone.flySequence(SQUARE);    // Fly square (right -> forward -> left -> backward)
    CoDrone.land();
}

void loop(){

}
```