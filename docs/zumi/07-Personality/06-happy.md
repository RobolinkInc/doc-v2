---
title: happy()
menu: happy()
taxonomy:
    tag: zumi-library
    category: personality
---

##### Description
makes zumi have a happy personality.

##### Syntax
```happy()```<br />

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

personality.happy()
```