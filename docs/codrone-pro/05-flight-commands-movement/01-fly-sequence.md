---
title: fly_sequence()
menu: fly_sequence() / flySequence()
taxonomy:
	tag: codrone-library
	category: flight-command-movement
---

# fly_sequence() / flySequence()

##### Description

This function make drone fly specific shape and hover after finish. The options are square, circle, spiral, triangle, hop, sway, zigzag

##### Syntax
Python: ```fly_sequence(sequence)```<br />
Arduino: ```flySequence(sequence)```

##### Parameters

**sequence**: SQUARE, CIRCLE, SPIRAL, TRIANGLE, HOP, SWAY, ZIGZAG

##### Returns

None

##### Example Code
###### Python
```python
#Python code
import CoDrone
from CoDrone import Sequence

def main():
	drone = CoDrone.CoDrone()
	drone.pair()

	drone.takeoff()
	drone.fly_sequence(Sequence.ZIG_ZAG)	# Fly zigzag (move left and right 2 times each while move forward)
	drone.fly_sequence(Sequence.SPIRAL)		# Fly Spiral shape
	drone.fly_sequence(Sequence.SQUARE)		# Fly square shape
	
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
	CoDrone.flySequence(ZIGZAG);	// Fly zigzag  (move left and right 2 times each while move forward)
	CoDrone.flySequence(SPIRAL);	// Fly spiral shape
	CoDrone.flySequence(SQUARE);	// Fly square (right -> forward -> left -> backward)	
}

void loop(){
	
}


```