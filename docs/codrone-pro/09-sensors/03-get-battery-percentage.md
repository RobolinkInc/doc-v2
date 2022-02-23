---
custom_edit_url: null
title: get_battery_percentage()
menu: get_battery_percentage() / getBatteryPercentage()
taxonomy:

	category: sensors
---

##### Description

This function gets the battery percentage of the drone, returning a value from 0 to 100.

##### Syntax
Python: ```get_battery_percentage()```<br />
Arduino: ```getBatteryPercentage()```

##### Parameters

None

##### Returns

The battery’s percentage as an integer from 0 - 100.

##### Example Code
###### Python
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()
drone.takeoff()

# stop the drone if battery is lower than 10 percent.
battery = drone.get_battery_percentage()
if battery < 10:
    drone.emergency_stop()
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
    int batteryPercentage;

    CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);   //link module mode change => Active
    batteryPercentage = CoDrone.getBatteryPercentage();     //save request data
    delay(100);

    CoDrone.Send_LinkModeBroadcast(LinkModeMute);           //link module mode change => Mute
    delay(100);

    Serial.println("");
    Serial.println("--------- Now -----------");
    Serial.print("batteryPercentage : \t");
    Serial.println(batteryPercentage);  
}
```