/////////////////////////////////////
//// Import Dependencies         ////
/////////////////////////////////////
require('dotenv').config()
const mongoose = require('mongoose')

/////////////////////////////////////
//// Database Connection         ////
/////////////////////////////////////
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
}

mongoose.connect(DATABASE_URL, CONFIG)

mongoose.connection
    .on('open', () => console.log('Connected to Mongoose'))
    .on('close', () => console.log('Disconnected from Mongoose'))
    .on('error', (err) => console.log('An error occurred: \n', err))

/////////////////////////////////////
//// Export our Connection       ////
/////////////////////////////////////
module.exports = mongoose