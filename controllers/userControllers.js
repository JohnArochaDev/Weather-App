/////////////////////////////
//// Import Dependencies ////
/////////////////////////////
const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const Favorite = require('../models/favorite')

///////////////////////
//// Create Router ////
///////////////////////
const router = express.Router()

//////////////////////////////
//// Routes + Controllers ////
//////////////////////////////

router.get('/signup', (req, res) => {
    const { username, loggedIn, userId } = req.session
    res.render('users/signup', { username, loggedIn, userId })
})

router.post('/signup', async (req, res) => {
    const { username, loggedIn, userId } = req.session
    const newUser = req.body
    newUser.password = await bcrypt.hash(
        newUser.password, 
        await bcrypt.genSalt(10)
    )
    User.create(newUser)
        .then(user => {
            res.redirect('/users/login')
        })
        .catch(err => {
            console.log('error')
            res.redirect(`/error?error=${err}`)
        })
})

router.get('/login', (req, res) => {
    const { username, loggedIn, userId } = req.session
    res.render('users/login', { username, loggedIn, userId })
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    User.findOne({ username })
        .then(async (user) => {
            // if the user exists
            if (user) {
                const result = await bcrypt.compare(password, user.password)
                if (result) {
                    req.session.username = username
                    req.session.loggedIn = true
                    req.session.userId = user.id
                    res.redirect('/')
                } else {
                    res.redirect(`/error?error=something%20wrong%20with%20credentials`)
                }
            } else {
                res.redirect(`/error`)
            }
        })
        .catch(err => {
            console.log('error')
            res.redirect(`/error?error=${err}`)
        })
})

router.get('/logout', (req, res) => {
    const { username, loggedIn, userId } = req.session
    res.render('users/logout', { username, loggedIn, userId })
})

router.delete('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
})

router.get('/favorites', (req, res) => {
    const { username, loggedIn, userId } = req.session
    if (loggedIn) {
        Favorite.find({ owner: userId })
        .then(userFavorites => {
            res.render('users/favorites', { favorites: userFavorites, username, userId, loggedIn})
        })
        .catch(err => {
            console.log('error')
            res.redirect(`/error?error=${err}`)
        })
    } else {
        res.redirect('/users/login', { username, loggedIn, userId })
    }
})

router.post('/add', (req, res) => {
    const { username, loggedIn, userId } = req.session
    console.log("this is the favorite: \n", req.params)
    console.log("Do you see me")
    const theFavorite = req.body
    theFavorite.owner = userId
    Favorite.create(theFavorite)
        .then(newFavorite => {
            res.redirect(`/users/favorites`)
        })
        .catch(err => {
            console.log('error')
            res.redirect(`/error?error=${err}`)
        })
})

router.delete('/delete/:id', (req, res) => {
    const { username, loggedIn, userId } = req.session
    const favoriteId = req.params.id
    Favorite.findById(favoriteId)
        // delete it 
        .then(place => {
            // determine if loggedIn user is authorized to delete this(aka, the owner)
            if (place.owner == userId) {
                // here is where we delete
                return place.deleteOne()
            } else {
                // if the loggedIn user is NOT the owner
                res.redirect(`/error?error=You%20Are%20Not%20Allowed%20to%20Delete%20this%20Place`)
            }
        })
        // redirect to another page
        .then(deletedPlace => {
            // console.log('this was returned from deleteOne', deletedPlace)

            res.redirect('/users/favorites')
        })
        // if err -> send to err page
        .catch(err => {
            console.log('error')
            res.redirect(`/error?error=${err}`)
        })
})

///////////////////////
//// Export Router ////
///////////////////////
module.exports = router