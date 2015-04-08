var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = (function(){
	return {

			addUser: function(req, res){
				console.log('1');
				var new_user = new User({name: req.body.name });
				// console.log(new_user);
				new_user.save(function(err, data){
					if(err)
					{
						console.log('user could not be added');
					} else {
						res.json(data);
						console.log('a new user was added to the database');
					}
				})
			},

			addQuestion: function(req, res){
				var new_question = new Question({text: req.body.text, description: req.body.description, answer_counter: 0})
				// console.log(new_question);
				new_question.save(function(err, data){
					if(err)
					{
						console.log('question could not be added');
					} else {
						res.json(data);
						console.log('a new question was added to the database');
					}
				})
			},

			getQuestions: function(req, res){
				Question.find({}, function(err, data){
					if(err)
					{
						console.log('could not receive questions from database')
					} else {
						res.json(data);
					}
				})
			},

			getoneQuestion: function(req, res){
				console.log(req.params.id);
				Question.find({_id: req.params.id}, function(err, data){
					if(err)
					{
						console.log(err);
					} else {
						console.log(data);
						res.json(data[0]);
					}
				})
			},

			addAnswer: function(req, res){
				Question.findOne({_id: req.params.id}, function(err, question){
					var answer = new Answer({text: req.body.text, username: req.body.username, support: req.body.support, likes: 0})

					answer._question = question._id
					question.answers.push(answer);

					answer.save(function(err){
						question.save(function(err, data){
							if(err){
								res.redirect('/ques/' + question._id);
							} else {
								res.json(data);
							}
						})
					})
				})
			},

			updateanswerCount: function(req, res){
				Question.update({_id: req.body.result}, {$inc: {answer_counter: 1}}, function(err, data){
					if(err){
						res.send('whoa there');
					} else {
						res.json(data);
						console.log('answer count has been updated!')
					}
				})
			},

			getAnswers: function(req, res){
				Question.findOne({_id: req.params.id})
				.populate('answers')
				.exec(function(err, question){
					res.json(question.answers);
				})
			},

			like: function(req, res){
				Answer.update({_id: req.body.result}, {$inc: {likes: 1}}, function(err, data){
					if(err){
						res.send('nahin');
					} else {
						res.json(data);
					}
				})
			},


	}
})();