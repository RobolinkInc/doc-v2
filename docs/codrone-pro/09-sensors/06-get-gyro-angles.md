---
title: get_gyro_angles()
menu: get_gyro_angles() / getGyroAngles()
taxonomy:

	category: sensors
---

# get_gyro_angles() / getGyroAngles()

##### Description

This function gets the data from the gyrometer sensor to determine the roll, pitch, and yaw as angles.

##### Syntax
Python: ```get_gyro_angles()```<br />
Arduino: ```getGyroAngles()```

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

	# print the angles of drone
	GyroAngles = drone.get_gyro_angles()
	print(GyroAngles.ROLL, GyroAngles.PITCH, GyroAngles.YAW)

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
	// Struct for get angles(attitude) data
	angledata angle;


	CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);	//link module mode change => Active
	angle = CoDrone.getGyroAngles();						//save request data
	delay(100);
	    
	CoDrone.Send_LinkModeBroadcast(LinkModeMute);       	//link module mode change => Mute
	delay(100);

	Serial.println("");
	Serial.println("--------- Now -----------");
	Serial.print("angle roll : \t");
	Serial.println(angle.roll);
	Serial.print("angle pitch : \t");
	Serial.println(angle.pitch);
	Serial.print("angle yaw : \t");
	Serial.println(angle.yaw);	
}

```