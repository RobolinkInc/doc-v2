---
custom_edit_url: null
id: 11-get-color
title: get_color()
---

##### Block

![get color block image](get_color.PNG)<br />

##### Description

This functions reads the color data from either of the two bottom color sensors and returns one of the 8 pre-calibrated colors (provided in the color cards). The drone must be flat on a surface (not flying) for the color sensor to activate.

##### Parameters
![get color block image](get_color_params.PNG)
**type**: front, back <br />

##### Returns

**color:** detected color as a string (Red, Green, Yellow, Blue, Cyan, Magenta, Black, White, Unknown)

##### Example

![get color example](get_color_data_ex.png)