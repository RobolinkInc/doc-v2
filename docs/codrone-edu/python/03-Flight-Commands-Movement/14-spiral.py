#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    drone.set_throttle(50)
    drone.move(3)
    # default spiral parameters (50, 5, 1)
    drone.spiral()

finally:
    drone.land()
    drone.emergency_stop()
    drone.close()