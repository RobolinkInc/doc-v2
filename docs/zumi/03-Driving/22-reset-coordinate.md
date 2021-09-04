---
title: reset_coordinate()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: reset_coordinate()
---

# reset_coordinate()

##### Description
Will reset the coordinate to (0,0).


##### Syntax
```reset_coordinate()```<br />

##### Parameters
None

##### Returns
None

##### Example Code
###### Python Sample 1
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

zumi.move_to_coordinate(10,0)
zumi.reset_coordinate()
#zumi will drive another 10 inches
zumi.move_to_coordinate(10,0)

```

