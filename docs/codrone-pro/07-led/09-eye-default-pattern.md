---
title: eye_default_pattern()
menu: eye_default_pattern() / eyeDefaultPattern()

taxonomy:
	
	category: LED
---

## eye_default_pattern() / eyeDefaultPattern()

##### Description

This function sets the default color of the eyes LED lights to flash in a particular pre-set pattern at a given speed, which means the lights will remain in that color and pattern when powered off and back on.

##### Syntax
Python:<br />
```eye_default_pattern(color, mode)```<br />
```eye_default_pattern(color, mode, speed)```<br />
```eye_default_pattern(red, green, blue, mode)```<br />
```eye_default_pattern(red, green, blue, mode, speed)```<br />

Arduino:<br />
```eyeDefaultPattern(color, mode)```<br />
```eyeDefaultPattern(color, mode, speed)```<br />
```eyeDefaultPattern(red, green, blue, mode)```<br />
```eyeDefaultPattern(red, green, blue, mode, speed)```

##### Parameters

**color**: an enum, which can be set using predefined colors out of the list below in "Example Code" under "LED Color Options" <br />
**red:** int value from 0 to 255<br/>
**green**: int value from 0 to 255<br/>
**blue**: int value from 0 to 255<br/>
**mode**: an enum, which can be selected from the following predefined list: BLINK, DOUBLE_BLINK, DIMMING<br />
**speed**: int value from 0-255, which represents the speed of the pattern. 255 is slowest, 0 is fastest<br />

##### Returns

None

##### Example Code
###### Python
```python
#Python code
import CoDrone
from CoDrone import Mode

def main():
	drone = CoDrone.CoDrone()
	drone.pair()

    # set default eye pattern to RGB (0, 125, 155) and double blink slowly
	drone.eye_default_pattern(0, 125, 155, Mode.DOUBLE_BLINK, 200)
	
if __name__ == '__main__':
	main()

```
###### Arduino
```c
//Arduino code
#include<CoDrone.h>		//header

void setup(){
//open serial and connect
	CoDrone.begin(115200);
	CoDrone.pair(Nearest);

    // set default arm pattern to blue using RGB and blink quickly
	CoDrone.eyeDefaultPattern(0,0,100, BLINK, 20);
}

void loop(){
	
}

```
###### LED Color options
```
	AliceBlue, AntiqueWhite, Aqua,
    Aquamarine, Azure, Beige,
    Bisque, Black, BlanchedAlmond,
    Blue, BlueViolet, Brown,
    BurlyWood, CadetBlue, Chartreuse,
    Chocolate, Coral, CornflowerBlue,
    Cornsilk, Crimson, Cyan,
    DarkBlue, DarkCyan, DarkGoldenRod,
    DarkGray, DarkGreen, DarkKhaki,
    DarkMagenta, DarkOliveGreen, DarkOrange,
    DarkOrchid, DarkRed, DarkSalmon,
    DarkSeaGreen, DarkSlateBlue, DarkSlateGray,
    DarkTurquoise, DarkViolet, DeepPink,
    DeepSkyBlue, DimGray, DodgerBlue,
    FireBrick, FloralWhite, ForestGreen,
    Fuchsia, Gainsboro, GhostWhite,
    Gold, GoldenRod, Gray,
    Green, GreenYellow, HoneyDew,
    HotPink, IndianRed, Indigo,
    Ivory, Khaki, Lavender,
    LavenderBlush, LawnGreen, LemonChiffon,
    LightBlue, LightCoral, LightCyan,
    LightGoldenRodYellow, LightGray, LightGreen,
    LightPink, LightSalmon, LightSeaGreen,
    LightSkyBlue, LightSlateGray, LightSteelBlue,
    LightYellow, Lime, LimeGreen,
    Linen, Magenta, Maroon,
    MediumAquaMarine, MediumBlue, MediumOrchid,
    MediumPurple, MediumSeaGreen, MediumSlateBlue,
    MediumSpringGreen, MediumTurquoise, MediumVioletRed,
    MidnightBlue, MintCream, MistyRose,
    Moccasin, NavajoWhite, Navy,
    OldLace, Olive, OliveDrab,
    Orange, OrangeRed, Orchid,
    PaleGoldenRod, PaleGreen, PaleTurquoise,
    PaleVioletRed, PapayaWhip, PeachPuff,
    Peru, Pink, Plum,
    PowderBlue, Purple, RebeccaPurple,
    Red, RosyBrown, RoyalBlue,
    SaddleBrown, Salmon, SandyBrown,
    SeaGreen, SeaShell, Sienna,
    Silver, SkyBlue, SlateBlue,
    SlateGray, Snow, SpringGreen,
    SteelBlue, Tan, Teal,
    Thistle, Tomato, Turquoise,
    Violet, Wheat, White,
    WhiteSmoke, Yellow, YellowGreen,
    EndOfColor
```