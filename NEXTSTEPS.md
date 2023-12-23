DONE: MERGE https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-javascript (The working code)


DONE: WITH THIS https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple#maps_geocoding_simple-javascript (Not working code that provides the lat and long data)


HALF IMPLIMENTED: NEW WEATHER API:



Next Step: Create the daily page with bootstrap and CSS



HALF DONE: ENDPOINTS: 


DONE: Hourly:
    location:
    "name": "Ellsworth",
    "region": "Nebraska",
    "country": "United States of America",
    "lat": 42.36,
    "lon": -102.26,
    "tz_id": "America/Denver",
    "localtime_epoch": 1703356208,
    "localtime": "2023-12-23 11:30"

    forcast>forecastday>[0]||[1]||[2]


    "date": "2023-12-25",


    "day": {
    "maxtemp_c": -3.4,
    "maxtemp_f": 25.8,
    "mintemp_c": -6.6,
    "mintemp_f": 20.1,
    "avgtemp_c": -5.3,
    "avgtemp_f": 22.5,
    "maxwind_mph": 21.3,
    "maxwind_kph": 34.2,
    "totalprecip_mm": 0,
    "totalprecip_in": 0,
    "totalsnow_cm": 0,
    "avgvis_km": 10,
    "avgvis_miles": 6,
    "avghumidity": 63,
    "daily_will_it_rain": 0,
    "daily_chance_of_rain": 0,
    "daily_will_it_snow": 0,
    "daily_chance_of_snow": 0,

    "day">>>>>"condition": {
    "text": "Cloudy",
    "icon": "//cdn.weatherapi.com/weather/64x64/day/119.png",
    "code": 1006


    "astro": {
    "sunrise": "07:16 AM",
    "sunset": "04:21 PM",
    "moonrise": "02:59 PM",
    "moonset": "06:18 AM",
    "moon_phase": "Waxing Gibbous",
    "moon_illumination": 96,
    "is_moon_up": 1,
    "is_sun_up": 0




    "hour": [
    {
    "time": "2023-12-25 00:00",
    "temp_f": 21.9,
    "is_day": 0,
    "wind_mph": 14.5,
    "precip_in": 0,
    "snow_cm": 0,
    "humidity": 70,
    "cloud": 89,
    "feelslike_f": 8.8,
    "windchill_f": 8.8,
    "heatindex_f": 21.9,
    "dewpoint_f": 13.9,
    "chance_of_rain": 0,
    "chance_of_snow": 0,
    "vis_miles": 6,
    "uv": 1,
    }]


    "hour">>>>>"condition": {
    "text": "Overcast",
    "icon": "//cdn.weatherapi.com/weather/64x64/night/122.png",
    "code": 1009


    "hour">>>>>"air_quality": {
    "co": 217,
    "no2": 0.6,
    "o3": 65.8,
    "so2": 0.4,
    "pm2_5": 0.5,
    "pm10": 0.5,
    "us-epa-index": 1,
    "gb-defra-index": 1
    }

Daily:

























































Use these endpoints in the weather API:
https://api.weather.gov/points/{latitude},{longitude}  // USE LOCATION TO ACCESS DATA 

https://api.weather.gov/points/{latitude},{longitude} = Object > properties > forecast -- Daily forcast, includes morning, night, and holiday naming date. Gives temperature, dewpoint, precipitation chances, humidity, windspeed, direction, an icon (Maybe use custom Icons), Forcast name (Partly Cloudy), and some details. (THIS IS THE ENDPOINT, ITS INSIDE OF Object > properties > forecast[I need to find a way to use the object key to upen a request because of the custom data, the PUB and the 72,86 are custom and generated on their side] <https://api.weather.gov/gridpoints/PUB/72,86/forecast>)



https://api.weather.gov/points/{latitude},{longitude} = Object > properties > forecastHourly -- HOurly forcast, based off a value[called number in the object], it incriments hour by hour with the following data: start-time, end-time, day time or night time, temperature, percipitation chances, dewpoint, humidity, wind speed, wind direction, am icon, forcast name(Mostly sunny), and details(THIS IS THE ENDPOINT, ITS INSIDE OF Object > properties > forecastHourly[I need to find a way to use the object key to upen a request because of the custom data, the PUB and the 72,86 are custom and generated on their side] <https://api.weather.gov/gridpoints/PUB/72,86/forecast/hourly>)



Need to gather users current location to display on Home Page, look here >> https://www.geoapify.com/how-to-get-user-location-with-javascript