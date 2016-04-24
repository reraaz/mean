var express = require('express');


var env =process.env.NODE_ENV = process.env.NODE_ENV;

var app = express();

app.configure(function(){
	app.set('views', _dirname + '/server/views');
	app.set('view engine', 'jade');




});

app.get('*', function(req, res){
	res.render('index');

});

app.listen(3000);
console.log("sever start");