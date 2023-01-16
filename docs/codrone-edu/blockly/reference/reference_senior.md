---
custom_edit_url: null
title: "CoDrone EDU Library Reference"
menu: "Codrone EDU"
id: library-senior
sidebar_label: Senior reference
hide_table_of_contents: true
---

<h3 class="homeDocLandingVersion">version 1.5.6 (<a class="orange-link" href="/docs/codrone-edu/blockly/changelog">Changelog</a>)</h3>
These are the Blockly functions that you can use to control the CoDrone EDU. Example code is provided in each function definition.

<div class="center">
<br />
    <span class="label-toggle">Junior</span>
<label onClick={function hi(){if(!document.getElementById("juniorSeniorSelector").checked){window.location.href = "/docs/codrone-edu/blockly/reference/library-junior"}}} class="switch">
 <input id="juniorSeniorSelector" type="checkbox"  checked="true" />
  <span class="slider round"></span> 
</label>   <span class="label-toggle">Senior</span>
</div>

<div class="boxLanding">
  
    <div  class="parentContainer">
    <div class="box-reference-shadow margin-bottom-20">
        <h3>Flight Commands</h3>
        <a href="/docs/codrone-edu/blockly/Senior/Flight-Commands/01-takeoff">take_off()</a>
            <img src="/img/codrone-edu/blockly/Flight-Commands/takeoff.PNG"></img>
        <a href="/docs/codrone-edu/blockly/Senior/Flight-Commands/02-land">land()</a>
            <img src="/img/codrone-edu/blockly/Flight-Commands/land.PNG"></img>
        <a href="/docs/codrone-edu/blockly/Senior/Flight-Commands/03-stop-motors">stop_motors()</a>
            <img src="/img/codrone-edu/blockly/Flight-Commands/sr_stop_motors.PNG"></img>
        <a href="/docs/codrone-edu/blockly/Senior/Flight-Commands/04-hover">hover()</a>
            <img src="/img/codrone-edu/blockly/Flight-Commands/hover.PNG"></img>
        <a href="/docs/codrone-edu/blockly/Senior/Flight-Commands/05-move">move()</a>
            <img src="/img/codrone-edu/blockly/Flight-Commands/move.PNG"></img>
        <a href="/docs/codrone-edu/blockly/Senior/Flight-Commands/06-flip">flip()</a>
            <img src="/img/codrone-edu/blockly/Flight-Commands/flip.PNG"></img>
        <a href="/docs/codrone-edu/blockly/Senior/Flight-Commands/07-turn-degree">turn_degree()</a>
            <img src="/img/codrone-edu/blockly/Flight-Commands/turn_degree.PNG"></img>
        <a href="/docs/codrone-edu/blockly/Senior/Flight-Commands/08-avoid-wall">avoid_wall()</a>
            <img src="/img/codrone-edu/blockly/Flight-Commands/avoid_wall.PNG"></img>  
  </div>
   <div class="box-reference-shadow margin-bottom-20">
    <h3>Flight Variables</h3>
    <a href="/docs/codrone-edu/blockly/Senior/Flight-Variables/01-set-roll">set_roll()</a>
       <img src="/img/codrone-edu/blockly/Flight-Variables/set_roll.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Flight-Variables/02-set-pitch">set_pitch()</a>
        <img src="/img/codrone-edu/blockly/Flight-Variables/set_pitch.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Flight-Variables/03-set-yaw">set_yaw()</a>
        <img src="/img/codrone-edu/blockly/Flight-Variables/set_yaw.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Flight-Variables/04-set-throttle">set_throttle()</a>
        <img src="/img/codrone-edu/blockly/Flight-Variables/set_throttle.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Flight-Variables/05-move">move()</a>
        <img src="/img/codrone-edu/blockly/Flight-Variables/move_no_params.PNG"></img>
        <a href="/docs/codrone-edu/blockly/Senior/Flight-Variables/06-move">move(duration)</a>
        <img src="/img/codrone-edu/blockly/Flight-Variables/move_with_params.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Flight-Variables/07-set-trim">set_trim()</a>
        <img src="/img/codrone-edu/blockly/Flight-Variables/set_trim.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Flight-Variables/08-get-trim">get_trim()</a>
        <img src="/img/codrone-edu/blockly/Flight-Variables/get_trim.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Flight-Variables/09-reset-trim">reset_trim()</a>
        <img src="/img/codrone-edu/blockly/Flight-Variables/reset_trim.PNG"></img>
  </div>
   <div class="box-reference-shadow margin-bottom-20">
    <h3>Status Checkers</h3>
    <a href="/docs/codrone-edu/blockly/Senior/Status-Checkers/01-code-is-running">code_is_running()</a>
       <img src="/img/codrone-edu/blockly/Status-Checkers/code_is_running.PNG"></img>
  </div>
  <div class="box-reference-shadow margin-bottom-20">
    <h3>Lights</h3>
    <a href="/docs/codrone-edu/blockly/Senior/Lights/01-set-drone-led">set_drone_led()</a>
       <img src="/img/codrone-edu/blockly/Lights/set_drone_led.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Lights/02-drone-led-off">drone_led_off()</a>
        <img src="/img/codrone-edu/blockly/Lights/drone_led_off.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Lights/03-set-controller-led">set_controller_led()</a>
        <img src="/img/codrone-edu/blockly/Lights/set_controller_led.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Lights/04-controller-led-off">controller_led_off()</a>
        <img src="/img/codrone-edu/blockly/Lights/controller_led_off.PNG"></img>
  </div>
  </div>
 
    <div class="parentContainer">
   <div class="box-reference-shadow margin-bottom-20">
    <h3>Sensors</h3>
    <a href="/docs/codrone-edu/blockly/Senior/Sensors/01-get-range">get_range()</a>
        <img src="/img/codrone-edu/blockly/Sensors/get_range.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Sensors/02-get-angle">get_angle()</a>
        <img src="/img/codrone-edu/blockly/Sensors/get_angle.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Sensors/03-get-gyro">get_gyro()</a>
        <img src="/img/codrone-edu/blockly/Sensors/get_gyro.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Sensors/04-get-accel">get_accel()</a>
        <img src="/img/codrone-edu/blockly/Sensors/get_accel.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Sensors/05-get-pos">get_pos()</a>
        <img src="/img/codrone-edu/blockly/Sensors/get_pos.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Sensors/06-get-battery">get_battery()</a>
        <img src="/img/codrone-edu/blockly/Sensors/get_battery.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Sensors/07-get-height">get_height()</a>
        <img src="/img/codrone-edu/blockly/Sensors/get_height.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Sensors/08-get-pressure">get_pressure()</a>
        <img src="/img/codrone-edu/blockly/Sensors/get_pressure.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Sensors/09-get-temperature">get_temperature()</a>
        <img src="/img/codrone-edu/blockly/Sensors/get_temperature.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Sensors/10-get-elevation">get_elevation()</a>
        <img src="/img/codrone-edu/blockly/Sensors/get_elevation.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Sensors/11-get-color">get_color()</a>
        <img src="/img/codrone-edu/blockly/Sensors/get_color.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Sensors/12-get-hsvl">get_hsvl()</a>
        <img src="/img/codrone-edu/blockly/Sensors/get_hsvl.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Sensors/13-get-state-data">get_state_data()</a>
        <img src="/img/codrone-edu/blockly/Sensors/get_state_data.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Sensors/14-reset-sensor">reset_sensor()</a>
        <img src="/img/codrone-edu/blockly/Sensors/reset_sensor.PNG"></img>
  </div>
   <div class="box-reference-shadow margin-bottom-20">
    <h3>Sound</h3>
    <a href="/docs/codrone-edu/blockly/Senior/Sound/01-drone-buzzer">drone_buzzer()</a>
        <img src="/img/codrone-edu/blockly/Sound/drone_buzzer.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Sound/02-controller-buzzer">controller_buzzer()</a>
        <img src="/img/codrone-edu/blockly/Sound/controller_buzzer.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Sound/03-drone-buzzer-hertz">drone_buzzer_hertz()</a>
        <img src="/img/codrone-edu/blockly/Sound/drone_buzzer_hertz.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Sound/04-controller-buzzer-hertz">controller_buzzer_hertz()</a>
        <img src="/img/codrone-edu/blockly/Sound/controller_buzzer_hertz.PNG"></img>
  </div>
  <div class="box-reference-shadow margin-bottom-20">
    <h3>Screen</h3>
    <a href="/docs/codrone-edu/blockly/Senior/Screen/01-controller-draw-line">controller_draw_line()</a>
        <img src="/img/codrone-edu/blockly/Screen/controller_draw_line.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Screen/02-controller-draw-string">controller_draw_string()</a>
        <img src="/img/codrone-edu/blockly/Screen/controller_draw_string.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Screen/03-controller-draw-rectangle">controller_draw_rectangle()</a>
        <img src="/img/codrone-edu/blockly/Screen/controller_draw_rectangle.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Screen/04-controller-draw-square">controller_draw_square()</a>
        <img src="/img/codrone-edu/blockly/Screen/controller_draw_square.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Screen/05-controller-draw-point">controller_draw_point()</a>
        <img src="/img/codrone-edu/blockly/Screen/controller_draw_point.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Screen/06-controller-draw-image">controller_draw_image()</a>
        <img src="/img/codrone-edu/blockly/Screen/controller_draw_image.PNG"></img>
    <a href="/docs/codrone-edu/blockly/Senior/Screen/07-controller-clear-screen">controller_clear_screen()</a>
        <img src="/img/codrone-edu/blockly/Screen/controller_clear_screen.PNG"></img>
  </div>
  </div>
</div>

<div class="boxLanding">
   
</div>
