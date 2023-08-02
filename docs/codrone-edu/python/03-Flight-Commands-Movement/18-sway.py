#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

try:
    drone.takeoff()
# default sway parameters (30, 2, 1)
    drone.sway()
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()