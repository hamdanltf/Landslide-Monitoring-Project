import serial
import time
import requests
import json
firebase_url = 'https://larys-project.firebaseio.com'
# Connect to Serial Port for communication

# Setup a loop to send sensor values at fixed intervals
# in seconds


# def ReadData(nama_port):
ser = serial.Serial('COM5', 9600, timeout=100)
while 1:
    try:
        # sensor value obtained from Arduino
        ser.flush()
        sensorRead = ser.readline()

        # current time and date
        time_hhmmss = time.strftime('%H:%M:%S')
        date_mmddyyyy = time.strftime('%d/%m/%Y')

        print(sensorRead.decode("utf-8"))

        waktu = {'date': date_mmddyyyy, 'time': time_hhmmss}

        par = sensorRead.decode("utf-8").split()
        print(par)

        if (len(par) == 7):
            parameter = {
                'miring_x': par[0], 'miring_y': par[1], 'miring_z': par[2],'lembab': par[3], 'getar': par[4], 'jarak': par[5],  'node': par[6]}

            data = {'waktu': waktu, 'parameter': parameter}
            result = requests.post(
                firebase_url + '/SENSOR2.json', data=json.dumps(data))

            print('Record inserted. Result Code = ' +
                  str(result.status_code) + ',' + result.text)

    except IOError:
        print('Error! Something went wrong.')