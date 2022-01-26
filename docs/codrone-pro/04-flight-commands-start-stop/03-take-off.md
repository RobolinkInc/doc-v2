---
custom_edit_url: null
title: takeoff()
menu: takeoff()
taxonomy:

	category: flight-command-startstop
---

##### Description

This function makes the drone take off and begin hovering.<br />
The drone will always hover for 3 seconds in order to stabilize before it executes the next command.<br />
If it receives no command for 8 seconds, it will automatically land.

##### Syntax
```takeoff()```

##### Parameters

None

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
	
	drone.hover(3)
	drone.land()

if __name__ == '__main__':
	main()


```
###### Arduino
```c
//Arduino code
#include<CoDrone.h>		//header

void setup(){
	//below this have to code in setup
	//open serial and connect
	CoDrone.begin(115200);
	CoDrone.pair(Nearest);

	CoDrone.takeoff();		// take off and hover for 3 second
	CoDrone.hover(3);		// hover for 3 second
	CoDrone.land();		//landing	
}

void loop(){
	
}


```