from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()

drone.set_trim(-5, 0) # example: drone is drifting right, so trim to roll left a little bit

time.sleep(1)       # Add a time.sleep(1) before takeoff if you're planning to set the trim before takeoff
try:
    drone.takeoff()
    drone.hover(3)
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()