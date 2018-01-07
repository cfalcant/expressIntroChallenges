var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var fs = require('fs');
var path = require('path');

// app.get('/yourroute', function(req, res) {
//   res.send("stuff");
// });

// ### Challenge 1:
// Create a POST route for "/create/:name/:age" that creates an object that looks like this:
// {
//   "name": "troy",
//   "age": 20
// }
// Then take that object and insert it into storage.json

app.get('/create/:name/:age', function(req, res) {
  let newobj = {
    name: "troy",
    age: 20
  }
  fs.writeFileSync('storage.json', JSON.stringify(newobj));
});

// ### Challenge 2:
// Create a Get route for "/" that returns all of the objects inside storage.json.

app.get('/', function (req, res) {
  let info = fs.readFileSync('storage.json', 'utf-8');
  res.send(info);
});



app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
