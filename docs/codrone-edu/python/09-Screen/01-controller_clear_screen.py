#Python code
from codrone_edu.drone import *
drone = Drone()
drone.pair()
drone.controller_clear_screen()
drone.controller_draw_string(0, 0, "you have cleared the screen")
drone.close()