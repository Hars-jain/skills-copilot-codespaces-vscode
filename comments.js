// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create a JSON parser
var jsonParser = bodyParser.json();

// Create a URL-encoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Create a POST route
app.post('/comments', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  res.send('Your comment is: ' + req.body.comment);
});

// Start the server
app.listen(3000, function () {
  console.log('Server is running on port 3000');
});