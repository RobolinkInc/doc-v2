---
title: get_yaw()
menu: get_yaw() / getYaw()
taxonomy:

	category: flight-variables
---

# get_yaw() / getYaw()

##### Description

This is a getter function that gets the value of the yaw variable.

##### Syntax
Python: ```get_yaw()```<br />
Arduino: ```getYaw()```

##### Parameters

None

##### Returns

The power of the yaw variable (int)

##### Example Code
###### Python
```python
#Python code
import CoDrone

def main():
	drone = CoDrone.CoDrone()
	drone.pair()

	# Print current yaw with getter function
	print(“Current yaw : ”, drone.get_yaw())
	
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

	// save current yaw value in variable “current_yaw”
	int current_yaw = CoDrone.getYaw(); 
}
void loop(){
	
}
```