
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){


  if(req.url === '/home' || req.url === '/'){

    res.writeHead(200, {'Content': 'text/html'});
    myReadStream = fs.createReadStream(__dirname + '/index.html');
    myReadStream.pipe(res);

    console.log('Hehehe... just installed nodemon' );

  }else if(req.url === '/contact'){

    res.writeHead(200, {'Content': 'text/html'});
    myReadStream = fs.createReadStream(__dirname + '/contact.html');
    myReadStream.pipe(res);

  }else if(req.url === 'player'){

    res.writeHead(200, {'Content': 'application/json'});
    var player = {
      name: 'Messi',
      team: 'Barcelona',
      age: 30
    };

    res.end(JSON.stringify(player));

  } else{

    res.writeHead(400, {'Content': 'text/html'});
    myReadStream = fs.createReadStream(__dirname + '/404.html');
    myReadStream.pipe(res);

  }
});

server.listen(3000, '127.0.0.1');
console.log('Server listening on port 3000');
