#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    if drone.right_arrow_pressed():
        print("right arrow button has been pressed!")