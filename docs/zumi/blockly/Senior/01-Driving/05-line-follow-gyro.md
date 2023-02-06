---
custom_edit_url: null
id: 05-line-follow-gyro
title: line follow gyro
---

##### Block

![line follow gyro block image](line_follow_gyro.png)

##### Description

Drives Zumi forward at a default speed of 20 for 1 second in the direction Zumi is currently facing. Zumi will stop when the duration or timeout is over. If the bottom IR sensors detect a black line, Zumi will continue to drive. If one or the other sensor detects white, Zumi will auto-adjust to stay on the line. If both sensors detect white, Zumi will stop even if the duration has not been met.

##### Parameters

**speed**: Positive integer value for speed between 0 and 80 <br /> 
**duration**: Number of seconds Zumi will drive on the line <br /> 
**angle_adj**: The number of degrees Zumi will turn if one IR sensor detects white.
**left_IR**: threshold of the bottom left IR sensor. <br /> 
**right_IR**: threshold of the bottom right IR sensor. <br /> 


##### Returns

None

##### Example

![line follow gyro example](line_follow_gyro_example.png)
