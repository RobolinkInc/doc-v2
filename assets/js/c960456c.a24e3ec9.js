(window.webpackJsonp=window.webpackJsonp||[]).push([[460],{530:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),l=n(7),o=(n(0),n(640)),d=["components"],b={custom_edit_url:null,id:"changelog",title:"CoDrone EDU Library Changelog"},a={unversionedId:"codrone-edu/python/changelog",id:"codrone-edu/python/changelog",isDocsHomePage:!1,title:"CoDrone EDU Library Changelog",description:"---",source:"@site/docs/codrone-edu/python/change-log.md",sourceDirName:"codrone-edu/python",slug:"/codrone-edu/python/changelog",permalink:"/docs/codrone-edu/python/changelog",editUrl:null,version:"current",frontMatter:{custom_edit_url:null,id:"changelog",title:"CoDrone EDU Library Changelog"},sidebar:"codroneEduSideBar",previous:{title:"CoDrone EDU Library Reference",permalink:"/docs/codrone-edu/python/reference/library"},next:{title:"pair()",permalink:"/docs/codrone-edu/python/Connection/01-pair"}},c=[{value:"Added controller screen drawing functions",id:"added-controller-screen-drawing-functions",children:[]}],i={toc:c};function u(e){var t=e.components,n=Object(l.a)(e,d);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("hr",null),Object(o.b)("h5",{id:"april-15-2023"},"April 15, 2023"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CoDrone EDU Version 1.8")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"added get_sensor_data()"),Object(o.b)("li",{parentName:"ul"},"Fixed bug where sensor requests would return 0 right after takeoff"),Object(o.b)("li",{parentName:"ul"},"Removed ",Object(o.b)("em",{parentName:"li"},"pynput")," dependency")),Object(o.b)("h5",{id:"february-16-2023"},"February 16, 2023"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CoDrone EDU Version 1.7")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"added start_controller_buzzer()"),Object(o.b)("li",{parentName:"ul"},"added stop_controller_buzzer()"),Object(o.b)("li",{parentName:"ul"},"added get_error_data()"),Object(o.b)("li",{parentName:"ul"},"renamed get_x_gyro() -> get_angular_speed_x()"),Object(o.b)("li",{parentName:"ul"},"renamed get_y_gyro() -> get_angular_speed_y()"),Object(o.b)("li",{parentName:"ul"},"renamed get_z_gyro() -> get_angular_speed_z()"),Object(o.b)("li",{parentName:"ul"},"codrone-edu library version prints to console")),Object(o.b)("h5",{id:"december-28-2022"},"December 28, 2022"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CoDrone EDU Version 1.6")),Object(o.b)("p",null,"added start_drone_buzzer()"),Object(o.b)("p",null,"added stop_drone_buzzer()"),Object(o.b)("p",null,"added get_temperature()"),Object(o.b)("p",null,"added move_forward()"),Object(o.b)("p",null,"added move_left()"),Object(o.b)("p",null,"added move_right()"),Object(o.b)("p",null,"added move_backward()"),Object(o.b)("p",null,"updated send_absolute_position()"),Object(o.b)("hr",null),Object(o.b)("h5",{id:"november-14-2022"},"November 14, 2022"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CoDrone EDU Version 1.5")),Object(o.b)("p",null,"avoid wall default unit changed from mm to cm"),Object(o.b)("p",null,"added reset_sensor()"),Object(o.b)("p",null,"get_pressure() and get_drone_temp() have been modified"),Object(o.b)("p",null,"added stop_motors()"),Object(o.b)("hr",null),Object(o.b)("h5",{id:"august-17-2022"},"August 17, 2022"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CoDrone EDU Version 1.4")),Object(o.b)("p",null,"added error checking to load_classifier() method"),Object(o.b)("p",null,"added height_from_pressure()"),Object(o.b)("p",null,"Virtual ceiling method integrated"),Object(o.b)("p",null,"Changed yaw directional values (positive yaw now turns left)"),Object(o.b)("hr",null),Object(o.b)("h5",{id:"june-27-2022"},"June 27, 2022"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CoDrone EDU Version 1.3")),Object(o.b)("p",null,"added go()"),Object(o.b)("p",null,"added 'ESC' key kill switch"),Object(o.b)("p",null,"waypoints now support multiple takeoffs"),Object(o.b)("p",null,"Motor diagnostic integrated as motor_test()"),Object(o.b)("p",null,"Added virtual ceiling to the background of the drone class"),Object(o.b)("p",null,"turn_degree() method improved"),Object(o.b)("p",null,"added turn()"),Object(o.b)("hr",null),Object(o.b)("h5",{id:"june-10-2022"},"June 10, 2022"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CoDrone EDU Version 1.2")),Object(o.b)("p",null,"Added move() command with input parameters"),Object(o.b)("p",null,"Added hyperlink to \u201cdrone may not be paired\u201d message."),Object(o.b)("p",null,"Added floor test as a method test_floor()"),Object(o.b)("p",null,"Added a motor test that uses all 4 motors individually to determine if one is faulty. motor_test()"),Object(o.b)("p",null,"Added waypoint system"),Object(o.b)("p",null,"Added joystick and button functions"),Object(o.b)("hr",null),Object(o.b)("h5",{id:"may-17-2022"},"May 17, 2022"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CoDrone EDU Version 1.1")),Object(o.b)("p",null,"removed serial library"),Object(o.b)("p",null,"Fixed screen error on controller"),Object(o.b)("hr",null),Object(o.b)("h5",{id:"mar-17-2022"},"Mar 17, 2022"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CoDrone EDU Version 1.0")),Object(o.b)("p",null,"Speed defaults to 2 when starting a program"),Object(o.b)("p",null,"Added speed_change() and get_control_speed() functions"),Object(o.b)("p",null,"Pillow library added as dependency"),Object(o.b)("p",null,"Added error message if serial library is not detected"),Object(o.b)("p",null,"Added error handling when calling load_classifier()"),Object(o.b)("hr",null),Object(o.b)("h5",{id:"mar-17-2022-1"},"Mar 17, 2022"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CoDrone EDU Version 0.9")),Object(o.b)("p",null,"Added Swarm class"),Object(o.b)("hr",null),Object(o.b)("h5",{id:"mar-1-2022"},"Mar 1, 2022"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CoDrone EDU Version 0.8")),Object(o.b)("p",null,"Added movement as a state in the state list"),Object(o.b)("p",null,"Added temperature_convert()"),Object(o.b)("hr",null),Object(o.b)("h5",{id:"feb-18-2022"},"Feb 18, 2022"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CoDrone EDU Version 0.7")),Object(o.b)("p",null,"Fixed turn_degree() to be absolute and smoother and turn 180 degrees"),Object(o.b)("p",null,"Fixed turn_right()"),Object(o.b)("p",null,"Fixed turn_left()"),Object(o.b)("p",null,"Added luminosity to knn.fit for a fourth data point"),Object(o.b)("h2",{id:"added-controller-screen-drawing-functions"},"Added controller screen drawing functions"),Object(o.b)("h5",{id:"feb-4-2022"},"Feb 4, 2022"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CoDrone EDU Version 0.6")),Object(o.b)("p",null,"All distance sensors now return in centimeter by default"),Object(o.b)("p",null,"Fixed all functions effected by centimeter being returned by default"),Object(o.b)("p",null,"drone.turn_degree() is now absolute and division by 0 is fixed"),Object(o.b)("p",null,"drone.get_height() now uses time of flight instead of barometer"),Object(o.b)("p",null,"drone.get_flow_x, y converted from m to cm"),Object(o.b)("p",null,"Fixed drone.avoid_wall()"),Object(o.b)("p",null,"Added and fixed sendMotor"),Object(o.b)("p",null,"Added and fixed sendMotorSingle"),Object(o.b)("p",null,"Fixed buzzer functions"),Object(o.b)("p",null,"Added buzzer flip warning when battery is less than 50%"),Object(o.b)("p",null,"convert_meter can now return meter"),Object(o.b)("p",null,"Added drone.append_color_data() - appends data to an existing text file"),Object(o.b)("p",null,"Added error handling when load_classifier is empty"),Object(o.b)("p",null,"Changed dir variable in add_color()"),Object(o.b)("p",null,"Fixed issue when adding to a dataset that already exists"),Object(o.b)("p",null,"Updated set_trim() to only change roll and pitch"),Object(o.b)("p",null,"Updated get_trim_data() to return only roll and pitch"),Object(o.b)("hr",null),Object(o.b)("h5",{id:"jan-10-2022"},"Jan 10, 2022"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CoDrone EDU Version 0.5")),Object(o.b)("p",null,"Added drone.flip()"),Object(o.b)("p",null,"Added convert_millimeter() and convert_meter() to return centimeter by default for all positional functions"),Object(o.b)("p",null,"Added error handling in the color classifier"),Object(o.b)("p",null,"Added docstrings"),Object(o.b)("hr",null),Object(o.b)("h5",{id:"dec-15-2021"},"Dec 15, 2021"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CoDrone EDU Version 0.4")),Object(o.b)("p",null,"Added drone.get_drone_temp()"),Object(o.b)("p",null,"Added drone.get_pressure()"),Object(o.b)("p",null,"Added drone.drone_buzzer()"),Object(o.b)("p",null,"Added drone.controller_buzzer()"),Object(o.b)("p",null,"Added drone.set_trim()"),Object(o.b)("p",null,"Added drone.get_height"),Object(o.b)("p",null,"Added drone.get_pressure()"),Object(o.b)("p",null,"Added the flight sequences square, triangle, spiral, and sway."),Object(o.b)("p",null,"Improved takeoff command"),Object(o.b)("p",null,"Improved port connection"),Object(o.b)("hr",null),Object(o.b)("h5",{id:"nov-23-2021"},"Nov 23, 2021"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CoDrone EDU Version 0.3")),Object(o.b)("p",null,"Added drone.avoid_wall() - Obstacle avoidance command. is similar to zumi.forward_avoid_collision()"),Object(o.b)("p",null,"Added drone.detect_wall() - Uses front range sensor to detect a wall"),Object(o.b)("p",null,"Added drone.keep_distance() - Keep distance command makes the drone maintain a distance to an obstacle"),Object(o.b)("p",null,"Added drone.turn_left() - Can be given a degree and the drone will turn to the left"),Object(o.b)("p",null,"Added drone.turn_right() - Can be given a degree and the drone will turn to the right"),Object(o.b)("p",null,"Added drone.turn_degrees() - Can take an absolute degree command and will turn to that degree."),Object(o.b)("p",null,"Added drone.hover() - Will make the drone hover."),Object(o.b)("p",null,"Added reset_YPRT() - Resets the yaw pitch roll and throttle and sends the command to the drone."),Object(o.b)("p",null,"Added drone.keep_height() - Keep height command. A single command that is looped."),Object(o.b)("p",null,"Added get_colors() - returns a list ","[1, 2]"),Object(o.b)("p",null,"Added get_front_color() - gets first color in get_colors() list"),Object(o.b)("p",null,"Added get_back_color() -  gets second color in get_colors() list"),Object(o.b)("p",null,"Added predict_color() - predicts a color if you have trained the model and there is an existing file"),Object(o.b)("p",null,"Finished basic LEDs"),Object(o.b)("hr",null),Object(o.b)("h5",{id:"oct-10-2021"},"Oct 10, 2021"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"CoDrone EDU Version (0.1 - 0.2)")),Object(o.b)("p",null,"Added Drone.acceleration_x, y, z"),Object(o.b)("p",null,"Added Drone.angle_roll, yaw, pitch"),Object(o.b)("p",null,"Added Drone.range_front()"),Object(o.b)("p",null,"Added Drone.range_bottom()"),Object(o.b)("p",null,"Added Drone.get_battery()"),Object(o.b)("p",null,"Added Drone.open()"),Object(o.b)("p",null,"Added Drone.takeoff()"),Object(o.b)("p",null,"Added Drone.land()"),Object(o.b)("hr",null))}u.isMDXComponent=!0},640:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),l=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),i=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=i(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=l.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=i(n),s=r,O=u["".concat(d,".").concat(s)]||u[s]||p[s]||o;return n?l.a.createElement(O,b(b({ref:t},c),{},{components:n})):l.a.createElement(O,b({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,d=new Array(o);d[0]=s;var b={};for(var a in t)hasOwnProperty.call(t,a)&&(b[a]=t[a]);b.originalType=e,b.mdxType="string"==typeof e?e:r,d[1]=b;for(var c=2;c<o;c++)d[c]=n[c];return l.a.createElement.apply(null,d)}return l.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);