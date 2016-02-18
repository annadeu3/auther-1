'use strict';

var router = require('express').Router(),
	_ = require('lodash');

var HttpError = require('../../utils/HttpError'); 
var User = require('../users/user.model');




router.post('/', function (req, res, next) {
    req.session.userId = null;
    console.log("Log out stuff: ", req.session.userId);
    res.status(200).send();
});




module.exports = router;