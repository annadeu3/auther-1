'use strict';

var router = require('express').Router();

router.use('/users', require('./users/user.router'));

router.use('/stories', require('./stories/story.router'));

router.use('/login', require('./auth/login.router'));

router.use('/signup', require('./auth/signup.router'));

router.use('/logout', require('./auth/logout.router'));

router.use('/google', require('./auth/google.router'));

module.exports = router;