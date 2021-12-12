---
title: awake()
menu: awake()
taxonomy:
    tag: zumi-library
    category: personality
---

##### Description
Makes Zumi open her eyes with the wake up sound

##### Syntax
```awake()```<br />

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

personality.awake()
```