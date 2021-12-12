---
title: play_note()
taxonomy:
    category:
        - LEDs-and-Buzzer
    tag:
        - zumi-library
menu: play_note()
---

##### Description
Play a note, from C2 - B6.

##### Syntax
```play_note(note_type)```<br />
```play_note(note_type, note_duration=500)```<br />

##### Parameters
note_type: Integer from 0 to 60 or enum from Note class. Setting the note to 0 will result in no sound.<br />
note_duration: Default to 500 milliseconds but can be an integer from 0 to 2500 milliseconds. Must be in 100 millisecond increments ex. 100, 200, 500, 2000. If 0 note will play forever.<br />

class Note:<br />
    C2 = 1<br />
    CS2 = 2<br />
    D2 = 3<br />
    DS2 = 4<br />
    E2 = 5<br />
    F2 = 6<br />
    FS2 = 7<br />
    G2 = 8<br />
    GS2 = 9<br />
    A2 = 10<br />
    AS2 = 11<br />
    B2 = 12<br />
    C3 = 13<br />
    CS3 = 14<br />
    D3 = 15<br />
    DS3 = 16<br />
    E3 = 17<br />
    F3 = 18<br />
    FS3 = 19<br />
    G3 = 20<br />
    GS3 = 21<br />
    A3 = 22<br />
    AS3 = 23<br />
    B3 = 24<br />
    C4 = 25<br />
    CS4 = 26<br />
    D4 = 27<br />
    DS4 = 28<br />
    E4 = 29<br />
    F4 = 30<br />
    FS4 = 31<br />
    G4 = 32<br />
    GS4 = 33<br />
    A4 = 34<br />
    AS4 = 35<br />
    B4 = 36<br />
    C5 = 37<br />
    CS5 = 38<br />
    D5 = 39<br />
    DS5 = 40<br />
    E5 = 41<br />
    F5 = 42<br />
    FS5 = 43<br />
    G5 = 44<br />
    GS5 = 45<br />
    A5 = 46<br />
    AS5 = 47<br />
    B5 = 48<br />
    C6 = 49<br />
    CS6 = 50<br />
    D6 = 51<br />
    DS6 = 52<br />
    E6 = 53<br />
    F6 = 54<br />
    FS6 = 55<br />
    G6 = 56<br />
    GS6 = 57<br />
    A6 = 58<br />
    AS6 = 59<br />
    B6 = 60<br />

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi 
from zumi.protocol import Note
import time
zumi = Zumi()
zumi.play_note(30, 500)
time.sleep(1)
zumi.play_note(Note.C4)
time.sleep(1)
# will stop the buzzer
zumi.play_note(0, 0)
```