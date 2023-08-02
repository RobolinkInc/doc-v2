from codrone_edu.drone import *

drone=Drone()
drone.pair()
drone.open()

try:
    drone.set_trim(5, 0)
    print(drone.get_trim())
    drone.takeoff()
    drone.hover(3)


finally:
    drone.land()
    drone.emergency_stop()
    drone.reset_trim()
    print(drone.get_trim())
    drone.close()
