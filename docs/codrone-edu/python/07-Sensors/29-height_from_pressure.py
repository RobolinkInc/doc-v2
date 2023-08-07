#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()

drone.set_initial_pressure()

# The drone will not take off in this example but by moving it up and down manually the resulting height will print
for i in range(300):
    print(drone.height_from_pressure(), " centimeters")
    time.sleep(0.2)