#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    drone.hover(3)
    bottom_range = drone.get_bottom_range()
    print(bottom_range)
finally:
    drone.land()
    drone.close()