---
title: get_roll()
menu: get_roll() / getRoll()
taxonomy:

	category: flight-variables
---

# get_roll() / getRoll()

##### Description

This is a getter function that gets the value of the roll variable.

##### Syntax
Python: ```get_roll()```<br />
Arduino: ```getRoll()```

##### Parameters

None

##### Returns

The power of the roll variable (int)

##### Example Code
###### Python
```python
#Python code
import CoDrone

def main():
	drone = CoDrone.CoDrone()
	drone.pair()

	# Print current roll with getter function
	print(“Current Roll : ”, drone.get_roll())
	
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

	// save current roll value in variable “current_roll”
	int current_roll = CoDrone.getRoll(); 
}
void loop(){
	
}
```