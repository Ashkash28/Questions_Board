myAppModule.controller('usersController', function($scope, $location, userFactory, $routeParams, localStorageService)
{
	var person = prompt('What is your name?');

	localStorageService.set('name', person);

	$scope.user = localStorageService.get('name');

	// console.log($scope.user);

	userFactory.addUser($scope.user, function(data)
	{	
		localStorageService.set('name', data.name);
		$scope.name = data.name;
		$scope.newUser = {};

	})

	userFactory.getQuestions(function(data){
		$scope.questions = data;
	})



})