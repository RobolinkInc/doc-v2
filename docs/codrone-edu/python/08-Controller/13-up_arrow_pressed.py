#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    if drone.up_arrow_pressed():
        print("up arrow button has been pressed!")