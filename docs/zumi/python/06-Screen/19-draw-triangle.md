---
custom_edit_url: null
title: draw_triangle()
published: true
taxonomy:
    category:
        - screen
    tag:
        - zumi-library
menu: draw_triangle()
---

##### Description
Draws a triangle with 3 points (x1,y1), (x2,y2), (x3,y3): ```x1, y1, x2, y2, x3, y3```.

##### Syntax
``` draw_triangle(x1,y1,x2,y2,x3,y3)```<br />
``` draw_triangle(x1,y1,x2,y2,x3,y3,fill_in=True):```<br />

##### Parameters
x1: the x coordinate of point 1<br />
y1: the y coordinate of point 1<br />
x2: the x coordinate of point 2<br />
y2: the y coordinate of point 2<br />
x3: the x coordinate of point 3<br />
y3: the y coordinate of point 3<br />
fill_in: Boolean that selects if the triangle will be filled in (white). Default to True.<br />

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.util.screen import Screen

screen=Screen()
screen.draw_triangle(0,10,20,50,50,0)
```