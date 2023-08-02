#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    drone.turn_degree(90) # drone will turn right 90 degrees
finally:
    drone.land()
    drone.close()