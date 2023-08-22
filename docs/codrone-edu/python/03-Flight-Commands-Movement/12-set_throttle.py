#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    # Drone goes up for 1 second with 50 power
    drone.set_throttle(50)
    drone.move(1) # move command executes the movement for 1 second
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()