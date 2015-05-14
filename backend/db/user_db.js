
var mongo = require('mongoose');
mongo.disconnect();
mongo.connect('mongodb://shashank:shashank@ds045147.mongolab.com:45147/userbase');

var userSchema = mongo.Schema({
	firstname :String,
	lastname : String,
	email_id : String,
	Interests : Array,
	Gender : String
});

var users = mongo.model('users', userSchema);

module.exports = users;
