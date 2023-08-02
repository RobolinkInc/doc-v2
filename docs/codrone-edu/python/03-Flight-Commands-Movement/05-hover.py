#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    drone.hover(3)
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()