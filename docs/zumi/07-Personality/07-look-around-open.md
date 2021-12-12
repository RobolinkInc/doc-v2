---
title: look_around_open()
published: true
taxonomy:
    category:
        - personality
    tag:
        - zumi-library
menu: look_around_open()
---

##### Description
makes zumi look around with wide open eyes

##### Syntax
```look_around_open()```<br />

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

personality.look_around_open()
```