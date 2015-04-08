myAppModule.controller('questionsController', function($scope, $location, userFactory, $routeParams, localStorageService)
{
	var questions = [];

	$scope.addQuestion = function(){
		userFactory.addQuestion($scope.newQuestion, function(data){
			$scope.questions = data;
		})

	} 

})