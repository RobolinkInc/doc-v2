from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()

drone.set_trim(-100, 50) #example

time.sleep(1)       # Add a time.sleep(1) before takeoff if you're planning to set the trim before takeoff
try:
    drone.takeoff()
    drone.hover(3)
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()