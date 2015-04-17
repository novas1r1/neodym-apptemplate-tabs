angular.module('starter.controllers')
	.controller('FriendDetailController', ['$scope', '$stateParams', 'Friends', function ($scope, $stateParams, Friends) {
		$scope.friend = Friends.get($stateParams.friendId);
}]);