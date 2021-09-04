---
title: clear_display()
published: true
taxonomy:
    category:
        - screen
    tag:
        - zumi-library
menu: clear_display()
---

# clear_display()

##### Description
Clears everything on the OLED by drawing a black rectangle.

##### Syntax
```clear_display()```<br />

##### Parameters
None

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()
screen.print("Hello")
screen.clear_display()

```