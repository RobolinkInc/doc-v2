---
custom_edit_url: null
id: 07-forward-avoid-collision
title: forward avoid collision
---

##### Block

![foward avoid collision block image](forward_avoid_collision.png)

##### Description

Drives Zumi forward until an object is detected or the timeout runs out, whicever comes first. An object is considered detected if either of the front IR sensor values goes below the threshold.

##### Parameters

**speed**: Positive integer value for speed between 0 and 80 <br /> 
**duration**: Float value timeout in seconds <br /> 
**angle**: Integer heading in degrees (Default to None which is Zumi's current heading)
**IR_thresh**: Integer threshold of front IR sensors. <br /> 

##### Returns

None

##### Example

![forward avoid collision example](forward_avoid_collision.png)
