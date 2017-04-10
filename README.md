# DublinBusAlexa
This app gives Alexa the opportunity to reach the Dublin bus api and print the latest bus and bus after.
It includes duetime and bus route. 

# Credits
Zana for his foundation of Alexa Speech <br>
Government for their open API <br>

# Usage (Sample Utterences)
stop {StopNumber} <br>
next bus for stop {StopNumber} <br>
next bus {StopNumber} <br>
bus {StopNumber} <br>

# Documentation 
Dublin Bus app uses MongoDB to store the string of bus stop number and the FK (Foreign Key) which is Alexa unique ID. <br>
The app uses the government RTPI API to call e.g: https://data.dublinked.ie/cgi-bin/rtpi/realtimebusinformation?stopid=${event.request.intent.slots.StopNumber.value}&maxresults&operators=dublinbus&format=json <br>

Feel free to use code written here for future projects, this will help us store data within MongoDB for our hackathon submission. <br> 
http://mongodb.github.io/node-mongodb-native/2.2/ <br>
https://data.gov.ie/dataset/real-time-passenger-information-rtpi-for-dublin-bus-bus-eireann-luas-and-irish-rail
