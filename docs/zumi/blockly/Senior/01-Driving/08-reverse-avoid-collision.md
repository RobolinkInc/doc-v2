---
custom_edit_url: null
id: 08-reverse-avoid-collision
title: reverse avoid collision
---

##### Block

![reverse avoid collision block image](reverse_avoid_collision.png)

##### Description

Drives Zumi in reverse until an object is detected or the timeout runs out, whicever comes first. An object is considered detected if either of the backIR sensor values goes below the threshold.
##### Parameters

**speed**: Positive integer value for speed between 0 and 80 <br /> 
**duration**: Float value timeout in seconds  <br /> 
**angle**: Integer heading in degrees (Default to None which is Zumi's current heading)
**IR_thresh**: Integer threshold of front IR sensors. <br /> 

##### Returns

None

##### Example

![reverse avoid collision example](reverse_avoid_collision.png)
