// Kafka Producer code
module.exports = function(eventData){
	
	var kafka = require('kafka-node'),
	
	Producer = kafka.Producer,		// creates a producer
	KeyedMessage = kafka.KeyedMessage,	
	client = new kafka.Client(),		
	producer = new Producer(client),	

	newData = [
		{topic:eventData.tag, messages: eventData, partition:0},		// creates a topic
	];

	producer.on('ready', function(){
		
		producer.send(newData, function(err, data){						// sends it to kafka;
			console.log(data);
		});

	});

	producer.on('error', function(err){
		console.log("Some error: "+err);
	});
}