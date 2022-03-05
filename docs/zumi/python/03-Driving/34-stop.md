---
custom_edit_url: null
title: stop()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: stop()
---

##### Description
Stops Zumi's motors immediately.

##### Syntax
```stop()```<br />

##### Parameters
None

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

for i in range(0, 30):
	zumi.go_straight(30,0)

zumi.stop()
```