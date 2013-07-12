var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var str = fs.readFileSync('bitstarter/index.html','utf-8');

app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
