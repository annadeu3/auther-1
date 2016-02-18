'use strict';

app.controller('LogUserCtrl', function ($scope, Auth, $state) {
	console.log("this is the scope in logincontroller: ", $scope);
	$scope.loginUser = function(email, password) {
		return Auth.loginUser(email, password)
		.then(function() {
				$state.go('stories');
			
		}).catch(function(err){
			console.log("ERROR: ", err);

		})
	}

	$scope.logout = function () {
		Auth.logout()
		.then(function(res) {
			console.log('I logged out!');
		})
		.then(null, function (err) {
			console.log("LOGOUT ERROR FROM CONTROLLER ", err);
		})
	}

})