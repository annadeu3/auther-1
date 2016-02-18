'use strict';

var router = require('express').Router(),
	_ = require('lodash');

var HttpError = require('../../utils/HttpError'); 
var User = require('../users/user.model');
var passport = require('passport');



router.get('/', passport.authenticate('google', { scope : 'email '}));

router.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect : '/home', // or wherever
    failureRedirect : '/' // or wherever
  })
);



module.exports = router;