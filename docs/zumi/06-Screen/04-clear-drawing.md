---
title: clear_drawing()
published: true
taxonomy:
    category:
        - screen
    tag:
        - zumi-library
menu: clear_drawing()
---

# clear_drawing()

##### Description
Clears the drawing canvas object without clearing the OLED screen. Use this before using any new draw functions.

##### Syntax
```clear_drawing()```<br />

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
screen.draw_circle(30,30,10)
time.sleep(1)

screen.clear_drawing()
screen.print("Hello")

```