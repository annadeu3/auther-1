'use strict';

var router = require('express').Router();

router.use('/users', require('./users/user.router'));

router.use('/stories', require('./stories/story.router'));

router.use('/login', require('./logging/login.router'));

router.use('/signup', require('./logging/signup.router'));

router.use('/logout', require('./logging/logout.router'));

module.exports = router;