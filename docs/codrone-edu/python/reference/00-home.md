---
custom_edit_url: null
id: library
title: CoDrone EDU Library Reference
hide_table_of_contents: true
---

<h3 class="homeDocLandingVersion">version 1.3 (<a class="orange-link" href="/docs/codrone-edu/python/changelog">Changelog</a>)</h3>
These are the functions that you can use to control the CoDrone EDU. The functions are available in Python library. Example code is provided in each function definition.

<div class="boxLanding">
  <div class="parentContainer">
  <div class="box-reference-shadow">
  <h3>Connection</h3>
    <a href="/docs/codrone-edu/python/Connection/01-pair">pair()</a>
    <br />
   </div>
    <div class="box-reference-shadow margin-top-30"> 
        <h3>Flight Commands (Start/Stop)</h3>
            <a href="/docs/codrone-edu/python/Flight-Commands-Start-Stop/01-emergency_stop">emergency_stop()</a>
            <a href="/docs/codrone-edu/python/Flight-Commands-Start-Stop/02-land">land()</a>
            <a href="/docs/codrone-edu/python/Flight-Commands-Start-Stop/03-reset_trim/">reset_trim()</a>
            <a href="/docs/codrone-edu/python/Flight-Commands-Start-Stop/04-set_trim">set_trim()</a>
            <a href="/docs/codrone-edu/python/Flight-Commands-Start-Stop/05-take_off">takeoff()</a>
    </div>
    <div class="box-reference-shadow margin-top-30"> 
        <h3>Flight Commands (Movement)</h3>
        <a href="/docs/codrone-edu/python/Flight-Commands-Movement/01-avoid_wall">avoid_wall()</a>
        <a href="/docs/codrone-edu/python/Flight-Commands-Movement/02-circle">circle()</a>
        <a href="/docs/codrone-edu/python/Flight-Commands-Movement/03-detect_wall">detect_wall()</a>
        <a href="/docs/codrone-edu/python/Flight-Commands-Movement/04-flip">flip()</a>
        <a href="/docs/codrone-edu/python/Flight-Commands-Movement/05-hover">hover()</a>
        <a href="/docs/codrone-edu/python/Flight-Commands-Movement/06-keep_distance">keep_distance()</a>
        <a href="/docs/codrone-edu/python/Flight-Commands-Movement/07-move">move()</a>
        <a href="/docs/codrone-edu/python/Flight-Commands-Movement/08-print_move_values">print_move_values()</a>  
        <a href="/docs/codrone-edu/python/Flight-Commands-Movement/09-reset_move">reset_move()</a>
        <a href="/docs/codrone-edu/python/Flight-Commands-Movement/10-sendControl">sendControl()</a>
        <a href="/docs/codrone-edu/python/Flight-Commands-Movement/11-sendControlWhile">sendControlWhile()</a>
        <a href="/docs/codrone-edu/python/Flight-Commands-Movement/12-set_pitch">set_pitch()</a>  
        <a href="/docs/codrone-edu/python/Flight-Commands-Movement/13-set_roll">set_roll()</a>
        <a href="/docs/codrone-edu/python/Flight-Commands-Movement/14-set_throttle">set_throttle()</a>
        <a href="/docs/codrone-edu/python/Flight-Commands-Movement/15-set_yaw">set_yaw()</a>
        <a href="/docs/codrone-edu/python/Flight-Commands-Movement/16-spiral">spiral()</a>    
        <a href="/docs/codrone-edu/python/Flight-Commands-Movement/17-square">square()</a>  
        <a href="/docs/codrone-edu/python/Flight-Commands-Movement/18-sway">sway()</a>
        <a href="/docs/codrone-edu/python/Flight-Commands-Movement/19-triangle">triangle()</a>
        <a href="/docs/codrone-edu/python/Flight-Commands-Movement/20-turn_degree">turn_degree()</a>
        <a href="/docs/codrone-edu/python/Flight-Commands-Movement/21-turn_left">turn_left()</a>  
        <a href="/docs/codrone-edu/python/Flight-Commands-Movement/22-turn_right">turn_right()</a>     
  </div>
    <div class="box-reference-shadow margin-top-30"> 
        <h3>Buzzer</h3>
         <a href="/docs/codrone-edu/python/Buzzer/01-controller_buzzer/">controller_buzzer()</a>
         <a href="/docs/codrone-edu/python/Buzzer/02-drone_buzzer/">drone_buzzer()</a>      
  </div>
    <div class="box-reference-shadow margin-top-30"> 
        <h3>LED</h3>
        <a href="/docs/codrone-edu/python/LED/01-controller_LED_off">controller_LED_off()</a>
        <a href="/docs/codrone-edu/python/LED/02-drone_LED_off">drone_LED_off()</a>
        <a href="/docs/codrone-edu/python/LED/03-set_controller_LED">set_controller_LED()</a>
        <a href="/docs/codrone-edu/python/LED/04-set_drone_LED">set_drone_LED()</a>
  </div>
  </div>
  <div  class="parentContainer">
    <div class="boxLanding">
       <div class="box-reference-shadow"> 
            <h3>Sensor</h3>
                <a href="/docs/codrone-edu/python/Sensors/01-get_battery">get_battery()</a>
                <a href="/docs/codrone-edu/python/Sensors/02-get_bottom_range">get_bottom_range()</a>
                <a href="/docs/codrone-edu/python/Sensors/03-get_drone_temp">get_drone_temp()</a>
                <a href="/docs/codrone-edu/python/Sensors/05-get_flow_x">get_flow_x()</a>
                <a href="/docs/codrone-edu/python/Sensors/06-get_flow_y">get_flow_y()</a>
                <a href="/docs/codrone-edu/python/Sensors/07-get_front_range">get_front_range()</a>
                <a href="/docs/codrone-edu/python/Sensors/08-get_pos_x">get_pos_x()</a>
                <a href="/docs/codrone-edu/python/Sensors/09-get_pos_y">get_pos_y()</a>
                <a href="/docs/codrone-edu/python/Sensors/10-get_pos_z">get_pos_z()</a>
                <a href="/docs/codrone-edu/python/Sensors/11-get_position_data">get_position_data()</a> 
                <a href="/docs/codrone-edu/python/Sensors/12-get_pressure">get_pressure()</a>
                <a href="/docs/codrone-edu/python/Sensors/13-get_trim">get_trim()</a>
                <a href="/docs/codrone-edu/python/Sensors/14-get_x_accel">get_x_accel()</a> 
                <a href="/docs/codrone-edu/python/Sensors/15-get_x_angle">get_x_angle()</a> 
                <a href="/docs/codrone-edu/python/Sensors/16-get_y_accel">get_y_accel()</a>   
                <a href="/docs/codrone-edu/python/Sensors/17-get_y_angle">get_y_angle()</a> 
                <a href="/docs/codrone-edu/python/Sensors/18-get_z_accel">get_z_accel()</a> 
                <a href="/docs/codrone-edu/python/Sensors/19-get_z_angle">get_z_angle()</a>
                <a href="/docs/codrone-edu/python/Sensors/20-get_height">get_height()</a>    
        </div>
            <div class="box-reference-shadow margin-top-30"> 
        <h3>Controller</h3>
            <a href="/docs/codrone-edu/python/Controller/01-down_arrow_pressed">down_arrow_pressed()</a>
    </div>
    
  </div>
</div>
<div class="boxLanding marginTop25">


</div>
