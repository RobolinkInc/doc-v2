#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    # if a wall is detected in less than 50cm true will be returned.
    if drone.detect_wall():
        print("wall detected!")
    else:
        print("no wall detected!")
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()