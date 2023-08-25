#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    drone.hover(1)
    # fly forward until a wall is found 600 mm away. run this loop for 10 seconds.
    drone.avoid_wall(10, 600)
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()