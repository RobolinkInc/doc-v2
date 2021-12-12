---
title: clock()
published: true
taxonomy:
    category:
        - screen
    tag:
        - zumi-library
menu: clock()
---

##### Descriptionx
Clears the screen and draws a clock with the given hour and minute set by the user.

##### Syntax
```clock(hour, minute)```<br />
```clock(hour, minute, string='', font_size=18)```<br />

##### Parameters
hour: Integer for the hour<br />
minute: Integer for the minute<br />
string: an 8 character String to be displayed under the clock (optional). Defaults to an empty string.<br />
font_size: the font-size of the time

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()
screen.clock(3,15,"Monday")
```