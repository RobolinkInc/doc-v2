---
custom_edit_url: null
title: draw_square()
published: true
taxonomy:
    category:
        - screen
    tag:
        - zumi-library
menu: draw_square()
---

##### Description
Draws a square on the screen.

##### Syntax
```draw_square(x, y, width)```<br />
```draw_square(x, y, width, thickness=1, fill_in=False)```<br />

##### Parameters
x: the top left corner x coordinate<br />
y: the top left corner y coordinate<br />
width: width of each side<br />
thickness: thickness of rectangle border, default to 1<br />
fill_in: Boolean that selects if the shape will be filled in. Default to False.<br />

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()
screen.draw_square(0,0,30,thickness=1,fill_in=True)
```