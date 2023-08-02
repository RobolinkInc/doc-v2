#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    # default circle parameters (75, 1)
    drone.circle()

finally:
    drone.land()
    drone.emergency_stop()
    drone.close()