---
custom_edit_url: null
id: 03-controller-draw-rectangle
title: controller_draw_rectangle()
---

##### Block

![controller draw rectangle block image](controller_draw_rectangle.PNG)<br />

##### Description

            width
        (x,y)|---------------|
             |               | height
             |_______________|

        draws a rectangle onto the controller screen starting from point (x,y) and extends to given height and width

##### Parameters
![controller draw rectangle block image](controller_draw_rectangle_params.PNG) <br />
**xStart**: top left corner x coordinate <br />
**yStart**: top left corner y coordinate <br />
**width**: width of rectangle <br />
**height**: height of rectangle <br />
**flagFill**: optional parameter to fill in the rectangle or not. default value is False

##### Returns

None

##### Example

![controller draw rectangle example](controller_draw_rectangle_example.PNG)