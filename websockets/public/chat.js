var socket = io.connect('http://localhost:4000');

var message = $('#message')[0];
var handle = $('#handle')[0];
var feedback = document.getElementById('feedback');

// Emit events
$('#send').on('click', function(){
  // Send message through the websocket
  console.log('clicked');
  socket.emit('chat', {
      message: message.value,
      handle: handle.value
  });

  // Clear the message field
  $('#message')[0].value = '';

});

$('#message').on('keypress', function(){
  socket.emit('typing', handle.value);
});


// Listen for chat events
socket.on('chat', function(data){
  feedback.innerHTML = '';
  output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function(data){
  feedback.innerHTML = '<p><em>' + data + '</em> is typing a message' + '</p>';
});
