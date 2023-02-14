---
custom_edit_url: null
id: 11-reset-pid-error
title: reset pid error
---

##### Block

![reset PID error block image](reset_PID_error.png)

##### Description

Resets the sum of the gyro error and integral error that accumulated over. Reset the PID error after using ```forward_step()``` to drive more accurately. This does not reset the P, I, and D values of the Zumi PID control. To set those parameters use ```set_PID()```.

##### Parameters

None <!-- image -->

##### Returns

None

##### Example

![reset PID error example](reset_PID_error.png) <!-- python example can get zumi P I D values. Blockly doesn't have getters for this -->
