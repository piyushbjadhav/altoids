var express = require('express');
var app = express();
var http = require('http').Server(app);
var logger = require('morgan');
var eventful = require('eventful-node');
var client = new eventful.Client('XCQB6Mpg3vXPMFJ7');
app.use(express.static('public'));
app.use(logger());
var bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/events', function (req,res){
	client.searchEvents({ keywords: 'music' }, function(err, data){
	    if(err){
	    	return console.error(err);
	    }
	    var ev = {};
	    var evlist = [];  
	    for(var e in data.search.events.event){
	  		ev = {
	  			heading: data.search.events.event[e].title,
	  		    background: data.search.events.event[e].image.url,
	  		    location: data.search.events.event[e].region_name,
	  		    content:data.search.events.event[e].description    
	  		};
	  	evlist.push(ev);
	    }  
	   res.json(evlist);
	});
});


app.post('/putevent',function (req,res){

	console.log(req.body);
	
});
http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});


 