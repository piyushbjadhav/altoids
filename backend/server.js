// Server Set up;
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//var kafka = require('kafka-node');

var sendToKafka = require('./sendToKafka.js');
var events_db = require('./events_db.js')();

/*
Assume events comes of the form:
{
	id: 1,
	title: event_title,
	description: this is a sample event at NYC,
	location: Brooklyn bridge,
	image: someS3.url.com,
	tag: music
}
	
1. store event in db;
2. send event to kafka with topic as event.tag (music)
3. start kafka consumer and emit all events.
4. For client side, get interests from db, emit events only for subscribed events.
*/

// incoming event from front-end:

var myevent ={
	id: 1,
	title: "PInk Floyd Gig",
	description: "Pink Floyd live in NYC 2015",
	location: "Madison Square Garden, NY",
	tag: "music",
	image:"pk.image.com"
};


console.log(" 1. Storing event in db");
events_db.saveEvent(myevent, function(s){
	return s;
});


console.log("2. Sending to Kafka");
//sendToKafka(myevent);


/*
io.on('connection', function(req, resp){
	var username = req.params.user;
});
*/

app.get('/events', function(req, resp){
	
	var e = require('./events.js')();
	resp.send(e.print());

});


http.listen(process.env.PORT || 8000, function(){
	console.log("server running on 8000");
});


app.get('/', function(req, res){
	res.end("** Altoids **");
});

/*
app.get('/event', function(req , res){
	res.end("Inside events");
});*/