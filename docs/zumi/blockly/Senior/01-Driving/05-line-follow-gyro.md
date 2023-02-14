---
custom_edit_url: null
id: 05-line-follow-gyro
title: line follow gyro
---

##### Block

![line follow gyro block image](line_follow_gyro.png)

##### Description

Uses the bottom IR sensors so that Zumi can execute a line following program for the duration of the timeout. If the bottom IR sensors detect a black line, Zumi will continue to drive forward. If one of the sensors detects white, Zumi will turn left or right to stay on the line. If both sensors detect white, Zumi will automatically stop, regardless of the timeout.The speed is capped to 80.

##### Parameters

**speed**: Positive integer value for speed between 0 and 80 <br /> 
**duration**: Float value timeout in seconds <br /> 
**angle_adj**: Integer number of degrees Zumi will turn if one IR sensor detects white.<br/>
**left_IR**: Integer threshold of the bottom left IR sensor. <br /> 
**right_IR**: Integer threshold of the bottom right IR sensor. <br /> 


##### Returns

None

##### Example

![line follow gyro example](line_follow_gyro_example.png)
