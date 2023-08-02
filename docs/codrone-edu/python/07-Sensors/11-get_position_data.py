#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    data = drone.get_position_data()
    print(data)
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()