---
title: is_flying()
menu: is_flying() / isFlying()
taxonomy:
	
	category: status-checkers
---

# is_flying() / isFlying()

##### Description

This function checks whether the drone is flying and returns a boolean

##### Syntax
Python: ```is_flying()```<br />
Arduino: ```isFlying()```

##### Parameters

None

##### Returns

Boolean of whether the drone is flying

##### Example Code
###### Python
```python
#Python code
import CoDrone

def main():
	drone = CoDrone.CoDrone()
	drone.pair()

	#land if flying.
	if drone.is_flying():
	    drone.land()

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

	// If drone is flying land the drone
	if(CoDrone.isFlying()==true)	
	    CoDrone.land();
}
void loop(){
	
}
```