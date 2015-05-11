module.exports = function(email){

// connect to table;
var mongo = require('mongoose');
mongo.connect('mongodb://shashank:shashank@ds045147.mongolab.com:45147/userbase');

var userSchema = mongo.Schema({
	firstname :String,
	lastname : String,
	email_id : String,
	Interests : String,
	Gender : String
});

var users = mongo.model('users', userSchema);

// Query db
// data corresponds to array of matched users. Thus use data[0];
users.find({'email_id': email }, function(err,data){
	if (!err){
		var interests = data[0].Interests.split(",");
		console.log(interests);
	};

	console.log("inside func1");
}	
);

console.log("outside function1");

}
