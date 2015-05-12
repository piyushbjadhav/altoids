module.exports = function() {

var mongo = require('mongoose');
mongo.connect('mongodb://shashank:shashank@ds045147.mongolab.com:45147/userbase');

var userSchema = mongo.Schema({
	firstname :String,
	lastname : String,
	email_id : String,
	Interests : String,
	Gender : String
});

//var users = mongo.model('users', {firstname: String, lastname: String, email_id:String, Interests: String, Gender: String});
var users = mongo.model('users', userSchema);
// Set up JSON user object;

return{
	
	saveUser: function(userData){
		
		var user = JSON.parse(userData);

		var user1 = new users({
			firstname: user.firstname,
			lastname: user.lastname,
			email_id: user.email_id,
			Interests: user.Interests,
			Gender: user.Gender
		});
	
		// Store in db
		user1.save(function(err){
			if (!err){
				console.log("Saved in MongoDB");
				return "Saved in MongoDB";
				
			}
			else{
				console.log(err);
				return err;
			}
		});
	},			// end of saveUser;

	getUser: function(user_email){
		// Query db
		users.find({'email_id': user_email}, function(err,data){
			if (!err){
				console.log(data);
				//return data;
			}
			//return null;
		});

	},	// end of getUser

}	// end of return

}	// end of exports.module