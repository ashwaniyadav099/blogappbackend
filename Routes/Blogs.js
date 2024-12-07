const express = require('express')
const routes = express.Router()
const {usersignup ,userlogin } = require('../Controllers/User')

routes.post('/login' ,userlogin)
routes.post('/signup', usersignup)

module.exports= routes