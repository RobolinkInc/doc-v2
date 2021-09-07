---
title: set_throttle()
menu: set_throttle() / setThrottle()
taxonomy:
	tag: codrone-library
	category: flight-variables
---

# set_throttle() / setThrottle()

##### Description

This is a setter function that allows you to set the throttle variable.

##### Syntax
Python: ```set_throttle(power)```<br />
Arduino: ```setThrottle(power)```

##### Parameters

**power**: An int from -100 to 100 that sets the throttle variable.  The number represents the direction and power of the output for that flight motion variable. Negative throttle descends, positive throttle ascends.

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
	
	# Drone goes up for 1 second with 50 power
	drone.set_throttle(50)
	drone.move(1)
	
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
	CoDrone.setThrottle(60);	// set throttle power for 60%
	CoDrone.move(5);			// move drone for 5 seconds
}

void loop(){
	
}
	
```