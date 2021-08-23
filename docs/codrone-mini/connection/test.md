---
id: discd
title: different()

---

# disconnect()

## Description
This function disconnects with the drone that you're connected to.

## Syntax
disconnect()

## Parameters
None

## Returns
None

## Example Code

```python
#Python code
import CoDrone

def main():
    drone = CoDrone.CoDrone()
    drone.pair()

    drone.takeoff()
    drone.hover(1)
    drone.land()
    drone.disconnect()

if __name__ == '__main__':
    main()
```