//things you can do in node that you can't do in regular front end js:
//- include a library

var express = require('express'); //this is how you include any package you install with node
var path = require('path'); //path module comes pre installed with node, its a default module
var app = express(); //this express() function is saving all of the library's functions into the app var
var http = require('http'); //http is a default module with node, you dont need to explicitly install it
http = http.Server(app); //create an http server

//middleware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug') //"view engine" = front end (what the user sees)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){

	var name = "∆" //hypothetically, this name could come from a database

	// res.send("1ND3X");
	res.render("index.pug", {myname:name});
})

app.get('/about', function(req, res){

	var list = ["item1","item2","item3","item4"]
	var meeting = true

	// res.send("AB0UT");
	res.render("about.pug", {namelist:list, is_meeting_on:meeting});
})

app.get('/contact', function(req, res){
	res.send("K0N74K7");
})

var server = http.listen(3000, function(){
	console.log("Listening on port 3000.");
}); //server, listen on port 3000 then run this function