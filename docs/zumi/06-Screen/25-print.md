---
custom_edit_url: null
title: print()
published: true
taxonomy:
    category:
        - screen
    tag:
        - zumi-library
menu: print()
---

##### Description
Prints any number of Strings on the screen. 

##### Syntax
```print(*messages)```<br />
```print(*messages,x=0, y=0, fill_in=True,font_size=12)```<br />

##### Parameters
messages: Any number of Strings that will print to the screen<br />
x: x coordinate of the String. Default to 0.<br />
y: y coordinate of the String. Default to 0.<br />
fill_in: Boolean that selects if text will be white(True) or black(False). Default to True.<br />
font_size: Pixel size of the font. Default to 12.<br />

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()

screen.print("12345678")
screen.print("hello", y=15)
screen.print("\n\n","Zumi")

time.sleep(1)
screen.clear_drawing()
screen.print("ZUMI",font_size=20)

```