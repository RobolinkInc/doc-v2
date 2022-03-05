---
custom_edit_url: null
title: draw_polygon()
published: true
taxonomy:
    category:
        - screen
    tag:
        - zumi-library
menu: draw_polygon()
---

##### Description
Draws lines between points in a given list ```[(x1,y1),...,(xn,yn)]``` to form a shape.

##### Syntax
``` draw_polygon(points_list)```<br />
``` draw_polygon(points_list,fill_in = True):```<br />

##### Parameters
points_list: A list ```[x1,y1,x2,y2,....xn,yn]``` with at least 3 points <br />
fill_in: Boolean that selects if the polygon will be filled in (white). Default to True.<br />

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()
points = [(30,50),(90,10),(20,10),(5,20)]
screen.draw_polygon(points)
```