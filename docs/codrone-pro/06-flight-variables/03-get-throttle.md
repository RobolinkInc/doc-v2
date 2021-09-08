---
title: get_throttle()
menu: get_throttle() / getThrottle()
taxonomy:
	
	category: flight-variables
---

# get_throttle() / getThrottle()

##### Description

This is a getter function that gets the value of the throttle variable.

##### Syntax
Python: ```get_throttle()```<br />
Arduino: ```getThrottle()```

##### Parameters

None

##### Returns

The power of the throttle variable (int)

##### Example Code
###### Python
```python
#Python code
import CoDrone

def main():
	drone = CoDrone.CoDrone()
	drone.pair()

	# Print current throttle with getter function
	print(“Current throttle : ”, drone.get_throttle())
	
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

	// save current throttle value in variable “current_throttle”
	int current_throttle = CoDrone.getThrottle(); 
}
void loop(){
	
}
```