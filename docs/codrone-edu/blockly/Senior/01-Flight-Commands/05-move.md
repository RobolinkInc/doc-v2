---
custom_edit_url: null
id: 05-move
title: move()
---

##### Block

![move image](move.PNG)

##### Description

Moves the drone for a certain amount of time (in seconds) in a given direction determined by the flight parameters. 

##### Parameters

**roll**: roll power percentage as an integer between -100 and +100<br /> 
**pitch**: pitch power percentage as an integer between -100 and +100<br />
**yaw**:yaw power percentage as an integer between -100 and +100<br /> 
**throttle**:  throttle power percentage as an integer between -100 and +100<br />
**duration**: positive integer in seconds <br />

##### Returns

None

##### Example
In this example, roll and pitch are both set to positive 30% while yaw and throttle remain at 0%. CoDrone EDU will fly forward and to the right (diagonally) for 1 second at 30% speed.

