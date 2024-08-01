//create web server

//create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var comments = require('./comments.json');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/comments', function(req, res){
    res.json(comments);
});

app.post('/comments', function(req, res){
    comments.push(req.body);
    fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err){
        console.log(err);
    });
    res.json(comments);
});

app.listen(3000, function(){
    console.log('Server started on port 3000');
});