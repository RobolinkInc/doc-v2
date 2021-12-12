---
title: draw_circle()
published: true
taxonomy:
    category:
        - screen
    tag:
        - zumi-library
menu: draw_circle()
---

##### Description
Draws a circle that fits inside a square with its top-left corner at x,y and a width/height of the circle's diameter.

##### Syntax
```draw_circle(x, y, diameter)```<br />
```draw_circle(x, y, diameter, fill_in=True)```<br />

##### Parameters
x: x coordinate of the top-left corner of the enclosing square<br />
y: y coordinate of the top-left corner of the enclosing square<br />
diameter: diameter of the circle (also the width and height of enclosing square)<br />
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
screen.draw_circle(10,0,20,fill_in=False)
```