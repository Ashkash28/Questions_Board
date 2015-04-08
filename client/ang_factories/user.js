myAppModule.factory('userFactory', function($http){
	var answers = [];
	var questions = [];
	var user = '';
	var users = [];
	var like = '';

	var factory = {};

	factory.addUser = function(data, callback){
		// console.log('in the factory', data);
		$http.post('/user', {name: data}).success(function(data){
			users.push(data);
			user = data;
			callback(user);
		})	
	}

	factory.addQuestion = function(data, callback){
		$http.post('/question', data).success(function(data){
			questions.push(data);
			callback(data);
		})
	}

	factory.getQuestions = function(callback){
		$http.get('/questions').success(function(data){
			questions = data;
			callback(questions);
		})
	}

	factory.getoneQuestion = function(data, callback){
		// console.log(data);
		$http.post('/single_question/'+ data).success(function(data){

			callback(data);
		})
	}

	factory.addAnswer = function(id, data, callback){
		$http.put('/ques/'+ id, data).success(function(data){
			answers.push(data)
			callback(data);
		})
	}

	factory.updateANSWERcount = function(id, callback){
		$http.post('/ques_ans', {result: id}).success(function(data){
			console.log('successfully updated answer count in question');
		})
	}

	factory.getAnswers = function(id, callback){
		$http.get('/answers/' + id).success(function(data){
			answers = data;
			callback(answers);
		})
	}

	factory.like = function(id, data, callback){
		$http.post('/like', {result: id}).success(function(output){
			data++
			like = output;
			callback(data);
		})
	}

	return factory;
})