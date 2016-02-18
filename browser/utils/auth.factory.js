'use strict';

app.factory('Auth', function($http, User) {
	var Auth = {};
	Auth.loginUser= function (email, password) {
		return $http.post('/api/login', {email: email, password: password})
		.then(function(res) {
			console.log("Res inside Auth.loginUser in Auth Fact: ", res);
			// if res returns a user, set a value to true
			// if res returns nada, set a value to false
			// return value
			return res;
		})
		.then(null, function(err) {
			console.log("ERROR in Auth Controller: ", err);
		});
	};

	Auth.createNewUser = function (email, password) {
		return $http.post('/api/signup', {email: email, password: password})
		.then(function (res) {
			return res;
		})
		.then(null, function(err) {
			console.log("ERROR in Auth Controller: ", err);
		});
	};

	//Auth.
	return Auth;
});