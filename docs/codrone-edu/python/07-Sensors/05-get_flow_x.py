#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    drone.set_pitch(50)
    drone.move(1)
    print(drone.get_flow_x())
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()