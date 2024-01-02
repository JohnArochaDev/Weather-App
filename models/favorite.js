/////////////////////////////////////
//// Our Schema and dependencies ////
/////////////////////////////////////
const mongoose = require('../utils/connection')

// destructuring the Schema and model from mongoose
const { Schema, model } = mongoose

///////////////////////////
//// Schema definition ////
///////////////////////////
const favoriteSchema = new Schema({
    name: { type: String, required: true },
    temperature: { type: String, required: true },
    lat: { type: Number, required: true },
    long: { type: Number, required: true },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

///////////////////////////
//// create user model ////
///////////////////////////
const Favorite = model('Place', favoriteSchema)

///////////////////////////
//// export user model ////
///////////////////////////
module.exports = Favorite