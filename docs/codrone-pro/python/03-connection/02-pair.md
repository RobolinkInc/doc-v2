---
custom_edit_url: null
title: pair()
taxonomy:
    category:
        - connection
    tag:
        - codrone-library
menu: pair()
---

##### Description
This function pairs the BLE board to the CoDrone.  After establishing a connection, it always waits for 3 seconds before executing the next command. Pair works a bit differently between Arduino and Python.  With the Arduino-based remote, ```pair()``` with no parameters will pair with the last paired CoDrone. If it's your first time using the remote, it will just find the nearest CoDrone it can find, then "lock in" with that CoDrone and always pair with it.  With Python, ```pair()``` with no parameters will pair with the last paired CoDrone, which is saved in a file called "PairInfo." If it's your first time running ```pair()```, it will just find the nearest CoDrone it can find, then "lock in" with that CoDrone, save it to "PairInfo" and always pair with it until you run ```pair(drone.Nearest)```.

##### Syntax
```pair()```<br />
Arduino: ```pair(Nearest)```, Python: ```pair(drone.Nearest)```<br />
Arduino: ```pair(bluetoothAddress)```, Python: ```pair(fourDigitAddress)```<br />

##### Parameters
**Nearest:** If you specify ```Nearest``` in Arduino or ```drone.Nearest``` in Python, it will pair with the first drone it finds (which may not always be the nearest CoDrone, in some cases, just the first CoDrone it finds). This function can be used to "unlock" the drone from only pairing with the CoDrone it's been "locked in" with. Once you've paired with a nearest CoDrrone, you can run ```pair()``` again with no parameters, and it will only pair with the "locked in" CoDrone.<br />
**address:** This is the address of the CoDrone. In Arduino, this is a 6-index array of bytes representing the Bluetooth address.  In Python, this is the 4-digit number that identifies the CoDrone.

##### Returns

None

##### Example Code
###### Python
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()
# drone.pair(“5349”)
# drone.pair(drone.Nearest)

# you can set specific port name for pairing especially Windows need/require this 
# drone.pair(port_name = 'COM3')
# drone.pair('1234', 'COM3')
# drone.pair(drone.Nearest, 'COM3')

drone.takeoff()
drone.hover(3)
drone.land()
drone.close()
```
###### Arduino
```c
//Arduino code
#include<CoDrone.h>		//header

void setup(){
  //below this have to code in setup
  CoDrone.begin(115200);

  //IMPORATNT: You would only run ONE of the 3 options below

  /* 1) This will pair with the last drone that the remote was paired to. If this is the first time pairing, 
   *    this function will pair with whatever first drone it finds, and "lock in" to that drone and only pair with 
   *    that drone
   */
  CoDrone.pair();

   /* 2) This will pair with the nearest drone that the BLE board finds. You can use this function to "unlock" a 
   *    remote that's been "locked in" to a drone. So first run this code, then just upload and run with "CoDrone.pair()" *    to "lock in" to that drone
   */
  CoDrone.pair(Nearest);

}

void loop(){

}

```