---
title: draw_point()
published: true
taxonomy:
    category:
        - screen
    tag:
        - zumi-library
menu: draw_point()
---

# draw_point()

##### Description
Draws a single pixel at the set x and y coordinate.

##### Syntax
```draw_point(x, y)```<br />
```draw_point(x, y,fill_in=True)```<br />

##### Parameters
x: the x coordinate<br />
y: the y coordinate<br />
fill_in: Boolean that selects if the point will be filled in (white). Default to True.<br />

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()
screen.draw_point(100,30)
```