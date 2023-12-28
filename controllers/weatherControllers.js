/////////////////////////////
///  Import Dependencies ////
/////////////////////////////
const express = require('express');
const axios = require('axios')
require('dotenv').config()
const weatherURL = process.env.API_WEATHER_APP

///////////////////////
///  Create Router ////
///////////////////////
const router = express.Router();

////////////////////////
// Create Variables ////
////////////////////////
let lat = 42.3761504
let long = -85.45500539999999

// TEST COORDS     42.3761504,-85.45500539999999
//////////////////////////////
///  Routes + Controllers ////
//////////////////////////////
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
// This will be for the single day
router.get('/weather/daily', (req, res) => {
    const time = []
    const temp = []
    const day = []
    const wind = []
    const precip = []
    const snow = []
    const humidity = []
    const cloud = []
    const feelslike = []
    const windchill = []
    const heatindex = []
    const dewpoint = []
    const chanceOfRain = []
    const chanceOfSnow = []
    const visability = []
    const uv = []
    axios(`${weatherURL}${lat},${long}&days=3&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
        // render the results on a 'show' page: aka 'detail' page
        .then(apiRes => {
            console.log('this came back from the api: \n', apiRes)
            let weather = apiRes.data
            let locName = weather.location.name
            let forecast1 = weather.forecast.forecastday[0] // DAY OF
            let forecast2 = weather.forecast.forecastday[1] // TOMORROW
            let forecast3 = weather.forecast.forecastday[2] // TOMORROW'S TOMORROW
            let locRegion = weather.location.region
            let locTime = weather.location.localtime
            let locDate = forecast1.date
            let maxTemp = forecast1.day.maxtemp_f
            let minTemp = forecast1.day.mintemp_f
            let avrTemp = forecast1.day.avgtemp_f
            let maxWind = forecast1.day.maxwind_mph
            let totalPrecip = forecast1.day.totalprecip_in
            let totalSnow = forecast1.day.totalsnow_cm
            let localHumidity = forecast1.day.avghumidity
            let rainChance = forecast1.day.daily_chance_of_rain
            let snowChance = forecast1.day.daily_chance_of_snow
            let condition = forecast1.day.condition.text
            let conditionIcon = forecast1.day.condition.icon
            let hour = forecast1.hour // hour us an array I need to sift through with for each and hour.length
// I need to write a function that uses the hour data from locTime, and uses splice() to copy the array starting at the point from locTime, and the make the below forEach iterate through the new array. This will allow me to display the hourly data ONLY for the future, not the whole day.
            let localTime = locTime[11] + locTime[12]
            localTime ++
            let hourTime = hour.splice(localTime)
            hourTime.forEach((data) => {
                time.push(data.time)
                temp.push(data.temp_f)
                day.push(data.is_day)
                wind.push(data.wind_mph)
                precip.push(data.precip_in)
                snow.push(data.snow_cm)
                humidity.push(data.humidity)
                cloud.push(data.cloud)
                feelslike.push(data.feelslike_f)
                windchill.push(data.windchill_f)
                heatindex.push(data.heatindex_f)
                dewpoint.push(data.dewpoint_f)
                chanceOfRain.push(data.chance_of_rain)
                chanceOfSnow.push(data.chance_of_snow)
                visability.push(data.vis_miles)
                uv.push(data.uv)
            })
            res.render('weather/daily', { locName, locRegion, locTime, locDate, maxTemp, minTemp, avrTemp, maxWind, totalPrecip, totalSnow, localHumidity, rainChance, snowChance, condition, conditionIcon, time, temp, day, wind, precip, snow, humidity, cloud, feelslike, 
                windchill, heatindex, dewpoint, chanceOfRain, chanceOfSnow, visability, uv})
        })
        .catch(err => {
            console.log('error', err)
            res.redirect(`/error?error=${err}`)
    })
})

///////////////////////
///  Export Router ////
///////////////////////
module.exports = router;