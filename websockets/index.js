var express = require('express');
var socket = require('socket.io');

var app = express();

var server = app.listen(4000, function(){
  console.log('Listening to requests on port 4000');
})

// Serve static files
app.use(express.static('public'));

// Socket setup
var io = socket(server);
io.on('connection', function(socket){
  console.log('Made socket connection');
  console.log(socket.id);

  socket.on('chat', function(data){
    io.sockets.emit('chat', data);
    console.log(data);
  });

  socket.on('typing', function(data){
    console.log(data);
    socket.broadcast.emit('typing', data);
  });
});
