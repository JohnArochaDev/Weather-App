/////////////////////////////
///  Import Dependencies ////
/////////////////////////////
const express = require('express');
const axios = require('axios')
require('dotenv').config()
const weatherURL = process.env.API_WEATHER_APP
const key = process.env.KEY
///////////////////////
///  Create Router ////
///////////////////////
const router = express.Router();

////////////////////////
// Create Variables ////
////////////////////////
// let lat = 42.3761504
// let long = -85.45500539999999
// TEST COORDS     42.3761504,-85.45500539999999

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

let cities = [newYork, losAngeles, chicago, houston, phoenix, philadelphia, sanAntonio, sanDiego, dallas, sanJose]
let homelocName = []
let homeTemp = []
let homeCondition = []

//////////////////////////////
///  Routes + Controllers ////
//////////////////////////////

// cities.forEach((city) => {
//     let c = 0
//     await axios(`${weatherURL}${city[c]}&days=1&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
//     // render the results on a 'show' page: aka 'detail' page
//     .then(apiRes => {
//         let weather = apiRes.data
//         let locName = weather.location.name
//         homelocName.push(locName)
//         let tempF = weather.current.temp_f
//         homeTemp.push(tempF)
//         let condition = weather.current.condition.text
//         homeCondition.push(condition)
//         // console.log('1 This is the Home Name: \n', homelocName,'1 This is the Temp Name: \n', homeTemp,'1 This is the Cindition Name: \n', homeCondition)
//     })
//     c ++
// })

