#Python code
from codrone_edu.drone import *
import time



drone = Drone()
drone.pair()
try:
    drone.takeoff()
    drone.move_left(distance=50, units="cm", speed=1)
    time.sleep(3) # make sure to add a delay so the drone has enough time to fly
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()