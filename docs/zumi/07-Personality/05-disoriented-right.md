---
title: disoriented_right()
menu: disoriented_right()
taxonomy:
    tag: zumi-library
    category: personality
---

##### Description
makes zumi look to the left and play disoriented sound

##### Syntax
```disoriented_right()```<br />

##### Parameters
None

##### Returns

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

personality.disoriented_right()
```