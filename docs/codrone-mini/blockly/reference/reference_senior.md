---
custom_edit_url: null
title: "CoDrone Mini Library Reference"
menu: "Codrone Mini"
id: library-senior
sidebar_label: Senior reference
hide_table_of_contents: true
---

<h3 class="homeDocLandingVersion">version 1.5.6 (<a class="orange-link" href="/docs/codrone-edu/blockly/changelog">Changelog</a>)</h3>
These are the Blockly functions that you can use to control the CoDrone Mini. Example code is provided in each function definition.

<div class="center">
<br />
    <span class="label-toggle">Junior</span>
<label onClick={function hi(){if(!document.getElementById("juniorSeniorSelector").checked){window.location.href = "/docs/codrone-mini/blockly/reference/library-junior"}}} class="switch">
 <input id="juniorSeniorSelector" type="checkbox"  checked="true" />
  <span class="slider round"></span> 
</label>   <span class="label-toggle">Senior</span>
</div>

<div class="boxLanding">
<div class="parentContainer">
    <div class="box-reference-shadow margin-bottom-20">
        <h3>Flight Commands</h3>
        <a href="/docs/codrone-mini/blockly/Senior/Flight-Commands/01-takeoff">takeoff()</a>
        <img src="/img/codrone-mini/blockly/Senior/Flight-Commands/takeoff.png"></img>
        <a href="/docs/codrone-mini/blockly/Senior/Flight-Commands/02-land">land()</a>
        <img src="/img/codrone-mini/blockly/Senior/Flight-Commands/land.png"></img>
        <a href="/docs/codrone-mini/blockly/Senior/Flight-Commands/03-emergency-stop">emergency_stop()</a>
        <img src="/img/codrone-mini/blockly/Senior/Flight-Commands/emergency_stop.png"></img>
        <a href="/docs/codrone-mini/blockly/Senior/Flight-Commands/04-move">move(seconds, roll, pitch, yaw, throttle)</a>
        <img src="/img/codrone-mini/blockly/Senior/Flight-Commands/move.png"></img>
        <a href="/docs/codrone-mini/blockly/Senior/Flight-Commands/05-turn">turn(direction,seconds,power)</a>
        <img src="/img/codrone-mini/blockly/Senior/Flight-Commands/turn.png"></img>
        <a href="/docs/codrone-mini/blockly/Senior/Flight-Commands/06-hover">hover(seconds)</a>
        <img src="/img/codrone-mini/blockly/Senior/Flight-Commands/hover.png"></img>
    </div>
    <div class="box-reference-shadow margin-bottom-20">
      <h3>Flight Variables</h3>
      <a href="/docs/codrone-mini/blockly/Senior/Flight-Variables/01-set-roll">set_roll(power)</a>
      <img src="/img/codrone-mini/blockly/Senior/Flight-Variables/set_roll.png"></img>
      <a href="/docs/codrone-mini/blockly/Senior/Flight-Variables/02-set-pitch">set_pitch(power)</a>
      <img src="/img/codrone-mini/blockly/Senior/Flight-Variables/set_pitch.png"></img>
      <a href="/docs/codrone-mini/blockly/Senior/Flight-Variables/03-set-yaw">set_yaw(power)</a>
      <img src="/img/codrone-mini/blockly/Senior/Flight-Variables/set_yaw.png"></img>
      <a href="/docs/codrone-mini/blockly/Senior/Flight-Variables/04-set-throttle">set_throttle(power)</a>
      <img src="/img/codrone-mini/blockly/Senior/Flight-Variables/set_throttle.png"></img>
      <a href="/docs/codrone-mini/blockly/Senior/Flight-Variables/05-move-with-parameter">move(seconds)</a>
      <img src="/img/codrone-mini/blockly/Senior/Flight-Variables/move_seconds.png"></img>
      <a href="/docs/codrone-mini/blockly/Senior/Flight-Variables/06-move">move()</a>
      <img src="/img/codrone-mini/blockly/Senior/Flight-Variables/move.png"></img>
      <a href="/docs/codrone-mini/blockly/Senior/Flight-Variables/07-set-trim">set_trim(roll, pitch)</a>
      <img src="/img/codrone-mini/blockly/Senior/Flight-Variables/set_trim.png"></img>
      <a href="/docs/codrone-mini/blockly/Senior/Flight-Variables/08-get-trim">get_trim()</a>
      <img src="/img/codrone-mini/blockly/Senior/Flight-Variables/get_trim.png"></img>
      <a href="/docs/codrone-mini/blockly/Senior/Flight-Variables/09-reset-trim">reset_trim()</a>
      <img src="/img/codrone-mini/blockly/Senior/Flight-Variables/reset_trim.png"></img>
      <a href="/docs/codrone-mini/blockly/Senior/Flight-Variables/10-get-roll">get_roll()</a>
      <img src="/img/codrone-mini/blockly/Senior/Flight-Variables/get_roll.png"></img>
      <a href="/docs/codrone-mini/blockly/Senior/Flight-Variables/11-get-pitch">get_pitch()</a>
      <img src="/img/codrone-mini/blockly/Senior/Flight-Variables/get_pitch.png"></img>
      <a href="/docs/codrone-mini/blockly/Senior/Flight-Variables/12-get-yaw">get_yaw()</a>
      <img src="/img/codrone-mini/blockly/Senior/Flight-Variables/get_yaw.png"></img>
      <a href="/docs/codrone-mini/blockly/Senior/Flight-Variables/13-get-throttle">get_throttle()</a>
      <img src="/img/codrone-mini/blockly/Senior/Flight-Variables/get_throttle.png"></img>
    </div>
  </div>
  <div class="parentContainer">
    <div class="box-reference-shadow margin-bottom-20">
      <h3>Status Checkers</h3>
      <a href="/docs/codrone-mini/blockly/Senior/Status-Checkers/01-code-is-running">code is running</a>
      <img src="/img/codrone-mini/blockly/Senior/Status-Checkers/code_is_running.png"></img>
    </div>
    <div class="box-reference-shadow margin-bottom-20">
      <h3>Sensors</h3>
      <a href="/docs/codrone-mini/blockly/Senior/Sensors/01-get_angle">get_angle(axis)</a>
      <img src="/img/codrone-mini/blockly/Senior/Sensors/get_angle.png"></img>
      <a href="/docs/codrone-mini/blockly/Senior/Sensors/02-get_battery_percentage">get_battery_percentage()</a>
      <img src="/img/codrone-mini/blockly/Senior/Sensors/get_battery_percentage.png"></img>
      <a href="/docs/codrone-mini/blockly/Senior/Sensors/03-get-drone-temp">get_drone_temp(units)</a>
      <img src="/img/codrone-mini/blockly/Senior/Sensors/get_drone_temp.png"></img>
      <a href="/docs/codrone-mini/blockly/Senior/Sensors/04-get-height">get_height()</a>
      <img src="/img/codrone-mini/blockly/Senior/Sensors/get_height.png"></img>
    </div>
    <a href="/docs/codrone-mini/blockly/Senior/Sensors/05-get-pressure">get_pressure</a>
      <img src="/img/codrone-mini/blockly/Senior/Sensors/get_pressure.png"></img>
      <a href="/docs/codrone-mini/blockly/Senior/Sensors/05-reset-sensor">reset_sensor()</a>
      <img src="/img/codrone-mini/blockly/Senior/Sensors/reset_sensor.png"></img>
    <div class="box-reference-shadow margin-bottom-20">
      <h3>Lights</h3>
      <a href="/docs/codrone-mini/blockly/Senior/Lights/01-LED-color">LED_color(r,g,b,brightness)</a>
      <img src="/img/codrone-mini/blockly/Senior/Lights/LEDcolor.png"></img>
      <a href="/docs/codrone-mini/blockly/Senior/Lights/02-LED-color-pattern">LED_color(r,g,b,pattern,speed)</a>
      <img src="/img/codrone-mini/blockly/Senior/Lights/LEDcolor_pattern.png"></img>
      <a href="/docs/codrone-mini/blockly/Senior/Lights/03-turn-LED-off">turn_off_led()</a>
      <img src="/img/codrone-mini/blockly/Senior/Lights/LEDoff.png"></img>
      <a href="/docs/codrone-mini/blockly/Senior/Lights/04-reset-LED">reset_LED()</a>
      <img src="/img/codrone-mini/blockly/Senior/Lights/resetLED.png"></img>
    </div>
    <div class="box-reference-shadow margin-bottom-20">
      <h3>Sound</h3>
      <a href="/docs/codrone-mini/blockly/Senior/Sound/01-play-note">play_note(note,seconds)</a>
      <img src="/img/codrone-mini/blockly/Senior/Sound/play_note.png"></img>
      <a href="/docs/codrone-mini/blockly/Senior/Sound/02-play-note-hertz">play_note(hertz,seconds)</a>
      <img src="/img/codrone-mini/blockly/Senior/Sound/play_note_hertz.png"></img>
    </div>
  </div>

</div>

<div class="boxLanding">
</div>
