angular.module('starter.controllers')
	.controller('ChatDetailController', ['$scope', '$stateParams', 'Chats', function ($scope, $stateParams, Chats) {
		$scope.chat = Chats.get($stateParams.chatId);
}]);