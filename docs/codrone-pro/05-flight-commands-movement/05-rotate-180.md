---
title: rotate180()
menu: rotate180()
taxonomy:
	
	category: flight-command-movement
---

# rotate180()

##### Description

This function makes the drone rotate 180 degrees. Only rotates in a random direction, because this is a pre-set flight event in the firmware.

##### Syntax
```rotate180()```

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
	drone.rotate180()

if __name__ == '__main__':
	main()

```
###### Arduino
```c
//not yet
```