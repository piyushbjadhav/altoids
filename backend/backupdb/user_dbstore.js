module.exports = function(userData){

// connect to table;
var mongo = require('mongoose');
mongo.connect('mongodb://shashank:shashank@ds045147.mongolab.com:45147/userbase');

console.log("connected;");

var userSchema = mongo.Schema({
	firstname :String,
	lastname : String,
	email_id : String,
	Interests : Array,
	Gender : String
});

var users = mongo.model('users', userSchema);

// Set up JSON user object;
var user = JSON.parse(userData);
//console.log(user);

var user1 = new users({
	firstname: user.firstname,
	lastname: user.lastname,
	email_id: user.email_id,
	Interests: user.Interests,
	Gender: user.Gender
});

console.log("saving");

// Store in db
user1.save(function(err){
	if (!err){
		console.log("Saved in MongoDB");
	}
	else{
		console.log("some error");
	}
});
}	// end of module exports;