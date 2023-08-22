#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    drone.turn_right() # make a 90 degree right turn.
    drone.hover(1) # wait for 1 second in the air
    drone.turn_right(30, 3) # make a 30 degree right turn with a 3 second timeout.
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()