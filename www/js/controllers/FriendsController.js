angular.module('starter.controllers')
	.controller('FriendsController', ['$scope', 'Friends', function ($scope, Friends) {
		$scope.friends = Friends.all();
}]);