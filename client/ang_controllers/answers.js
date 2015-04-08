myAppModule.controller('answersController', function($scope, $location, userFactory, $routeParams, localStorageService)
{
	$scope.question = '';

	$scope.question_id = $routeParams.id;

	userFactory.getoneQuestion($routeParams.id, function(data){
		$scope.question = data;
		// console.log(data);
	})

	$scope.addAnswer = function(id, data){
		data.username = localStorageService.get('name');

		console.log(id);
		console.log(data);

		userFactory.addAnswer(id, data, function(data){
			$scope.answers = data;
			$scope.answers = {};

			userFactory.updateANSWERcount(id, function(data){
				$scope.answers = data;
				$scope.answers = {};

				

			})

			$location.path('/question/'+ $routeParams.id);
		})
	}



		userFactory.getAnswers($scope.question_id, function(data){
			$scope.answers = data;
			console.log('answers here', data);
		})

		$scope.like = function(id, data){
			userFactory.like(id, data, function(data){
				$scope.answers = data;

				userFactory.getAnswers($routeParams.id, function(data){
					$scope.answers = data;
					console.log(data);
				})
			})
		}

	

})