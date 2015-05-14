module.exports = function(){

var myevent = require('./events_db.js');
// myevent corresponds to eventschema in db.js

var t_date = new Date();
// create new event;
var new_event = myevent({
	title: 'Pink Floyd at Boston',
	description: 'Pink Floyd performing at BOston downtown',
	location: ['42.3601', '71.0589'],
	tag: 'music',
	created_date: "2015-05-12",
	event_date: "2015-05-12",
	location_str: "Boston",
	image: 'some.image.com',
	vote: 51
});

new_event.save(function(err){
	if(err){
		console.log("SOme error on saving event in db");
	}
	else{
		console.log("Successfully saved to db");
	}
});


};