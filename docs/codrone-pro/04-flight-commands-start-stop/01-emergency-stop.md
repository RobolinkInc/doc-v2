---
custom_edit_url: null
title: emergency_stop()
menu: emergency_stop() / emergencyStop()
taxonomy:

	category: flight-command-startstop
---

##### Description

This function immediately stops all commands and stops all motors, so the drone will stop flying immediately. <br />
The function will also zero-out all of the flight motion variables to 0.


##### Syntax
Python: ```emergency_stop()```
Arduino: ```emergencyStop()```

##### Parameters

None

##### Returns

None

##### Example Code
###### Python
```python
#Python code
import CoDrone

def main():
	drone = CoDrone.CoDrone()
	drone.pair()
	drone.takeoff()
	
	drone.emergency_stop()

if __name__ == '__main__':
	main()

```
###### Arduino
```c
//Arduino code
#include<CoDrone.h>		//header

void setup(){
	//open serial and connect
	CoDrone.begin(115200);
	CoDrone.pair(Nearest);

	CoDrone.takeoff();		// take off and hover for 3 second
	CoDrone.emergencyStop();	// emergency stop	
}

void loop(){
	
}

```