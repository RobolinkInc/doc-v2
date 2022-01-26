---
custom_edit_url: null
title: get_trim()
menu: get_trim() / getTrim()
taxonomy:

	category: sensors
---

##### Description

This function gets the current trim values of the drone.

##### Syntax
Python: ```get_trim()```<br />
Arduino: ```getTrim()```

##### Parameters

None

##### Returns

Outputs to visual UI. In code, it returns a class in Python and struct in Arduino.

##### Example Code
###### Python
```python
#Python code
import CoDrone

def main():
	drone = CoDrone.CoDrone()
	drone.pair()

	#print current drone's trim value
	trim = drone.get_trim()
	print(trim.ROLL, trim.PITCH, trim.YAW, trim.THROTTLE)
	
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
	// Struct for get trim data
	trimdata trim;


	CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);	//link module mode change => Active
	trim = CoDrone.getTrim();								//save request data
	delay(100);
	    
	CoDrone.Send_LinkModeBroadcast(LinkModeMute);       	//link module mode change => Mute
	delay(100);

	Serial.println("");
	Serial.println("--------- Now -----------");
	Serial.print("trim roll : \t");
	Serial.println(trim.roll);
	Serial.print("trim pitch : \t");
	Serial.println(trim.pitch);
	Serial.print("trim yaw : \t");
	Serial.println(trim.yaw);
	Serial.print("trim throttle : \t");
	Serial.println(trim.throttle);	
}

```