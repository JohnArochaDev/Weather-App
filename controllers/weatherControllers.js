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
    console.log(weatherURL)
    console.log('I WAS HIT')
    axios(`${weatherURL}/${lat},${long}`)
        // render the results on a 'show' page: aka 'detail' page
        .then(apiRes => {
            console.log('this came back from the api: \n', apiRes)
            res.render('weather/daily', {apiRes})
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