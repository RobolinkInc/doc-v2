#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    # fly forward until a wall is found. maintin a distance of 600mm (60cm) from an object once detected. run this loop for 10 seconds.
    drone.keep_distance(10, 600)
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()