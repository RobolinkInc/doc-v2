---
custom_edit_url: null
id: arduino-ref
title: CoDrone Pro Library Reference
hide_table_of_contents: true
---

These are the functions that you can use to control the CoDrone Pro. The functions are available in Arduino library. Example code is provided in each function definition.

<div class="boxLanding">
  <div class="parentContainer">
  <div class="box-reference-shadow">
  <h3>Functions</h3>
    <a href="/doc-v2/docs/codrone-pro/connection/disconnect">disconnect()</a>
    <a href="/doc-v2/docs/codrone-pro/connection/pair">pair()</a>
    <br />
   </div>
    <div class="box-reference-shadow margin-top-30"> 
        <h3>Flight Commands (Start/Stop)</h3>
            <a href="/doc-v2/docs/codrone-pro/flight-commands-start-stop/emergency-stop">emergency_stop()</a>
            <a href="/doc-v2/docs/codrone-pro/flight-commands-start-stop/land">land()</a>
            <a href="/doc-v2/docs/codrone-pro/flight-commands-start-stop/take-off">takeoff()</a>
    </div>
    <div class="box-reference-shadow margin-top-30"> 
        <h3>Flight Commands (Movement)</h3>
        <a href="/doc-v2/docs/codrone-pro/flight-commands-movement/fly-sequence">fly_sequence()</a>
        <a href="/doc-v2/docs/codrone-pro/flight-commands-movement/go-to-height">go_to_height()</a>
        <a href="/doc-v2/docs/codrone-pro/flight-commands-movement/go">go()</a>
        <a href="/doc-v2/docs/codrone-pro/flight-commands-movement/hover">hover()</a>
        <a href="/doc-v2/docs/codrone-pro/flight-commands-movement/rotate-180">rotate180()</a>
        <a href="/doc-v2/docs/codrone-pro/flight-commands-movement/turn-degree">turn_degree()</a>
        <a href="/doc-v2/docs/codrone-pro/flight-commands-movement/turn">turn()</a>
  </div>
  </div>
  <div  class="parentContainer">
    <div class="boxLanding">
       <div class="box-reference-shadow"> 
            <h3> Flight Variables</h3>
            <a href="/doc-v2/docs/codrone-pro/flight-variables/get-pitch">get_pitch()</a>
            <a href="/doc-v2/docs/codrone-pro/flight-variables/get-roll">get_roll()</a>
            <a href="/doc-v2/docs/codrone-pro/flight-variables/get-throttle">get_throttle()</a>
            <a href="/doc-v2/docs/codrone-pro/flight-variables/get-yaw">get_yaw()</a>
            <a href="/doc-v2/docs/codrone-pro/flight-variables/move">move()</a>
            <a href="/doc-v2/docs/codrone-pro/flight-variables/set-pitch">set_pitch()</a>
            <a href="/doc-v2/docs/codrone-pro/flight-variables/set-roll">set_roll()</a>
            <a href="/doc-v2/docs/codrone-pro/flight-variables/set-throttle">set_throttle()</a>
            <a href="/doc-v2/docs/codrone-pro/flight-variables/set-yaw">set_yaw()</a>      
        </div>
    </div>
     <div class="box-reference-shadow margin-top-30">       
          <h3> LED</h3>
          <a href="/doc-v2/docs/codrone-pro/led/arm-color">arm_color()</a>
          <a href="/doc-v2/docs/codrone-pro/led/arm-default-color">arm_default_color()</a>
          <a href="/doc-v2/docs/codrone-pro/led/arm-default-pattern">arm_default_pattern()</a>
          <a href="/doc-v2/docs/codrone-pro/led/arm-off">arm_off()</a>
          <a href="/doc-v2/docs/codrone-pro/led/arm-pattern">arm_pattern()</a>
          <a href="/doc-v2/docs/codrone-pro/led/arm-strobe">arm_strobe()</a>
          <a href="/doc-v2/docs/codrone-pro/led/eye-color">eye_color()</a>
          <a href="/doc-v2/docs/codrone-pro/led/eye-default-color">eye_default_color()</a>
          <a href="/doc-v2/docs/codrone-pro/led/eye-default-pattern">eye_default_pattern()</a>
          <a href="/doc-v2/docs/codrone-pro/led/eye-off">eye_off()</a>
          <a href="/doc-v2/docs/codrone-pro/led/eye-pattern">eye_pattern()</a>
          <a href="/doc-v2/docs/codrone-pro/led/eye-strobe">eye_strobe()</a>
          <a href="/doc-v2/docs/codrone-pro/led/reset-default-led">reset_default_led()</a> 
        </div>
  </div>
  <div  class="parentContainer">
    <div class="boxLanding">
       <div class="box-reference-shadow"> 
            <h3>Status Cheker</h3>
            <a href="/doc-v2/docs/codrone-pro/status-checkers/is-fliying">is_flying()</a>
            <a href="/doc-v2/docs/codrone-pro/status-checkers/is-ready-to-fly">is_ready_to_fly()</a>
            <a href="/doc-v2/docs/codrone-pro/status-checkers/is-upside-down">is_upside_down()</a>
            <a href="/doc-v2/docs/codrone-pro/status-checkers/on-low-battery">on_low_battery()</a>
        </div>
    </div>
     <div class="box-reference-shadow margin-top-30"> 
            <h3>Sensors</h3>
            <a href="/doc-v2/docs/codrone-pro/sensors/get-accelerometer">get_accelerometer()</a>
            <a href="/doc-v2/docs/codrone-pro/sensors/get-angular-speed">get_angular_speed()</a>
            <a href="/doc-v2/docs/codrone-pro/sensors/get-battery-percentage">get_battery_percentage()</a>
            <a href="/doc-v2/docs/codrone-pro/sensors/get-battery-voltage">get_battery_voltage()</a>
            <a href="/doc-v2/docs/codrone-pro/sensors/get-drone-temp">get_drone_temp()</a>
            <a href="/doc-v2/docs/codrone-pro/sensors/get-gyro-angles">get_gyro_angles()</a>
            <a href="/doc-v2/docs/codrone-pro/sensors/get-height">get_height()</a>
            <a href="/docs/codrone-pro/sensors/get-opt-flow-position">get_opt_flow_position()</a>
            <a href="/doc-v2/docs/codrone-pro/sensors/get-pressure">get_pressure()</a>
            <a href="/doc-v2/docs/codrone-pro/sensors/get-state">get_state()</a>
            <a href="/doc-v2/docs/codrone-pro/sensors/get-trim">get_trim()</a>
            <a href="/doc-v2/docs/codrone-pro/sensors/set-plot-sensor">set_plot_sensor()/draw_plot_sensor()</a>
        </div>
  </div>
</div>
<div class="boxLanding marginTop25">


</div>
