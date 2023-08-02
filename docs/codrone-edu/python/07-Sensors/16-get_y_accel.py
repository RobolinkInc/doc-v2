#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    print(drone.get_y_accel())
finally:
    drone.land()
    drone.close()