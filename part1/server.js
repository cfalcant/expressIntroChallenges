var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var path = require('path');
// const fs = require('fs');

// ### Challenge 1:
// Create a GET route for "/hello" that returns the response "Hello!".

// app.get('/hello', function(req, res) {
//   res.send("Hello!");
// });

// ### Challenge 2:
// Create a POST route for "/create/:name" that returns a json object that looks like this:
// {
//   "id":1,
//   "name":"the name they pass in the route"
// }

// app.get('/create/:name', function(req, res) {
//   let object = {
//     id: 1,
//     name:"the name they pass in the route"};
//   res.json(object);
// });

// ### Challenge 3:
// Create a GET route for "/" that returns the index.html file.
   app.get('/', function (req, res) {
     res.sendFile(path.join(__dirname, './', 'index.html'));
   });


app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
