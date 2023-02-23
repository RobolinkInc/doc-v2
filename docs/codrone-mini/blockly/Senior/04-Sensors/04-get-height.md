---
custom_edit_url: null
id: 04-get-height
title: get_height()
---

##### Block

![get height image](get_height.png)

##### Description

This is a getter function which returns the current **height** of the drone. <br />
It checks sea level from the barometer sensor first and then the altitude from the floor right after it is paired. This function returns the distance between the drone's current position and the floor or any surface below from where it took off from. <br />

##### Parameters

None

##### Returns

The current height calculated by the difference between the current and the floor altitude(cm).

##### Example

![get height example](get_height_example.png)
