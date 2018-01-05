var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

// ### Challenge 1:
// Create a GET route for "/hello" that returns the response "Hello!".
app.get('/hello', function(req, res) {
  res.send("Hello!");
});

// ### Challenge 2:
// Create a POST route for "/create/:name" that returns a json object that looks like this:
// {
//   "id":1,
//   "name":"the name they pass in the route"
// }

app.get('/create/:name', function(req, res) {
  let object = {
    id: 1,
    name:"the name they pass in the route"};
  res.json(object);
});


app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
