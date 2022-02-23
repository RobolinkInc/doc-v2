---
custom_edit_url: null
title: get_height()
menu: get_height() / getHeight()
taxonomy:

	category: sensors
---

##### Description

This is a getter function gets the current height of the drone from the object directly below its IR sensor. 

##### Syntax
Python: ```get_height()```<br />
Arduino: ```getHeight()```

##### Parameters

None

##### Returns

The current height above the object directly below the drone’s IR height sensor as an int(mm).

##### Example Code
###### Python
```python
#Python code
import CoDrone
from CoDrone import Direction
import time

drone = CoDrone.CoDrone()
drone.pair()

drone.takeoff()

# fly between 500mm and 1000mm
for i in range(200):
    height = drone.get_height()
    if height > 1000:
        drone.go(Direction.DOWN)
    elif height < 500:
        drone.go(Direction.UP)
    time.sleep(0.1)

drone.land()
drone.close()
```

###### Arduino
```c
//Arduino code
//Code for print request data to serial monitor
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

}

void loop(){
    int height;

    CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);   //link module mode change => Active
    height = CoDrone.getHeight();                           //save request data
    delay(100);

    CoDrone.Send_LinkModeBroadcast(LinkModeMute);           //link module mode change => Mute
    delay(100);

    Serial.println("");
    Serial.println("--------- Now -----------");
    Serial.print("height : \t");
    Serial.println(height); 
}
```