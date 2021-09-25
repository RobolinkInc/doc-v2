---
title: get_state()
menu: get_state() / getState()
template: function_ref
taxonomy:

	category: sensors
---

# get_state() / getState()

##### Description

This function gets the state of the drone, as in whether it’s: ready, takeoff, flight, flip, stop, landing, reverse, accident, error.

##### Syntax
Python: ```get_state()```<br />
Arduino: ```getState()```

##### Parameters
None

##### Returns

In Blockly, output to UI.<br/>In Python, return String(READY, TAKE_OFF, FLIGHT, FLIP, STOP, LANDING, REVERSE, ACCIDENT, ERROR).<br/>
In Arduino, return enum value(fMode_Ready, fMode_TakeOff, fMode_Flight, fMode_Flip, fMode_Stop, fMode_Landing, fMode_Reverse, fMode_Accident, fMode_Error).<br/>

##### Example Code
###### Python
```python
#Python code
import CoDrone

def main():
	drone = CoDrone.CoDrone()
	drone.pair()

	# take off the drone if state is not on flight
	state = drone.get_state()
	if state != "FLIGHT":
	    drone.takeoff()

	drone.hover(3)
	drone.land()
	
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

	int state;

	trim = CoDrone.getState();								//save request data
	delay(50);

	if(state = fMode_Ready)
		CoDrone.takeoff();

	CoDrone.hover(3);
	CoDrone.land();
}
void loop(){

}
  
```