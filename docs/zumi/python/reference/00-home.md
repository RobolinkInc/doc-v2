---
custom_edit_url: null
title: "Zumi Library Reference"
menu: "Zumi Lib"
id: library
template: zumi_librarylist
hide_table_of_contents: true
---

<h3 class="homeDocLandingVersion">version 1.61 (<a class="orange-link" href="/docs/zumi/python/changelog">Changelog</a>)</h3>

These are the functions that you can use to control the Zumi. The functions are available in Python library. Example code is provided in each function definition.

<div class="boxLanding">
  <div class="parentContainer">
  <div class="box-reference-shadow">
  <h3>Sensors</h3>
    <a href="/docs/zumi/python/Sensors/back-left-detect">back_left_detect()</a>
    <a href="/docs/zumi/python/Sensors/back-right-detect">back_right_detect()</a>
    <a href="/docs/zumi/python/Sensors/bottom-left-detect">bottom_left_detect()</a>
    <a href="/docs/zumi/python/Sensors/bottom-right-detect">bottom_right_detect()</a>
    <a href="/docs/zumi/python/Sensors/calibrate-gyro">calibrate_gyro()</a>
    <a href="/docs/zumi/python/Sensors/calibrate-MPU">calibrate_MPU()</a>
    <a href="/docs/zumi/python/Sensors/front-left-detect">front_left_detect()</a>
    <a href="/docs/zumi/python/Sensors/front-right-detect">front_right_detect()</a>
    <a href="/docs/zumi/python/Sensors/get-all-ir-data">get_all_IR_data()</a>
    <a href="/docs/zumi/python/Sensors/get-battery-voltage">get_battery_voltage()</a>
    <a href="/docs/zumi/python/Sensors/get-ir-data">get_IR_data()</a>
    <a href="/docs/zumi/python/Sensors/get-orientation-message">get_orientation_message()</a>
    <a href="/docs/zumi/python/Sensors/get-orientation">get_orientation()</a>
    <a href="/docs/zumi/python/Sensors/read-x-angle">read_x_angle()</a>
    <a href="/docs/zumi/python/Sensors/read-y-angle">read_y_angle()</a>
    <a href="/docs/zumi/python/Sensors/read-z-angle">read_z_angle()</a>
    <a href="/docs/zumi/python/Sensors/reset-drive">reset_drive()</a>
    <a href="/docs/zumi/python/Sensors/reset-gyro">reset_gyro()</a>
    <a href="/docs/zumi/python/Sensors/reset-PID">reset_PID()</a>
    <a href="/docs/zumi/python/Sensors/update-angles">update_angles()</a>
    </div>
  </div>
  <div  class="parentContainer">
    <div class="box-reference-shadow">
    <h3> Driving</h3>
    <div class="boxLanding">
      <div class="margin-right-10">
        <a href="/docs/zumi/python/Driving/circle-left">circle_left()</a>
        <a href="/docs/zumi/python/Driving/circle-right">circle_right()</a>
        <a href="/docs/zumi/python/Driving/circle">circle()</a>
        <a href="/docs/zumi/python/Driving/control-motors">control_motors()</a>
        <a href="/docs/zumi/python/Driving/drive-over-markers">drive_over_markers()</a>
        <a href="/docs/zumi/python/Driving/figure-8">figure_8()</a>
        <a href="/docs/zumi/python/Driving/forward-avoid-colission">forward_avoid_collision()</a>
        <a href="/docs/zumi/python/Driving/forward-step">forward_step()</a>
        <a href="/docs/zumi/python/Driving/forward">forward()</a>
        <a href="/docs/zumi/python/Driving/funnel-align">funnel_align()</a>
        <a href="/docs/zumi/python/Driving/go-reverse">go_reverse()</a>
        <a href="/docs/zumi/python/Driving/go-straight">go_straight()</a>
        <a href="/docs/zumi/python/Driving/j-turn">j_turn()</a>
        <a href="/docs/zumi/python/Driving/left-u-turn">left_u_turn()</a>
        <a href="/docs/zumi/python/Driving/line-follow-gyro-assist">line_follow_gyro_assist()</a>
        <a href="/docs/zumi/python/Driving/move-centimeters">move_centimeters()</a>
        <a href="/docs/zumi/python/Driving/move-inches">move_inches()</a>
        <a href="/docs/zumi/python/Driving/move-to-coordinate">move_to_coordinate()</a>
    </div>
        <div>
            <a href="/docs/zumi/python/Driving/paralllel-park">parallel_park()</a>
            <a href="/docs/zumi/python/Driving/rectangle-right">rectangle_right()</a>
            <a href="/docs/zumi/python/Driving/rectangle">rectangle()</a> 
            <a href="/docs/zumi/python/Driving/reset-coordinate">reset_coordinate()</a>
            <a href="/docs/zumi/python/Driving/reverse-avoid-collision">reverse_avoid_collision()</a> 
            <a href="/docs/zumi/python/Driving/reverse-step">reverse_step()</a>
            <a href="/docs/zumi/python/Driving/reverse">reverse()</a> 
            <a href="/docs/zumi/python/Driving/right-u-turn">right_u_turn()</a>
            <a href="/docs/zumi/python/Driving/smooth-forward">smooth_forward()</a> 
            <a href="/docs/zumi/python/Driving/smooth-reverse">smooth_reverse()</a> 
            <a href="/docs/zumi/python/Driving/smooth-turn-left">smooth_turn_left()</a>
            <a href="/docs/zumi/python/Driving/smooth-turn-right">smooth_turn_right()</a>
            <a href="/docs/zumi/python/Driving/speed-calibration">speed_calibration()</a>
            <a href="/docs/zumi/python/Driving/square-left">square_left()</a> 
            <a href="/docs/zumi/python/Driving/square-right">square_right()</a> 
            <a href="/docs/zumi/python/Driving/square">square()</a>
            <a href="/docs/zumi/python/Driving/stop">stop()</a>
            <a href="">triangle-left()</a>
            <a href="">triangle-right()</a>
            <a href="">triangle()</a>
            <a href="">turn_left()</a>
            <a href="">turn_right()</a>
            <a href="">turn()</a>
        </div>
    </div>
    </div>
  </div>
