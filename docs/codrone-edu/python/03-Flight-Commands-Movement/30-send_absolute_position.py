#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()
try:
    drone.takeoff()

    # Sending the drone forward from its takeoff location 0.5 meters moving at 0.5 m/s
    drone.send_absolute_position(0.5, 0, 1, 0.5, 0, 0)
    time.sleep(4) # Sleep command needed in order for this movement to execute.

    # Sending the same command will cause the drone to hover around
    # the same area since this command uses absolute positioning from the takeoff location
    drone.send_absolute_position(0.5, 0, 1, 0.5, 0, 0)
    time.sleep(4)
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()