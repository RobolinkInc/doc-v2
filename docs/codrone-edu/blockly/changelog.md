---
custom_edit_url: null
id: changelog
title: CoDrone EDU Library Changelog

---
# Changelog
---

##### February 26th, 2024

**CoDrone EDU Version 2.1.5**

* Disabled battery requests during takeoff
* Implemented an error-logging system so users can report an error from the menu
* Implemented analytics
* Updated firmware notifications to match latest firmware releases
* Updated Korean-language translations


##### February 14th, 2024

**CoDrone EDU Version 2.1.4**

* Updated drone visuals to match CoDrone EDU (JROTC ed.) when connected
* Temporarily disabled "Screen" category for JROTC ed.
* Improvements to firmware notifications in the connection box


##### January 23, 2024

**CoDrone EDU Version 2.1.3**

* Changed parameters on "flip" functions to match Python function parameters
* Improved trim slider functionality
* Updated pairing window to reflect messaging about AA batteries
* Fixed Senior turn_degree() block
* Fixed Senior get_pressure() block
* Addressed backend errors to improve performance
* Improved functionality of the drone LED feature in the connection window


##### December 21, 2023

**CoDrone EDU Version 2.1.2**

* Added ability to change the drone LED color from the connection window
* Created a new senior block for turn_left() and turn_right() Python functions
* Added a link to the release notes in the Blockly menu
* Corrected the generated RGB values for the Junior controller LED block
* Updated missing blocks for Japanese-language Blockly
* More small changes in Python generated code output and block parameters to reflect Python library


##### November 8, 2023

**CoDrone EDU Version 2.1.1**

* Completed backend refactoring to update Blockly infrastructure. These changes will not affect your user experience, but they will help deliver a smoother update process in the future.
* Renamed get_gyro() Senior blocks to get_angular_speed()
* Small changes in the Python generated code output to reflect the latest library

---