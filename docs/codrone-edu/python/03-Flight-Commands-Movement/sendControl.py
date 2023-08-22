#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    drone.sendControl(0, 30, 0, 0) # setting pitch to 30
    time.sleep(1) # wait for 1 second while the drone is moving forward
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()