var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var answerSchema = new mongoose.Schema({
	text: String,
	username: String,
	support: String,
	likes: Number,
	_user: {type: Schema.ObjectId, ref: 'User'},
	_question: {type: Schema.ObjectId, ref: 'Answer'}
});

var questionSchema = new mongoose.Schema({
	text: String,
	description: String,
	answer_counter: Number, 
	_user: {type: Schema.ObjectId, ref: 'User'},
	answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
});

var userSchema = new mongoose.Schema({
	name: String,
	question: [{type: Schema.Types.ObjectId, ref: 'Question'}],
	answer: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
});

var Answer = mongoose.model('Answer', answerSchema);

var Question = mongoose.model('Question', questionSchema);

var User = mongoose.model('User', userSchema);