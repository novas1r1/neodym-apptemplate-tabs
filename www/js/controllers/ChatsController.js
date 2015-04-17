angular.module('starter.controllers')
	.controller('ChatsController', ['$scope', 'Chats', function ($scope, Chats) {
		$scope.chats = Chats.all();
		
		$scope.remove = function(chat) {
			Chats.remove(chat);
		};
}]);