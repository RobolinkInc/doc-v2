#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.controller_LED_off()
drone.close()