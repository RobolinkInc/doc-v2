---
title: draw_image()
menu: draw_image(img)
taxonomy:
    tag: zumi-library
    category: screen
---

# draw_image()

##### Description
draws the image on the screen.

##### Syntax
```draw_image(img)```<br />
##### Parameters
img
##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()
path = "/usr/local/lib/python3.5/dist-packages/zumi/util/images/happy1.ppm"
screen.draw_image(screen.path_to_image(path))

```