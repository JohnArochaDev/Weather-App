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
    name: { type: String},
    region: { type: String},
    lat: { type: Number},
    long: { type: Number},
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
const Favorite = model('Favorite', favoriteSchema)

///////////////////////////
//// export user model ////
///////////////////////////
module.exports = Favorite