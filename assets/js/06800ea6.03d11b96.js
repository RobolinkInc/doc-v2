(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{644:function(e,o,r){"use strict";r.d(o,"a",(function(){return h})),r.d(o,"b",(function(){return i}));var t=r(0),n=r.n(t);function c(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function d(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?d(Object(r),!0).forEach((function(o){c(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function a(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),b=function(e){var o=n.a.useContext(l),r=o;return e&&(r="function"==typeof e?e(o):s(s({},o),e)),r},h=function(e){var o=b(e.components);return n.a.createElement(l.Provider,{value:o},e.children)},_={inlineCode:"code",wrapper:function(e){var o=e.children;return n.a.createElement(n.a.Fragment,{},o)}},p=n.a.forwardRef((function(e,o){var r=e.components,t=e.mdxType,c=e.originalType,d=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),h=b(r),p=t,i=h["".concat(d,".").concat(p)]||h[p]||_[p]||c;return r?n.a.createElement(i,s(s({ref:o},l),{},{components:r})):n.a.createElement(i,s({ref:o},l))}));function i(e,o){var r=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var c=r.length,d=new Array(c);d[0]=p;var s={};for(var a in o)hasOwnProperty.call(o,a)&&(s[a]=o[a]);s.originalType=e,s.mdxType="string"==typeof e?e:t,d[1]=s;for(var l=2;l<c;l++)d[l]=r[l];return n.a.createElement.apply(null,d)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},91:function(e,o,r){"use strict";r.r(o),r.d(o,"frontMatter",(function(){return s})),r.d(o,"metadata",(function(){return a})),r.d(o,"toc",(function(){return l})),r.d(o,"default",(function(){return h}));var t=r(3),n=r(7),c=(r(0),r(644)),d=["components"],s={custom_edit_url:null,id:"library",title:"CoDrone EDU Library Reference",hide_table_of_contents:!0},a={unversionedId:"codrone-edu/python/reference/library",id:"codrone-edu/python/reference/library",isDocsHomePage:!1,title:"CoDrone EDU Library Reference",description:"version 1.8 (Changelog)",source:"@site/docs/codrone-edu/python/reference/00-home.md",sourceDirName:"codrone-edu/python/reference",slug:"/codrone-edu/python/reference/library",permalink:"/docs/codrone-edu/python/reference/library",editUrl:null,version:"current",sidebarPosition:0,frontMatter:{custom_edit_url:null,id:"library",title:"CoDrone EDU Library Reference",hide_table_of_contents:!0},sidebar:"codroneEduSideBar",next:{title:"CoDrone EDU Library Changelog",permalink:"/docs/codrone-edu/python/changelog"}},l=[],b={toc:l};function h(e){var o=e.components,r=Object(n.a)(e,d);return Object(c.b)("wrapper",Object(t.a)({},b,r,{components:o,mdxType:"MDXLayout"}),Object(c.b)("h3",{class:"homeDocLandingVersion"},"version 1.8 (",Object(c.b)("a",{class:"orange-link",href:"/docs/codrone-edu/python/changelog"},"Changelog"),") "),"These are the functions that you can use to control the CoDrone EDU. The functions are available in Python library. Example code is provided in each function definition.",Object(c.b)("div",{class:"boxLanding"},Object(c.b)("div",{class:"parentContainer"},Object(c.b)("div",{class:"box-reference-shadow"},Object(c.b)("h3",null,"Connection"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Connection/01-pair"},"pair()")),Object(c.b)("div",{class:"box-reference-shadow margin-top-30"},Object(c.b)("h3",null,"Flight Commands (Start/Stop)"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Start-Stop/01-emergency_stop"},"emergency_stop()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Start-Stop/02-land"},"land()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Start-Stop/03-reset_trim/"},"reset_trim()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Start-Stop/04-set_trim"},"set_trim()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Start-Stop/05-take_off"},"takeoff()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Start-Stop/06-reset_sensor"},"reset_sensor()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Start-Stop/07-stop_motors"},"stop_motors()")),Object(c.b)("div",{class:"box-reference-shadow margin-top-30"},Object(c.b)("h3",null,"Flight Commands (Movement)"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/01-avoid_wall"},"avoid_wall()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/02-circle"},"circle()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/03-detect_wall"},"detect_wall()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/04-flip"},"flip()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/05-hover"},"hover()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/06-keep_distance"},"keep_distance()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/07-move"},"move()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/08-print_move_values"},"print_move_values()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/09-reset_move"},"reset_move()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/10-sendControl"},"sendControl()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/11-sendControlWhile"},"sendControlWhile()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/12-set_pitch"},"set_pitch()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/13-set_roll"},"set_roll()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/14-set_throttle"},"set_throttle()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/15-set_yaw"},"set_yaw()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/16-spiral"},"spiral()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/17-square"},"square()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/18-sway"},"sway()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/19-triangle"},"triangle()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/20-turn_degree"},"turn_degree()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/21-turn_left"},"turn_left()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/22-turn_right"},"turn_right()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/23-goto_waypoint"},"goto_waypoint()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/24-set_waypoint"},"set_waypoint()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/25-go"},"go()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/26-move_forward"},"move_forward()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/27-move_backward"},"move_backward()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/28-move_left"},"move_left()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/29-move_right"},"move_right()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Flight-Commands-Movement/30-send_absolute_position"},"send_absolute_position()")),Object(c.b)("div",{class:"box-reference-shadow margin-top-30"},Object(c.b)("h3",null,"Buzzer"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Buzzer/01-controller_buzzer/"},"controller_buzzer()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Buzzer/02-drone_buzzer/"},"drone_buzzer()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Buzzer/03-start_drone_buzzer/"},"start_drone_buzzer()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Buzzer/04-stop_drone_buzzer/"},"stop_drone_buzzer()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Buzzer/05-start_controller_buzzer/"},"start_controller_buzzer()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Buzzer/06-stop_controller_buzzer/"},"stop_controller_buzzer()")),Object(c.b)("div",{class:"box-reference-shadow margin-top-30"},Object(c.b)("h3",null,"LED"),Object(c.b)("a",{href:"/docs/codrone-edu/python/LED/01-controller_LED_off"},"controller_LED_off()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/LED/02-drone_LED_off"},"drone_LED_off()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/LED/03-set_controller_LED"},"set_controller_LED()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/LED/04-set_drone_LED"},"set_drone_LED()"))),Object(c.b)("div",{class:"parentContainer"},Object(c.b)("div",{class:"boxLanding"},Object(c.b)("div",{class:"box-reference-shadow"},Object(c.b)("h3",null,"Sensor"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/01-get_battery"},"get_battery()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/02-get_bottom_range"},"get_bottom_range()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/03-get_temperature"},"get_temperature()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/04-get_flight_state"},"get_flight_state()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/05-get_flow_x"},"get_flow_x()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/06-get_flow_y"},"get_flow_y()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/07-get_front_range"},"get_front_range()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/08-get_pos_x"},"get_pos_x()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/09-get_pos_y"},"get_pos_y()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/10-get_pos_z"},"get_pos_z()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/11-get_position_data"},"get_position_data()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/12-get_pressure"},"get_pressure()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/13-get_trim"},"get_trim()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/14-get_x_accel"},"get_x_accel()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/15-get_x_angle"},"get_x_angle()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/16-get_y_accel"},"get_y_accel()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/17-get_y_angle"},"get_y_angle()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/18-get_z_accel"},"get_z_accel()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/19-get_z_angle"},"get_z_angle()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/20-get_height"},"get_height()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/21-get_back_color"},"get_back_color()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/22-get_color_data"},"get_color_data()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/23-get_front_color"},"get_front_color()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/24-load_classifier"},"load_classifier()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/25-predict_colors"},"predict_colors()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/26-get_colors"},"get_colors()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/27-new_color_data"},"new_color_data()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/28-append_color_data"},"append_color_data()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/29-height_from_pressure"},"height_from_pressure()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/30-set_initial_pressure"},"set_initial_pressure()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/31-get_angular_speed_x"},"get_angular_speed_x()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/32-get_angular_speed_y"},"get_angular_speed_y()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/33-get_angular_speed_z"},"get_angular_speed_z()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/34-get_sensor_data"},"get_sensor_data()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Sensors/35-get_error_data"},"get_error_data()"))),Object(c.b)("div",{class:"box-reference-shadow margin-top-30"},Object(c.b)("h3",null,"Controller"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Controller/01-down_arrow_pressed"},"down_arrow_pressed()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Controller/02-get_button_data"},"get_button_data()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Controller/03-h_pressed"},"h_pressed()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Controller/04-l1_pressed"},"l1_pressed()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Controller/05-l2_pressed"},"l2_pressed()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Controller/06-left_arrow_pressed"},"left_arrow_pressed()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Controller/07-p_pressed"},"p_pressed()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Controller/08-power_pressed"},"power_pressed()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Controller/09-r1_pressed"},"r1_pressed()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Controller/10-r2_pressed"},"r2_pressed()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Controller/11-right_arrow_pressed"},"right_arrow_pressed()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Controller/12-s_pressed"},"s_pressed()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Controller/13-up_arrow_pressed"},"up_arrow_pressed()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Controller/14-get_joystick_data"},"get_joystick_data()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Controller/15-get_left_joystick_x"},"get_left_joystick_x()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Controller/16-get_left_joystick_y"},"get_left_joystick_y()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Controller/17-get_right_joystick_x"},"get_right_joystick_x()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Controller/18-get_right_joystick_y"},"get_right_joystick_y()")),Object(c.b)("div",{class:"box-reference-shadow margin-top-30"},Object(c.b)("h3",null,"Screen"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Screen/01-controller_clear_screen"},"controller_clear_screen()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Screen/02-controller_create_canvas"},"controller_create_canvas()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Screen/03-controller_draw_arc"},"controller_draw_arc()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Screen/04-controller_draw_canvas"},"controller_draw_canvas()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Screen/05-controller_draw_chord"},"controller_draw_chord()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Screen/06-controller_draw_ellipse"},"controller_draw_ellipse()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Screen/07-controller_draw_image"},"controller_draw_image()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Screen/08-controller_draw_line"},"controller_draw_line()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Screen/09-controller_draw_point"},"controller_draw_point()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Screen/10-controller_draw_polygon"},"controller_draw_polygon()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Screen/11-controller_draw_rectangle"},"controller_draw_rectangle()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Screen/12-controller_draw_square"},"controller_draw_square()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Screen/13-controller_draw_string_align"},"controller_draw_string_align()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Screen/14-controller_draw_string"},"controller_draw_string()"),Object(c.b)("a",{href:"/docs/codrone-edu/python/Screen/15-controller_preview_canvas"},"controller_preview_canvas()")))),Object(c.b)("div",{class:"boxLanding marginTop25"}))}h.isMDXComponent=!0}}]);