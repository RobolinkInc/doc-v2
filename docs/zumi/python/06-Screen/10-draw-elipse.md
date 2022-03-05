---
custom_edit_url: null
title: draw_ellipse()
published: true
taxonomy:
    category:
        - screen
    tag:
        - zumi-library
menu: draw_ellipse()
---

##### Description
Draws an ellipse that fits in a rectangle with its top-left corner at x,y and a set width and height.

##### Syntax
```draw_ellipse(self, x, y, width, height)```<br />
```draw_ellipse(self, x, y, width, height, fill_in=True)```<br />

##### Parameters
x: x coordinate of the top-left corner of the enclosing rectangle<br />
y: y coordinate of the top-left corner of the enclosing rectangle<br />
width: width of enclosing rectangle<br />
height: height of enclosing rectangle<br />
fill_in: Boolean that selects if the triangle will be filled in (white). Default to True.<br />

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()
screen.draw_ellipse(0,0,100,30,fill_in=True)
```