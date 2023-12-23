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
let lat = 42.3621997
let long = -102.2631529

// TEST COORDS     42.3621997,-102.2631529
//////////////////////////////
///  Routes + Controllers ////
//////////////////////////////
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// This will be for the single day

router.get('/weather/daily', (req, res) => {
    axios(`${weatherURL}${lat},${long}&days=3&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
        // render the results on a 'show' page: aka 'detail' page
        .then(apiRes => {
            console.log('this came back from the api: \n', apiRes)
            let weather = apiRes.data
            let locName = weather.location.name
            let forecast1 = weather.forecast.forecastday[
                0] // DAY OF
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
            let humidity = forecast1.day.avghumidity
            let rainChance = forecast1.day.daily_chance_of_rain
            let snowChance = forecast1.day.daily_chance_of_snow
            let condition = forecast1.day.condition.text
            let conditionIcon = forecast1.day.condition.icon



            res.render('weather/daily', { locName, locRegion, locTime, locDate, maxTemp, minTemp, avrTemp, maxWind, totalPrecip, totalSnow, humidity, rainChance, snowChance, condition, conditionIcon, })
        })
        // if we get an error, display the error
        .catch(err => {
            console.log('error', err)
            res.redirect(`/error?error=${err}`)
    })
})






///////////////////////
///  Export Router ////
///////////////////////
module.exports = router;