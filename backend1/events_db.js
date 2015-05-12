// Store event in db;
module.exports = function() {

var mongo = require('mongoose');
mongo.connect('mongodb://shashank:shashank@ds031671.mongolab.com:31671/events');

var eventSchema = mongo.Schema({
	title :String,
	description : String,
	location : String,
	tag : String,
	image : String
});

var events = mongo.model('events', eventSchema);

return {

	saveEvent: function(eventData){
		// Set up JSON event object;	
		var newEvent = new events({
			title: eventData.title,
			description: eventData.description,
			location: eventData.location,
			tag: eventData.tag,
			image: eventData.image
		});

		// Store in db
		newEvent.save(function(err){
			if (!err){
				console.log("Saved in MongoDB");
				//return "Saved in MongoDB"; 
			}
			else{
				console.log(err);
			}
		});

	},	// end of saveEvent;

	getEvent: function(event_title){
		// Query db
		events.find({'title': event_title}, function(err,data){
			if (!err){
				console.log(data);
				//return data;
			}
			//return null;
		});
	}
}	// end of return
}	// end of module exports