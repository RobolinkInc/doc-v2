---
title: get_angular_speed()
taxonomy:
    category:
        - sensors
    tag:
        - codrone-library
menu: 'get_angular_speed() / getAngularSpeed()'
---

# get_angular_speed() / getAngularSpeed()

##### Description

This function gets the data from the gyrometer sensor for the roll, pitch, and yaw angular speed.

##### Syntax
Python: ```get_angular_speed()```<br />
Arduino: ```getAngularSpeed()```

##### Parameters

None

##### Returns

Output to visual UI. In code, it returns a class in Python and struct in Arduino.

##### Example Code
###### Python
```python
#Python code
import CoDrone

def main():
	drone = CoDrone.CoDrone()
	drone.pair()

	# print the angular speed of drone
	gyrodata = drone.get_angular_speed()
	print(gyrodata.ROLL, gyrodata.PITCH, gyrodata.YAW)
    drone.close()
	
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
	// Struct for get Angular speed(gyro) data
	gyrodata gyro;


	CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);	//link module mode change => Active
	gyro = CoDrone.getAngularSpeed();						//save request data
	delay(100);
	    
	CoDrone.Send_LinkModeBroadcast(LinkModeMute);       	//link module mode change => Mute
	delay(100);

	Serial.println("");
	Serial.println("--------- Now -----------");
	Serial.print("gyro roll : \t");
	Serial.println(gyro.roll);
	Serial.print("gyro pitch : \t");
	Serial.println(gyro.pitch);
	Serial.print("gyro yaw : \t");
	Serial.println(gyro.yaw);	
}

```