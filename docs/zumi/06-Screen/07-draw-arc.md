---
title: draw_arc()
published: true
taxonomy:
    category:
        - screen
    tag:
        - zumi-library
menu: draw_arc()
---

##### Description
Draws an arc within the boundaries of points x1,y1, and x2,y2 at the specified starting and ending angles.

##### Syntax
```draw_arc(x1, y1, x2, y2, start_ang, end_ang)```<br />
```draw_arc(x1, y1, x2, y2, start_ang, end_ang,fill_in=True)```<br />

##### Parameters
x1: x coordinate of top-left corner for the rectangle enclosing the arc<br />
y1: y coordinate of top-left corner for the rectangle enclosing the arc<br />
x2: x coordinate of bottom-right corner for the rectangle enclosing the arc<br />
y2: y coordinate of bottom-right corner for the rectangle enclosing the arc<br />
start_ang: starting arc angle<br />
end_ang: ending arc angle<br />
fill_in: Boolean that selects if the triangle will be filled in (white). Default to True.<br />

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.util.screen import Screen

screen=Screen()
screen.draw_arc(0,0,50,50,-180,0)
```