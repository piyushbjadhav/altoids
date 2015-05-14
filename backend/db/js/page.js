$("document").ready(function(){
	
	var socket = io();
	//listen();
	/*
	display_event = function(t_event){
		console.log(t_event);
	};
	*/
	// get interests on user db;
	var user_interests = ["music"];
	
	function listen(){

		socket.on('eventOn', function(eventData){
			console.log("inside eventOn");
			console.log(eventData);
		});

	};

	$("#locbutton").click(function(e){
		// make ajax call;
		$.ajax({
			url: '/ajax_getdata',
			data: {'loc': 'Boston'},
			dataType: 'json',
			type: 'GET',

			success: function(edata){
				console.log(edata);
				// function to display events to timeline;
			},

			error: function(xhr, ajaxOptions, thrownError){
				alert("Some ajax error");
			}

		});	// end of ajax
		return false;

		//alert("Events received from backend on console");
		// on click button, event should be received from socket.

		// get interests from db. Say i[music, sports];

		// 3 ways to do this.
		// 1. Kafka producer emits all events to all, browser listens only to subscribed events via socket.	
		// 2. Kafka producer emits all events to all, browser receives all events but displays only suscribed events.	- this one!
		// 3. Kafka producer emits events to specific topic. Consumer listen to all topic and further emits. 	- Out


	});		// end of demo click


	$("#ibutton").click(function(e){

		var interests = [];
		// make ajax call
		$.ajax({

			url: '/ajax_getinterests',
			data: {'email': 'ilovetaylorswift@nyu.edu'},
			dataType: 'json',
			type: 'GET',

			success: function(udata){
				//console.log(udata);
				$.each(udata, function(i, tag1){
					console.log(tag1);
				});
			},

			error: function(xhr, ajaxOptions, thrownError){
				alert("Some ajax error");
			},

		});
		return false;

	});	// end of button click


	$("#recentbutton").click(function(e){

		var interests = [];
		// make ajax call
		$.ajax({

			url: '/ajax_recent',
			//data: {'email': 'ilovetaylorswift@nyu.edu'},
			dataType: 'json',
			type: 'GET',

			success: function(udata){
				console.log(udata);
				//$.each(udata, function(i, tag1){
				//	console.log(tag1);
				//});
			},

			error: function(xhr, ajaxOptions, thrownError){
				alert("Some ajax error");
			},

		});
		return false;

	});	// end of button click

	$("#upcoming").click(function(e){

		// make ajax call
		$.ajax({
			url: '/ajax_getupcoming',
			dataType: 'json',
			type: 'GET',

			success: function(udata){
				//console.log(udata);
				console.log(udata);
				// add to the timeline
			},

			error: function(xhr, ajaxOptions, thrownError){
				alert("Some ajax error");
			},

		});
		return false;

	});	// end of button click

	$("#popular").click(function(e){

		// make ajax call
		$.ajax({
			url: '/ajax_getpopular',
			dataType: 'json',
			type: 'GET',

			success: function(udata){
				//console.log(udata);
				console.log(udata);
				// add to the timeline
			},

			error: function(xhr, ajaxOptions, thrownError){
				alert("Some ajax error");
			},

		});
		return false;

	});	// end of button click



	/*
	$(window).on('beforeunload', function(){
    	socket.close();
	});*/

});		// end of document ready;
