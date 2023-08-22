#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    # default square parameters (60, 1, 1) )    (speed, secondsInEachDirection,direction(1=right,-1=left))
    drone.square(60,1,-1)
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()