---
title: eye_strobe()
menu: eye_strobe() / eyeStrobe()
tag: codrone-library
taxonomy:

	category: LED
---

## eye_strobe() / eyeStrobe()

##### Description

This function makes the arms to strobe in various colors

##### Syntax
Python:<br />
```eye_strobe()```<br />

Arduino:<br />
```eyeStrobe()```<br />

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

	# strobe the eyes
	drone.eye_strobe()
	
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

	// strobe the eyes
	CoDrone.eyeStrobe();
}

void loop(){
	
}

```