$("document").ready(function(){
	
	var socket = io();

	listen();

	/*
	display_event = function(t_event){
		console.log(t_event);
	};
	*/

	// get interests on user db;
	var user_interests = ["music"];
	
	function listen(){

		console.log(user_interests);

		socket.on('eventOn', function(eventData){
			
			console.log("inside eventOn");
			//console.log(eventData);
			
			var edata = JSON.parse(eventData);
			//console.log(edata.tag);
			
			// filetr on browser side;
			if (jQuery.inArray(edata.tag, user_interests) >= 0){
					console.log("Matched interests");
					console.log(edata);
					// post to timeline method.
			}
			
		});
		

	};

	$("#demobutton").click(function(e){
		
		alert("Events received from backend on console");

		// on click button, event should be received from socket.

		// get interests from db. Say i[music, sports];

		// 3 ways to do this.
		// 1. Kafka producer emits all events to all, browser listens only to subscribed events via socket.	
		// 2. Kafka producer emits all events to all, browser receives all events but displays only suscribed events.	- this one!
		// 3. Kafka producer emits events to specific topic. Consumer listen to all topic and further emits. 	- Out


	});		// end of demo click

	$(window).on('beforeunload', function(){
    	socket.close();
	});

});		// end of document ready;
