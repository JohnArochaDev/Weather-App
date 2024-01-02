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

router.get('/favorites/:user', (req, res) => {
    const { username, loggedIn, userId } = req.session
    res.render('users/favorites', { username, loggedIn, userId,})
})

///////////////////////
//// Export Router ////
///////////////////////
module.exports = router