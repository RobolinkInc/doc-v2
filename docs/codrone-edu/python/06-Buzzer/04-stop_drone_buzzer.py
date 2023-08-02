#Python code
from codrone_edu.drone import *
import time
distance = 50

drone = Drone()
drone.pair()

drone.start_drone_buzzer(500) # starting the buzzer

# these commands run while the buzzer runs in the background
for i in range(5):
    drone.set_drone_LED(255, 0, 0, 100)
    time.sleep(0.5)
    drone.set_drone_LED(0, 255, 0, 100)
    time.sleep(0.5)

drone.stop_drone_buzzer() # stops the buzzer
drone.close()