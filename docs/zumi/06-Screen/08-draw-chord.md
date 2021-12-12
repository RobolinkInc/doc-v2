---
title: draw_chord()
published: true
taxonomy:
    category:
        - screen
    tag:
        - zumi-library
menu: draw_chord()
---

##### Description
Draws a chord within the boundaries of points x1,y1, and x2,y2 at the specified starting and ending angles.

##### Syntax
```draw_chord(x1, y1, x2, y2, start_ang, end_ang)```<br />
```draw_chord(x1, y1, x2, y2, start_ang, end_ang,fill_in=True)```<br />

##### Parameters
x1: x coordinate of top-left corner for the rectangle enclosing the chord<br />
y1: y coordinate of top-left corner for the rectangle enclosing the chord<br />
x2: x coordinate of bottom-right corner for the rectangle enclosing the chord<br />
y2: y coordinate of bottom-right corner for the rectangle enclosing the chord<br />
start_ang: starting angle<br />
end_ang: ending angle<br />
fill_in: Boolean that selects if the triangle will be filled in (white). Default to True.<br />

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.util.screen import Screen

screen=Screen()
screen.draw_chord(0,0,20,20,-180,0)
screen.draw_chord(30,30,50,50,-180,0)

#do a 360 from -180 degrees to 180 degrees
screen.draw_chord(60,30,100,50,-180,180)
```