var express = require("express");
var fs = require("fs");
var app = express();

// add middleware function for body parsing
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res){
    res.send('hello it is my first express application');
});

app.get('/about',function(req,res) { 
    res.send("This is basic express application ");
});

app.get('/users/:userId/books/:bookId', function (req, res) { 
    res.send(req.params);
});

app.listen(5001, function () {
    console.log("Server is running on port 5000");
});