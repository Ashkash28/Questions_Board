var myAppModule = angular.module('myAppModule', ['ngRoute','LocalStorageModule']);

myAppModule.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/view1.html'
	})
	.when('/new_question', {
		templateUrl: 'partials/view2.html'
	})
	.when('/question/:id', {
		templateUrl: 'partials/view4.html'
	})
	.when('/question/:id/new_answer', {
		templateUrl: 'partials/view3.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})