import serial
import time
import requests
import json
firebase_url = 'https://larys-project.firebaseio.com'
#Connect to Serial Port for communication
ser = serial.Serial('COM10', 9600, timeout=100)
#Setup a loop to send Temperature values at fixed intervals
#in seconds

# s = sched.scheduler(time.time, time.sleep)
fixed_interval = 1
while 1:
  try:
    #temperature value obtained from Arduino + LM35 Temp Sensor      
    ser.flush()

    sensorRead = ser.readline()
    
    #current time and date
    time_hhmmss = time.strftime('%H:%M:%S')
    date_mmddyyyy = time.strftime('%d/%m/%Y')
    
    print(sensorRead.decode("utf-8"))

    waktu = { 'date': date_mmddyyyy, 'time': time_hhmmss }
    
    par = sensorRead.decode("utf-8").split()
    print(par)

    if (len(par) == 3):
      parameter = { 'miring_x': par[0], 'miring_y': par[1], 'lembab': par[2] }

      data = { 'waktu': waktu, 'parameter': parameter }
      result = requests.post(firebase_url + '/SENSOR1.json', data=json.dumps(data))
      
      print('Record inserted. Result Code = ' + str(result.status_code) + ',' + result.text)
  except IOError:
    print('Error! Something went wrong.')