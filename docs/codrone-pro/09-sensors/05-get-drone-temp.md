---
title: get_drone_temp()
taxonomy:
    category:
        - sensors
    tag:
        - codrone-library
menu: 'get_drone_temp() / getDroneTemp()'
---

# get_drone_temp() / getDroneTemp()

##### Description

This is a getter function gets the data from the drone’s temperature sensor.<br/>Importantly, it reads the drone’s temperature, not the air around it.

##### Syntax
Python: ```get_drone_temp()```<br />
Arduino: ```getDroneTemp()```

##### Parameters

None

##### Returns

The temperature in celsius as an integer.

##### Example Code
###### Python
```python
#Python code
import CoDrone

def main():
	drone = CoDrone.CoDrone()
	drone.pair()

	## print the temperature of drone
	temperature = drone.get_drone_temp()
	print(temperature)
	
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
	int temperature;

	CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);	//link module mode change => Active
	temperature = CoDrone.getDroneTemp();					//save request data
	delay(100);
	    
	CoDrone.Send_LinkModeBroadcast(LinkModeMute);       	//link module mode change => Mute
	delay(100);

	Serial.println("");
	Serial.println("--------- Now -----------");
	Serial.print("temperature : \t");
	Serial.println(temperature);	
}

```