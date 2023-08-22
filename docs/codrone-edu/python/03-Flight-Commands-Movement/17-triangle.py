#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    # default triangle parameters (60, 1, 1)
    drone.triangle()
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()