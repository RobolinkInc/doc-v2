#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    drone.go(50, 50, 0, 0, 5) # Drone flies diagonally forward and right for 5 seconds
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()