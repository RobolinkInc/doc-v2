#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    drone.hover(3) #Recommended to have a hover() or time.sleep(1) before landing
    drone.stop_motors()
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()