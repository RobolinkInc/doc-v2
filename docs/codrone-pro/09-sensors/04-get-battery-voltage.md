---
custom_edit_url: null
title: get_battery_voltage()
menu: get_battery_voltage() / getBatteryVoltage()
taxonomy:

	category: sensors
---

##### Description

This function gets the voltage of the battery

##### Syntax
Python: ```get_battery_voltage()```<br />
Arduino: ```getBatteryVoltage()```

##### Parameters

None

##### Returns

The voltage of the battery as an a float

##### Example Code
###### Python
```python
#Python code
import CoDrone

def main():
	drone = CoDrone.CoDrone()
	drone.pair()

	# print the battery voltage of drone.
	battery = drone.get_battery_voltage()
	print(battery)
	
if __name__ == '__main__':
	main()

```
###### Arduino
```c
//Arduino code
//Code for print request data to serial monitor
#include<CoDrone.h>		//header


void setup(){
	//open serial and connect
	CoDrone.begin(115200);
	CoDrone.pair(Nearest);
}

void loop(){
	int batteryVoltage;


	CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);	//link module mode change => Active
	batteryVoltage = CoDrone.getBatteryVoltage();		//save request data
	delay(100);
	    
	CoDrone.Send_LinkModeBroadcast(LinkModeMute);       	//link module mode change => Mute
	delay(100);

	Serial.println("");
	Serial.println("--------- Now -----------");
	Serial.print("batteryVoltage : \t");
	Serial.println(batteryVoltage);	
}

```