---
title: draw_line()
published: true
taxonomy:
    category:
        - screen
    tag:
        - zumi-library
menu: draw_line()
---

# draw_line()

##### Description
Draws a line between points (x1,y1) and (x2,y2).


##### Syntax
```draw_line(x1, y1, x2, y2)```<br />
```draw_line(x1, y1, x2, y2, thickness=1,fill_in=True)```<br />

##### Parameters
x1: x coordinate of the starting point<br />
y1: y coordinate of the starting point<br />
x2: x coordinate of the ending point<br />
y2: y coordinate of the ending point<br />
thickness: pixel width of the line<br />
fill_in: Boolean that selects if the line will be filled in (white). Default to True.<br />


##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()
screen.draw_line(0,0,40,40,fill_in=True)
screen.draw_line(40,0,0,40,thickness=10,fill_in=True)
```