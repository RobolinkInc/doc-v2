#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    print(drone.get_left_joystick_x())