---
custom_edit_url: null
id: changelog
title: CoDrone EDU Library Changelog

---
# Changelog

##### May 17, 2022

**CoDrone EDU Version 1.1**


Fixed screen error on controller

---

##### Mar 17, 2022

**CoDrone EDU Version 1.0**

Speed defaults to 2 when starting a program

Added speed_change() and get_control_speed() functions

Pillow library added as dependency

Added error message if serial library is not detected

Added error handling when calling load_classifier()

---

##### Mar 17, 2022

**CoDrone EDU Version 0.9**

Added Swarm class

---

##### Mar 1, 2022

**CoDrone EDU Version 0.8**

Added movement as a state in the state list

Added temperature_convert()

---

##### Feb 18, 2022

**CoDrone EDU Version 0.7**

Fixed turn_degree() to be absolute and smoother and turn 180 degrees

Fixed turn_right()

Fixed turn_left()

Added luminosity to knn.fit for a fourth data point

Added controller screen drawing functions
---

##### Feb 4, 2022

**CoDrone EDU Version 0.6**

All distance sensors now return in centimeter by default

Fixed all functions effected by centimeter being returned by default

drone.turn_degree() is now absolute and division by 0 is fixed

drone.get_height() now uses time of flight instead of barometer

drone.get_flow_x, y converted from m to cm

Fixed drone.avoid_wall()

Added and fixed sendMotor

Added and fixed sendMotorSingle

Fixed buzzer functions

Added buzzer flip warning when battery is less than 50%

convert_meter can now return meter

Added drone.append_color_data() - appends data to an existing text file

Added error handling when load_classifier is empty

Changed dir variable in add_color()

Fixed issue when adding to a dataset that already exists

Updated set_trim() to only change roll and pitch

Updated get_trim_data() to return only roll and pitch

---

##### Jan 10, 2022

**CoDrone EDU Version 0.5**

Added drone.flip()

Added convert_millimeter() and convert_meter() to return centimeter by default for all positional functions

Added error handling in the color classifier

Added docstrings

---

##### Dec 15, 2021

**CoDrone EDU Version 0.4**

Added drone.get_drone_temp()

Added drone.get_pressure()

Added drone.drone_buzzer()

Added drone.controller_buzzer()

Added drone.set_trim()

Added drone.get_height

Added drone.get_pressure()

Added the flight sequences square, triangle, spiral, and sway.

Improved takeoff command

Improved port connection

---

##### Nov 23, 2021

**CoDrone EDU Version 0.3**

Added drone.avoid_wall() - Obstacle avoidance command. is similar to zumi.forward_avoid_collision()

Added drone.detect_wall() - Uses front range sensor to detect a wall

Added drone.keep_distance() - Keep distance command makes the drone maintain a distance to an obstacle

Added drone.turn_left() - Can be given a degree and the drone will turn to the left

Added drone.turn_right() - Can be given a degree and the drone will turn to the right

Added drone.turn_degrees() - Can take an absolute degree command and will turn to that degree.

Added drone.hover() - Will make the drone hover.

Added reset_YPRT() - Resets the yaw pitch roll and throttle and sends the command to the drone.

Added drone.keep_height() - Keep height command. A single command that is looped.

Added get_colors() - returns a list [1, 2]

Added get_front_color() - gets first color in get_colors() list

Added get_back_color() -  gets second color in get_colors() list

Added predict_color() - predicts a color if you have trained the model and there is an existing file

Finished basic LEDs

---

##### Oct 10, 2021

**CoDrone EDU Version (0.1 - 0.2)**

Added Drone.acceleration_x, y, z

Added Drone.angle_roll, yaw, pitch

Added Drone.range_front()

Added Drone.range_bottom()

Added Drone.get_battery()

Added Drone.open()

Added Drone.takeoff()

Added Drone.land()

---