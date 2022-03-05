---
custom_edit_url: null
title: arm_default_color()
menu: arm_default_color() / armDefaultColor()
tag: codrone-library
taxonomy:

	category: LED
---

##### Description

This function sets the default LED color of the eyes as well as the mode, so it will remain that color even after powering off and back on. The colors set are using RGB values.

##### Syntax

Python:<br />
```arm_default_color(red, green, blue, brightness)```<br />

Arduino:<br />
```armDefaultColor(red, green, blue, brightness)```

##### Parameters

**red:** int value from 0 to 255<br/>
**green**: int value from 0 to 255<br/>
**blue**: int value from 0 to 255<br/>
**brightness**: in value from 0 to 100, which represents the brightness of the light<br />

##### Returns

None

##### Example Code
###### Python
```python
#Python code
import CoDrone
from CoDrone import Mode

drone = CoDrone.CoDrone()
drone.pair()

# set default arm color to an RGB of (0, 0, 100) with full brightness
drone.arm_default_color(0, 0, 100, 100)
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

    // set default arm color to an RGB of (0, 120, 155) with full brightness
    CoDrone.armDefaultColor(0, 120, 155, 100);
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