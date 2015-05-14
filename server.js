// Server Set up;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');
var logger = require('morgan');
var save_event = require('./backend/db/post_events.js');

app.use(express.static('public'));
app.use(logger());
var bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//var kafka = require('kafka-node');

io.on('connection', function(socket){
	console.log("User logged in.");
});

app.get('/events', function(req, res){
	console.log(req.params);
	var event_db = require('./backend/db/events_db.js');
	event_db.find({}).sort('-created_date').exec(function(err, docs){
		res.send(docs);
	});
	
});


// AJAX calls to db that retrieve results;
app.get('/ajax_getdata', function(req, res){
	var db = require('./events_db.js');	// event db
	console.log(req.query.loc);
	db.find({location_str:req.query.loc},function(err, ev){
		if (!err){
			res.send(ev);						// responding with a json object;
		}
	});
});

app.get('/ajax_getinterests', function(req, res){
	var t_email_id = req.query.email;
	var users = require('./user_db');
	users.find({email_id: t_email_id}, function(err, user){
		if (!err){
			//console.log(user[0]);
			res.send(user[0].Interests);
		}
		else{
			console.log(err);
		}
	});

});

// get recent events;
app.get('/ajax_recent', function(req, res){
	var event_db = require('./events_db.js');
	event_db.find({}).sort('-created_date').exec(function(err, docs){
		console.log(docs);
		res.send(docs);
	});

});

app.get('/ajax_getupcoming', function(req, res){
	
	var event_db = require('./events_db.js');
	var today = moment().startOf('day',0),
		end_range = moment(today).add(30, 'days');

	event_db.find({
		"event_date": {
			"$gte": moment(today).subtract(1,'days'),
			"$lt": end_range
		}
	}).sort('event_date').exec(function(err, docs){
		//console.log(docs);
		res.send(docs);
	});

});


app.get('/ajax_getpopular',function(req,res){

	var event_db = require('./events_db.js');
	event_db.find({}).sort('-vote').exec(function(err, docs){
		res.send(docs);
	});
});

app.post('/putevent',function (req,res){

	console.log(req.body);
	save_event(req.body);
	io.emit('flash_events', JSON.stringify(req.body));

	
});

app.get('/putdata', function(req, res){
	//res.sendfile('index.html');
	var d = require('./post_events.js');
	d();
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