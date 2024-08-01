// CREATE WEB SERVER

var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

// CONFIGURE SERVER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// READ COMMENTS
app.get('/comments', function(req, res) {
  fs.readFile(__dirname + '/comments.json', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

// CREATE COMMENT
app.post('/comments', function(req, res) {
  fs.readFile(__dirname + '/comments.json', function(err, data) {
    var comments = JSON.parse(data);
    comments.push(req.body);
    fs.writeFile(__dirname + '/comments.json', JSON.stringify(comments, null, 4), function(err) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(comments));
    });
  });
});

// START SERVER
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});