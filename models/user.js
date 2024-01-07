/////////////////////////////////////
///  Our Schema and dependencies ////
/////////////////////////////////////
const mongoose = require('../utils/connection')

const { Schema, model } = mongoose

///////////////////////////
///  Schema definition ////
///////////////////////////

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

///////////////////////////
///  create user model ////
///////////////////////////
const User = model('User', userSchema)

///////////////////////////
///  export user model ////
///////////////////////////
module.exports = User