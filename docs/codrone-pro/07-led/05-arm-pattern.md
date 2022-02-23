---
custom_edit_url: null
title: arm_pattern()
taxonomy:
    category:
        - LED
    tag:
        - codrone-library
menu: 'arm_pattern() / armPattern()'
tag: codrone-library
---

##### Description

This function sets the color of the arm LED lights to flash in a particular pre-set pattern at a given speed.

##### Syntax
Python:<br />
```arm_pattern(color, mode)```<br />
```arm_pattern(color, mode, speed)```<br />
```arm_pattern(red, green, blue, mode)```<br />
```arm_pattern(red, green, blue, mode, speed)```<br />

Arduino:<br />
```armPattern(color, mode)```<br />
```armPattern(color, mode, speed)```<br />
```armPattern(red, green, blue, mode)```<br />
```armPattern(red, green, blue, mode, speed)```

##### Parameters

**color**: an enum, which can be set using predefined colors out of the list below in "Example Code" under "LED Color Options" <br />
**red:** int value from 0 to 255<br/>
**green**: int value from 0 to 255<br/>
**blue**: int value from 0 to 255<br/>
**mode**: an enum, which can be selected from the following predefined list: BLINK, DOUBLE_BLINK, DIMMING, PULSE, REVERSE_PULSE<br />
**speed**: int value from 0-255, which represents the speed of the pattern. 255 is slowest, 0 is fastest.<br />

##### Returns

None

##### Example Code
###### Python
```python
#Python code
import CoDrone
from CoDrone import Mode, Color

drone = CoDrone.CoDrone()
drone.pair()

drone.arm_pattern(Color.Red, Mode.DOUBLE_BLINK, 200)        # Set arms to double blink red slowly using Color
drone.arm_pattern(0, 100, 0, Mode.PULSE, 200)               # Set arms to pulse green slowly using RGB
drone.close()
```

###### Arduino
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
//open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.armPattern(Red, DOUBLE_BLINK, 200);                 // Set arms to double blink red slowly using Color
    CoDrone.armPattern(0, 0, 255, PULSE, 200);                  // Set arms to pulse blue slowly using RGB
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