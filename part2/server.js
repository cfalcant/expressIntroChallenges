var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var fs = require('fs');
var path = require('path');


// ### Challenge 1:
// Create a POST route for "/create/:name/:age" that creates an object that looks like this:
// {
//   "name": "troy",
//   "age": 20
// }
// Then take that object and insert it into storage.json

app.get('/create/:name/:age', function(req, res) {
  let obj = {
    name: "troy",
    age: 20
  }
  fs.writeFileSync("storage.json", JSON.stringify(obj, null, 4))
});

// ### Challenge 2:
// Create a Get route for "/" that returns all of the objects inside storage.json.

app.get('/', function (req, res) {
  let info = fs.readFileSync('storage.json', 'utf-8');
  res.send(info);
});

// ### Challenge 3:
// Create a Get route for "/:name" that returns the first object in storage.json that matches
// the name. If there is no object in storage.json that matches then return a 400 status.

app.get('/:name', function (req, res) {
  // res.send
  let file = fs.readFileSync('storage.json', 'utf-8');
  let newobj = JSON.parse(file);
  if (req.params.name === newobj.name) {
    res.send(newobj)
  } else {
    res.sendStatus(400);
  }
});


app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
