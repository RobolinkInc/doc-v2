---
custom_edit_url: null
title: arm_off()
menu: arm_off() / armOff()
tag: codrone-library
taxonomy:

	category: LED
---

##### Description

This function turns off the arm LEDs

##### Syntax
Python:<br />
```arm_off()```<br />

Arduino:<br />
```armOff()```<br />

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

	# turn off the arms
	drone.arm_off()
	
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

	CoDrone.armOff();
}

void loop(){
	
}

```