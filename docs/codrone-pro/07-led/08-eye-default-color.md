---
title: eye_default_color()
menu: eye_default_color() / eyeDefaultColor()

taxonomy:
	
	category: LED
---

## eye_default_color() / eyeDefaultColor()

##### Description

This function sets the default LED color of the eyes using RGB values and their brightness with a value from 1 - 100. This means the color will remain, even after the CoDrone has been powered off and back on.

##### Syntax

Python:<br />
```eye_default_color(red, green, blue, brightness)```<br />

Arduino:<br />
```eyeDefaultColor(red, green, blue, brightness)```

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

def main():
	drone = CoDrone.CoDrone()
	drone.pair()

    # set default eye color to an RGB of (0, 0, 100) with full brightness
	drone.eye_default_color(0, 0, 100, 100)
	
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

    // set default eye color to an RGB of (0, 0, 100) with full brightness
	CoDrone.eyeDefaultColor(0, 120, 155, 100);
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