</div>
<div class="boxLanding marginTop25">
  <div class="parentContainer">
    <div class="box-reference-shadow">
    <h3>LEDs-and-Buzzer</h3>
    <a href="/docs/zumi/python/LEDs-and-buzzer/all-lights-off">all_lights_off()</a>
    <a href="/docs/zumi/python/LEDs-and-buzzer/all-lights-on">all_lights_on()</a>
    <a href="/docs/zumi/python/LEDs-and-buzzer/break-lights-off">brake_lights_off()</a>
    <a href="/docs/zumi/python/LEDs-and-buzzer/break-lights-on">brake_lights_on()</a>
    <a href="/docs/zumi/python/LEDs-and-buzzer/hazard-lights-off">hazard_lights_off()</a>
    <a href="/docs/zumi/python/LEDs-and-buzzer/hazar-lights-on">hazard_lights_on() </a>
    <a href="/docs/zumi/python/LEDs-and-buzzer/headlights-off">headlights_off() </a>
    <a href="/docs/zumi/python/LEDs-and-buzzer/headlghts-on">headlights_on()</a>
    <a href="/docs/zumi/python/LEDs-and-buzzer/play-note">play_note() </a>
    <a href="/docs/zumi/python/LEDs-and-buzzer/signal-left-off">signal_left_off()</a> 
    <a href="/docs/zumi/python/LEDs-and-buzzer/signal-left-on">signal_left_on() </a>
    <a href="/docs/zumi/python/LEDs-and-buzzer/signal-right-off">signal_right_off() </a>
    <a href="/docs/zumi/python/LEDs-and-buzzer/signal-right-on">signal_right_on()</a>
  </div>
  </div>
  <div class="parentContainer">
    <div class="box-reference-shadow">
    <h3>Camera</h3>
    <a href="/docs/zumi/python/Camera/capture">capture()</a>
    <a href="/docs/zumi/python/Camera/close">close()</a>
    <a href="/docs/zumi/python/Camera/is-close">is_closed()</a>
    <a href="/docs/zumi/python/Camera/save-photo">save_photo()</a>
    <a href="/docs/zumi/python/Camera/show-image">show_image()</a>
    <a href="/docs/zumi/python/Camera/start-camera">start_camera()</a>
  </div>
  </div>
  <div class="parentContainer">
   <div class="box-reference-shadow">
  <h3>Personality</h3>
    <a href="/docs/zumi/python/Personality/angry-personality">angry()</a> 
    <a href="/docs/zumi/python/Personality/awake">awake()</a>
    <a href="/docs/zumi/python/Personality/celebrte">celebrate()</a>
    <a href="/docs/zumi/python/Personality/disoriented-left">disoriented_left()</a>
    <a href="/docs/zumi/python/Personality/disoriented-right">disoriented_right()</a>
    <a href="/docs/zumi/python/Personality/happy">happy()</a>
    <a href="/docs/zumi/python/Personality/look-around-open">look_around_open()</a>
    <a href="/docs/zumi/python/Personality/look-around">look_around()</a>
  </div>
  </div>
</div>
