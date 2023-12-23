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
            let forecast1 = weather.forecast.forecastday[0] // DAY OF
            let forecast2 = weather.forecast.forecastday[1] // TOMORROW
            let forecast3 = weather.forecast.forecastday[2] // TOMORROW'S TOMORROW
            let locRegion = weather.location.region
            let locTime = weather.location.localtime
            let locDate = forecast1.date

            res.render('weather/daily', {locName, locRegion, locTime, locDate})
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