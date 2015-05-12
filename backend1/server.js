// Server Set up;
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//var kafka = require('kafka-node');

var sendToKafka = require('./sendToKafka.js');
//var events_db = require('./events_db.js')();
var kafka = require('kafka-node');

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



console.log("sent to kafka...");

/*
io.on('connection', function(req, resp){
	var username = req.params.user;
});
*/

// Receiving events from Kafka and emitting to browser side;
var Consumer = kafka.Consumer;
client = new kafka.Client(),
consumer = new Consumer(
	
	client,
	[{topic: 'events'}]
	);

consumer.on('message', function(message){

	console.log("Inside consumer....");
	var messageData = JSON.parse(message.value);

	console.log("Received from Kafka on server side");
	console.log(messageData.title);

	//console.log(messageData.description);

	// sending to client side;
	io.emit('eventOn',JSON.stringify(messageData));

});

	io.on('connection', function(socket){
		console.log("User logged in.");
	})

app.get('/events', function(req, resp){
	//var e = require('./events.js')();
	//resp.send(e.print());
	resp.sendfile('index.html');
	var p = require('./postevent.js');
	p();
	//io.emit('eventOn', "This is a test for socket.io");

});


http.listen(process.env.PORT || 8000, function(){
	console.log("server running on 8000");
});


app.get('/', function(req, res){
	res.sendfile("index.html");
});

app.get('/js/page.js', function(req, res){
	res.sendfile("./js/page.js");
});

/*
app.get('/event', function(req , res){
	res.end("Inside events");
});*/