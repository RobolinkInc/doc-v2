---
title: celebrate()
menu: celebrate()
taxonomy:
    tag: zumi-library
    category: personality
---

##### Description
makes zumi celebrate. 

##### Syntax
```celebrate()```<br />

##### Parameters

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi
from zumi.util.screen import Screen
from zumi.personality import Personality

zumi = Zumi()
screen = Screen()
personality = Personality(zumi, screen)

personality.celebrate()
```