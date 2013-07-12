var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var str = fs.readFileSync('https://github.com/yuqinlear/bitstarter/blob/27a60e0f1cf672b960ae4686abd072b5e0a38a9c/index.html','tf-8');

app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
