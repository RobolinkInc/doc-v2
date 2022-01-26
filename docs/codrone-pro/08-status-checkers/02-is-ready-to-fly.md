---
custom_edit_url: null
title: is_ready_to_fly()
menu: is_ready_to_fly() / isReadyToFly()
taxonomy:

	category: status-checkers
---

##### Description

This function checks whether the drone is ready to fly by returning a boolean.<br/>The drone is ready to fly if it is oriented right-side up, and not flying.

##### Syntax
Python: ```is_ready_to_fly()```<br />
Arduino: ```isReadyToFly()```

##### Parameters

None

##### Returns

Boolean of whether the drone is ready to fly.

##### Example Code
###### Python
```python
#Python code
import CoDrone

def main():	
	drone = CoDrone.CoDrone()
	drone.pair()

	#land if flying.
	if drone.is_ready_to_fly():
	    drone.takeoff()
	    
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

	// if drone is ready to fly, take off the drone
	if(CoDrone.isReadyToFly() == true)	
	    CoDrone.takeoff()	
}
void loop(){
	
}

```