#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

try:
    drone.takeoff()
    drone.hover(3)
    height = drone.get_height()
    print(height)
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()