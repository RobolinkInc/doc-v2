---
title: move()
menu: move()
taxonomy:
	tag: codrone-library
	category: flight-variables
---

# move()

##### Description

You can use this function to create more complex flight movements.  With no parameters, ```move()``` will just run based on whatever the flight variables have been set to with functions like ```setPitch()``` and ```setThrottle()``` indefinitely.  You can also run it for a certain duration.  The function also takes multiple parameters, where you can set roll, pitch, yaw, and throttle all at once.  You can run it infinitely with 4 parameters, or you can run it for a given duration with 5 parameters.  If the drone is not flying, nothing will happen.


##### Syntax

```move()```: runs infinitely<br />
```move(duration)```<br />
```move(roll, pitch, yaw, throttle)```: runs infinitely<br />
```move(duration, roll, pitch, yaw, throttle)```


##### Parameters

**duration**: the duration of the flight motion in seconds. If 0, the duration is infinity.<br />
**roll**: the power of the roll, which is an int from -100 to 100<br />
**pitch**: the power of the pitch, which is an int from -100 to 100<br />
**yaw**: the power of the yaw, which is an int from -100 to 100<br />
**throttle**: the power of the throttle, which is an int from -100 to 100

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
	move() 					# Move indefinitely based on the current value of flight variables
	move(5) 				# Move 5 seconds based on the current value of flight variables
	move(0, 0, 80, 80)	    # Move up(throttle) and turn left(yaw) indefinitely
	move(5, 0, 0, 80, 80)	# Move up(throttle) and turn left(yaw) for 5 seconds

if __name__ == '__main__':
	main()

```
###### Arduino
```c
#include<CoDrone.h>		//header

void setup(){
	//open serial and connect
	CoDrone.begin(115200);
	CoDrone.pair(Nearest);

	CoDrone.takeoff();			// take off

	// Move indefinitely with pitch set to 50
	CoDrone.setPitch(50);
	CoDrone.move();

	// Move 5 seconds to the right with roll set to 50
	CoDrone.setRoll(50);
	CoDrone.move(5);

	CoDrone.move(0, 0, 0, 80, 80); 	// Move up(throttle) and turn left(yaw) indefinitely
	CoDrone.move(5, 0, 0, 80, 80); 	// Move up(throttle) and turn left(yaw) for 5 seconds
}

void loop(){
	
}
```