---
custom_edit_url: null
title: get_pressure()
menu: get_pressure() / getPressure()
taxonomy:
	category: sensors
---

##### Description

This is a getter function gets the data from the barometer sensor.

##### Syntax
Python: ```getPressure()```<br />
Arduino: ```getPressure()```

##### Parameters

None

##### Returns

The barometer’s air pressure in milibars at (0.13 resolution).

##### Example Code
###### Python
```python
Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

# print the pressure
pressure = drone.get_pressure()
print(pressure)
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
    int pressure;

    CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);   //link module mode change => Active
    pressure = CoDrone.getPressure();                       //save request data
    delay(100);

    CoDrone.Send_LinkModeBroadcast(LinkModeMute);           //link module mode change => Mute
    delay(100);

    Serial.println("");
    Serial.println("--------- Now -----------");
    Serial.print("pressure : \t");
    Serial.println(pressure);   
}
```