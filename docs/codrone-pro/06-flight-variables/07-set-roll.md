---
title: set_roll()
menu: set_roll() / setRoll()
taxonomy:
	
	category: flight-variables
---

# set_roll() / setRoll()

##### Description

This is a setter function that allows you to set the roll variable.

##### Syntax
Python: ```set_roll(power)```<br />
Arduino: ```setRoll(power)```

##### Parameters

**power**: An int from -100 to 100 that sets the roll variable.  The number represents the direction and power of the output for that flight motion variable.  Negative roll is left, positive roll is right.

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
	
	# Drone goes right for 1 second with 50 power
	drone.set_roll(50)
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
	CoDrone.setRoll(60);		// set roll power for 60%
	CoDrone.move(5);		// move drone for 5 seconds
}

void loop(){
	
}
	
```