var express = require('express');
var app = express();
var http = require('http').Server(app);
var logger = require('morgan');
app.use(express.static('public'));

app.use(logger());
app.get('/event', function (req,res){
  
  var ev = {
  	title:'Coldplay Concert',
  	venue:'Barclays Center',
  	city: 'New York'
  };

  res.json(ev);
});


http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});