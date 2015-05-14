var myevent = require('./db.js');

var data = [];

// myevent corresponds to eventschema in db.js
myevent.find({}, function(err, events){
	if (err){
		console.log(err);
		console.log("some error");
	}
	//console.log(events);
	data = events;
});

return data;