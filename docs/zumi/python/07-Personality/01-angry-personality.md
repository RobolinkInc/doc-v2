---
custom_edit_url: null
title: angry()
published: true
taxonomy:
    category:
        - personality
    tag:
        - zumi-library
menu: angry()
---

##### Description
makes zumi get angry.

##### Syntax
```angry()```<br />

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

personality.angry()
```