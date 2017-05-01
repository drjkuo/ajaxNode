// var http = require('http');

var express = require('express');
var app = express();

// http://expressjs.com/en/api.html#res.jsonp
app.set("jsonp callback", true);
app.get('/', function (req, res) {
    console.log('request received');
    console.log(req.query.name);
    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.write(req.query.name);
    // res.end('_testcb(\'{"message": "Hello world!!"}\')');
    // res.end('_testcb()');
    // res.end('_testcb(' + req.query.name + ')');
    // res.header('Content-type','application/json');
    res.jsonp(req.query.name);
});

app.listen(3000);
