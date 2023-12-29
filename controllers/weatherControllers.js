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
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express'})
// })



const newYork = '40.7127753,-74.0059728'
const losAngeles = '34.0549076,-118.242643'
const chicago = '41.8781136,-87.629798'
const houston = '29.7604267,-95.3698028'
const phoenix = '33.4483771,-112.0740373'
const philadelphia = '39.9525839,-75.1652215'
const sanAntonio = '29.4251905,-98.4945922'
const sanDiego = '32.715738,-117.1610838'
const dallas = '32.7766642,-96.79698789999999'
const sanJose = '37.33874,-121.8852525'



let homelocName = []
let homeTemp = []
let homeCondition = []

router.get('/', function(req, res, next) {

    axios(`${weatherURL}${newYork}&days=1&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
    // render the results on a 'show' page: aka 'detail' page
    .then(apiRes => {
        let weather = apiRes.data
        let locName = weather.location.name
        homelocName.push(locName)
        let tempF = weather.current.temp_f
        homeTemp.push(tempF)
        let condition = weather.current.condition.text
        homeCondition.push(condition)
    })
    axios(`${weatherURL}${losAngeles}&days=1&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
    // render the results on a 'show' page: aka 'detail' page
    .then(apiRes => {
        let weather = apiRes.data
        let locName = weather.location.name
        homelocName.push(locName)
        let tempF = weather.current.temp_f
        homeTemp.push(tempF)
        let condition = weather.current.condition.text
        homeCondition.push(condition)
    })
    axios(`${weatherURL}${chicago}&days=1&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
    // render the results on a 'show' page: aka 'detail' page
    .then(apiRes => {
        let weather = apiRes.data
        let locName = weather.location.name
        homelocName.push(locName)
        let tempF = weather.current.temp_f
        homeTemp.push(tempF)
        let condition = weather.current.condition.text
        homeCondition.push(condition)
    })
    axios(`${weatherURL}${houston}&days=1&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
    // render the results on a 'show' page: aka 'detail' page
    .then(apiRes => {
        let weather = apiRes.data
        let locName = weather.location.name
        homelocName.push(locName)
        let tempF = weather.current.temp_f
        homeTemp.push(tempF)
        let condition = weather.current.condition.text
        homeCondition.push(condition)
    })
    axios(`${weatherURL}${phoenix}&days=1&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
    // render the results on a 'show' page: aka 'detail' page
    .then(apiRes => {
        let weather = apiRes.data
        let locName = weather.location.name
        homelocName.push(locName)
        let tempF = weather.current.temp_f
        homeTemp.push(tempF)
        let condition = weather.current.condition.text
        homeCondition.push(condition)
    })
    axios(`${weatherURL}${philadelphia}&days=1&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
    // render the results on a 'show' page: aka 'detail' page
    .then(apiRes => {
        let weather = apiRes.data
        let locName = weather.location.name
        homelocName.push(locName)
        let tempF = weather.current.temp_f
        homeTemp.push(tempF)
        let condition = weather.current.condition.text
        homeCondition.push(condition)
    })
    axios(`${weatherURL}${sanAntonio}&days=1&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
    // render the results on a 'show' page: aka 'detail' page
    .then(apiRes => {
        let weather = apiRes.data
        let locName = weather.location.name
        homelocName.push(locName)
        let tempF = weather.current.temp_f
        homeTemp.push(tempF)
        let condition = weather.current.condition.text
        homeCondition.push(condition)
    })
    axios(`${weatherURL}${sanDiego}&days=1&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
    // render the results on a 'show' page: aka 'detail' page
    .then(apiRes => {
        let weather = apiRes.data
        let locName = weather.location.name
        homelocName.push(locName)
        let tempF = weather.current.temp_f
        homeTemp.push(tempF)
        let condition = weather.current.condition.text
        homeCondition.push(condition)
    })
    axios(`${weatherURL}${dallas}&days=1&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
    // render the results on a 'show' page: aka 'detail' page
    .then(apiRes => {
        let weather = apiRes.data
        let locName = weather.location.name
        homelocName.push(locName)
        let tempF = weather.current.temp_f
        homeTemp.push(tempF)
        let condition = weather.current.condition.text
        homeCondition.push(condition)
    })
    axios(`${weatherURL}${sanJose}&days=1&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
    // render the results on a 'show' page: aka 'detail' page
    .then(apiRes => {
        let weather = apiRes.data
        let locName = weather.location.name
        homelocName.push(locName)
        let tempF = weather.current.temp_f
        homeTemp.push(tempF)
        let condition = weather.current.condition.text
        homeCondition.push(condition)
        res.render('index', { title: 'Express', weather, homelocName, homeTemp, homeCondition})
    })
        .catch(err => {
            console.log('error', err)
            res.redirect(`/error?error=${err}`)
    })
})










// This will be for the hourly forcasts
router.get('/weather/daily', (req, res) => {
    axios(`${weatherURL}${lat},${long}&days=3&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
        // render the results on a 'show' page: aka 'detail' page
        .then(apiRes => {
            let weather = apiRes.data
            let locName = weather.location.name
            let forecast1 = weather.forecast.forecastday[0] // DAY OF
            let forecast2 = weather.forecast.forecastday[1] // TOMORROW
            let locRegion = weather.location.region
            let locTime = weather.location.localtime
            let hours = forecast1.hour
            // THis will be the time we start from
            let localTime = locTime[11] + locTime[12]
            let hourTime = hours.splice(localTime)
            let idx = 0;

            while (hourTime.length < 12) {
                hourTime.push(forecast2.hour[idx])
                idx++
            }
console.log('this is the idx: \n', idx)

            let hour = hourTime[0]
            let hour1 = hourTime[1]
            let hour2 = hourTime[2]
            let hour3 = hourTime[3]
            let hour4 = hourTime[4]
            let hour5 = hourTime[5]
            let hour6 = hourTime[6]
            let hour7 = hourTime[7]
            let hour8 = hourTime[8]
            let hour9 = hourTime[9]
            let hour10 = hourTime[10]
            let hour11 = hourTime[11]
            //TESTING
            console.log(hour7.time)
            console.log(hour8.time)
            console.log(hour9.time)
            // console.log('7 8 9 not working: \n', hourTime)
            //TESTING
            res.render('weather/daily', { weather, hour, hour1, hour2, hour3, hour4, hour5, hour6, hour7, hour8, hour9, hour10, hour11})
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