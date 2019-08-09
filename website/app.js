var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  // Console log the requesting url 
  console.log('A request was made from: ' + req.url);

  // Write http header
  res.writeHead(200, {'Content': 'text/html'});

  // expose index.html as filesystems read stream
  var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');

  // pipe the readStream to the response which is also a wirteable stream
  readStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Server listening on port 3000');
