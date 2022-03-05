---
custom_edit_url: null
title: draw_text()
menu: draw_text()
taxonomy:
    tag: zumi-library
    category: screen
---

##### Description
Draws text to the upper lefthand corner of the screen

##### Syntax
```draw_text(string)```<br />
```draw_text(string, x, y, font_size)```  (display, clear)..

##### Parameters
**string** &nbsp;&nbsp;_(type: string)_<br />
: The string that zumi will show on the screen<br />
**x** &nbsp;&nbsp; _(type: integer, default: 1)<br />
: The x coordinate start value of the string<br />
**y** &nbsp;&nbsp; _(type: integer, default: 1)<br />
: The y coordinate start value of the string<br />
**font_size** &nbsp;&nbsp;_(type: integer, default: 16)_<br />
: The font size of the string


##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()
for i in range(10):
    screen.draw_text(str(i)+'!')
    time.sleep(0.1)
screen.clear_display()
```
