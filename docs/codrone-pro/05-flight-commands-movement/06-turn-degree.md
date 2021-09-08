---
title: turn_degree()
menu: turn_degree() / turnDegree()
taxonomy:
	
	category: flight-command-movement
---

# turn_degree() / turnDegree()

##### Description

A Senior level function that yaws by a given degree in a given direction. <br />
This function takes an input degree in an input direction, and turns until it reaches the given degree. In some instances, the drone may turn past the given degree and need to rotate all the way around again before reaching the correct degree.

##### Syntax
Python: ```turn_degree(direction, degree)```<br />
Arduino: ```turnDegree(direction, degree)```

##### Parameters

**direction**	: a string that’s either left or right<br />
**degree** 		: a constant in Arduino and enum in Python. The degree the drone will turn to the right, with its starting position representing 0 degrees,Degree.ANGLE_30, Degree.ANGLE_45, Degree.ANGLE_60, Degree.ANGLE_90, Degree.ANGLE_120, Degree.ANGLE_135, Degree.ANGLE_150, Degree.ANGLE_180, Degree.ANGLE_210, Degree.ANGLE_225, Degree.ANGLE_240, Degree.ANGLE_270, Degree.ANGLE_300, Degree.ANGLE_315, Degree.ANGLE_330


##### Returns

None

##### Example Code
###### Python
```python
#Python code
import CoDrone
from CoDrone import Direction,Degree

def main():	
	drone = CoDrone.CoDrone()
	drone.pair()
	drone.takeoff()
	
	drone.turn_degree(Direction.LEFT, Degree.ANGLE_45) 	# Turn left 45 degrees

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
	CoDrone.turnDegree(LEFT, ANGLE_45); 		// Turn left 45 degrees
}

void loop(){
	
}
	
```