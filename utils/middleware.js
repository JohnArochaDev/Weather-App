//////////////////////////////////
//// Import Dependencies      ////
//////////////////////////////////
const express = require('express') //express framework
const morgan = require('morgan') //morgan logger for request info
const session = require('express-session')
const MongoStore = require('connect-mongo') // connect-mongo(for the session)
require('dotenv').config()
const methodOverride = require('method-override') // for forms and CRUD

//////////////////////////////////
//// Middleware Function      ////
//////////////////////////////////
const middleware = (app) => {
    app.use(methodOverride('_method'))
    app.use(express.urlencoded({ extended: true }))
    app.use(morgan('tiny'))
    app.use(express.static('public'))
    app.use(express.json())
    app.use(
        session({
            secret: process.env.SECRET,
            store: MongoStore.create({
                mongoUrl: process.env.DATABASE_URL
            }),
            saveUninitialized: true,
            resave: false
        })
    )
}

////////////////////////////////////////////
//// Export the Middleware Function     ////
////////////////////////////////////////////
module.exports = middleware