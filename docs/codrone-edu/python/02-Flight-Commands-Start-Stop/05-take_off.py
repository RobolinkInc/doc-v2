from codrone_edu.drone import *

drone=Drone()
drone.pair()
try:
    drone.takeoff()
    drone.hover(10)
    drone.land()

finally:
    drone.emergency_stop()
    drone.close()