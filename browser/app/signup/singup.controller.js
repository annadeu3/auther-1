'use strict';

app.controller('SignupCtrl', function ($scope, Auth) {
	console.log("this is the scope in logincontroller: ", $scope);
	$scope.signup = function(email, password) {
		return Auth.createNewUser(email, password)
		.then(function(res) {
			console.log('hello!');
		}).catch(function(err){
			console.log("ERROR: ", err);

		})
	}
})