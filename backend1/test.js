//var db = require('./user_db.js')();

var events = require('./events_db.js')();


var data = {
	firstname: 'Shaank08',
	lastname: 'G',
	email_id: 'boom@nyu.edu',
	Interests: ['music','sports','food'],
	Gender: 'male'
};

var myevent ={
	title: "Ledzep concert",
	description: "led zep live in NYC 2015",
	location: "Times Square, NY",
	tag: "music",
	image:"ledzep.image.com"
};

// send to store in db;
db.saveUser(JSON.stringify(data));
var all = db.getUser("boom@nyu.edu");

var x = events.saveEvent(myevent);
var y = events.getEvent('Ledzep concert');

// Query db
//var d = query('ilovetaylorswift@nyu.edu');
//console.log(d);
