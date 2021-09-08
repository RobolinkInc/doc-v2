---
title: set_pitch()
menu: set_pitch() / setPitch()
taxonomy:
	
	category: flight-variables
---

# set_pitch() / setPitch()

##### Description
This is a setter function that allows you to set the pitch variable.

##### Syntax
Python: ```set_pitch(power)```<br />
Arduino: ```setPitch(power)```

##### Parameters

**power**: An int from -100 to 100 that sets the pitch variable.  The number represents the direction and power of the output for that flight motion variable. Negative pitch is backwards, positive pitch is forwards.

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
	drone.set_pitch(50)
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
	CoDrone.setPitch(60);		// set pitch power for 60%
	CoDrone.move(5);		// move drone for 5 seconds
}

void loop(){
	
}
	
```