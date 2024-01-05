/////////////////////////////
//// Import Dependencies ////
/////////////////////////////
const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const {Favorite} = require('../models/favorite')
const {Nickname} = require('../models/favorite')

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
        try {
            res.redirect('/users/login')
        }catch(err) {
            console.log('error')
            res.redirect(`/error?error=${err}`)
        }
    }
})

router.post('/favorites/:id', (req, res) => {
    const {username, loggedIn, userId} = req.session
    theFav = req.body
    theFav.owner = userId
    Favorite.findById(req.params.id)
        .then(fav => {
            fav.nickname = req.body
            console.log(fav.nickname._id)
            return fav.save()
        })
        res.redirect('/users/favorites')
        .catch(err => {
            console.log('error:', err)
        })
})

router.delete('/nickname/:id', async (req, res) => {
    try{
    const {username, loggedIn, userId} = req.session
    const fav = await Favorite.findOne({'nickname._id': req.params.id, "nickname.owner": userId})
    console.log(fav)
    if(!fav) return res.redirect('/users/favorites')
    fav.nickname.deleteOne(req.params.id)
    await fav.save()
    res.redirect('/users/favorites')
    }catch(err) {
        console.log('error:', err)
    }
})

router.put('/nickname/:id', async (req,res) => {
    try{
        const {username, loggedIn, userId} = req.session
        let favObj = req.body
        favObj.owner = userId
        const fav = await Favorite.findOneAndUpdate({'nickname._id': req.params.id, "nickname.owner": userId}, { 'nickname.name': req.body.name})
        fav.save()
        res.redirect('/users/favorites')
    }catch(err) {
        console.log('error:', err)
    }
})

router.post('/add', async (req, res) => {
    try {
        const {username, loggedIn, userId} = req.session
        const favorites = await Favorite.find({owner: userId})
        let newFavorite = req.body
        newFavorite.owner = userId
        for(let i=0; i<favorites.length; i++){
            if(favorites[i].name == newFavorite.name){
            return res.send({error: 'This favorite already exists'})
            }
        }
        newFavorite = await Favorite.create(req.body)
        .then(done => {
            res.redirect('/users/favorites')
        })
    } catch(err) {
        console.log('error')
        res.redirect(`/error?error=${err}`)
    }
})

router.delete('/delete/:id', (req, res) => {
    const { username, loggedIn, userId } = req.session
    const favoriteId = req.params.id
    Favorite.findById(favoriteId)
        .then(place => {
            if (place.owner == userId) {
                return place.deleteOne()
            } else {
                res.redirect(`/error?error=You%20Are%20Not%20Allowed%20to%20Delete%20this%20Place`)
            }
        })
        .then(deletedPlace => {
            res.redirect('/users/favorites')
        })
        .catch(err => {
            console.log('error')
            res.redirect(`/error?error=${err}`)
        })
})

///////////////////////
//// Export Router ////
///////////////////////
module.exports = router