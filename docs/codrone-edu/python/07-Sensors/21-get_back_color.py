#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
color_data = drone.get_back_color()
print(color_data)
drone.close()