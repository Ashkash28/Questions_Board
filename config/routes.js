var question_controller = require('../controllers/question_boards.js');

module.exports = function(app){
	app.get('/', function(req, res){
		res.render('index.html');
	})

//USER
	app.post('/user', function(req, res){
		// console.log(req.body)
		question_controller.addUser(req, res);
	})

//QUESTIONS

	app.post('/question', function(req, res){
		// console.log(req.body);
		question_controller.addQuestion(req, res);
	})

	app.get('/questions', function(req, res){
		question_controller.getQuestions(req, res);
	})

	app.post('/single_question/:id', function(req, res){
		// console.log(req.body);
		question_controller.getoneQuestion(req, res);
	})

//ANSWERS

	app.put('/ques/:id', function(req, res){
		question_controller.addAnswer(req, res);
	})

	app.post('/ques_ans', function(req, res){
		question_controller.updateanswerCount(req, res);
	})

	app.get('/answers/:id', function(req, res){
		// console.log('hi');
		question_controller.getAnswers(req, res);
	})

	app.post('/like', function(req, res){
		question_controller.like(req, res);
	})
}