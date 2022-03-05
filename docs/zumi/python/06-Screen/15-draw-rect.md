---
custom_edit_url: null
title: draw_rect()
published: true
taxonomy:
    category:
        - screen
    tag:
        - zumi-library
menu: draw_rect()
---

##### Description
Draws a rectangle on the screen.

##### Syntax
```draw_rect(x, y, width, height)```<br />
```draw_rect(x, y, width, height, thickness=1, fill_in=False)```<br />

##### Parameters
x: the top left corner x coordinate<br />
y: the top left corner y coordinate<br />
width: width of rectangle<br />
height: height of rectangle<br />
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
screen.draw_rect(0,0,128,64,thickness=1,fill_in=True)
```