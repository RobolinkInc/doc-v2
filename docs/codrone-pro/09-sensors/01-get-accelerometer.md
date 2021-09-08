---
title: get_accelerometer()
menu: 'get_accelerometer() / getAccelerometer()'
---

# get_accelerometer() / getAccelerometer()

##### Description

This function gets the accelerometer sensor data, which returns x, y, and z.<br/> It outputs to the UI in Blockly and as a class in Python as a struct in Arduino.

##### Syntax
Python: ```get_accelerometer()```<br />
Arduino: ```getAccelerometer()```

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

	# print the acceleration of drone
	acceleration = drone.get_accelerometer()
	print(acceleration.X, acceleration.Y, acceleration.Z)
	
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
	// Struct for get accelerometer data
	acceldata accel;


	CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);	//link module mode change => Active
	accel = CoDrone.getAccelerometer();		//save request data
	delay(100);
	    
	CoDrone.Send_LinkModeBroadcast(LinkModeMute);       	//link module mode change => Mute
	delay(100);

	Serial.println("");
	Serial.println("--------- Now -----------");
	Serial.print("accel x : \t");
	Serial.println(accel.x);
	Serial.print("accel y : \t");
	Serial.println(accel.y);
	Serial.print("accel z : \t");
	Serial.println(accel.z);	
}

```