var express = require('express');
var app = express();
var http = require('http').Server(app);
var logger = require('morgan');
app.use(express.static('public'));

app.use(logger());
app.get('/events', function (req,res){
  
  var ev = [{
  	user: 'piyush',
  	heading:'Coldplay Concert',
  	content:'Coldplay summer concert !!!',
  	location:'Barclays Center',
  	background:'dance.jpg'
  },
  {
  	user: 'Sowmya',
  	heading:'Avengers',
  	content:'Screening at AMC Empire 25',
  	location:'Manhattan',
  	background:'dance.gif'
  },
  {
  	user: 'Ankita',
  	heading:'Avivi in New York',
  	content:'Enjoy EDM',
  	location:'New York',
  	background:'movie.jpg'
  }
];

  console.log('request recieved');
  res.json(ev);
});



app.get('/events2', function (req,res){
  
  var ev = [{
  	user: 'piyush',
  	heading:'Coldplay Concert11111',
  	content:'Coldplay summer concert !!!',
  	location:'Barclays Center',
  	background:'dance.jpg'
  },
  {
  	user: 'Sowmya',
  	heading:'Avengers11111111',
  	content:'Screening at AMC Empire 25',
  	location:'Manhattan',
  	background:'dance.gif'
  },
  {
  	user: 'Ankita1111111',
  	heading:'Avivi in New York',
  	content:'Enjoy EDM',
  	location:'New York',
  	background:'movie.jpg'
  }
];

  console.log('request recieved');
  res.json(ev);
});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});


 