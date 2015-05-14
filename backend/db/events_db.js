// set up
var mongo = require('mongoose');
mongo.disconnect();
mongo.connect('mongodb://shashank:shashank@ds035907.mongolab.com:35907/mydb');

var Schema = mongo.Schema;

// creating schema
var eventSchema = new Schema({
	title: String,
	description: String,
	tag: Array,
	location: Array,
	location_str: String,
	image: String,
	created_date: Date,
	event_date: Date,
	vote: Number
}); 

var appEvent = mongo.model('appEvent', eventSchema);
// Expose this Event to other modules;
module.exports = appEvent;