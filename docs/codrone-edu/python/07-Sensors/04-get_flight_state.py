#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.get_flight_state()
drone.close()