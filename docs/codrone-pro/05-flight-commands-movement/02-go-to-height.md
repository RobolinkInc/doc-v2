---
title: go_to_height()
menu: go_to_height() / goToHeight()
taxonomy:
	tag: codrone-library
	category: flight-command-movement
---

# go_to_height() / goToHeight()

##### Description

This is a setter function will make the drone fly to the given height above the object directly below its IR sensor (usually the ground).<br />
It’s effective between 20 and 2000 millimeters. It uses the IR sensor to continuously check for its height.

##### Syntax
Python: ```go_to_height(height)```<br />
Arduino: ```goToHeight(height)```

##### Parameters

**height**: An int from 20 to 2000 in millimeters

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

	# Fly 1500mm away from bottom and hover
	drone.takeoff()
	drone.go_to_height(1500)  
	
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

	CoDrone.takeoff();
	CoDrone.goToHeight(1000); 		// Fly 1000mm away from bottom and hover	
}

void loop(){

}

```