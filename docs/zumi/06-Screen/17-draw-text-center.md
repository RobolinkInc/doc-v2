---
title: draw_text_center()
taxonomy:
    category:
        - screen
    tag:
        - zumi-library
menu: 'draw_text_center(self, string, display=0, image=0, font_size=16, clear=True)'
---

##### Description
Draws text to the center of the screen

##### Syntax
```draw_text_center(string, font_size=16)```<br />
```draw_text_center(string)```<br />
```draw_text_center(string, font_size)```<br />


##### Parameters
string\
font_size

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.util.screen import Screen
import time


screen=Screen()

screen.draw_text_center('hello',font_size=10)
time.sleep(0.5)
screen.draw_text_center('hello',font_size=20)
time.sleep(0.5)
screen.draw_text_center('hello',font_size=30)
time.sleep(0.5)
screen.draw_text_center('hello',font_size=40)
time.sleep(0.5)
screen.draw_text_center('hello',font_size=50)
time.sleep(0.5)
```