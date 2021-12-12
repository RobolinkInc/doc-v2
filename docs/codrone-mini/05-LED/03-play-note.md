---
title: play_note()
taxonomy:
    tag: CDM-library
    category: LED
menu: play_note()
---

##### Description

This function allows you to program the buzzer on the remote, not the drone. <br/>
This function takes two parameters. The first is the note or frequency desired. The second parameter is how long you want the note to play in **seconds**. The Note class must be imported to use this function. <br/>

##### Syntax
```play_note(note, duration)```
```play_note(frequency, duration)```

##### Parameters
note: An enum type from the Note class from Note.C3 to Note.B7<br/>
frequency: An integer representing the note's frequency in Hertz<br/>
duration: A float type that represents the duration of the note in seconds<br/>

##### Returns
None

##### Example Code
###### Python
```python
#Python code
import CoDrone_mini
from CoDrone_mini import Note
drone = CoDrone_mini.CoDrone()
drone.pair()

drone.play_note(Note.C4, 0.5)
drone.play_note(Note.D4, 0.5)
drone.play_note(Note.E4, 0.5)
drone.play_note(Note.F4, 0.5)
drone.play_note(Note.G4, 0.5)

drone.play_note(440,0.5) # 440 Hz is Note.C4
```
