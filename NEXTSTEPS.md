DONE: MERGE https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-javascript (The working code)


DONE: WITH THIS https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple#maps_geocoding_simple-javascript (Not working code that provides the lat and long data)


Use these endpoints in the weather API:
https://api.weather.gov/points/{latitude},{longitude}  // USE LOCATION TO ACCESS DATA 

https://api.weather.gov/points/{latitude},{longitude} = Object > properties > forecast -- Daily forcast, includes morning, night, and holiday naming date. Gives temperature, dewpoint, precipitation chances, humidity, windspeed, direction, an icon (Maybe use custom Icons), Forcast name (Partly Cloudy), and some details. (THIS IS THE ENDPOINT, ITS INSIDE OF Object > properties > forecast[I need to find a way to use the object key to upen a request because of the custom data, the PUB and the 72,86 are custom and generated on their side] <https://api.weather.gov/gridpoints/PUB/72,86/forecast>)



https://api.weather.gov/points/{latitude},{longitude} = Object > properties > forecastHourly -- HOurly forcast, based off a value[called number in the object], it incriments hour by hour with the following data: start-time, end-time, day time or night time, temperature, percipitation chances, dewpoint, humidity, wind speed, wind direction, am icon, forcast name(Mostly sunny), and details(THIS IS THE ENDPOINT, ITS INSIDE OF Object > properties > forecastHourly[I need to find a way to use the object key to upen a request because of the custom data, the PUB and the 72,86 are custom and generated on their side] <https://api.weather.gov/gridpoints/PUB/72,86/forecast/hourly>)