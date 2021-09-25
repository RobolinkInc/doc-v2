---
title: CoDrone Arduino Changelog
menu: CoDrone Arduino Library Changelog
taxonomy:

	category: changelog
---
# Changelog




##### Aug 14, 2018

**CoDrone Version 2.0.2**

Added function:

Add New function names to keyword file that can highlight function

Change GoToHeight -> goToHeight

scaleChange() : same function as AnalogScaleChange()

Adjusted circle for flySequence() to be smaller

Matched flySequence() shapes to match Python


---


##### Jul 23, 2018

**CoDrone Version 2.0.1**

Edited example files' filenames to match their folders

---


##### Jul 19, 2018

**CoDrone Version 2.0.0**

New Function and new example released!

Re-structure library file structure so that it's easy to find the actual function in the cpp file

Added calibrate() : work with drone firmware 50.18 and up

Added new example example code

Old example code moved to legacy example.

Add Basecamp example and add URL to actual basecamp lesson. Some of lesson code are doing debug messages.

---


##### May 30, 2018

**CoDrone Version 1.5.5**

Change lesson names of example code to match the Basecamp lessons, so easier for users to locate example code


---



##### May 2, 2018

**CoDrone Version 1.5.3**

Added:

printAddress : function connect with NearbyDrone and print that drone's address<br />
pair : address connect




---




##### April 27, 2018

**CoDrone Version 1.5.2**

change syntex takeOff() -> takeoff()<br />
add buzzer sound for connecting



---



##### March 27, 2018

**CoDrone Version 1.5.1**

Solve syntex error from 1.5.0



---


##### March 20, 2018

**CoDrone Version 1.5.0**

remove some of old function<br />
added Function: -go(), move(), turn(), request----() etc..

we keep old functions but add new functions for younger kid and user<br />
New library is more close to natural language

Request battery info in new function only request once int 3 seconds<br />
If you request more than once in 3 seconds, It will request at first time and use that data for 3 second



---


##### October 26, 2016

**CoDrone Version 1.4.4**

New Functions:

PrintGyro();<br />
Prints out the 3 dimensional gyroscope data to the serial monitor. Uses Send_LinkModeBroadcast to mute the drone serial connection between prints.

PrintPressure();<br />
Going to be used to print barometer data. Doesn't work yet.

PrintFlow();<br />
Going to be used to print image flow data. Also doesn't work yet...

delay() workaround<br />
A workaround for the delay() issue was created and reverted. There may be some residual code.


---



##### September 29, 2016

**CoDrone Version 1.4.3**

Additional Battle Functions<br />
CrashedCustom(boolean custom);<br />
Set to true to enable custom ‘out of hp/crash’ flag<br />
If set to true, there will be no death animation for the CoDrone when out of HP<br />
Instead, the check CrashedCheck() return at 1 when the CoDrone is out of HP<br />
Use this to create your own battle death maneuver “if (CrashedCheck()){ Custom maneuver}<br />

boolean CrashedCheck();<br />
Returns True if the CoDrone is out of HP<br />
Returns False if the CoDrone still has HP<br />
Must set CrashedCustom(true) before using CrashedCheck();<br />

BattleHitPoints(int points);<br />
Sets max hit points to “points”<br />
range from 1-8<br />
default is 8 hit points

Updated some timing functions to address the CoDrone disconnecting issue<br />
Added CheckTime1(), CheckTime2(), and CheckTime3()<br />
CheckTime1() is now a dedicated time check function for battle functions<br />
CheckTime2() is now a dedicated time check function for LED functions<br />
CheckTime() is now a dedicated time check function for Control functions<br />
CheckTime3() is not yet used

Changed SEND_CHECK_TIME to 10 (was 3)<br />
Set BATTLE_CHECK_TIME to 100<br />
Set LED_CHECK_TIME to 60

Updated Trim range descriptions<br />
The range for valid trim values is now properly represented as -500 to 500 (used to say -100 to 100).

Updated Examples<br />
Examples have been updated to match new functions



---


##### july 19, 2016

**CoDrone Version 1.4.2**

Improved battle health bar<br />
Fixed EEPROM library conflicts



---


##### July 12, 2016

**CoDrone Version 1.4.1**

Fixed EEPROM library conflicts with EEPROM from SmartInventor library.



---


##### July 8, 2016

**CoDrone Version 1.4**

Control() now defaults to Control(SEND_INTERVAL)<br />
Send_Control() will immediately send control values<br />
Battle health bar improved



---


##### June 8, 2016

**CoDrone Version 1.3**

Fixed some minor bugs that were in v1.2



---


##### May 16, 2016

**CoDrone Version 1.1**

The first CoDrone library release for Arduino Library Manager.



---