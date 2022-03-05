---
custom_edit_url: null
title: disconnect()
menu: disconnect()
taxonomy:

	category: connection
---

##### Description
This function disconnects with the drone that you're connected to.

##### Syntax
```disconnect()```

##### Parameters
None

##### Returns
None

##### Example Code
###### Python
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

drone.takeoff()
drone.hover(1)
drone.land()
drone.disconnect()
drone.close()
```
###### Arduino
```c
//Arduino code
#include<CoDrone.h>		//header

void setup(){
	//below this have to code in setup
	//open serial and connect
	CoDrone.begin(115200);
	CoDrone.pair(Nearest);

	CoDrone.takeoff();
	CoDrone.hover(3);
	CoDrone.land();
	CoDrone.disconnect(); 	// disconnects	
}

void loop(){
	
}
```