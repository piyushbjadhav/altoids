module.exports = function(){

var myevent = require('./events_db.js');
// myevent corresponds to eventschema in db.js

var t_date = new Date();
// create new event;
var new_event = myevent({
	title: 'Imagine Dragons at NYC',
	description: 'ACDC performing at BOston downtown',
	location: ['40.7127', '74.0059'],
	tag: 'music',
	created_date: "2015-05-12",
	event_date: "2015-05-16",
	location_str: "New York",
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