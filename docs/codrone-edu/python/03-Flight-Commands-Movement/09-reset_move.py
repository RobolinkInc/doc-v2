#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
try:
    drone.takeoff()
    drone.set_pitch(50)
    drone.set_roll(50)
    drone.move(1)
    drone.reset_move() # reset the pitch and roll to 0.
    drone.move(1)
finally:
    drone.land()
    drone.emergency_stop()
    drone.close()