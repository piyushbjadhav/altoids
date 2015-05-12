module.exports = function(){
	
	var sendToKafka = require('./sendToKafka.js');
	var events_db = require('./events_db.js')();

	var myevent = {
		id: 1,
		title: "Pink Floyd - The Dark Side of the Moon.",
		description: "PK live in NYC 2015",
		location: "Madison Square Garden, NY 2015",
		tag: "music",
		image:"pk.someimage.com"
	};


console.log(" 1. Storing event in db");
events_db.saveEvent(myevent);

console.log("2. Sending to Kafka");
//sendToKafka(JSON.stringify(myevent));

for (var i =0; i<100; i++){
	sendToKafka(JSON.stringify(myevent));
}

}	// end of module