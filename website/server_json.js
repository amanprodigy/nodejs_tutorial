var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  // Console log the requesting url 
  console.log('A request was made from: ' + req.url);

  // Write http header
  res.writeHead(200, {'Content': 'application/json'});

  var player = {
    name: 'Messi',
    team: 'Barcelona',
    age: 30
  };

  res.end(JSON.stringify(player));

});

server.listen(3000, '127.0.0.1');
console.log('Server listening on port 3000');