//Good below
router.get('/', async function(req, res, next) {
    const { username, loggedIn, userId } = req.session
    console.log(userId)
    await axios(`${weatherURL}${newYork}&days=1&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
    // render the results on a 'show' page: aka 'detail' page
    .then(apiRes => {
        let weather = apiRes.data
        let locName = weather.location.name
        homelocName.push(locName)
        let tempF = weather.current.temp_f
        homeTemp.push(tempF)
        let condition = weather.current.condition.text
        homeCondition.push(condition)
        // console.log('1 This is the Home Name: \n', homelocName,'1 This is the Temp Name: \n', homeTemp,'1 This is the Cindition Name: \n', homeCondition)
    })
    await axios(`${weatherURL}${losAngeles}&days=1&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
    // render the results on a 'show' page: aka 'detail' page
    .then(apiRes => {
        let weather = apiRes.data
        let locName = weather.location.name
        homelocName.push(locName)
        let tempF = weather.current.temp_f
        homeTemp.push(tempF)
        let condition = weather.current.condition.text
        homeCondition.push(condition)
        // console.log('2 This is the Home Name: \n', homelocName,'2 This is the Temp Name: \n', homeTemp,'2 This is the Cindition Name: \n', homeCondition)
    })
    await axios(`${weatherURL}${chicago}&days=1&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
    // render the results on a 'show' page: aka 'detail' page
    .then(apiRes => {
        let weather = apiRes.data
        let locName = weather.location.name
        homelocName.push(locName)
        let tempF = weather.current.temp_f
        homeTemp.push(tempF)
        let condition = weather.current.condition.text
        homeCondition.push(condition)
        // console.log('3 This is the Home Name: \n', homelocName,'3 This is the Temp Name: \n', homeTemp,'3 This is the Cindition Name: \n', homeCondition)
    })
    await axios(`${weatherURL}${houston}&days=1&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
    // render the results on a 'show' page: aka 'detail' page
    .then(apiRes => {
        let weather = apiRes.data
        let locName = weather.location.name
        homelocName.push(locName)
        let tempF = weather.current.temp_f
        homeTemp.push(tempF)
        let condition = weather.current.condition.text
        homeCondition.push(condition)
        // console.log('4 This is the Home Name: \n', homelocName,'4 This is the Temp Name: \n', homeTemp,'4 This is the Cindition Name: \n', homeCondition)
    })
    await axios(`${weatherURL}${phoenix}&days=1&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
    // render the results on a 'show' page: aka 'detail' page
    .then(apiRes => {
        let weather = apiRes.data
        let locName = weather.location.name
        homelocName.push(locName)
        let tempF = weather.current.temp_f
        homeTemp.push(tempF)
        let condition = weather.current.condition.text
        homeCondition.push(condition)
        // console.log('5 This is the Home Name: \n', homelocName,'5 This is the Temp Name: \n', homeTemp,'5 This is the Cindition Name: \n', homeCondition)
    })
    await axios(`${weatherURL}${philadelphia}&days=1&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
    // render the results on a 'show' page: aka 'detail' page
    .then(apiRes => {
        let weather = apiRes.data
        let locName = weather.location.name
        homelocName.push(locName)
        let tempF = weather.current.temp_f
        homeTemp.push(tempF)
        let condition = weather.current.condition.text
        homeCondition.push(condition)
        // console.log('6 This is the Home Name: \n', homelocName,'6 This is the Temp Name: \n', homeTemp,'6 This is the Cindition Name: \n', homeCondition)
    })
    await axios(`${weatherURL}${sanAntonio}&days=1&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
    // render the results on a 'show' page: aka 'detail' page
    .then(apiRes => {
        let weather = apiRes.data
        let locName = weather.location.name
        homelocName.push(locName)
        let tempF = weather.current.temp_f
        homeTemp.push(tempF)
        let condition = weather.current.condition.text
        homeCondition.push(condition)
        // console.log('7 This is the Home Name: \n', homelocName,'7 This is the Temp Name: \n', homeTemp,'7 This is the Cindition Name: \n', homeCondition)
    })
    await axios(`${weatherURL}${sanDiego}&days=1&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
    // render the results on a 'show' page: aka 'detail' page
    .then(apiRes => {
        let weather = apiRes.data
        let locName = weather.location.name
        homelocName.push(locName)
        let tempF = weather.current.temp_f
        homeTemp.push(tempF)
        let condition = weather.current.condition.text
        homeCondition.push(condition)
        // console.log('8 This is the Home Name: \n', homelocName,'8 This is the Temp Name: \n', homeTemp,'8 This is the Cindition Name: \n', homeCondition)
    })
    await axios(`${weatherURL}${dallas}&days=1&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
    // render the results on a 'show' page: aka 'detail' page
    .then(apiRes => {
        let weather = apiRes.data
        let locName = weather.location.name
        homelocName.push(locName)
        let tempF = weather.current.temp_f
        homeTemp.push(tempF)
        let condition = weather.current.condition.text
        homeCondition.push(condition)
        // console.log('9 This is the Home Name: \n', homelocName,'9 This is the Temp Name: \n', homeTemp,'9 This is the Cindition Name: \n', homeCondition)
    })
    await axios(`${weatherURL}${sanJose}&days=1&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
    // render the results on a 'show' page: aka 'detail' page
    .then(apiRes => {
        let weather = apiRes.data
        let locName = weather.location.name
        homelocName.push(locName)
        let tempF = weather.current.temp_f
        homeTemp.push(tempF)
        let condition = weather.current.condition.text
        homeCondition.push(condition)
        // console.log('10 This is the Home Name: \n', homelocName,'10 This is the Temp Name: \n', homeTemp,'10 This is the Cindition Name: \n', homeCondition)
        res.render('index', { key, title: 'Express', weather, homelocName, homeTemp, homeCondition, username, loggedIn, userId, newYork, losAngeles, chicago, houston, phoenix, philadelphia, sanAntonio, sanDiego, dallas, sanJose})
    })
        .catch(err => {
            console.log('error', err)
            res.redirect(`/error?error=${err}`)
    })
})

// This will be for the hourly forcasts with a ZIP CODE INSTEAD !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
router.get('/weather/daily/zipcode', (req, res) => {
    const { username, loggedIn, userId } = req.session
    axios(`${weatherURL}${req.query.zipcode}&days=3&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
        // render the results on a 'show' page: aka 'detail' page
        .then(apiRes => {
            let weather = apiRes.data
            let locName = weather.location.name
            let forecast1 = weather.forecast.forecastday[0] // DAY OF
            let forecast2 = weather.forecast.forecastday[1] // TOMORROW
            let forecast3 = weather.forecast.forecastday[2] // TOMORROWs TOMOROW
            let locRegion = weather.location.region
            let locTime = weather.location.localtime
            let hours = forecast1.hour
            // THis will be the time we start from
            let localTime = locTime[11] + locTime[12]
            let hourTime = hours.splice(localTime)
            let idx = 0;
            while (hourTime.length < 13) {
                hourTime.push(forecast2.hour[idx])
                idx++
            }
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
            let hour12 = hourTime[12]
            let newString = null;
            let month;
            let dayco = forecast1.date[8] += forecast1.date[9];
            let dayConversion = dayco;
            let monco = forecast1.date[5] += forecast1.date[6];
            let monthConversion = monco.toString();
            if (monthConversion.indexOf("-") >= 0) {
                newString = monthConversion.replace("-", "");
            }
            if (newString) {
                console.log('newString was hit')
                if (newString == '01') {
                    month = "Jan";
                } else if (newString == '02') {
                    month = "Feb";
                } else if (newString == '03') {
                    month = "Mar";
                } else if (newString == '04') {
                    month = "Apr";
                } else if (newString == '05') {
                    month = "May";
                } else if (newString == '06') {
                    month = "June";
                } else if (newString == '07') {
                    month = "July";
                } else if (newString == '08') {
                    month = "Aug";
                } else if (newString == '09') {
                    month = "Sept";
                } else if (newString == '10') {
                    month = "Oct";
                } else if (newString == '11') {
                    month = "Nov";
                } else {
                    month = "Dec";
                }
            } else if (monthConversion == '01') {
                month = "Jan";
            } else if (monthConversion == '02') {
                month = "Feb";
            } else if (monthConversion == '03') {
                month = "Mar";
            } else if (monthConversion == '04') {
                month = "Apr";
            } else if (monthConversion == '05') {
                month = "May";
            } else if (monthConversion == '06') {
                month = "June";
            } else if (monthConversion == '07') {
                month = "July";
            } else if (monthConversion == '08') {
                month = "Aug";
            } else if (monthConversion == '09') {
                month = "Sept";
            } else if (monthConversion == '10') {
                month = "Oct";
            } else if (monthConversion == '11') {
                month = "Nov";
            } else {
                month = "Dec";
                console.log('month was hit')
            }
            //SECOND
            let newString1 = null;
            let month1;
            let dayco1 = forecast2.date[8] += forecast2.date[9];
            let dayConversion1 = dayco1;
            console.log("1",dayConversion1)
            let monco1 = forecast2.date[5] += forecast2.date[6];
            let monthConversion1 = monco1.toString();
            if (monthConversion1.indexOf("-") >= 0) {
                newString1 = monthConversion1.replace("-", "");
            }
            if (newString1) {
                console.log('newString1 was hit')
                if (newString1 == '01') {
                    month1 = "Jan";
                } else if (newString1 == '02') {
                    month1 = "Feb";
                } else if (newString1 == '03') {
                    month1 = "Mar";
                } else if (newString1 == '04') {
                    month1 = "Apr";
                } else if (newString1 == '05') {
                    month1 = "May";
                } else if (newString1 == '06') {
                    month1 = "June";
                } else if (newString1 == '07') {
                    month1 = "July";
                } else if (newString1 == '08') {
                    month1 = "Aug";
                } else if (newString1 == '09') {
                    month1 = "Sept";
                } else if (newString1 == '10') {
                    month1 = "Oct";
                } else if (newString1 == '11') {
                    month1 = "Nov";
                } else {
                    month1 = "Dec";
                }
            } else if (monthConversion1 == '01') {
                month1 = "Jan";
            } else if (monthConversion1 == '02') {
                month1 = "Feb";
            } else if (monthConversion1 == '03') {
                month1 = "Mar";
            } else if (monthConversion1 == '04') {
                month1 = "Apr";
            } else if (monthConversion1 == '05') {
                month1 = "May";
            } else if (monthConversion1 == '06') {
                month1 = "June";
            } else if (monthConversion1 == '07') {
                month1 = "July";
            } else if (monthConversion1 == '08') {
                month1 = "Aug";
            } else if (monthConversion1 == '09') {
                month1 = "Sept";
            } else if (monthConversion1 == '10') {
                month1 = "Oct";
            } else if (monthConversion1 == '11') {
                month1 = "Nov";
            } else {
                month1 = "Dec";
                console.log('month was hit')
            }
            // console.log(month1)
            //THIRD
            let newString2 = null;
            let month2;
            let dayco2 = forecast3.date[8] += forecast3.date[9];
            let dayConversion2 = dayco2;
            console.log("1",dayConversion2)
            let monco2 = forecast3.date[5] += forecast3.date[6];
            let monthConversion2 = monco2.toString();
            if (monthConversion2.indexOf("-") >= 0) {
                newString2 = monthConversion2.replace("-", "");
            }
            if (newString2) {
                console.log('newString2 was hit')
                if (newString2 == '01') {
                    month2 = "Jan";
                } else if (newString2 == '02') {
                    month2 = "Feb";
                } else if (newString2 == '03') {
                    month2 = "Mar";
                } else if (newString2 == '04') {
                    month2 = "Apr";
                } else if (newString2 == '05') {
                    month2 = "May";
                } else if (newString2 == '06') {
                    month2 = "June";
                } else if (newString2 == '07') {
                    month2 = "July";
                } else if (newString2 == '08') {
                    month2 = "Aug";
                } else if (newString2 == '09') {
                    month2 = "Sept";
                } else if (newString2 == '10') {
                    month2 = "Oct";
                } else if (newString2 == '11') {
                    month2 = "Nov";
                } else {
                    month2 = "Dec";
                }
            } else if (monthConversion2 == '01') {
                month2 = "Jan";
            } else if (monthConversion2 == '02') {
                month2 = "Feb";
            } else if (monthConversion2 == '03') {
                month2 = "Mar";
            } else if (monthConversion2 == '04') {
                month2 = "Apr";
            } else if (monthConversion2 == '05') {
                month2 = "May";
            } else if (monthConversion2 == '06') {
                month2 = "June";
            } else if (monthConversion2 == '07') {
                month2 = "July";
            } else if (monthConversion2 == '08') {
                month2 = "Aug";
            } else if (monthConversion2 == '09') {
                month2 = "Sept";
            } else if (monthConversion2 == '10') {
                month2 = "Oct";
            } else if (monthConversion2 == '11') {
                month2 = "Nov";
            } else {
                month2 = "Dec";
                console.log('month was hit')
            }
            res.render('weather/daily', { weather, hour, hour1, hour2, hour3, hour4, hour5, hour6, hour7, hour8, hour9, hour10, hour11, hour12, forecast1, forecast2, forecast3, month1, month2, dayConversion1, dayConversion2, username, loggedIn, userId})
        })
        .catch(err => {
            // console.log('error', err)
            res.redirect(`/error?error=${err}`)
    })
})

// This will be for the hourly forcasts with Lattitude and Longitude data !!!!!!!!!!!!!!!!!!!!!!!
router.get('/weather/daily/:coords', (req, res) => {
    const { username, loggedIn, userId } = req.session
    let coords = req.params.coords
    // coords ? coords = req.params.coords : coords = req.body.zipcode
    axios(`${weatherURL}${coords}&days=3&aqi=yes&alerts=no`) //                            Everything will be inside of apiRes.data!!!!!!!!!!!
        // render the results on a 'show' page: aka 'detail' page
        .then(apiRes => {
            let weather = apiRes.data
            let locName = weather.location.name
            let forecast1 = weather.forecast.forecastday[0] // DAY OF
            let forecast2 = weather.forecast.forecastday[1] // TOMORROW
            let forecast3 = weather.forecast.forecastday[2] // TOMORROWs TOMOROW
            let locRegion = weather.location.region
            let locTime = weather.location.localtime
            let hours = forecast1.hour
            // THis will be the time we start from
            let localTime = locTime[11] + locTime[12]
            let hourTime = hours.splice(localTime)
            let idx = 0;
            while (hourTime.length < 13) {
                hourTime.push(forecast2.hour[idx])
                idx++
            }
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
            let hour12 = hourTime[12]
            let newString = null;
            let month;
            let dayco = forecast1.date[8] += forecast1.date[9];
            let dayConversion = dayco;
            let monco = forecast1.date[5] += forecast1.date[6];
            let monthConversion = monco.toString();
            if (monthConversion.indexOf("-") >= 0) {
                newString = monthConversion.replace("-", "");
            }
            if (newString) {
                console.log('newString was hit')
                if (newString == '01') {
                    month = "Jan";
                } else if (newString == '02') {
                    month = "Feb";
                } else if (newString == '03') {
                    month = "Mar";
                } else if (newString == '04') {
                    month = "Apr";
                } else if (newString == '05') {
                    month = "May";
                } else if (newString == '06') {
                    month = "June";
                } else if (newString == '07') {
                    month = "July";
                } else if (newString == '08') {
                    month = "Aug";
                } else if (newString == '09') {
                    month = "Sept";
                } else if (newString == '10') {
                    month = "Oct";
                } else if (newString == '11') {
                    month = "Nov";
                } else {
                    month = "Dec";
                }
            } else if (monthConversion == '01') {
                month = "Jan";
            } else if (monthConversion == '02') {
                month = "Feb";
            } else if (monthConversion == '03') {
                month = "Mar";
            } else if (monthConversion == '04') {
                month = "Apr";
            } else if (monthConversion == '05') {
                month = "May";
            } else if (monthConversion == '06') {
                month = "June";
            } else if (monthConversion == '07') {
                month = "July";
            } else if (monthConversion == '08') {
                month = "Aug";
            } else if (monthConversion == '09') {
                month = "Sept";
            } else if (monthConversion == '10') {
                month = "Oct";
            } else if (monthConversion == '11') {
                month = "Nov";
            } else {
                month = "Dec";
                console.log('month was hit')
            }
            //SECOND
            let newString1 = null;
            let month1;
            let dayco1 = forecast2.date[8] += forecast2.date[9];
            let dayConversion1 = dayco1;
            console.log("2",dayConversion1)
            let monco1 = forecast2.date[5] += forecast2.date[6];
            let monthConversion1 = monco1.toString();
            if (monthConversion1.indexOf("-") >= 0) {
                newString1 = monthConversion1.replace("-", "");
            }
            if (newString1) {
                console.log('newString1 was hit')
                if (newString1 == '01') {
                    month1 = "Jan";
                } else if (newString1 == '02') {
                    month1 = "Feb";
                } else if (newString1 == '03') {
                    month1 = "Mar";
                } else if (newString1 == '04') {
                    month1 = "Apr";
                } else if (newString1 == '05') {
                    month1 = "May";
                } else if (newString1 == '06') {
                    month1 = "June";
                } else if (newString1 == '07') {
                    month1 = "July";
                } else if (newString1 == '08') {
                    month1 = "Aug";
                } else if (newString1 == '09') {
                    month1 = "Sept";
                } else if (newString1 == '10') {
                    month1 = "Oct";
                } else if (newString1 == '11') {
                    month1 = "Nov";
                } else {
                    month1 = "Dec";
                }
            } else if (monthConversion1 == '01') {
                month1 = "Jan";
            } else if (monthConversion1 == '02') {
                month1 = "Feb";
            } else if (monthConversion1 == '03') {
                month1 = "Mar";
            } else if (monthConversion1 == '04') {
                month1 = "Apr";
            } else if (monthConversion1 == '05') {
                month1 = "May";
            } else if (monthConversion1 == '06') {
                month1 = "June";
            } else if (monthConversion1 == '07') {
                month1 = "July";
            } else if (monthConversion1 == '08') {
                month1 = "Aug";
            } else if (monthConversion1 == '09') {
                month1 = "Sept";
            } else if (monthConversion1 == '10') {
                month1 = "Oct";
            } else if (monthConversion1 == '11') {
                month1 = "Nov";
            } else {
                month1 = "Dec";
                console.log('month was hit')
            }
            // console.log(month1)
            //THIRD
            let newString2 = null;
            let month2;
            let dayco2 = forecast3.date[8] += forecast3.date[9];
            let dayConversion2 = dayco2;
            console.log("2",dayConversion2)
            let monco2 = forecast3.date[5] += forecast3.date[6];
            let monthConversion2 = monco2.toString();
            if (monthConversion2.indexOf("-") >= 0) {
                newString2 = monthConversion2.replace("-", "");
            }
            if (newString2) {
                console.log('newString2 was hit')
                if (newString2 == '01') {
                    month2 = "Jan";
                } else if (newString2 == '02') {
                    month2 = "Feb";
                } else if (newString2 == '03') {
                    month2 = "Mar";
                } else if (newString2 == '04') {
                    month2 = "Apr";
                } else if (newString2 == '05') {
                    month2 = "May";
                } else if (newString2 == '06') {
                    month2 = "June";
                } else if (newString2 == '07') {
                    month2 = "July";
                } else if (newString2 == '08') {
                    month2 = "Aug";
                } else if (newString2 == '09') {
                    month2 = "Sept";
                } else if (newString2 == '10') {
                    month2 = "Oct";
                } else if (newString2 == '11') {
                    month2 = "Nov";
                } else {
                    month2 = "Dec";
                }
            } else if (monthConversion2 == '01') {
                month2 = "Jan";
            } else if (monthConversion2 == '02') {
                month2 = "Feb";
            } else if (monthConversion2 == '03') {
                month2 = "Mar";
            } else if (monthConversion2 == '04') {
                month2 = "Apr";
            } else if (monthConversion2 == '05') {
                month2 = "May";
            } else if (monthConversion2 == '06') {
                month2 = "June";
            } else if (monthConversion2 == '07') {
                month2 = "July";
            } else if (monthConversion2 == '08') {
                month2 = "Aug";
            } else if (monthConversion2 == '09') {
                month2 = "Sept";
            } else if (monthConversion2 == '10') {
                month2 = "Oct";
            } else if (monthConversion2 == '11') {
                month2 = "Nov";
            } else {
                month2 = "Dec";
                console.log('month was hit')
            }
            res.render('weather/daily', { weather, hour, hour1, hour2, hour3, hour4, hour5, hour6, hour7, hour8, hour9, hour10, hour11, hour12, forecast1, forecast2, forecast3, month1, month2, dayConversion1, dayConversion2, username, loggedIn, userId})
        })
        .catch(err => {
            // console.log('error', err)
            res.redirect(`/error?error=${err}`)
    })
})

///////////////////////
///  Export Router ////
///////////////////////
module.exports = router;