/////////////////////////////
///  Import Dependencies ////
/////////////////////////////
const express = require('express');
const axios = require('axios')
require('dotenv').config()
const weatherURL = process.env.WEATHER_GOV_API

///////////////////////
///  Create Router ////
///////////////////////
const router = express.Router();

////////////////////////
// Create Variables ////
////////////////////////
let lat = 27.833
let long = -97.061

//////////////////////////////
///  Routes + Controllers ////
//////////////////////////////
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// This will be for the single day

router.get('/weather/daily', (req, res) => {
    axios(`${weatherURL}/${lat},${long}`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
        // render the results on a 'show' page: aka 'detail' page
        .then(apiRes => {
            console.log('this came back from the api: \n', apiRes)
            let weather = apiRes.data // This currently = https://api.weather.gov/gridpoints/CRP/125,36/forecast
            let daily = weather.properties.forecast // This is the link we want to use

            //                                                                                 THe below code should work, api is down so we cant check
            // axios(daily)
            // .then(weather => {
            //     console.log('this came back from the api: \n', weather)
            //     res.render('weather/daily', {weather})
            // })
            res.render('weather/daily', {daily})
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