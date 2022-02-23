---
custom_edit_url: null
title: get_opt_flow_position()
menu: get_opt_flow_position() / getOptFlowPosition()
taxonomy:

	category: sensors
---

##### Description

This function gets the x and y coordinates from the optical flow sensor.<br/>Keep in mind, the positioning does not take rotation into account.

##### Syntax
Python: ```get_opt_flow_position()```<br />
Arduino: ```getOptFlowPosition()```

##### Parameters

None

##### Returns

Outputs to visual UI. In code, it returns a class in Python and struct in Arduino.

##### Example Code
###### Python
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

# print the optical flow position x,y value
position = drone.get_opt_flow_position()
print(position.X, position.Y)
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
    // Struct for get optical flow sensor data
    optdata opt;

    CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);   //link module mode change => Active
    opt = CoDrone.getOptFlowPosition();                     //save request data
    delay(100);

    CoDrone.Send_LinkModeBroadcast(LinkModeMute);           //link module mode change => Mute
    delay(100);

    Serial.println("");
    Serial.println("--------- Now -----------");
    Serial.print("opt x : \t");
    Serial.println(opt.x);
    Serial.print("opt y : \t");
    Serial.println(opt.y);  
}
```