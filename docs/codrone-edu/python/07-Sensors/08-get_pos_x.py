#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    print(drone.get_pos_x())
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()