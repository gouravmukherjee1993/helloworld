var express = require('express');
var app = express();
const fs = require('fs')

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/data.wsdl', function(req, res) {
	res.contentType("text/xml");
//	res.sendFile(__dirname + '/public/wsdl/data.wsdl');
//	res.send('Hello World');

	fs.readFile(__dirname + '/public/wsdl/data.wsdl', 'utf8' , (err, data) => {
		if (err) {
		  console.error(err)
		  return
		}
		res.send(data);
	  })
	// ejs render automatically looks in the views folder
	//res.render('index');
});
app.get('/ImageUploadService.xsd', function(req, res) {
	res.contentType("text/xml");
//	res.sendFile(__dirname + '/public/wsdl/data.wsdl');
//	res.send('Hello World');

	fs.readFile(__dirname + '/public/wsdl/ImageUploadService.xsd', 'utf8' , (err, data) => {
		if (err) {
		  console.error(err)
		  return
		}
		res.send(data);
	  })
	// ejs render automatically looks in the views folder
	//res.render('index');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
