---
custom_edit_url: null
id: 05-get-pos
title: get_pos()
---

##### Block

![get pos block image](get_pos.PNG)<br />

##### Description

Returns the current estimated position of the CoDrone EDU using the optical flow sensor. <br />
![Alt text](topdown_xy.png) <br />
![Alt text](xyz.jpg) <br />

##### Parameters
![get pos image](get_pos_params1.PNG)
![get pos image](get_pos_params2.PNG) <br />
**axis**: x, y, z <br />
**unit**: mm, cm, in, m <br />

##### Returns

**position:** float x,y, or z value in units selected

##### Example

![get pos example](get_pos_ex.png)
